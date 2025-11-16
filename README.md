# MuseHall Gallery

## Live Demo
https://musehall.vercel.app/
---

## Project Overview
MuseHall is a modern online art gallery built with React and Tailwind CSS, designed to showcase curated artwork in an elegant, minimal, and emotionally warm aesthetic. The website provides visitors with a seamless browsing experience through its hero showcase, curated art grid, testimonials, and contact/CTA section all crafted to reflect the identity of a premium art space.

---

## Brand Identity

### Color System
- **Primary — Black (#000000)**  
  Used for main headings and strong typography across all sections. Creates contrast and sophistication.

- **Secondary — Gray 900 (#111827)**  
  Used for subheadings and titles. Adds depth without being fully black.

- **Body Text — Gray 700 (#374151)**  
  Soft and readable for paragraphs and descriptions.

- **Light Background — White (#ffffff)**  
  Used as base background for all major sections for a clean and polished gallery look.

- **Muted Background — Neutral 50 (#FAFAF9)**  
  Used in Testimonials and feature sections to soften the visual environment.

- **Dark Footer — Stone 700 (#44403C)**  
  Creates grounding at the bottom of the website and contrasts upper sections.

- **Accent — Yellow-400 (#FACC15)**  
  Appears on hover states and subtle interactions to create warmth.

---

## Typography

### Headings
Tailwind’s default bold sans-serif with large sizes (`text-4xl` to `text-6xl`).  
Chosen to reflect a gallery’s refined and confident visual identity.

### Body
Tailwind’s default sans-serif (`font-sans`).  
Optimized for readability and simplicity across devices.

---

## Design Decisions

### Layout Adherence
- Spacing based on Tailwind’s 4pt system (e.g., `px-6`, `py-20`, `gap-10`).
- Breakpoints validated manually at SM, MD, and LG sizes.
- Images structured with `object-cover` and responsive heights.
- Grids (`md:grid-cols-2`, `md:grid-cols-3`) used for perfect content flow.

### Creative Departures
- Warm, emotionally expressive gallery-focused copywriting.
- Tailored testimonials to match the art-world atmosphere.
- MD breakpoint optimized for spacing and readability rather than simple stacking.
- Overall brand tone elevated to match a luxury gallery experience.

---

## Component Architecture
MuseHall is divided into reusable components:

- `Hero.jsx` — Full-screen hero with nav, headline, CTA, and stats.
- `About.jsx` — Two-column layout describing the gallery philosophy.
- `Features.jsx` — Curated artwork grid with hover effects.
- `GallerySection.jsx` — Image + description layouts for curation.
- `Testimonial.jsx` — Quote, portrait, and side gallery image display.
- `CTA.jsx` — Newsletter subscription with overlay image.
- `Footer.jsx` — Multi-column footer with links and social icons.

This structure ensures scalability, reuse, and easy project expansion.

---

## Performance Optimizations
- Tailwind ensures minimal CSS output.
- Responsive images reduce unnecessary loading.
- No external fonts hence improved load speed.
- SVG icons from React Icons are lightweight and scalable.
- Build optimized automatically by Vite/CRA + Vercel.
- Semantic HTML improves SEO and accessibility scores.


---

## Installation & Setup

### 1. Clone Repository
```
git clone https://github.com/Its-Anita/final-project.git
