[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'

function Write-Step {
  param([string]$Message)
  Write-Host "==> $Message"
}

function Test-Command {
  param([string]$Name)
  return [bool](Get-Command $Name -ErrorAction SilentlyContinue)
}

if (-not (Test-Command -Name "uv")) {
  Write-Error "uv is not installed. Install uv first: powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\""
}

$root = Join-Path $PSScriptRoot ".."
$requirementsIn = Join-Path $root "requirements.in"
$requirementsDevIn = Join-Path $root "requirements-dev.in"

if (Test-Path $requirementsIn) {
  Write-Step "Compiling requirements.in -> requirements.txt"
  uv pip compile $requirementsIn -o (Join-Path $root "requirements.txt")
} else {
  Write-Step "No requirements.in found, skipping runtime lockfile compile"
}

if (Test-Path $requirementsDevIn) {
  Write-Step "Compiling requirements-dev.in -> requirements-dev.txt"
  uv pip compile $requirementsDevIn -o (Join-Path $root "requirements-dev.txt")
} else {
  Write-Step "No requirements-dev.in found, skipping dev lockfile compile"
}

Write-Step "Done"
