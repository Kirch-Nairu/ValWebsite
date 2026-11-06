param(
  [int]$PreferredPort = 4321,
  [switch]$OpenBrowser
)

$ErrorActionPreference = 'Stop'
$RepoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $RepoRoot

$StateFile = Join-Path $RepoRoot '.valencia-server.json'
$LogOut = Join-Path $RepoRoot 'valencia-server.out.log'
$LogErr = Join-Path $RepoRoot 'valencia-server.err.log'

if (-not (Test-Path (Join-Path $RepoRoot 'node_modules'))) {
  Write-Host 'Installing npm dependencies...' -ForegroundColor Cyan
  npm install --no-audit --no-fund
}

# Check if an existing Valencia server recorded in .valencia-server.json is still alive and responding
if (Test-Path $StateFile) {
  try {
    $existing = Get-Content $StateFile -Raw | ConvertFrom-Json
    if ($existing.pid) {
      $proc = Get-Process -Id $existing.pid -ErrorAction SilentlyContinue
      if ($proc) {
        $resp = Invoke-WebRequest -Uri $existing.url -UseBasicParsing -TimeoutSec 3 -ErrorAction SilentlyContinue
        if ($resp -and $resp.StatusCode -eq 200) {
          Write-Host "Valencia server is already running at $($existing.url) (PID $($existing.pid))" -ForegroundColor Green
          if ($OpenBrowser) { Start-Process $existing.url }
          exit 0
        }
      }
    }
  } catch {
    # State file stale; continue to fresh launch
  }
}

function Test-PortFree([int]$Port) {
  $conn = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
  return ($null -eq $conn)
}

$Port = $PreferredPort
if (-not (Test-PortFree $Port)) {
  # Check if the process on PreferredPort is already serving BARUG VALENCIA
  try {
    $probe = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/" -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
    if ($probe.Content -match 'BARUG VALENCIA') {
      $ownerPid = (Get-NetTCPConnection -LocalPort $Port -State Listen | Select-Object -First 1).OwningProcess
      $state = @{
        pid = $ownerPid
        port = $Port
        url = "http://127.0.0.1:$Port"
        startedAt = (Get-Date).ToString('o')
      }
      $state | ConvertTo-Json | Set-Content $StateFile -Encoding UTF8
      Write-Host "Valencia server already active on http://127.0.0.1:$Port (PID $ownerPid)" -ForegroundColor Green
      if ($OpenBrowser) { Start-Process "http://127.0.0.1:$Port" }
      exit 0
    }
  } catch {}

  for ($candidate = 4322; $candidate -le 4335; $candidate++) {
    if (Test-PortFree $candidate) {
      $Port = $candidate
      break
    }
  }
}

$AstroCli = Join-Path $RepoRoot 'node_modules\astro\astro.js'
$NodeExe = (Get-Command node).Source
$CmdLine = "`"$NodeExe`" `"$AstroCli`" dev --host 127.0.0.1 --port $Port"
$WmiResult = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{
  CommandLine = $CmdLine
  CurrentDirectory = $RepoRoot
}
$SpawnedPid = [int]$WmiResult.ProcessId

$TargetUrl = "http://127.0.0.1:$Port"
$Ready = $false
for ($i = 0; $i -lt 40; $i++) {
  Start-Sleep -Milliseconds 500
  try {
    $check = Invoke-WebRequest -Uri "$TargetUrl/" -UseBasicParsing -TimeoutSec 2 -ErrorAction Stop
    if ($check.StatusCode -eq 200) {
      $Ready = $true
      break
    }
  } catch {}
}

if (-not $Ready) {
  Write-Error "Valencia server failed to respond on $TargetUrl within 20 seconds."
  exit 1
}

$ListenerConn = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1
$ActualPid = if ($ListenerConn) { $ListenerConn.OwningProcess } else { $SpawnedPid }

$StateObj = @{
  pid = $ActualPid
  launcherPid = $SpawnedPid
  port = $Port
  url = $TargetUrl
  startedAt = (Get-Date).ToString('o')
}
$StateObj | ConvertTo-Json | Set-Content $StateFile -Encoding UTF8

Write-Host "BARUG VALENCIA server running at $TargetUrl (PID: $ActualPid)" -ForegroundColor Green

if ($OpenBrowser) {
  Start-Process $TargetUrl
}
