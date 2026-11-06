param(
  [int]$PreferredPort = 4321,
  [switch]$OpenBrowser
)
$ErrorActionPreference = 'Stop'
$Root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$State = Join-Path $Root '.valencia-server.json'
$Node = (Get-Command node -ErrorAction Stop).Source
$Astro = Join-Path $Root 'node_modules\astro\astro.js'
function Test-OwnedProcess([int]$ProcessId) {
  $p = Get-CimInstance Win32_Process -Filter "ProcessId = $ProcessId" -ErrorAction SilentlyContinue
  return ($null -ne $p -and $p.CommandLine -like "*$Astro*" -and $p.ExecutablePath -eq $Node)
}
function Test-Http([string]$Url) {
  try { return (Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 2).StatusCode -eq 200 } catch { return $false }
}
if (-not (Test-Path $Astro)) {
  Push-Location $Root
  try { npm ci --no-audit --no-fund; if ($LASTEXITCODE -ne 0) { throw 'npm ci failed' } } finally { Pop-Location }
}
if (Test-Path $State) {
  try {
    $prior = Get-Content $State -Raw | ConvertFrom-Json
    if ($prior.pid -and (Test-OwnedProcess ([int]$prior.pid)) -and (Test-Http ([string]$prior.url))) {
      Write-Host "Valencia prototype already running: $($prior.url) (PID $($prior.pid))"
      if ($OpenBrowser) { Start-Process $prior.url }
      return
    }
  } catch { Write-Warning "Existing state is invalid; checking for a safe port." }
  Remove-Item $State -Force
}
$port = $PreferredPort
$listener = Get-NetTCPConnection -State Listen -LocalPort $port -ErrorAction SilentlyContinue
if ($listener) {
  $port = (4322..4335 | Where-Object { -not (Get-NetTCPConnection -State Listen -LocalPort $_ -ErrorAction SilentlyContinue) } | Select-Object -First 1)
  if (-not $port) { throw 'No available port in 4321-4335; no process was stopped.' }
}
$out = Join-Path $Root 'valencia-server.out.log'
$err = Join-Path $Root 'valencia-server.err.log'
$process = Start-Process -FilePath $Node -ArgumentList @("`"$Astro`"",'dev','--host','127.0.0.1','--port',"$port") -WorkingDirectory $Root -PassThru -RedirectStandardOutput $out -RedirectStandardError $err -WindowStyle Hidden
$url = "http://127.0.0.1:$port"
$ready = $false
for ($attempt = 0; $attempt -lt 45; $attempt++) {
  Start-Sleep -Milliseconds 400
  if ($process.HasExited) { throw "Astro exited with code $($process.ExitCode). See $err" }
  if (Test-Http $url) { $ready = $true; break }
}
if (-not $ready) { throw "Astro did not return HTTP 200 at $url. See $err" }
if (-not (Test-OwnedProcess ([int]$process.Id))) { throw "Spawned PID $($process.Id) did not match the expected Valencia Astro command" }
@{ pid=$process.Id; url=$url; port=$port; executable=$Node; astro=$Astro; launched=(Get-Date).ToString('o') } | ConvertTo-Json | Set-Content $State -Encoding UTF8
Write-Host "Valencia prototype HTTP 200: $url | PID $($process.Id)" -ForegroundColor Green
if ($OpenBrowser) { Start-Process $url }
