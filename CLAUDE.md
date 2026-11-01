# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **The Vital Room** — Dr. Kurren Sandhu's corporate burnout prevention and health optimisation service. No build system, no package manager, no frameworks.

## Development

Open `index.html` directly in a browser, or use a local server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

There are no lint, test, or build commands.

## Architecture

This is a **single-page static site** with three core files:

- `index.html` — all page content and structure
- `styles.css` — all styling (no preprocessor)
- `script.js` — all interactivity

### Page Sections (in order)

1. **Hero** — full-screen with doctor image, coral/mint decorative shapes, dual "Get Started" CTAs linking to `#pricing`
2. **Trusted By** — dual-row logo carousel using pure CSS `@keyframes` animation; rows scroll in opposite directions; logos are duplicated in HTML to achieve seamless looping
3. **About** — statistics on workplace burnout with external citations
4. **Section Transition** — decorative full-bleed image break
5. **Services** — four service cards (`.service-card`) with JS hover effects
6. **Pricing/CTA** (`id="pricing"`) — three package cards; each "Let's Chat" button calls `Calendly.initPopupWidget()` inline
7. **Testimonials** — horizontally scrollable carousel; prev/next arrow buttons control scroll via JS hover (continuous) and click (jump by 350px)
8. **Footer** — logo, LinkedIn, legal links, ThanksDoc attribution

### External Dependencies

- **Calendly** (`assets.calendly.com`) — booking popup widget; URL is `https://calendly.com/hello-thevitalroom/connection-call`
- **Google Fonts** — Inter + Playfair Display
- **Formspree** — contact form submission (see `FORMSPREE_SETUP.md`; a `#contactForm` element is referenced in `script.js` but not currently present in `index.html`)

### Additional Pages

- `workplace-wellbeing.html` — extended service detail page
- `privacy-policy.html`, `terms-and-conditions.html` — legal pages

### Design System

| Token | Value |
|---|---|
| Background primary | `#0a0a0a` |
| Background secondary | `#111111` |
| Text primary | `#f5f5f5` |
| Text secondary | `#a0a0a0` |
| Accent gradient | `#00d4aa` → `#00a8cc` |
| Fonts | Inter (body), Playfair Display (headings) |

### Key CSS Patterns

- Logo carousel: `.logo-track-1` animates with `scrollLeft` keyframe; `.logo-track-2` animates with `scrollRight` in reverse
- Fade-in on scroll: JS adds `.fade-in` class then `.visible` via `IntersectionObserver`
- Calendly modal: `#calendly-modal` shown/hidden by `openCalendlyModal()` / `closeCalendlyModal()` in `script.js`
