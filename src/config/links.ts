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
      metadata: 'https://doi.org/10.5281/zenodo.17843469'
    }
  },
  
  marele: {
    webapp: 'https://marele.hispanistica.com',
    github: 'https://github.com/FTacke/marele-webapp',
    doi: {
      webapp: 'https://doi.org/10.5281/zenodo.11515518'
    }
  },

  pronunciation_matters: {
    youtube: 'https://youtu.be/ucvpPAONGoY?si=XNPaB4xakROGp4Lt',
    team: [
      {
        name: 'Janina Reinhardt',
        url: 'https://www.uni-marburg.de/de/fb10/romanistik/institut/ordner_lehrende/lehrende/staff-info-redirect?dn=6zh9to4uac'
      }, // Qualifikationsprofessorin, Romanistik (Philipps-Universität Marburg) :contentReference[oaicite:0]{index=0}
      {
        name: 'Rolf Kreyer',
        url: 'https://www.uni-marburg.de/de/fb10/iaa/institut/personen/kreyer'
      }, // Universitätsprofessor, Anglistik & Amerikanistik (Philipps-Universität Marburg) :contentReference[oaicite:1]{index=1}
      {
        name: 'Kathrin Siebold',
        url: 'https://www.uni-marburg.de/de/fb09/igs/arbeitsgruppen/dafz/mitarbeiter-innen/siebold'
      } // Universitätsprofessorin, Deutsch als Fremd- und Zweitsprache (Philipps-Universität Marburg) :contentReference[oaicite:2]{index=2}
    ]
  },
    
  school: {
    webapp: 'https://school.hispanistica.com',
    github: 'https://github.com/FTacke/spanisch-toolkit'
  },

  games: {
    github: 'https://github.com/FTacke/hispanistica_games'
  },
  
  general: {
    githubProfile: 'https://github.com/FTacke',
    felixTacke: 'https://www.uni-marburg.de/de/fb10/romanistik/institut/ordner_lehrende/felix-tacke'
  }
} as const;
