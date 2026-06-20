# Portfolio Design System

## Overview

This is the design system for a **Figma-inspired interactive portfolio** — a conceptual product where visitors don't browse a portfolio, they *navigate a design file*. The entire experience is built around the metaphor of a design tool (inspired by Figma), expressed through a **neo-brutalism** visual language with controlled, playful interactions.

**Tagline:** "You're not browsing a portfolio — you're navigating a design file."

### Sources
- Primary source: Design brief / concept document (no external Figma or codebase attached)
- All design decisions derived from the brief specification

---

## Experience Flow

| Section    | Metaphor                            |
|------------|-------------------------------------|
| Hero       | Enter the canvas                    |
| Experience | Navigate timeline frames            |
| Projects   | Open case files                     |
| Skills     | Browse component library            |
| Blogs      | Explore drafts & thinking workspace |
| Contact    | Send a message inside the tool      |
| Footer     | Exit the design file                |

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **First person, direct:** "I" not "we" — this is a personal portfolio, not a company
- **Playful but precise:** copy feels like a designer talking, not a marketer writing
- **Tool-speak:** intentional use of design-tool terminology ("frame", "layer", "component", "inspect", "draft")
- **No corporate jargon:** no "synergy", "leverage", "scalable solutions"
- **Short, punchy labels:** "Frame 01", "Case file →", "Currently writing…", "End of file"

### Casing
- **Section labels:** ALL CAPS or Title Case for frame labels (e.g., "FRAME 01", "Layer Properties")
- **Body text:** sentence case
- **UI labels / annotations:** lowercase mono (e.g., `frame / hero`, `layer: headline`)
- **CTA buttons:** Capitalized (e.g., "Open file", "Send message")

### Emoji Usage
- **Avoided in UI** — neo-brutalism aesthetic keeps things clean
- Emoji may appear sparingly in sticky notes for personality (🎨, ✏️) but not in navigation or headings

### Copy Examples
- Hero: "You're not browsing a portfolio — you're navigating a design file."
- Projects: "Open case file →"
- Skills: "Component library / v1.0"
- Blogs: "Currently writing…" / "Draft 03"
- Contact: "Send message" / "Message composer"
- Footer: "End of file. Close tab or start over."

### Annotation Copy
- Handwritten-style hints: "← this changes everything", "look closer →", "designed this in 2 days"
- Cursor labels: "Designer", "Client", "You", "Reader"

---

## VISUAL FOUNDATIONS

### Color System
Accent-driven; the primary accent can be switched by the user via the bottom color picker (a key interaction). The picker exposes exactly 6 options matching what's shown in the Figma screens.

**Accent Palette (in picker order)**
| Token              | Value       | Usage                                              |
|--------------------|-------------|----------------------------------------------------|
| `--accent-blue`    | `#0066FF`   | Default blue — Skills, nav CTA                     |
| `--accent-purple`  | `#7B5CF0`   | Purple — Writing section dot, "together." color    |
| `--accent-pink`    | `#FF3080`   | Hot pink — alternative accent                      |
| `--accent-orange`  | `#FF6B00`   | Orange — IN PROGRESS badge, warm accent            |
| `--accent-lime`    | `#CCFF00`   | Neon lime — hero highlight, "View my work" button, CURRENT badge, lime sticky |
| `--accent-black`   | `#0A0A0A`   | Black mode — full monochrome                       |

**Derived tokens**
| Token              | Value              | Usage                                    |
|--------------------|--------------------|------------------------------------------|
| `--accent`         | `#0066FF`          | Active accent (changes with picker)      |
| `--accent-hover`   | `#0052CC`          | Darkened accent for hover state          |
| `--accent-muted`   | `rgba(0,102,255,.12)` | Tinted background for muted states   |
| `--highlight-bg`   | `#CCFF00`          | Hero text highlight fill ("people")      |
| `--highlight-text` | `#0A0A0A`          | Text on highlight background             |

**Surfaces & Text**
| Token              | Value       | Usage                                              |
|--------------------|-------------|----------------------------------------------------|
| `--surface`        | `#FFFFFF`   | Primary surface                                    |
| `--surface-2`      | `#F5F5F0`   | Canvas / page background                           |
| `--surface-3`      | `#EBEBEB`   | Panel / sidebar backgrounds                        |
| `--text-primary`   | `#0A0A0A`   | Primary text                                       |
| `--text-secondary` | `#555555`   | Secondary / annotation text                        |
| `--text-muted`     | `#999999`   | Muted / disabled text                              |
| `--border`         | `#0A0A0A`   | Default border (hard, opaque — brutalist)          |
| `--border-light`   | `#DDDDDD`   | Subtle borders / dividers                          |

