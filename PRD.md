# Tanzila Rahman — Academic Portfolio PRD

## Original problem statement
Build a modern academic portfolio website for Tanzila Rahman (Senior Research Scientist) to replace her outdated Google Sites page. Static React SPA, content stored in plain JS data files so a developer can edit without touching UI. Deployable to GitHub Pages. Sections: Hero, About, Publications/Research, Recent News, Contact. Linear/Google Scholar aesthetic, light mode, navy/slate accents, DM Sans, sleek 1px-bordered cards.

## User personas
- Academic peers & potential collaborators looking for her research areas
- Hiring/admissions committees evaluating her record
- Students/researchers searching for specific papers

## Architecture (Dec 2025)
- Frontend only — React 19 + Tailwind 3 + framer-motion + lucide-react
- No backend / DB used. Backend service left untouched in template.
- Content lives in `/app/frontend/src/data/{profile,publications,news}.js`
- Components: Navbar (sticky + IntersectionObserver active-section + mobile menu), Hero, About, Publications (filterable), News (timeline), Footer (dark contact).
- Smooth-scroll single-page layout (GitHub-Pages friendly).

## Implemented (2025-12)
- Hero with name, title, Huawei Canada affiliation, initials avatar placeholder, Google Scholar / Email / LinkedIn CTAs
- About section with bio, research-interest tags, affiliations sidebar
- Publications: 14 papers seeded from her Google Scholar; venue badge, year, authors, category chip, PDF/arXiv link buttons; 6 category filters
- News: 9-item vertical timeline (2025 → 2019)
- Dark Contact footer with both emails and Scholar/LinkedIn/Mail buttons + copyright + previous-site link
- Light theme, DM Sans, slate-200 1px borders, no heavy shadows
- Mobile responsive with hamburger menu
- All interactive elements have `data-testid`
- Frontend testing: 100% pass on iteration_1

## Backlog
P0 — Awaiting user
- Real profile photo (set `profile.photo` in `/app/frontend/src/data/profile.js`)
- Hosted CV PDF URL (set `profile.links.cv`)

P1
- Add remaining Scholar publications (currently 14 / ~20+)
- Add GitHub / ORCID / Twitter links if user wants

P2
- Light/dark toggle
- "Talks & Service" section
- Tag-based publication search
- OpenGraph + Twitter card meta with photo
- GitHub Actions workflow for GH Pages deploy
