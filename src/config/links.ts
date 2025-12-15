/**
 * Centralized Link Configuration
 * 
 * All external project links in one place for easy maintenance.
 */

export const projectLinks = {
  corapan: {
    webapp: 'https://corapan.hispanistica.com',
    github: 'https://github.com/FTacke/corapan-webapp',
    doi: {
      webapp: 'https://doi.org/10.5281/zenodo.17834023',
      fullCorpus: 'https://doi.org/10.5281/zenodo.15360942',
      sampleCorpus: 'https://doi.org/10.5281/zenodo.17834025',
      metadata: 'https://doi.org/10.5281/zenodo.17834027'
    }
  },
  
  marele: {
    webapp: 'https://marele.hispanistica.com',
    github: 'https://github.com/FTacke/marele-webapp',
    doi: {
      webapp: 'https://doi.org/10.5281/zenodo.11515518'
    }
  },
  
  school: {
    webapp: 'https://school.hispanistica.com',
    github: 'https://github.com/FTacke/spanisch-toolkit'
  },
  
  general: {
    githubProfile: 'https://github.com/FTacke'
  }
} as const;