**Sticky Notes (extended palette)**
| Token                  | Value       | Notes                                      |
|------------------------|-------------|--------------------------------------------|
| `--sticky-yellow`      | `#FFE566`   | Default — hints, contact section           |
| `--sticky-lime`        | `#CCFF00`   | ★ New — Experience section, superpowers    |
| `--sticky-lavender`    | `#E8E0FF`   | ★ New — soft purple, contact section       |
| `--sticky-pink`        | `#FFB3C1`   | Writing section "more ideas"               |
| `--sticky-blue`        | `#B3D9FF`   | Annotation notes                           |

**Badge Colors**
| Token                      | Value       | Used for                                   |
|----------------------------|-------------|--------------------------------------------|
| `--badge-expert-bg`        | `#7B5CF0`   | EXPERT level — purple                      |
| `--badge-advanced-bg`      | `#0066FF`   | ADVANCED level — blue                      |
| `--badge-intermediate-bg`  | `#FF3080`   | INTERMEDIATE level — pink                  |
| `--badge-current-bg`       | `#CCFF00`   | CURRENT role — lime                        |
| `--badge-published-bg`     | `#7B5CF0`   | Blog PUBLISHED status                      |
| `--badge-draft-bg`         | `#F5F5F0`   | Blog DRAFT status — neutral                |
| `--badge-in-progress-bg`   | `#FF6B00`   | Blog IN PROGRESS status — orange           |
| `--badge-product-bg`       | `#7B5CF0`   | Project type: PRODUCT                      |
| `--badge-mobile-bg`        | `#0066FF`   | Project type: MOBILE                       |
| `--badge-web-bg`           | `#0A0A0A`   | Project type: WEB                          |
| `--badge-branding-bg`      | `#FF3080`   | Project type: BRANDING                     |

**Blog Number Chips** (colored squares on writing cards)
| Token         | Value       | Card |
|---------------|-------------|------|
| `--chip-01-bg`| `#7B5CF0`   | 01 — purple |
| `--chip-02-bg`| `#0A0A0A`   | 02 — black  |
| `--chip-03-bg`| `#FF3080`   | 03 — pink   |
| `--chip-04-bg`| `#F5F5F0`   | 04 — light  |
| `--chip-05-bg`| `#0066FF`   | 05 — blue   |

### Typography
**Primary — Geometric Sans**
- Font: Space Grotesk (Google Fonts fallback for Inter)
- Weights: 400 (regular), 500 (medium), 700 (bold)
- Used for: headings, body, UI labels

**Secondary — Monospace**
- Font: JetBrains Mono (Google Fonts)
- Weights: 400, 500
- Used for: annotations, frame labels, code, micro-UI, inspect panels

**Scale (8px base grid)**
| Token   | Size  | Weight | Line Height | Usage              |
|---------|-------|--------|-------------|--------------------|
| `--t-xs`| 11px  | 500    | 1.4         | Micro labels, rulers |
| `--t-sm`| 13px  | 400    | 1.5         | Annotations, captions |
| `--t-base`| 16px| 400    | 1.6         | Body text          |
| `--t-md`| 18px  | 500    | 1.4         | UI labels          |
| `--t-lg`| 24px  | 700    | 1.2         | Card titles        |
| `--t-xl`| 36px  | 700    | 1.1         | Section headings   |
| `--t-2xl`| 56px | 700    | 1.0         | Hero heading       |
| `--t-3xl`| 80px | 700    | 0.95        | Hero display       |

### Backgrounds
- **Canvas:** `#F5F5F0` with a visible 8px dot grid pattern (CSS `radial-gradient` dots)
- **Rulers:** 24px strips on top and left, `#EBEBEB` background with tick marks every 8/64px
- **Sections:** alternating white and `#F5F5F0`
- **No gradients** on primary surfaces (neo-brutalism)
- **Sticky notes:** flat color fills with slight rotation (–2° to +3°)

### Borders & Shadows
- **Primary border:** `2px solid #0A0A0A` — hard, opaque, brutalist
- **Selection border:** `2px solid var(--accent)` — used for hover/selected states
- **Hard shadow (neo-brutalist):** `4px 4px 0px #0A0A0A` — no blur, offset only
- **Card shadow:** `6px 6px 0px #0A0A0A`
- **Lifted shadow (hover):** `8px 8px 0px #0A0A0A`
- **Selection handles shadow:** `2px 2px 0px rgba(0,102,255,0.3)`
- **No `box-shadow` blur radius** except for the accent selection glow: `0 0 0 3px rgba(var(--accent-rgb), 0.2)`

### Corner Radii
Not purely 0px — the actual screens show a mixed system: brutalist sharp corners on frames and buttons, but rounded corners on cards, inputs and filter pills.

| Token           | Value   | Usage                                                     |
|-----------------|---------|-----------------------------------------------------------|
| `--radius-none` | `0px`   | Hero frames, buttons, nav elements, sticky notes          |
| `--radius-xs`   | `2px`   | Sticky note tape strip, tiny accent marks                 |
| `--radius-sm`   | `4px`   | Cursor labels, tooltips, badge chips, form inputs (sm)    |
| `--radius-md`   | `8px`   | Input fields, small inner cards, contact form             |
| `--radius-card` | `12px`  | ★ New — Skill cards, project cards, timeline entries      |
| `--radius-full` | `999px` | Filter pills, accent color swatches, proficiency dots     |

