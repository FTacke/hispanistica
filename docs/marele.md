<div class="hisp-hero">
  <div class="hisp-hero__inner">
    <div class="hisp-hero__content">
      <h1 class="hisp-hero__title">MAR.ELE — Pronunciation Corpus</h1>
      <p class="hisp-hero__subtitle">
        A corpus of learner pronunciation in Spanish, designed to support empirical research, teaching, and the study of spoken interlanguage varieties.
        MAR.ELE combines high-quality audio, carefully aligned transcriptions, and rich metadata within a unified analytical environment.
      </p>
      <p class="hisp-hero__logo">
        <a href="https://marele.online.uni-marburg.de/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/marele_breit.png" alt="MAR.ELE Logo"></a>
      </p>
      <p>
        <a href="https://marele.online.uni-marburg.de/" class="md-button md-button--primary" target="_blank" rel="noopener noreferrer">Open Web App <i class="fa-solid fa-up-right-from-square"></i></a>
      </p>
    </div>
  </div>
</div>

---

## Introduction

MAR.ELE is a research-oriented pronunciation corpus documenting the spoken production of learners of Spanish across different linguistic backgrounds and proficiency levels.  
It was created to offer a reliable empirical foundation for work in second-language phonetics, pronunciation instruction, corpus phonology, and the analysis of learner varieties.

The recordings capture controlled reading and task-based speech. All materials have been processed through a consistent transcription and annotation workflow, allowing users to explore the data both qualitatively and quantitatively.  
Particular emphasis is placed on transparent documentation, reproducible methods, and accessibility for linguistic researchers, teachers, and students.

The corpus is available through a dedicated web interface that integrates audio–text synchronization, metadata browsing, and comparative phonetic analysis tools.

## Components & features

<div class="hisp-card-grid" markdown>

<div class="hisp-card hisp-card--light" markdown>

### 1. Web Application

The MAR.ELE web application serves as the central access point to the corpus.  
It allows users to listen to complete recordings while following the aligned transcription, examine speaker profiles, and compare specific words or segments across recordings.  
The interface is designed to support both detailed linguistic analysis and practical use in language teaching.

From a technical perspective, the application is implemented as a containerized Python/Flask service with automated deployment.  
Its design follows principles of modularity, reproducibility, and long-term maintainability.

<div class="hisp-card__actions" markdown>
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#)
[![GitHub](https://img.shields.io/badge/GitHub-MAR.ELE--WebApp-181717?logo=github)](https://github.com/FTacke/marele-webapp){target="_blank" rel="noopener noreferrer"}
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15373525.svg)](https://doi.org/10.5281/zenodo.15373525)
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### 2. Full Corpus (Restricted Access)

The full MAR.ELE corpus includes the complete set of audio recordings, transcriptions, and metadata produced during the project.  
Because these materials consist of pseudonymized personal speech data, access is subject to ethical and data protection regulations.  
For this reason, the corpus is made available under restricted access and can be obtained upon written request for academic research purposes.

The dataset provides the level of detail required for fine-grained phonetic and phonological analysis, including segment-level alignment and rich speaker information.

<div class="hisp-card__actions" markdown>
[![Access: Restricted](https://img.shields.io/badge/Access-Restricted-red.svg)](#)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15373537.svg)](https://doi.org/10.5281/zenodo.15373537)
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### 3. Screenshots

<div class="masonry masonry--compact">
  <a class="glightbox" href="/assets/images/screenshots/marele_logo.jpg" data-type="image">
    <img alt="MAR.ELE Logo" src="/assets/images/screenshots/marele_logo.jpg" />
  </a>
  <a class="glightbox" href="/assets/images/screenshots/marele_player.jpg" data-type="image">
    <img alt="MAR.ELE Player" src="/assets/images/screenshots/marele_player.jpg" />
  </a>
  <a class="glightbox" href="/assets/images/screenshots/marele_player2.jpg" data-type="image">
    <img alt="MAR.ELE Player (detail view)" src="/assets/images/screenshots/marele_player2.jpg" />
  </a>
  <a class="glightbox" href="/assets/images/screenshots/marele_analysis.jpg" data-type="image">
    <img alt="MAR.ELE Analysis View" src="/assets/images/screenshots/marele_analysis.jpg" />
  </a>
</div>

</div>

</div>

---

## Corpus Design

The MAR.ELE corpus was developed with the goal of providing a stable and methodologically consistent reference resource for pronunciation studies.  
Recordings were collected in controlled settings to ensure comparability across speakers and tasks.  
The transcription protocol follows transparent conventions, which are applied throughout all materials to facilitate systematic analysis.

Metadata include learner background, proficiency, demographic information, and task descriptions.  
The annotation layers support investigations ranging from global prosodic patterns to fine-grained segmental analysis.

---

## FAIR Principles & Citation

The MAR.ELE project follows the FAIR principles to ensure long-term accessibility and scientific reusability:

- The corpus and software components are assigned stable DOIs and documented releases.  
- The web application provides user-friendly access to the data and its annotation structure.  
- Metadata and transcription formats adhere to established standards, promoting interoperability.  
- Open-source components are released under the MIT License to facilitate reuse in teaching and research.
