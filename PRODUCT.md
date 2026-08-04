# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four confirmed audiences, all first-class:

- **Enterprise and investor leads** evaluating Sarthak as founder of VerySafe.ai before a call.
- **Recruiters and hiring managers** assessing him for roles or advisory work.
- **Academic collaborators** checking publications, citations, and open-source work before collaborating.
- **Press and event organizers** verifying background and accolades for coverage or speaking slots.

All arrive doing a credibility check; the site must survive skeptical, time-poor readers.

## Product Purpose

Personal portfolio site for Sarthak Pati (sarthakpati.github.io). It establishes credibility across founder, researcher, and engineer identities. Success = the visitor emails sarthak@verysafe.ai about collaboration, hiring, or VerySafe.

## Positioning

**Founder-forward** (confirmed): VerySafe.ai / SafeCompute is the headline; the research record (Nature publications, USD 9M+ NIH/NCI grants led, MLCommons Vice Chair role, open-source frameworks) is the supporting proof. Future work must not invert this into a research-first site with the company as a line item.

The differentiating claim: bridging frontier AI capability with the safety, attestation, and governance infrastructure to deploy it in regulated, high-stakes domains. SafeCompute attaches cryptographic proof to every AI model run (remote attestation, supply-chain provenance, signed audit lineage).

## Operating Context

- Deployed as a GitHub Pages site at https://sarthakpati.github.io.
- Content is data-driven: `src/data/site.ts` and `src/data/profile.ts` hold nav, projects, capabilities, and selected publications; `public/_bibliography/papers.bib` is the BibTeX source of truth for publication stats computed at build time.
- Surfaces: home, publications, CV, teaching, repositories, accolades, news, plus a books page not currently in the nav.
- Repo still contains legacy Jekyll/al-folio artifacts (`_pages/`, `_site/`, `assets/`, `requirements.txt`) from the previous site generation; the Astro app in `src/` is the live implementation.

## Capabilities and Constraints

- Astro 7 + Tailwind v4 static site; fonts self-hostable via @fontsource packages (currently loaded from Google Fonts in `Base.astro`).
- Dark mode is first-class and must remain so.
- Several entries in the `PUBS` array carry placeholder links (`href: "#"`, `xxxxx` DOIs); these are known gaps to fill with real DOIs, not facts to invent around.

## Brand Commitments

- Name: Sarthak Pati. Title: Founder of VerySafe.ai; Vice Chair, MLCommons Medical Working Group.
- Voice (evidenced in bio): direct, technical, evidence-backed; states beliefs plainly ("open software fosters better science").
- Assets: `public/prof_pic.jpg` (portrait), `public/resume_sarthak.pdf` (résumé), `public/favicon.svg`.

## Evidence on Hand

- Real publication record in `papers.bib` and `PUBS`, including Nature Communications, The Lancet Oncology, Scientific Data, and two challenge wins (MICCAI BraTS 2015, IEEE ISBI ANHIR 2020, both 1st place).
- Quantified claims already confirmed in copy: USD 9M+ NIH/NCI grants led; FeTS federated study across 71 sites, 6 continents; GaNDLF Editor's Choice in Communications Engineering (Nature); 40+ conda-forge recipes.
- No testimonials, customer logos, or VerySafe traction metrics exist in the repo; do not fabricate any.

## Product Principles

1. **Founder-forward, research-backed.** Lead with VerySafe/SafeCompute; deploy the academic record as proof, never as the headline.
2. **Every claim is sourced.** Metrics, venues, and awards come from `papers.bib`, the résumé, or confirmed copy; placeholder links get fixed, not decorated.
3. **One action: email.** Every surface should make reaching sarthak@verysafe.ai the obvious next step for a convinced visitor.
4. **Serve the skeptical skimmer.** All four audiences arrive verifying, not browsing; the load-bearing facts must survive a 30-second scan.
5. **Data files over markup.** Content changes happen in `src/data/*.ts` and `papers.bib`, keeping pages thin.
