$ErrorActionPreference = 'Stop'
$Root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$State = Join-Path $Root '.valencia-server.json'
if (-not (Test-Path $State)) { Write-Host 'No Valencia server state; nothing to stop.'; return }
try {
  $record = Get-Content $State -Raw | ConvertFrom-Json
  $pidValue = [int]$record.pid
  $Astro = Join-Path $Root 'node_modules\astro\astro.js'
  $proc = Get-CimInstance Win32_Process -Filter "ProcessId = $pidValue" -ErrorAction SilentlyContinue
  if (-not $proc) { Write-Host "Recorded PID $pidValue is no longer running."; return }
  if ($proc.CommandLine -notlike "*$Astro*") {
    throw "PID $pidValue is not the recorded Valencia Astro process. Refusing to stop it."
  }
  Stop-Process -Id $pidValue -Force -ErrorAction Stop
  Write-Host "Stopped verified Valencia Astro PID $pidValue" -ForegroundColor Green
} finally {
  if (-not $proc -or ($proc.CommandLine -like "*$Astro*")) {
    Remove-Item $State -Force -ErrorAction SilentlyContinue
  }
}
