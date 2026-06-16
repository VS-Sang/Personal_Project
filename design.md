\---  
name: Modern Ledger  
colors:  
  surface: '\#f8f9ff'  
  surface-dim: '\#cbdbf5'  
  surface-bright: '\#f8f9ff'  
  surface-container-lowest: '\#ffffff'  
  surface-container-low: '\#eff4ff'  
  surface-container: '\#e5eeff'  
  surface-container-high: '\#dce9ff'  
  surface-container-highest: '\#d3e4fe'  
  on-surface: '\#0b1c30'  
  on-surface-variant: '\#434655'  
  inverse-surface: '\#213145'  
  inverse-on-surface: '\#eaf1ff'  
  outline: '\#737686'  
  outline-variant: '\#c3c6d7'  
  surface-tint: '\#0053db'  
  primary: '\#004ac6'  
  on-primary: '\#ffffff'  
  primary-container: '\#2563eb'  
  on-primary-container: '\#eeefff'  
  inverse-primary: '\#b4c5ff'  
  secondary: '\#006c49'  
  on-secondary: '\#ffffff'  
  secondary-container: '\#6cf8bb'  
  on-secondary-container: '\#00714d'  
  tertiary: '\#ab0b1c'  
  on-tertiary: '\#ffffff'  
  tertiary-container: '\#cf2c30'  
  on-tertiary-container: '\#ffecea'  
  error: '\#ba1a1a'  
  on-error: '\#ffffff'  
  error-container: '\#ffdad6'  
  on-error-container: '\#93000a'  
  primary-fixed: '\#dbe1ff'  
  primary-fixed-dim: '\#b4c5ff'  
  on-primary-fixed: '\#00174b'  
  on-primary-fixed-variant: '\#003ea8'  
  secondary-fixed: '\#6ffbbe'  
  secondary-fixed-dim: '\#4edea3'  
  on-secondary-fixed: '\#002113'  
  on-secondary-fixed-variant: '\#005236'  
  tertiary-fixed: '\#ffdad7'  
  tertiary-fixed-dim: '\#ffb3ad'  
  on-tertiary-fixed: '\#410004'  
  on-tertiary-fixed-variant: '\#930013'  
  background: '\#f8f9ff'  
  on-background: '\#0b1c30'  
  surface-variant: '\#d3e4fe'  
typography:  
  display-lg:  
    fontFamily: Inter  
    fontSize: 36px  
    fontWeight: '700'  
    lineHeight: 44px  
    letterSpacing: \-0.02em  
  headline-lg:  
    fontFamily: Inter  
    fontSize: 24px  
    fontWeight: '600'  
    lineHeight: 32px  
    letterSpacing: \-0.01em  
  headline-md:  
    fontFamily: Inter  
    fontSize: 20px  
    fontWeight: '600'  
    lineHeight: 28px  
  body-lg:  
    fontFamily: Inter  
    fontSize: 16px  
    fontWeight: '400'  
    lineHeight: 24px  
  body-md:  
    fontFamily: Inter  
    fontSize: 14px  
    fontWeight: '400'  
    lineHeight: 20px  
  label-md:  
    fontFamily: Inter  
    fontSize: 12px  
    fontWeight: '500'  
    lineHeight: 16px  
    letterSpacing: 0.05em  
  mono-md:  
    fontFamily: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas  
    fontSize: 14px  
    fontWeight: '400'  
    lineHeight: 20px  
  headline-lg-mobile:  
    fontFamily: Inter  
    fontSize: 20px  
    fontWeight: '600'  
    lineHeight: 28px  
rounded:  
  sm: 0.125rem  
  DEFAULT: 0.25rem  
  md: 0.375rem  
  lg: 0.5rem  
  xl: 0.75rem  
  full: 9999px  
spacing:  
  base: 4px  
  xs: 0.25rem  
  sm: 0.5rem  
  md: 1rem  
  lg: 1.5rem  
  xl: 2rem  
  2xl: 3rem  
  gutter: 1rem  
  margin-mobile: 1rem  
  margin-desktop: 2rem  
\---

\#\# Brand & Style

The brand personality is \*\*utilitarian, precise, and transparent\*\*. Designed specifically for a developer-centric personal project, the design system prioritizes data clarity over decorative elements. The target audience is a technically-minded individual who values efficiency and structural integrity in their financial tools.

