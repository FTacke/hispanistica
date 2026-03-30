# Hispanistica @ Marburg

An overview of Digital Humanities projects in Hispanic linguistics at Philipps-Universität Marburg, under the direction of Prof. Dr. Felix Tacke.

## Projects

- **CO.RA.PAN**: Corpus Radiofónico Panhispánico – Audio and transcription corpus for the study of pluricentric Spanish. [Live](https://corapan.hispanistica.com) | [GitHub](https://github.com/FTacke/corapan-webapp)
- **MAR.ELE**: Learner pronunciation corpus for Spanish as a foreign language. [Live](https://marele.hispanistica.com) | [GitHub](https://github.com/FTacke/marele-webapp)
- **Spanish Linguistics @ School**: Digital reference book for Spanish language teachers. [Live](https://school.hispanistica.com) | [GitHub](https://github.com/FTacke/spanisch-toolkit)

---

## Technical Setup

This site is built with [Astro](https://astro.build) and deployed via GitHub Pages to [hispanistica.com](https://hispanistica.com).

## Python Reproducibility

- Final Python version: `3.12` (Local Dev Pin)
- Authoritative source: `.python-version` (repo root)
- Clarification: There is currently no Python runtime pin in Docker/CI/deployment config (`.github/workflows/deploy.yml` is Node-only), so this pin is for local reproducibility on Windows development machines.

## Setup (Windows, copy-paste)

```
git clone <repo-url>
cd <repo-name>
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
.\scripts\bootstrap.ps1
python -m <entrypoint>
```

Optional:

- Install development dependencies as well: `.\scripts\bootstrap.ps1 -Dev`
- Create local env file when needed: `Copy-Item .env.example .env`

## Environment Variables

- `CORAPAN_MD3_DIR`: Optional override path for the MD3 token source directory used by `scripts/vendor-md3.mjs`.

Store real secret values outside git (for example in a secret manager) and only place local values in `.env`.

## Development (Node/Astro)

Install dependencies once:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

Note: `npm run preview` serves the built `dist/` output and is usually run after stopping `npm run dev`. If port `4321` is already in use, Astro will automatically pick the next free port.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to main.

**Custom domain:** [hispanistica.com](https://hispanistica.com)

The workflow builds the Astro site and pushes the `dist/` folder to the `gh-pages` branch, which is configured in GitHub Pages settings.

---

## License

Content is provided for informational purposes. Source code is available under MIT License.
