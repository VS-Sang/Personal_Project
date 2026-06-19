# CLAUDE.md

This file provides guidance to Claude/OpenClaude when working on this Expense Tracker project.

## Project Overview

Build a personal finance web application named **LedgerFlow** / **Expense Tracker**.

The app should help users:

- Track income and expenses.
- View total balance and monthly financial summaries.
- Manage transaction history.
- Analyze spending by category and time period.
- Track savings goals and budgets.

This is a developer-centric personal project. Prioritize clarity, maintainability, and a polished SaaS dashboard feel over decorative complexity.

## Design References

The visual design has already been provided in the `design/` directory. Treat these files as the source of truth:

- `design/Giaodich.md` — design tokens, colors, typography, spacing, brand style.
- `design/Dashboard.md` — dashboard page reference.
- `design/design.md` — transactions page reference.
- `design/Baocaochitieu.md` — reports / analytics page reference.

When implementing UI, preserve the existing visual language. Do not replace it with a different design system unless explicitly requested.

## Brand and Visual Style

The product style is:

- Minimalist-professional.
- Utilitarian, precise, and transparent.
- High-end SaaS dashboard aesthetic.
- Data-first and low-distraction.
- Clean surfaces, thin borders, clear hierarchy.
- Focused on financial clarity rather than decoration.

Avoid:

- Heavy shadows.
- Flashy gradients.
- Overly playful rounded shapes.
- Noisy decorative elements.
- Distracting animations.
- Unrelated color palettes or UI libraries.

Use whitespace, grid structure, typography, and semantic color to communicate meaning.

## Design Tokens

### Colors

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

### Typography

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

### Spacing and Radius

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

## Layout Guidelines

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

## Required Scroll Animations

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

## Core Pages

### Dashboard

Purpose: quick financial overview.

Expected elements:

- Financial summary header.
- Total balance card.
- Monthly income card.
- Monthly expenses card.
- Recent transactions list.
- Savings goal card.
- Expenses by category preview.

### Transactions

Purpose: track and manage transaction history.

Expected elements:

- Past Transactions header.
- Filter chips by category.
- Date range selector.
- Transaction list or table.
- Pagination or loading state.
- Summary stats for total income, total expenses, and net savings.
- Add Transaction action.

Transaction display rules:

- Income amounts use green and a `+` sign.
- Expense amounts use red and a `-` sign.
- Each transaction should show icon/category, description or note, date, amount, and actions where appropriate.

### Reports / Analytics

Purpose: understand spending behavior.

Expected elements:

- Financial analytics header.
- Date range selector.
- Net savings card.
- Top expense category card.
- Income vs expenses chart.
- Spending by category chart.
- Insights and suggestions.
- Detailed comparison table on desktop.

## Component Guidelines

### Cards

- Use `surface-container-lowest` or white backgrounds.
- Use `1px` low-contrast borders with `outline-variant`.
- Prefer tonal layering over heavy shadows.
- Use subtle hover states only when interactive.

### Buttons

- Primary action: solid `primary` background with `on-primary` text.
- Secondary action: neutral, ghost, or outline style.
- Keep text centered and semi-bold.
- Use subtle active states such as slight scale or opacity change.

### Inputs

- Use white or lowest-surface background.
- Use 1px slate / outline border.
- On focus, use primary blue border and a subtle outer focus ring.
- Validate user-entered financial values carefully.

### Chips

- Use low-saturation backgrounds with high-contrast semantic text.
- Category chips should be pill-shaped.
- Active chip uses primary background and on-primary text.

### Tables and Lists

- Keep rows readable and information-dense.
- Use thin separators.
- On desktop, tables may use multiple columns.
- On mobile, transform tables into stacked cards or compact list items.

### Charts

- Keep charts simple and legible.
- Use semantic colors consistently.
- Add labels and legends when needed.
- Do not sacrifice clarity for visual effects.

## Data and Domain Rules

Use clear domain naming:

- Transaction
- Category
- Income
- Expense
- Balance
- Budget
- Savings Goal
- Report

Financial handling:

- Store monetary values as numbers or decimal-safe values, not formatted strings.
- Format currency only at display boundaries.
- Preserve signs consistently: income positive, expense negative or explicitly typed.
- Validate required fields before saving transactions.
- Avoid mixing UI labels with business logic.

Suggested transaction fields:

```txt
id
type: income | expense
amount
category
description
note
date
createdAt
updatedAt
```

## Engineering Preferences

- Prefer simple, maintainable code over premature abstraction.
- Reuse components for repeated patterns: sidebar, bottom nav, cards, transaction rows, chips, buttons, inputs.
- Do not introduce large dependencies unless clearly useful.
- Keep UI components accessible: semantic HTML, labels for inputs, keyboard-focusable controls, visible focus states.
- Keep responsive behavior intentional; test desktop and mobile layouts.
- Avoid hardcoding sample data deep inside components if the project has a data layer or state store.
- Keep changes scoped to the user's request.

## Accessibility

- Use sufficient contrast for text and important state indicators.
- Do not rely on color alone for income or expense meaning; include signs, labels, or icons.
- Buttons and links must have accessible names.
- Form inputs must have labels.
- Interactive controls must show visible focus states.
- Respect `prefers-reduced-motion` for all animations.

## Implementation Notes for Claude/OpenClaude

Before making changes:

1. Read the relevant files first.
2. Check the current project structure and framework before assuming React, Vue, Next.js, or another stack.
3. Follow the existing architecture once the app scaffold exists.
4. If adding a UI feature, compare it against the design references in `design/`.
5. Keep changes scoped to the user's request.

When creating or editing UI:

- Preserve the LedgerFlow visual identity.
- Prefer Tailwind-style semantic utility names if Tailwind is used.
- Use the provided token names where possible.
- Add scroll-triggered animation to every major section.
- Do not replace the design system with unrelated colors or component libraries.
- Keep copy concise and finance-focused.

When reporting completion:

- Mention the files changed.
- Mention any tests or checks run.
- If no test setup exists yet, state that plainly.
