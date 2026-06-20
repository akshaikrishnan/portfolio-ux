# Portfolio UI Kit

Figma-inspired interactive portfolio UI kit — neo-brutalism visual language.

## Components

| File | Description |
|---|---|
| `Tokens.jsx` | Design tokens as JS constants |
| `FrameCard.jsx` | Brutalist card with hover / selected / handles |
| `StickyNote.jsx` | Rotated sticky notes in 4 color variants |
| `CursorLabel.jsx` | Spring-follow cursor label |
| `InspectPanel.jsx` | Figma-style right inspect panel |
| `HeroSection.jsx` | Hero with accent switcher + selection illusion |
| `ProjectsSection.jsx` | Project cards + zoom overlay (case file) |
| `SkillsSection.jsx` | Draggable skill chips with snap-back |

## Design Width
`1440px` — scales responsively with `clamp()` type.

## Key Interactions
- Click headline in Hero → selection box appears
- Accent color chips in Hero → propagates globally
- Click project card → zoom-into-frame case study overlay
- Drag skill chips → snap back on release
- Nav "Inspect ▸" → reveals right-side inspect panel
- Custom cursor with spring delay follows mouse

## Notes
- No external icon dependency
- Fonts via Google Fonts CDN (Space Grotesk + JetBrains Mono)
- All shadows: hard offset, no blur — neo-brutalist
