# Hispanistica @ Marburg

An overview of Digital Humanities projects in Hispanic linguistics at Philipps-Universität Marburg, under the direction of Prof. Dr. Felix Tacke.

## Projects

- **CO.RA.PAN**: Corpus Radiofónico Panhispánico – Audio and transcription corpus for the study of pluricentric Spanish. [Live](https://corapan.hispanistica.com) | [GitHub](https://github.com/FTacke/corapan-webapp)
- **MAR.ELE**: Learner pronunciation corpus for Spanish as a foreign language. [Live](https://marele.hispanistica.com) | [GitHub](https://github.com/FTacke/marele-webapp)
- **Spanish Linguistics @ School**: Digital reference book for Spanish language teachers. [Live](https://school.hispanistica.com) | [GitHub](https://github.com/FTacke/spanisch-toolkit)

---

## Technical Setup

This site is built with [Astro](https://astro.build) and deployed via GitHub Pages to [hispanistica.com](https://hispanistica.com).

## Development

`ash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to main.

**Custom domain:** [hispanistica.com](https://hispanistica.com)

The workflow builds the Astro site and pushes the `dist/` folder to the `gh-pages` branch, which is configured in GitHub Pages settings.

---

## License

Content is provided for informational purposes. Source code is available under MIT License.
