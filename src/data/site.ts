/* ── Core site config (Vaiyu pattern: single export file) ── */

export const SITE = {
  title: "Sarthak Pati",
  description: "Founder of VerySafe.ai. I build AI systems for regulated, high-stakes domains, and the infrastructure to prove they can be trusted.",
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
    desc: "Do-It-Yourself Deep Learning framework for everyone: low-code AI pipelines for healthcare.",
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
    desc: "Federated Tumor Segmentation: largest real-world federated learning study (71 sites, 6 continents).",
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
    desc: "Synthetic data generation for medical imaging: training AI with artificial data.",
    meta: "arXiv:2410.00173",
    href: "https://github.com/mlcommons/GaNDLF-Synth",
    role: "Creator",
  },
];

/* ── What I build (recruiter-facing capabilities, sourced from résumé) ── */

export const CAPABILITIES = [
  {
    title: "End-to-end AI systems",
    desc: "I take AI from first prototype to clinical-grade production, multimodal data and all.",
    metric: "GaNDLF: 30% faster prototyping, now an MLCommons project",
  },
  {
    title: "Confidential & federated compute",
    desc: "Models train and benchmark across institutions while the sensitive data stays put.",
    metric: "$9M+ in NIH/NCI grants led · deployed on 6 continents",
  },
  {
    title: "Optimization & deployment",
    desc: "I get models running where compute is scarce and latency budgets are real, from edge hardware to HPC.",
    metric: "10–50% less compute · up to 70% lower inference latency",
  },
  {
    title: "Benchmarking & evaluation",
    desc: "Evaluation of medical and enterprise AI that other people can actually reproduce and check.",
    metric: "MedPerf: federated benchmarking across institutions",
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
