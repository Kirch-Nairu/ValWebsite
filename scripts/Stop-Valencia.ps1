$ErrorActionPreference = 'Continue'
$RepoRoot = Split-Path -Parent $PSScriptRoot
$StateFile = Join-Path $RepoRoot '.valencia-server.json'

if (-not (Test-Path $StateFile)) {
  Write-Host 'No .valencia-server.json state file found. Nothing to stop.' -ForegroundColor Yellow
  exit 0
}

try {
  $state = Get-Content $StateFile -Raw | ConvertFrom-Json
  $pidsToStop = @($state.pid, $state.launcherPid) | Where-Object { $_ -ne $null } | Select-Object -Unique
  foreach ($id in $pidsToStop) {
    $proc = Get-Process -Id $id -ErrorAction SilentlyContinue
    if ($proc -and $proc.ProcessName -match '^node$') {
      Stop-Process -Id $id -Force -ErrorAction SilentlyContinue
      Write-Host "Stopped Valencia node process PID $id" -ForegroundColor Green
    }
  }
  Start-Sleep -Milliseconds 1200
} finally {
  Remove-Item $StateFile -Force -ErrorAction SilentlyContinue
}
