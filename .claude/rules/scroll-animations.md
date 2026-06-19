---
paths:
  - "*.html"
  - "*.css"
  - "*.js"
---

# Scroll Animation Rules

Every major page section must animate when it scrolls into the viewport.

Apply scroll-triggered animation to:

- Page headers.
- Summary card groups.
- Bento grid sections.
- Transaction lists and transaction rows.
- Tables.
- Report and chart sections.
- Savings goal and budget sections.
- Insight and suggestion cards.
- Empty states.
- Forms and modal content where appropriate.

Animation style must remain subtle and professional:

- Prefer fade-in with slight upward movement.
- Recommended initial state: `opacity: 0`, `transform: translateY(16px)`.
- Recommended visible state: `opacity: 1`, `transform: translateY(0)`.
- Recommended duration: `400ms` to `700ms`.
- Recommended easing: `ease-out` or a smooth cubic-bezier.
- Use short staggered delays for groups of cards or list rows.
- Avoid bouncing, spinning, shaking, flashy transitions, or distracting motion.

Accessibility requirement:

- Always respect `prefers-reduced-motion`.
- If reduced motion is enabled, disable transform animations and keep content immediately visible.

Implementation preference:

- If using React, use `IntersectionObserver`, Framer Motion, or an equivalent lightweight approach.
- If using plain HTML/CSS/JS, use `IntersectionObserver` to add an `is-visible` class.
- Do not animate in a way that reduces readability of financial data.
