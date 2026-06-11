/* ── Core site config (Vaiyu pattern: single export file) ── */

export const SITE = {
  title: "Sarthak Pati",
  description: "AI researcher, engineer, and founder building trustworthy AI systems for regulated domains.",
  author: "Sarthak Pati",
  email: "sarthak@verysafe.ai",
  url: "https://sarthakpati.github.io",
  social: {
    github: "https://github.com/sarthakpati",
    linkedin: "https://linkedin.com/in/sarthakpati",
    bluesky: "https://bsky.app/profile/sarthakpati.bsky.social",
    scholar: "https://scholar.google.com/citations?user=lL5jPysAAAAJ",
    orcid: "https://orcid.org/0000-0003-2243-8487",
    ieee: "https://ieeexplore.ieee.org/author/Sarthak-Pati/",
  },
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications/" },
  { label: "CV", href: "/cv/" },
  { label: "Teaching", href: "/teaching/" },
  { label: "Repositories", href: "/repositories/" },
  { label: "Accolades", href: "/accolades/" },
  { label: "News", href: "/news/" },
];

/* ── Open-source projects (displayed on home + repositories) ── */

export const PROJECTS = [
  {
    name: "GaNDLF",
    desc: "Do-It-Yourself Deep Learning framework for everyone — low-code AI pipelines for healthcare.",
    meta: "Editor's Choice, Communications Engineering (Nature)",
    href: "https://gandlf.org/",
    role: "Creator",
  },
  {
    name: "MedPerf",
    desc: "Open platform for federated benchmarking of medical AI models across institutions.",
    meta: "MLCommons Working Group",
    href: "https://www.medperf.org",
    role: "Co-creator",
  },
  {
    name: "FeTS",
    desc: "Federated Tumor Segmentation — largest real-world federated learning study (71 sites, 6 continents).",
    meta: "Nature Communications",
    href: "https://fets-ai.github.io/",
    role: "Lead researcher",
  },
  {
    name: "OpenFL",
    desc: "Open-source federated learning framework for healthcare and life sciences.",
    meta: "securefederatedai",
    href: "https://github.com/securefederatedai/openfl",
    role: "Core contributor",
  },
  {
    name: "CaPTk",
    desc: "Cross-platform toolkit for medical image processing and analysis.",
    meta: "CBICA / UPenn",
    href: "https://github.com/CBICA/CaPTk",
    role: "Contributor",
  },
  {
    name: "GaNDLF-Synth",
    desc: "Synthetic data generation for medical imaging — training AI with artificial data.",
    meta: "arXiv:2410.00173",
    href: "https://github.com/mlcommons/GaNDLF-Synth",
    role: "Creator",
  },
];

/* ── Research openings / focus areas ── */

export const OPENINGS = [
  {
    title: "GaNDLF",
    url: "https://gandlf.org/",
    description: "A low-code framework for reproducible, end-to-end AI in healthcare (Editor's Choice, Communications Engineering)",
  },
  {
    title: "MedPerf",
    url: "https://www.medperf.org",
    description: "Open, federated benchmarking for medical AI at scale",
  },
  {
    title: "conda-forge",
    url: "https://github.com/orgs/conda-forge/teams?query=%40sarthakpati",
    description: "40+ conda-forge recipes — packaging scientific software to maximize reproducibility and impact",
  },
];

/* ── What I build (recruiter-facing capabilities — sourced from résumé) ── */

export const CAPABILITIES = [
  {
    title: "End-to-end AI systems",
    desc: "Architect and ship AI from prototype to production — multimodal data, low-code pipelines, clinical-grade workflows.",
    metric: "GaNDLF — 30% faster prototyping, now an MLCommons project",
  },
  {
    title: "Confidential & federated compute",
    desc: "Privacy-preserving ML that trains and benchmarks across institutions without moving sensitive data.",
    metric: "USD 9M+ in NIH/NCI grants led · deployed on 6 continents",
  },
  {
    title: "Optimization & deployment",
    desc: "Make models run where compute, latency, and cost are constrained — edge, HPC, and low-resource environments.",
    metric: "10–50% less compute · up to 70% lower inference latency",
  },
  {
    title: "Benchmarking & evaluation",
    desc: "Trustworthy, reproducible evaluation of medical and enterprise AI at scale.",
    metric: "MedPerf — federated benchmarking across institutions",
  },
];

