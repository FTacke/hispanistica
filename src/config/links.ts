/**
 * Centralized Link and Project Configuration
 * 
 * All external project links and project metadata live here.
 */

export const projectLinks = {
  corapan: {
    webapp: 'https://corapan.hispanistica.com',
    github: 'https://github.com/FTacke/corapan-webapp',
    doi: {
      webapp: 'https://doi.org/10.5281/zenodo.17834023',
      fullCorpus: 'https://doi.org/10.5281/zenodo.15360942',
      sampleCorpus: 'https://doi.org/10.5281/zenodo.15378479',
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

  linguistik: {
    webapp: 'https://linguistik.hispanistica.com',
    github: 'https://github.com/FTacke/linguistik',
    doi: {
      code: 'https://doi.org/10.5281/zenodo.19255666',
      textbook: 'https://doi.org/10.17192/openumr/598'
    }
  },

  games: {
    webapp: 'https://games.hispanistica.com',
    github: 'https://github.com/FTacke/hispanistica_games'
  },
  
  general: {
    githubProfile: 'https://github.com/FTacke',
    felixTacke: 'https://www.uni-marburg.de/de/fb10/romanistik/institut/ordner_lehrende/felix-tacke'
  }
} as const;

export const siteProjects = [
  {
    slug: 'corapan',
    href: '/projects/corapan/',
    title: 'CO.RA.PAN',
    logoSrc: '/corapan-logo.png',
    logoAlt: 'CO.RA.PAN Logo',
    description: 'A large-scale corpus of contemporary broadcast Spanish from nearly all Spanish-speaking countries. The web app integrates transcript navigation, metadata filters, and synchronized audio playback.'
  },
  {
    slug: 'marele',
    href: '/projects/marele/',
    title: 'MAR.ELE',
    logoSrc: '/marele-logo.png',
    logoAlt: 'MAR.ELE Logo',
    description: 'A pronunciation corpus capturing spoken Spanish from learners across proficiency levels and linguistic backgrounds. The platform combines recordings with transparent annotation workflows and speaker metadata.'
  },
  {
    slug: 'promat',
    href: '/projects/promat/',
    title: 'Pronunciation Matters',
    logoSrc: '/pro_mat-logo.png',
    logoAlt: 'Pronunciation Matters Logo',
    description: 'Upcoming multilingual platform for learner pronunciation corpora. Extends MAR.ELE to English, French, Spanish, and German with a modern MD3-style research and teaching interface.'
  },
  {
    slug: 'linguistik',
    href: '/projects/linguistik/',
    title: 'Linguistik im Spanischunterricht',
    logoSrc: '/linguistik-hispanistica.png',
    logoAlt: 'Linguistik im Spanischunterricht Logo',
    description: 'A digital textbook for Spanish language teaching that connects linguistic expertise, multimedia materials, and modular didactic design in an openly accessible web publication.'
  },
  {
    slug: 'games',
    href: '/projects/games/',
    title: 'Games.Hispanistica',
    logoSrc: '/games-logo.png',
    logoAlt: 'Games.Hispanistica Logo',
    description: 'A collection of gamified, web-based learning modules that translate established linguistic content into interactive quiz and game formats for analysis, comparison, and feedback-driven exploration.'
  }
] as const;
