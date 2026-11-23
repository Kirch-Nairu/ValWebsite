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
  return ($null -ne $p -and $p.CommandLine -like "*$Astro*")
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
      Write-Host "Valencia municipal server already running: $($prior.url) (PID $($prior.pid))"
      if ($OpenBrowser) { Start-Process $prior.url }
      return
    }
  } catch { Write-Warning "Existing state is invalid; checking for a safe port." }
  Remove-Item $State -Force -ErrorAction SilentlyContinue
}
$port = $PreferredPort
$listener = Get-NetTCPConnection -State Listen -LocalPort $port -ErrorAction SilentlyContinue
if ($listener) {
  $port = (4322..4335 | Where-Object { -not (Get-NetTCPConnection -State Listen -LocalPort $_ -ErrorAction SilentlyContinue) } | Select-Object -First 1)
  if (-not $port) { throw 'No available port in 4321-4335; no process was stopped.' }
}
$cmdLine = "`"$Node`" `"$Astro`" dev --host 127.0.0.1 --port $port"
$startup = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ ShowWindow = [uint16]0 }
$wmiResult = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{
  CommandLine = $cmdLine
  CurrentDirectory = $Root
  ProcessStartupInformation = $startup
}
if ($wmiResult.ReturnValue -ne 0) {
  throw "Win32_Process Create failed with return code $($wmiResult.ReturnValue)"
}
$pidValue = [int]$wmiResult.ProcessId
$url = "http://127.0.0.1:$port"
$ready = $false
for ($attempt = 0; $attempt -lt 45; $attempt++) {
  Start-Sleep -Milliseconds 400
  if (-not (Test-OwnedProcess $pidValue)) { throw "Astro process $pidValue exited before becoming ready." }
  if (Test-Http $url) { $ready = $true; break }
}
if (-not $ready) { throw "Astro did not return HTTP 200 at $url." }
@{ pid=$pidValue; url=$url; port=$port; executable=$Node; astro=$Astro; launched=(Get-Date).ToString('o') } | ConvertTo-Json | Set-Content $State -Encoding UTF8
Write-Host "Valencia municipal server HTTP 200: $url | PID $pidValue" -ForegroundColor Green
if ($OpenBrowser) { Start-Process $url }
