[CmdletBinding()]
param(
  [switch]$Dev
)

$ErrorActionPreference = 'Stop'

function Write-Step {
  param([string]$Message)
  Write-Host "==> $Message"
}

function Test-Command {
  param([string]$Name)
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

Write-Step "Checking uv installation"
if (-not (Test-Command -Name "uv")) {
  Write-Error "uv is not installed. Install uv first: powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\""
}

$venvPath = Join-Path $PSScriptRoot "..\.venv"
$venvPath = [System.IO.Path]::GetFullPath($venvPath)

if (-not (Test-Path $venvPath)) {
  Write-Step "Creating virtual environment at .venv"
  uv venv $venvPath
} else {
  Write-Step "Virtual environment already exists at .venv"
}

$runtimeRequirements = Join-Path $PSScriptRoot "..\requirements.txt"
$devRequirements = Join-Path $PSScriptRoot "..\requirements-dev.txt"

if (Test-Path $runtimeRequirements) {
  Write-Step "Installing runtime dependencies from requirements.txt"
  uv pip install --python "$venvPath\Scripts\python.exe" -r $runtimeRequirements
} else {
  Write-Step "No requirements.txt found, skipping runtime dependency installation"
}

if ($Dev) {
  if (Test-Path $devRequirements) {
    Write-Step "Installing development dependencies from requirements-dev.txt"
    uv pip install --python "$venvPath\Scripts\python.exe" -r $devRequirements
  } else {
    Write-Step "No requirements-dev.txt found, skipping development dependency installation"
  }
}

$envPath = Join-Path $PSScriptRoot "..\.env"
if (-not (Test-Path $envPath)) {
  Write-Host "INFO: .env not found. Copy .env.example to .env and fill in values."
}

Write-Step "Bootstrap complete"
