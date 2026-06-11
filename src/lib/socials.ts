// Social links config - migrated from _data/socials.yml

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Tabler Icons name
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/sarthakpati.bsky.social',
    icon: 'brand-bluesky',
  },
  {
    name: 'Email',
    url: 'mailto:sarthak@verysafe.ai',
    icon: 'mail',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sarthakpati',
    icon: 'brand-github',
  },
  {
    name: 'IEEE',
    url: 'https://ieeexplore.ieee.org/author/37594669000',
    icon: 'device-desktop',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sarthakpati/',
    icon: 'brand-linkedin',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/0000-0003-2243-8487',
    icon: 'file-text-ai',
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=lL5jPysAAAAJ',
    icon: 'school',
  },
  {
    name: 'Work',
    url: 'https://mlcommons.org/working-groups/data/medical/',
    icon: 'briefcase',
  },
];
