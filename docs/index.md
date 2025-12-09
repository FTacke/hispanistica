---
title: Project Overview
---

<div class="hisp-hero hisp-hero--index">
  <div class="hisp-hero__inner">
    <div class="hisp-hero__content">
      <h1 class="hisp-hero__title">Welcome</h1>
      <p class="hisp-hero__subtitle">
        <strong>Hispanistica</strong> documents Digital Humanities projects in Hispanic linguistics at Philipps University of Marburg, highlighting their technical foundations, versioned development workflows, and adherence to FAIR principles. It provides an overview of research infrastructures, corpora, and digital teaching tools developed under the direction of 
        <strong><a href="https://www.uni-marburg.de/de/fb10/romanistik/institut/ordner_lehrende/felix-tacke" target="_blank" rel="noopener noreferrer">Prof. Dr. Felix Tacke</a></strong>.
      </p>
      <p class="hisp-hero__logo">
        <a href="https://hispanistica.online.uni-marburg.de/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/hispanistica_logo.png" alt="Hispanistica Logo"></a>
      </p>
    </div>
  </div>
</div>

---

## Approach

In my Digital Humanities projects, I draw on recent developments in Large Language Models, generative AI, and modern web technologies to make research data and teaching materials transparent, versioned, and sustainable over time. Lightweight and reproducible technical infrastructures now make it possible to develop specialised tools for Hispanic linguistics without relying on extensive institutional IT resources.

I work openly, transparently, and in accordance with FAIR principles: data, workflows, and technical decisions should be understandable and reusable. For this reason, the complete source code of my projects — including build configurations, release workflows, and documentation — is freely accessible on <strong><a href="https://github.com/FTacke" target="_blank" rel="noopener noreferrer">GitHub</a></strong>:

## Projects

<div class="hisp-card-grid" markdown>

<div class="hisp-card hisp-card--light" markdown>

### CO.RA.PAN (Corpus Radiofónico Panhispánico)

[![CO.RA.PAN Logo](assets/images/corapan_breit.png)](corapan.md)

*A large-scale corpus of contemporary broadcast Spanish from nearly all Spanish-speaking countries.*

CO.RA.PAN documents pluricentric Spanish through professionally produced radio news, supported by a robust technical pipeline: raw audio is processed into time-aligned, linguistically annotated JSON (POS, lemma, morphology, dependency), which is indexed through BlackLab Server for fast corpus search. A custom web application integrates transcript navigation, metadata filters, and synchronized audio playback, offering researchers a unified interface for exploring more than 1.4 million words of spoken data.

<div class="hisp-card__actions" markdown>
[Learn more...](corapan.md){.md-button}
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### MAR.ELE

[![MAR.ELE Logo](assets/images/marele_breit.png)](marele.md)

*A pronunciation corpus capturing spoken Spanish from learners across proficiency levels and linguistic backgrounds.*

The project combines controlled recordings with transparent annotation workflows to support phonetic and interlanguage research. Its technical foundation is a containerized Flask web application featuring audio–text synchronization, speaker metadata views, and tools for segment-level comparison across recordings. The architecture ensures reproducibility, modularity, and long-term maintainability, making MAR.ELE a scalable platform for empirical studies in second-language pronunciation.

<div class="hisp-card__actions" markdown>
[Learn more...](marele.md){.md-button}
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### Spanish Linguistics @ School

[![Spanisch Toolkit Logo](assets/images/toolkit_breit.png)](toolkit.md)

*A digital reference book for Spanish language teachers with a focus on linguistic awareness and classroom applicability.*

Implemented using MkDocs and the Material for MkDocs theme, the project leverages page navigation, integrated search, and responsive layouts to emulate the readability of a structured textbook in a fully static-site environment. Through custom HTML/JS/CSS extensions, the toolkit supports Leaflet-based interactive maps, embedded audio players, and specialized components for linguistic examples, enabling dynamic didactic materials far beyond the standard MkDocs feature set. The platform supports collaborative OER development and sustainable long-term expansion.

<div class="hisp-card__actions" markdown>
[Learn more...](toolkit.md){.md-button}
</div>

</div>

</div>

---

[![GitHub](https://img.shields.io/badge/GitHub-FTacke-4287f5?style=flat&logo=github&logoColor=white)](https://github.com/FTacke){target="_blank" rel="noopener noreferrer"}
[![Hispanistica – @ Marburg](https://img.shields.io/badge/Hispanistica-@ Marburg-4287f5?style=flat)](https://hispanistica.online.uni-marburg.de){target="_blank" rel="noopener noreferrer"}  
