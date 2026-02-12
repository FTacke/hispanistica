# Migration Notes (Windows PC)

This repository currently has no project-owned large data/media/model folders that are both present and gitignored for manual transfer.

## Classification of large folders

- `node_modules/` (~135 MB): regenerable (`npm ci`), stays gitignored.
- `dist/` (~2.84 MB): regenerable build output (`npm run build`), stays gitignored.
- `.astro/` (cache): regenerable (`npm run dev`/`npm run build`), stays gitignored.

## Manually migrate folders

- None currently defined in this repository.

## Recommended external path (for future large data/media/models)

- `D:\hispanistica-data\<project>\`

Rule: large runtime data/media/model artifacts must remain gitignored and should be stored externally (or regenerated) rather than committed.
