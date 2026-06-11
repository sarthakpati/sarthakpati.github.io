// Site configuration - migrated from _config.yml

export const siteConfig = {
  title: "Sarthak's Profile",
  description:
    'AI researcher, engineer, and founder. PhD from TUM summa cum laude.',
  url: 'https://sarthakpati.github.io',
  keywords:
    'AI, machine learning, medical imaging, federated learning, reproducibility, AI safety',
  icon: '💡',
  max_width: 930,
  lang: 'en',
  // Repository display config
  repo_theme_light: 'default',
  repo_theme_dark: 'dark',
  repo_trophies: { enabled: true, theme_light: 'flat', theme_dark: 'gitdimmed' },
  // Publication badge config
  enable_publication_badges: {
    altmetric: true,
    dimensions: true,
    google_scholar: true,
    inspirehep: true,
  },
  max_author_limit: 3,
} as const;

export type SiteConfig = typeof siteConfig;
