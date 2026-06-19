---
paths:
  - "*.html"
  - "*.css"
  - "*.js"
  - "design/**/*.md"
---

# Design Tokens

## Colors

Use these semantic colors consistently:

```txt
background: #f8f9ff
surface: #f8f9ff
surface-container-lowest: #ffffff
surface-container-low: #eff4ff
surface-container: #e5eeff
surface-container-high: #dce9ff
surface-container-highest: #d3e4fe
surface-dim: #cbdbf5
surface-bright: #f8f9ff
surface-variant: #d3e4fe

on-background: #0b1c30
on-surface: #0b1c30
on-surface-variant: #434655
outline: #737686
outline-variant: #c3c6d7

primary: #004ac6
primary-container: #2563eb
on-primary: #ffffff
on-primary-container: #eeefff
primary-fixed: #dbe1ff
primary-fixed-dim: #b4c5ff
on-primary-fixed: #00174b
on-primary-fixed-variant: #003ea8

secondary: #006c49
secondary-container: #6cf8bb
on-secondary: #ffffff
on-secondary-container: #00714d
secondary-fixed: #6ffbbe
secondary-fixed-dim: #4edea3
on-secondary-fixed: #002113
on-secondary-fixed-variant: #005236

tertiary: #ab0b1c
tertiary-container: #cf2c30
tertiary-fixed: #ffdad7
tertiary-fixed-dim: #ffb3ad
on-tertiary: #ffffff
on-tertiary-container: #ffecea
on-tertiary-fixed: #410004
on-tertiary-fixed-variant: #930013

error: #ba1a1a
error-container: #ffdad6
on-error: #ffffff
on-error-container: #93000a
```

Semantic usage:

- **Primary blue**: branding, active navigation, main actions, chart income bars, important CTAs.
- **Secondary green**: income, positive balances, savings, success states.
- **Error red**: expenses, negative balances, critical alerts, exceeded budgets.
- **Neutral slate**: secondary text, borders, metadata, table scaffolding.

## Typography

Use **Inter** as the main font.

Recommended scale:

```txt
display-lg: 36px / 44px, weight 700, letter-spacing -0.02em
headline-lg: 24px / 32px, weight 600, letter-spacing -0.01em
headline-md: 20px / 28px, weight 600
headline-lg-mobile: 20px / 28px, weight 600
body-lg: 16px / 24px, weight 400
body-md: 14px / 20px, weight 400
label-md: 12px / 16px, weight 500, letter-spacing 0.05em
mono-md: 14px / 20px, monospace
```

Guidelines:

- Use headlines for page titles, section anchors, and important dashboard numbers.
- Use body text for transaction descriptions and readable content.
- Use label text for metadata, table headers, chips, compact navigation labels, and small supporting text.
- Use monospace only where alignment is useful, such as transaction IDs or raw values.

## Spacing and Radius

Use an 8pt-style spacing rhythm:

```txt
xs: 0.25rem
sm: 0.5rem
md: 1rem
lg: 1.5rem
xl: 2rem
2xl: 3rem
gutter: 1rem
margin-mobile: 1rem
margin-desktop: 2rem
```

Radius guidance:

- Small components: `0.25rem`.
- Cards and large containers: `0.5rem` to `0.75rem`.
- Category chips: fully rounded pills.
- Avoid extremely rounded, playful shapes unless matching the existing mobile FAB or bottom navigation pattern.
