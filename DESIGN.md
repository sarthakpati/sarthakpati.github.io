# Design System

The visual language for **sarthakpati.github.io** — an editorial, print-inspired
portfolio. Warm saffron accent on a cool paper-and-ink neutral base, serif display
type, monospace labels. This document is the single source of truth for color,
type, and component patterns; copy the token blocks below into any new page,
component, or sibling project.

Source of truth in code: [`src/styles/global.css`](src/styles/global.css).

---

## 1. Design principles

- **Editorial, not corporate.** Section numbers (`01`, `02`), oversized ghost
  numerals, monospace eyebrows, and strong top-borders evoke a printed journal.
- **Warm accent, cool base.** A single saffron orange does all the accent work
  against a near-neutral paper/ink palette. Use it sparingly — it should always
  read as emphasis.
- **Quiet by default, loud on interaction.** Hover states shift to saffron;
  resting states stay in the ink/slate range.
- **Dark mode is first-class.** Every token has a light and dark value. Never
  hard-code a hex in markup — reference a token so both themes track.
- **Respect motion preferences.** All animation collapses under
  `prefers-reduced-motion`.

---

## 2. Color tokens

Two themes, identical token names. Light is the default; `.dark` on `<html>`
swaps the values. **Always reference the token, never the raw hex.**

| Token             | Role                              | Light       | Dark        |
| ----------------- | --------------------------------- | ----------- | ----------- |
| `paper`           | Page background                   | `#f8f9fb`   | `#0d0f14`   |
| `cream`           | Raised surface — cards, sidebars  | `#eceff5`   | `#141620`   |
| `ink`             | Primary text, headings            | `#191c22`   | `#e8eaf0`   |
| `ink-soft`        | Body copy                         | `#353c49`   | `#b0b5c0`   |
| `slate`           | Muted — captions, meta, inactive  | `#4f5d6d`   | `#6b7280`   |
| `brand-blue`      | Secondary accent / link blue      | `#1e5ebb`   | `#6ea8fe`   |
| `saffron`         | **Primary accent** — CTAs, hover  | `#e87228`   | `#f59e44`   |
| `saffron-bright`  | Accent hover / brighter emphasis  | `#f09040`   | `#fbbf6a`   |

### Roles at a glance

- **Backgrounds:** `paper` (page) → `cream` (raised) → `ink` (inverted bands).
- **Text hierarchy:** `ink` (headings) → `ink-soft` (body) → `slate` (muted).
- **Accent:** `saffron` for any call-to-action, active nav, link hover, and
  metric labels; `saffron-bright` only as its hover/active brighten.
- **`brand-blue`** is the reserved secondary — use for in-prose links where
  saffron would over-emphasize. Not yet heavily used; keep it for that purpose.

> **Inverted bands.** Sections like the CTA flip to `bg-ink text-paper`, with
> `cream` for secondary text and `saffron` still as the accent. This is the only
> place text sits on a dark surface in light mode.

---

## 3. Typography

Three families, loaded from Google Fonts in [`src/layouts/Base.astro`](src/layouts/Base.astro).

| Token            | Stack                              | Use                                  |
| ---------------- | ---------------------------------- | ------------------------------------ |
| `--font-display` | `"Fraunces", Georgia, serif`       | Headings, stat figures, logo         |
| `--font-sans`    | `"Archivo", system-ui, sans-serif` | Body, UI, nav                        |
| `--font-mono`    | `"IBM Plex Mono", monospace`       | Eyebrows, labels, metadata, subtitle |

### Type helper classes

Defined in `global.css`; use them instead of re-deriving the styles.

- **`.h-display`** — Fraunces, weight `560`, `letter-spacing: -0.018em`,
  `line-height: 1.05`, `text-wrap: balance`. The default for every heading.
- **`.label-mono`** — IBM Plex Mono, `0.6875rem` (11px), `letter-spacing: 0.22em`,
  uppercase, weight `500`. Eyebrows, kicker labels, footer headings.
- **`.ghost-num`** — oversized Fraunces numeral, weight `700`, `opacity: 0.06`,
  absolutely positioned, non-interactive. The decorative section number behind
  headings (paired with an `.h-display` of the same digits).

### Scale in practice

- Hero `h1`: `text-4xl md:text-5xl lg:text-6xl` + `.h-display`.
- Section `h2`: `text-3xl md:text-4xl` + `.h-display`.
- Card `h3`: `font-display text-xl font-semibold`.
- Body: default sans, `leading-relaxed`, `text-ink-soft`, capped at `max-w-2xl`.
- Subtitle / meta: `font-mono text-sm text-slate`.

---

## 4. Links

Two underlined editorial link styles (`global.css`), chosen by background:

- **`.link-ink`** — for light backgrounds. Bottom border in current color,
  shifts to `saffron` on hover.
- **`.link-paper`** — for dark/inverted backgrounds. Hover shifts to
  `saffron-bright`.

Plain text links (nav, footer socials) skip the underline and just transition
`text-slate → text-saffron` on hover. Active nav item: `text-saffron` with a
`border-b-2 border-saffron`.

---

## 5. Component patterns

Reusable structures already in the codebase. Reach for these before inventing new ones.

### Buttons / CTAs
```html
<a class="inline-block bg-saffron text-paper font-medium px-6 py-2.5 rounded-sm
          hover:bg-saffron-bright transition-colors duration-200">Label</a>
```
Solid saffron, `paper` text, `rounded-sm` (never fully rounded), 200ms color
transition. This is the only filled-button style.

