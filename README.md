# Hispanistica @ Marburg

An overview of Digital Humanities projects in Hispanic linguistics at Philipps University of Marburg, under the direction of Prof. Dr. Felix Tacke.

## Projects

- **CO.RA.PAN**: Corpus Radiofónico Panhispánico – Audio and transcription corpus for the study of pluricentric Spanish. [Live](https://corapan.online.uni-marburg.de/)
- **MAR.ELE**: Learner pronunciation corpus for Spanish as a foreign language. [Live](https://marele.online.uni-marburg.de/)
- **Spanish Linguistics @ School**: Digital reference book for Spanish language teachers. [Live](https://linguistik.online.uni-marburg.de/)

---

## Technical Setup

This site is built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

### Project Structure

```
hispanistica-mkdocs/
├── docs/
│   ├── assets/images/       # Images and screenshots
│   ├── styles/
│   │   ├── md3-tokens.css   # MD3 Design tokens (colors, spacing, etc.)
│   │   └── override.css     # Material for MkDocs overrides & components
│   ├── index.md             # Homepage
│   ├── corapan.md           # CO.RA.PAN project page
│   ├── marele.md            # MAR.ELE project page
│   ├── toolkit.md           # Spanish Linguistics @ School page
│   └── impressum.md         # Legal notice
├── mkdocs.yml               # MkDocs configuration
├── requirements.txt         # Python dependencies
└── .github/workflows/       # GitHub Actions for deployment
```

### Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run local development server
mkdocs serve

# Build site
mkdocs build
```

### Dependencies

- `mkdocs` – Static site generator
- `mkdocs-material` – Material Design theme
- `mkdocs-glightbox` – Image lightbox plugin

---

## License

Content is provided for informational purposes. Source code is available under MIT License.