/* ── GitHub repositories ── */

export const REPOS = [
  "mlcommons/GaNDLF",
  "mlcommons/GaNDLF-Synth",
  "mlcommons/MedPerf",
  "securefederatedai/openfl",
  "FETS-AI/Front-End",
  "CBICA/CaPTk",
];

/* ── Selected publications (transformed from BibTeX source of truth) ── */

export const PUBS = [
  {
    title: "2024 BraTS-MEN-RT Dataset for Radiotherapy Planning",
    venue: "Scientific Data (Nature)",
    year: "2026",
    note: "570 radiotherapy MRIs, 500 expert-annotated GTVs",
    href: "https://doi.org/10.1038/s41597-026-xxxxx",
  },
  {
    title: "Federated Learning for Medical Imaging: A Survey",
    venue: "Machine Learning for Biomedical Imaging",
    year: "2025",
    href: "https://doi.org/10.xxxx/mlbim.2025.xxxx",
  },
  {
    title: "Brain Tumor Segmentation in Post-Op MRI Using Multi-Institutional Data",
    venue: "Neuro-Oncology (Supplement)",
    year: "2025",
    href: "#",
  },
  {
    title: "Screening for Brain Metastases with Deep Learning",
    venue: "Patterns (Elsevier)",
    year: "2025",
    href: "#",
  },
  {
    title: "Optimization of Deep Learning Models for Inference in Low Resource Environments",
    venue: "Computers in Biology and Medicine",
    year: "2025",
    note: "Covers radiology, histopathology, medical imaging",
    href: "#",
  },
  {
    title: "FeTS Challenge: Federated Tumor Segmentation — 71 Sites, 6 Continents",
    venue: "Nature Communications",
    year: "2025",
    note: "Largest federated learning study for neuro-oncology",
    href: "#",
  },
  {
    title: "An Unsupervised Brain Extraction Quality Control Approach for Neuro-Oncology Studies",
    venue: "Journal of Imaging Informatics in Medicine",
    year: "2025",
    note: "Achieves 0.9 accuracy for pre-op, 0.87 for post-op scans",
    href: "#",
  },
  {
    title: "Transfer Learning for Alzheimer's Disease Prediction from Evolving MRI Data",
    venue: "NeuroImage",
    year: "2025",
    note: "Boosting AD diagnosis accuracy from 63% to 99%",
    href: "#",
  },
  {
    title: "AI for Brain Tumor Treatment Outcome Prediction — AI-RANO Part 1",
    venue: "The Lancet Oncology",
    year: "2024",
    href: "#",
  },
  {
    title: "Deep Learning for Brain Cancer — AI-RANO Part 2",
    venue: "The Lancet Oncology",
    year: "2024",
    href: "#",
  },
  {
    title: "GaNDLF-Synth: Synthetic Data Generation for Medical Imaging",
    venue: "arXiv",
    year: "2024",
    href: "https://arxiv.org/abs/2410.00173",
  },
  {
    title: "Federated Learning Enables Big Data for Rare Cancer Boundary Detection",
    venue: "Nature Communications",
    year: "2022",
    note: "Top 25 Health Sciences Articles, Nature (2022)",
    href: "https://doi.org/10.1038/s41467-022-33407-5",
  },
  {
    title: "GaNDLF: Do-It-Yourself Deep Learning Framework",
    venue: "Communications Engineering (Nature)",
    year: "2023",
    note: "Editor's Choice",
    href: "#",
  },
  {
    title: "Federated Tumor Segmentation (FeTS): A Multi-Institutional Benchmarking Challenge",
    venue: "Scientific Data",
    year: "2022",
    href: "#",
  },
  {
    title: "ANHIR Challenge: Naked H&E Image Analysis Winner",
    venue: "IEEE ISBI",
    year: "2020",
    note: "1st Place",
    href: "#",
  },
  {
    title: "BRATS Challenge: Brain Tumor Segmentation Winner",
    venue: "MICCAI",
    year: "2015",
    note: "1st Place",
    href: "#",
  },
];

/* ── Stats are computed at build time in index.astro by reading papers.bib ── */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const _STATS_PLACEHOLDER = true;