### Eyebrow ([`Eyebrow.astro`](src/components/Eyebrow.astro))
A `.label-mono` kicker with an optional section number, saffron on light
(`tone="light"`) or `cream` on dark (`tone="dark"`). Pairs with a `.ghost-num`.

### Card / list item
```html
<div class="border-t-2 border-ink/80 pt-5">
  <h3 class="font-display text-xl font-semibold text-ink">Title</h3>
  <p class="text-sm text-ink-soft mt-2 leading-relaxed">Description</p>
  <p class="label-mono text-saffron mt-3">METRIC</p>
</div>
```
Cards lead with a **strong top border** (`border-t-2 border-ink/80`), not a box.
Interactive cards add `hover:border-saffron` and `group-hover:text-saffron`.
Raised panels (sidebar/aside) use `bg-cream rounded-sm p-6` instead.

### Dividers
- Hairline section divider: `border-ink/10` (subtle, 10% ink).
- Emphatic content rule above a card: `border-ink/80` at `border-t-2`.

### Inverted CTA band ([`CTABand.astro`](src/components/CTABand.astro))
`bg-ink text-paper` full-width section, `cream` sub-text, saffron button, and a
faint saffron streamline SVG at `opacity-[0.03]`.

### Decorative wind-field ([`WindField.astro`](src/components/WindField.astro))
Animated SVG streamlines (`ink` at 3–4% opacity, one `saffron` line at 8%) that
drift behind the hero. Purely aesthetic, `aria-hidden`.

### Layout conventions
- Content column: `max-w-5xl mx-auto px-6`.
- Section rhythm: `py-24` between major sections, divided by `border-ink/10`.
- Sticky header: `bg-paper/80 backdrop-blur-sm` + `border-b border-ink/10`.

---

## 6. Motion

- **`.reveal`** — page-load fade-up (`0.8s`, custom ease). Stagger with
  `.reveal-1` … `.reveal-5` (80ms steps).
- **`.windline`** — slow infinite `windDrift` (50–90s) on background streamlines.
- **Transitions** — interactive elements use `transition-colors duration-200`.
- **`::selection`** — saffron background, paper text.
- **Reduced motion** — `prefers-reduced-motion: reduce` flattens all animation
  and transition durations to `~0`.

---

## 7. Reuse — copy these into a new project

### A. Tailwind v4 `@theme` block (this project's setup)
```css
@import "tailwindcss";

@theme {
  --default-theme-dark-mode: class;

  --color-paper: #f8f9fb;
  --color-cream: #eceff5;
  --color-ink: #191c22;
  --color-ink-soft: #353c49;
  --color-slate: #4f5d6d;
  --color-brand-blue: #1e5ebb;
  --color-saffron: #e87228;
  --color-saffron-bright: #f09040;

  --font-display: "Fraunces", Georgia, serif;
  --font-sans: "Archivo", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
}

/* Dark overrides MUST be outside @theme in Tailwind v4 */
.dark {
  --color-paper: #0d0f14;
  --color-cream: #141620;
  --color-ink: #e8eaf0;
  --color-ink-soft: #b0b5c0;
  --color-slate: #6b7280;
  --color-brand-blue: #6ea8fe;
  --color-saffron: #f59e44;
  --color-saffron-bright: #fbbf6a;
}
```
Tokens become utilities automatically: `bg-paper`, `text-ink`, `text-ink-soft`,
`text-slate`, `bg-cream`, `text-saffron`, `hover:bg-saffron-bright`,
`font-display`, `font-mono`, etc.

### B. Framework-agnostic CSS custom properties
For any project not on Tailwind, drop this in a global stylesheet and reference
`var(--color-*)`:
```css
:root {
  --color-paper: #f8f9fb;
  --color-cream: #eceff5;
  --color-ink: #191c22;
  --color-ink-soft: #353c49;
  --color-slate: #4f5d6d;
  --color-brand-blue: #1e5ebb;
  --color-saffron: #e87228;
  --color-saffron-bright: #f09040;

  --font-display: "Fraunces", Georgia, serif;
  --font-sans: "Archivo", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
}
.dark {
  --color-paper: #0d0f14;
  --color-cream: #141620;
  --color-ink: #e8eaf0;
  --color-ink-soft: #b0b5c0;
  --color-slate: #6b7280;
  --color-brand-blue: #6ea8fe;
  --color-saffron: #f59e44;
  --color-saffron-bright: #fbbf6a;
}
```

### C. Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Archivo:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Mono:wght@400;500&display=swap" />
```

### D. Dark-mode boot script (prevents flash)
```html
<script>
  (function(){var s=localStorage.getItem('theme'),m='(prefers-color-scheme:dark)';
   if(s==='dark'||(!s&&matchMedia(m).matches))document.documentElement.classList.add('dark')})();
</script>
```
Toggle by flipping `.dark` on `<html>` and persisting `theme` in `localStorage`
(see [`ThemeToggle.astro`](src/components/ThemeToggle.astro)).

---

## 8. Quick rules

- **Do** lead emphasis with `saffron`; reserve `saffron-bright` for its hover.
- **Do** keep body text at `ink-soft`, headings at `ink`, meta at `slate`.
- **Do** use top-borders (`border-t-2`) over boxes/shadows for structure.
- **Don't** hard-code hex values in markup — reference a token.
- **Don't** fully round corners; the system uses `rounded-sm` only.
- **Don't** introduce a second accent hue — `brand-blue` is the only sanctioned
  secondary, and only for in-prose links.
