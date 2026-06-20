---
name: portfolio-design
description: Use this skill to generate well-branded interfaces and assets for a Figma-inspired neo-brutalist interactive portfolio. Contains essential design guidelines, colors, type, fonts, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick Reference

**Core metaphor:** Figma design tool UI — frames, layers, inspect panel, selection boxes  
**Visual language:** Neo-brutalism — hard shadows (no blur), bold type, 0px border radius, 2px solid borders  
**Accent:** User-switchable. Default `#0066FF`. Alts: `#FF3B00`, `#00CC66`, `#9933FF`, `#FF9900`  
**Type:** Space Grotesk (sans) + JetBrains Mono (annotations/labels)  
**Canvas bg:** `#F5F5F0` + 24px dot grid (`radial-gradient`)  
**Shadows:** `N×N 0px #0A0A0A` — xs=2, sm=4, md=6, lg=8, xl=12  
**Motion:** 150ms micro, 250ms standard, 400ms complex — `cubic-bezier(0.2,0.8,0.2,1)`  

**Key UI elements available in ui_kits/portfolio/:**
- FrameCard — brutalist card with selection handles
- StickyNote — rotated personality notes  
- CursorLabel — spring-follow custom cursor tag
- InspectPanel — Figma-style right panel
- HeroSection — full hero with accent switcher
- ProjectsSection — zoom-into-frame project cards
- SkillsSection — draggable snap-back skill chips
