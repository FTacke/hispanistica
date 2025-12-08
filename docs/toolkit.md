<div class="hisp-hero">
  <div class="hisp-hero__inner">
    <div class="hisp-hero__content">
      <h1 class="hisp-hero__title">Spanish Linguistics @ School — Digital Reference Toolkit</h1>
      <p class="hisp-hero__subtitle">
        An open digital reference work designed for teachers, student teachers, and linguistics-oriented practitioners in Spanish language education. Built with MkDocs and the Material for MkDocs theme, this digital toolkit integrates linguistic theory, multilingual corpora, audio materials, and didactic guidance within a unified, modular, and easily extensible static-site framework.
      </p>
      <p class="hisp-hero__logo">
        <img src="/assets/images/toolkit_breit.png" alt="Spanish Linguistics @ School Logo">
      </p>
      <p>
        <a href="https://linguistik.online.uni-marburg.de/" class="md-button md-button--primary" target="_blank" rel="noopener noreferrer">
          Open Digital Reference Book <i class="fa-solid fa-up-right-from-square"></i></a>
      </p>
    </div>
  </div>
</div>

---

## Introduction

*Spanish Linguistics @ School* is built with MkDocs and the Material for MkDocs theme, providing a lightweight, modular, and extensible framework for creating digital textbooks. The platform uses features such as hierarchical page navigation, integrated search, and persistent navigation elements to emulate the structure and usability of a printed book while fully embracing the affordances of the web.

The site is optimized for contemporary reading habits through responsive layouts, mobile-first design, and automatic light/dark-mode rendering. These properties make the reference work accessible across devices and ensure a smooth reading experience in classroom, study, and on-the-go contexts.

To support linguistics-specific use cases, the toolkit extends the standard MkDocs environment with custom integrations, including embedded Leaflet maps, audio players for speech examples, and specialized components for linguistic markup. This technical foundation enables scalable, maintainable, and long-term sustainable development of digital teaching materials.

This page gives an overview of the core components of the digital reference toolkit.

## Components & features

<div class="hisp-card-grid" markdown>

<div class="hisp-card hisp-card--light" markdown>

### 1. Open Educational Resource (OER)

The project is conceived as a fully open educational resource, aiming to make linguistically informed teaching materials freely accessible and adaptable for a wide range of educational contexts. As an OER, the digital reference book invites reuse, revision, and expansion: all textual content is published under the CC BY-SA 4.0 license, enabling teachers, students, and institutions to incorporate its materials into courses, modify them for specific pedagogical needs, and redistribute improved or localized versions.  

Beyond providing openly licensed chapters, the project establishes a transparent editorial framework that supports collaborative authorship and ensures consistency across contributions. Its design connects linguistic insights directly to classroom practice, promoting linguistic awareness and evidence-based pedagogy while encouraging the shared development of high-quality teaching materials.

<div class="hisp-card__actions" markdown>
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-blue.svg)](https://creativecommons.org/licenses/by-sa/4.0/){target="_blank" rel="noopener noreferrer"}
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### 2. Open Source Codebase

The digital reference book is implemented as a static website using *MkDocs* and the *Material for MkDocs* theme, forming a lightweight yet robust foundation for modular digital textbooks. Beyond the standard feature set, the platform is extended through *custom HTML, JavaScript, and CSS*, enabling components that go well beyond the template’s default capabilities — including the embedding of *Leaflet-based interactive maps*, audio materials for pronunciation and variation examples, and specialized layouts for linguistic annotation and didactic infoboxes.

The openly available codebase allows:

* reuse and adaptation for related educational or linguistic projects
* transparent versioning and collaborative workflows
* straightforward deployment via GitHub Pages or similar static hosts
* a modular architecture that supports both plugin-based and custom front-end extensions

Developers can fork the repository, adapt the `docs/` directory, enhance it with their own custom components, and publish their tailored versions with minimal overhead.

<div class="hisp-card__actions" markdown>
[![GitHub](https://img.shields.io/badge/GitHub-spanisch--toolkit-181717?logo=github)](https://github.com/FTacke/spanisch-toolkit){target="_blank" rel="noopener noreferrer"}
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/FTacke/spanisch-toolkit/blob/main/LICENSE){target="_blank" rel="noopener noreferrer"}
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### 3. Citability & Long-Term Archiving

To ensure consistent citation and long-term referenceability, the project uses a Concept DOI on Zenodo that always points to the most recent release. Each individual update additionally receives its own Version DOI, allowing specific states of the project to be cited precisely.

Through the GitHub–Zenodo integration, every tagged release in the GitHub repository triggers an automatic archive update on Zenodo. This workflow guarantees versioned preservation, persistent identifiers for all releases, and seamless traceability of the project’s development over time.  

This archival strategy follows established FAIR principles:

* **Findable:** DOI-based citation and indexed releases
* **Accessible:** open licensing and permanent online availability
* **Interoperable:** structured Markdown sources and standard web technologies
* **Reusable:** modular chapter design and clearly documented editorial practices

<div class="hisp-card__actions" markdown>
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15348687.svg)](https://doi.org/10.5281/zenodo.15348687){target="_blank" rel="noopener noreferrer"}
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### 4. Screenshots

<div class="masonry masonry--compact">
  <a class="glightbox" href="/assets/images/screenshots/toolkit_logo.png" data-type="image">
    <img alt="Toolkit Logo" src="/assets/images/screenshots/toolkit_logo.png" />
  </a>
  <a class="glightbox" href="/assets/images/screenshots/toolkit_light.jpg" data-type="image">
    <img alt="Toolkit Light" src="/assets/images/screenshots/toolkit_light.jpg" />
  </a>
  <a class="glightbox" href="/assets/images/screenshots/toolkit_dark.jpg" data-type="image">
    <img alt="Toolkit Dark" src="/assets/images/screenshots/toolkit_dark.jpg" />
  </a>
  <a class="glightbox" href="/assets/images/screenshots/toolkit_mobile.jpg" data-type="image">
    <img alt="Toolkit Mobile" src="/assets/images/screenshots/toolkit_mobile.jpg" />
  </a>
  <a class="glightbox" href="/assets/images/screenshots/toolkit_mobile_dark.jpg" data-type="image">
    <img alt="Toolkit Mobile Dark" src="/assets/images/screenshots/toolkit_mobile_dark.jpg" />
  </a>
</div>

</div>

</div>

---

This project is part of the Hispanistica digital ecosystem and is continuously developed to support research-based Spanish language education.

