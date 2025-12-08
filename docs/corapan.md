<div class="hisp-hero">
  <div class="hisp-hero__inner">
    <div class="hisp-hero__content">
      <h1 class="hisp-hero__title">CO.RA.PAN — Corpus Radiofónico Panhispánico</h1>
      <p class="hisp-hero__subtitle">
        A comprehensive, time-aligned and linguistically annotated corpus of spoken radio news from across the Spanish-speaking world. CO.RA.PAN documents contemporary pluricentric Spanish through more than 1.4 million words of professionally produced broadcast speech.
      </p>
      <p class="hisp-hero__logo">
        <a href="https://corapan.online.uni-marburg.de/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/corapan_breit.png" alt="CO.RA.PAN Logo"></a>
      </p>
      <p>
        <a href="https://corapan.online.uni-marburg.de/" class="md-button md-button--primary" target="_blank" rel="noopener noreferrer">Open Web App <i class="fa-solid fa-up-right-from-square"></i></a>
      </p>
    </div>
  </div>
</div>

---

## Introduction

CO.RA.PAN is a long-term digital humanities project dedicated to documenting the diversity of contemporary spoken Spanish through professionally produced radio news from nearly all Spanish-speaking countries. The corpus brings together audio, transcriptions, linguistic annotation, and metadata into a unified and reproducible research infrastructure. With more than 1.4 million words, CO.RA.PAN provides one of the most comprehensive cross-national resources for studying pluricentric Spanish, media language, discourse practices, and regional linguistic variation.

At the core of the project lies a structured data pipeline that transforms raw broadcasts into time-aligned, richly annotated JSON transcripts. These transcripts serve as the foundation for the Web Application, the restricted Full Corpus, and the openly available Sample Corpus and Metadata releases. Together, these components offer a coherent ecosystem for linguistic exploration, methodological transparency, and long-term archiving.

Below is an overview of the four key components of CO.RA.PAN.

## Components & features

<div class="hisp-card-grid" markdown>

<div class="hisp-card hisp-card--light" markdown>

### 1. Web Application

The CO.RA.PAN Web Application is the central research interface to the corpus.  
It allows users to explore the dataset through an integrated environment that combines transcript navigation, linguistic annotation, metadata browsing, and interactive visualisation. Searches are powered by BlackLab Server, enabling efficient access to the richly annotated JSON transcripts.

Essential features include:

- synchronized transcript navigation  
- powerful linguistic search  
- interactive metadata and geographical filters  

The interface does not create corpus data itself; it provides structured access to the output of the CO.RA.PAN data pipeline.

<div class="hisp-card__actions" markdown>
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#)
[![GitHub](https://img.shields.io/badge/GitHub-CO.RA.PAN--WebApp-181717?logo=github)](https://github.com/FTacke/corapan-webapp){target="_blank" rel="noopener noreferrer"}
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17834023.svg)](https://doi.org/10.5281/zenodo.17834023)
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### 2. Full Corpus (Restricted)

The Full Corpus represents the complete CO.RA.PAN dataset:  
professionally read and spontaneous radio news from nearly all Spanish-speaking countries, with aligned audio, revised transcriptions, and detailed linguistic annotation.

Because the broadcasts are copyrighted, the dataset is available under **restricted access**.  
Its metadata remain openly visible, while requests for access are evaluated individually.

Key components include:

- original audio  
- revised, normalized transcripts  
- linguistic annotation (POS, lemma, dependency, morphology)  
- precise time alignment at the utterance and token level  

<div class="hisp-card__actions" markdown>
[![Access: Restricted](https://img.shields.io/badge/Access-Restricted-red.svg)](#)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15360942.svg)](https://doi.org/10.5281/zenodo.15360942)
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### 3. Sample Corpus (Public)

The Sample Corpus offers an openly accessible, compact illustration of the CO.RA.PAN format.  
It contains one fully annotated transcript, following exactly the same structural conventions as the Full Corpus. Although audio is not included, all time-alignment fields remain intact, demonstrating how utterances and tokens relate to the source broadcast.

This sample provides an immediate, barrier-free way to understand the data model, the annotation workflow, and the organization of the corpus.

<div class="hisp-card__actions" markdown>
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC--BY--4.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15378479.svg)](https://doi.org/10.5281/zenodo.15378479)
</div>

</div>

<div class="hisp-card hisp-card--light" markdown>

### 4. Metadata (Public)

The CO.RA.PAN Metadata release provides the full FAIR documentation layer of the project.  
It includes global and country-specific metadata, variable definitions, technical descriptions, and TEI/XML headers. These files describe the structure, composition, and annotation principles of the corpus independently of the restricted audio and transcripts.

This metadata package ensures transparency, reproducibility, and long-term stability of the CO.RA.PAN project and can be freely reused in research workflows.

<div class="hisp-card__actions" markdown>
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC--BY--4.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.17843469.svg)](https://doi.org/10.5281/zenodo.17843469)
</div>

</div>

</div>

---

All CO.RA.PAN components are citable through persistent DOIs and adhere to the FAIR principles, ensuring accessibility, interoperability, and reusability for linguistic and digital humanities research.
