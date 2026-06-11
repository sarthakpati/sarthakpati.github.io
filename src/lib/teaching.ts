// Teaching data - extracted from _pages/teaching.md

export interface TeachingEntry {
  year: number;
  title: string;
  conference: string;
  url?: string;
}

export const teachingData: TeachingEntry[] = [
  {
    year: 2025,
    title: 'Tutorial on Federated Learning',
    conference: 'MICCAI',
  },
  {
    year: 2024,
    title: 'Tutorial on Federated Learning',
    conference: 'MICCAI',
  },
  {
    year: 2024,
    title: 'Tutorial on Federated Learning',
    conference: 'AAAI',
  },
  {
    year: 2024,
    title: 'Tutorial on Federated Learning',
    conference: 'ISBI',
  },
  {
    year: 2024,
    title: 'Presentation at MRI Together Conference on reproducible research in medical imaging',
    conference: 'MRI Together Conference',
  },
  {
    year: 2023,
    title: 'Tutorial on Federated Learning',
    conference: 'RSNA',
  },
  {
    year: 2023,
    title: 'Invited talk at University of Edinburgh',
    conference: 'University of Edinburgh',
  },
  {
    year: 2023,
    title: 'Invited talk on reproducible AI',
    conference: 'Georgetown University',
  },
  {
    year: 2022,
    title: 'Quantitative Imaging Reading Room and Live Demo for FeTS and CaPTk',
    conference: 'RSNA',
  },
  {
    year: 2022,
    title: 'Invited talk on reproducible AI',
    conference: 'Georgetown University',
  },
  {
    year: 2021,
    title: 'Invited talk on Federated Learning',
    conference: 'Georgetown University',
  },
  {
    year: 2018,
    title: 'Half Day Tutorial on Cancer Imaging',
    conference: 'ISBI',
  },
  {
    year: 2018,
    title: 'Live Demonstration of CaPTk',
    conference: 'SPIE Medical Imaging Conference',
  },
  {
    year: 2017,
    title: 'Live Demonstration of CaPTk',
    conference: 'SPIE Medical Imaging Conference',
  },
];