**Rule of thumb:** `border-radius: 0` for outer UI frames and primary CTAs; `border-radius: 12px` for content cards inside the canvas.

### Spacing System (8px grid)
`4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128px`

### Animation & Motion
- **Fast and purposeful** — no decorative animation
- **Micro:** 120–180ms — button states, hover transitions
- **Standard:** 200–300ms — panel open, selection border
- **Complex:** 300–500ms — zoom-into-frame, layout transitions
- **Primary easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` — smooth, forward-biased
- **Snappy easing:** `cubic-bezier(0.4, 0, 0.2, 1)` — material-style
- **No bounce/spring in primary UI** — only in "drag snap-back" illusion
- **Transform/opacity only** — no layout animation in production; GPU-friendly

### Hover States
- **Cards / frames:** shadow grows from `6px 6px` → `10px 10px 0px #0A0A0A`; translate `–2px, –2px`
- **Buttons:** background darkens OR accent fills; shadow offset increases
- **Selection illusion:** blue `2px` border + corner handles appear
- **Cursor changes contextually** per section

### Press / Active States
- **Buttons:** translate `2px, 2px`; shadow reduces to `2px 2px 0px #0A0A0A` (pressed effect)
- **Cards:** scale `0.98`

### Cards
- Sharp corners (`border-radius: 0`)
- `2px solid #0A0A0A` border
- `6px 6px 0px #0A0A0A` hard shadow
- White or `#F5F5F0` background
- Hover: lift effect (shadow grows, slight translate up-left)
- Frame label above card in mono font (`FRAME 01`)

### Imagery
- **Illustrations preferred over photography**
- **Black & white / duotone** if photos used
- Designer-at-desk illustration in footer (line-art style)
- No stock photography

### Use of Transparency & Blur
- **Minimal blur** — only in inspect panel (simulated `backdrop-filter: blur(8px)`)
- **Transparency** used for overlay states (case study zoom-in backdrop: `rgba(0,0,0,0.7)`)
- **No frosted glass on primary surfaces**

---

## ICONOGRAPHY

*See ICONOGRAPHY section in README below after assets are populated.*

Icons sourced from **Lucide Icons** (CDN: `https://unpkg.com/lucide@latest`) — stroke-based, 1.5px weight, consistent with the tool-UI metaphor.

Key icons used:
- `frame` / `layout` → section containers
- `layers` → nav / layer panel
- `move` → drag interaction
- `crosshair` → cursor indicator
- `inspect` → inspect panel
- `pen-tool` → hero/identity
- `grid` → canvas background toggle
- `file-text` → blog/case study
- `send` → contact / message
- `chevron-right`, `arrow-right` → navigation

No custom icon font. SVG inline or Lucide CDN sprite. No emoji as icons.

---

## File Index

```
/
├── README.md                    ← This file
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← All CSS design tokens
├── assets/
│   ├── grid-bg.svg              ← Dot grid canvas background
│   └── ruler-marks.svg          ← Ruler tick pattern
├── preview/
│   ├── colors-brand.html        ← Accent color swatches
│   ├── colors-neutral.html      ← Neutral palette
│   ├── colors-semantic.html     ← Semantic color tokens
│   ├── colors-sticky.html       ← Sticky note colors
│   ├── type-display.html        ← Display / heading type scale
│   ├── type-body.html           ← Body + UI type
│   ├── type-mono.html           ← Mono / annotation type
│   ├── spacing-tokens.html      ← Spacing scale
│   ├── spacing-shadows.html     ← Shadow system
│   ├── spacing-radii.html       ← Radius + border tokens
│   ├── comp-buttons.html        ← Button variants
│   ├── comp-frames.html         ← Frame / card component
│   ├── comp-sticky-notes.html   ← Sticky note variants
│   ├── comp-selection.html      ← Selection state system
│   ├── comp-badges.html         ← Badge / tag variants
│   ├── comp-cursor-labels.html  ← Cursor label system
│   ├── comp-panels.html         ← Inspect / side panel
│   └── motion-tokens.html       ← Motion token reference
└── ui_kits/
    └── portfolio/
        ├── README.md
        ├── index.html           ← Interactive portfolio prototype
        ├── Tokens.jsx           ← Design tokens as JS
        ├── FrameCard.jsx        ← Frame/card component
        ├── StickyNote.jsx       ← Sticky note component
        ├── SelectionBox.jsx     ← Selection overlay system
        ├── CursorLabel.jsx      ← Cursor label follower
        ├── InspectPanel.jsx     ← Right-side inspect panel
        ├── HeroSection.jsx      ← Hero section
        ├── ProjectsSection.jsx  ← Projects / case files
        └── SkillsSection.jsx    ← Skills component library
```