The design style is \*\*Minimalist-Professional\*\*. It leverages ample whitespace and a systematic grid to reduce cognitive load. The aesthetic avoids unnecessary shadows or gradients, relying instead on high-quality typography and a clear color hierarchy to communicate state and action. It feels like a high-end SaaS dashboard: reliable, straightforward, and focused on the "signal" within the "noise" of financial data.

\#\# Colors

The palette is rooted in financial industry standards to ensure immediate semantic recognition. 

\- \*\*Primary (Trustworthy Blue):\*\* Used for primary actions, navigational cues, and branding elements. It signals security and stability.  
\- \*\*Success (Green):\*\* Specifically reserved for income entries, positive balances, and "completion" states.  
\- \*\*Error (Red):\*\* Used for expenses, negative balances, and critical alerts.  
\- \*\*Neutral (Slate):\*\* A range of grays used for secondary text, borders, and UI scaffolding to prevent the interface from feeling overwhelmed by color.

The background uses a subtle cool-gray tint to reduce glare and differentiate the main canvas from white surface containers.

\#\# Typography

This design system utilizes \*\*Inter\*\* for its exceptional legibility and systematic feel. The scale is built on a tight ratio to maintain a professional, information-dense environment.

\- \*\*Headlines:\*\* Use tighter letter spacing and heavier weights to create a strong visual anchor for data sections.  
\- \*\*Body Text:\*\* Standard weight (400) for high readability in transaction lists.  
\- \*\*Labels:\*\* Uppercase styles with slight tracking are used for table headers and metadata to differentiate them from interactive text.  
\- \*\*Monospace:\*\* For transaction IDs or raw currency amounts where character alignment is beneficial for visual scanning.

\#\# Layout & Spacing

The layout follows a \*\*Fixed-Fluid Hybrid\*\* model. Content is centered within a max-width container (1280px) on desktop to prevent eye strain, while expanding to full width on mobile devices.

\- \*\*Grid:\*\* A 12-column grid for desktop, a 6-column grid for tablet, and a single-column stack for mobile.  
\- \*\*Rhythm:\*\* An 8pt spatial system is used for all padding and margins.   
\- \*\*Mobile Adaptivity:\*\* On small screens, margins shrink to 16px, and horizontal lists (like category chips) transition to a scrollable row. Cards should be full-width on mobile to maximize horizontal space for transaction details.

\#\# Elevation & Depth

To maintain a minimalist and professional look, the design system avoids heavy shadows. Depth is communicated through \*\*Tonal Layering\*\* and \*\*Low-Contrast Outlines\*\*.

\- \*\*Level 0 (Background):\*\* The base layer (\#f8fafc).  
\- \*\*Level 1 (Surface):\*\* White cards (\#ffffff) with a 1px border (\#e2e8f0). No shadow. This is used for transaction lists and primary content blocks.  
\- \*\*Level 2 (Interactive):\*\* Elements like modals or dropdowns use a very soft, diffused shadow (10% opacity, 12px blur) to appear "lifted" above the main surface.  
\- \*\*Separators:\*\* Use thin 1px lines (\#f1f5f9) rather than shadows to divide list items, maintaining a crisp, "flat" appearance.

\#\# Shapes

The shape language is \*\*Soft and Precise\*\*. A 0.25rem (4px) base radius is applied to standard components, giving them a modern feel without becoming too playful or "bubbly."

\- \*\*Small Components (Buttons, Inputs):\*\* 0.25rem (4px).  
\- \*\*Large Components (Cards, Modals):\*\* 0.5rem (8px).  
\- \*\*Contextual Shapes:\*\* Transaction category chips use a fully rounded "pill" shape (100px) to distinguish them from interactive buttons.

\#\# Components

\- \*\*Buttons:\*\* Solid primary color for main actions (e.g., "Add Transaction"). Ghost buttons (outline only) for secondary actions. Text is always centered and semi-bold.  
\- \*\*Input Fields:\*\* Clean white backgrounds with a 1px slate border. On focus, the border transitions to the primary blue with a subtle 2px outer glow.  
\- \*\*Transaction Cards:\*\* A horizontal layout with the icon/category on the left, the description/date in the center, and the amount on the right. Positive amounts use Success Green; negative amounts use Error Red.  
\- \*\*Chips:\*\* Small, low-saturation background versions of the primary/secondary colors with high-contrast text for categories (e.g., a light green background with dark green text for "Salary").  
\- \*\*Progress Bars:\*\* Used for budget tracking. The track is light gray, while the fill uses Primary Blue (or Error Red if the budget is exceeded).  
\- \*\*Empty States:\*\* Simple line-art icons with a clear call-to-action button to help the user start their tracking journey.  
