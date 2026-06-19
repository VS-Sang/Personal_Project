---
paths:
  - "*.html"
  - "*.css"
  - "*.js"
---

# Layout and Navigation

Use a fixed-fluid hybrid layout:

- Desktop: fixed left sidebar around `w-64`.
- Desktop content: offset with `md:ml-64`.
- Main content: centered with max width around `max-w-7xl`.
- Desktop grid: 12-column grid.
- Tablet: reduce columns naturally.
- Mobile: single-column stack.
- Mobile margins: `1rem`.
- Desktop margins: `2rem`.

Navigation pattern:

- Desktop: fixed left sidebar with LedgerFlow branding, Dashboard, Transactions, Reports, Settings, Help, and Add Transaction CTA.
- Mobile: bottom navigation with main sections and a central or floating Add button.
