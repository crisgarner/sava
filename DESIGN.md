---
name: Savá Rentals
description: Alquiler de vajilla, cristalería y mantelería en Tegucigalpa
colors:
  sand-warm: "#F7EDE4"
  ivory-parchment: "#FAF5EE"
  aged-gold: "#886214"
  sage-deep: "#3A5245"
  warm-stone: "#6B6764"
  sage-muted: "#8A9E96"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.75rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  sm: "2px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.aged-gold}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.sage-deep}"
    textColor: "#ffffff"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.sage-deep}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-ghost-dark-hover:
    backgroundColor: "{colors.sage-deep}"
    textColor: "#ffffff"
  button-ghost-gold:
    backgroundColor: "transparent"
    textColor: "{colors.aged-gold}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-ghost-gold-hover:
    backgroundColor: "{colors.aged-gold}"
    textColor: "#ffffff"
  catalogue-card:
    backgroundColor: "{colors.ivory-parchment}"
    rounded: "{rounded.sm}"
    padding: "0"
  package-card-highlighted:
    backgroundColor: "{colors.ivory-parchment}"
    rounded: "{rounded.sm}"
    padding: "32px"
---

# Design System: Savá Rentals

## 1. Overview

**Creative North Star: "Elegancia a tu alcance"**

Savá Rentals exists to make elegant events accessible in Tegucigalpa. The design system reflects this precisely: it signals quality without the coldness of high-end luxury, warmth without the clutter of generic small-business websites. The surface should feel like a private estate's linen room — deep sage walls, warm parchment, aged gold hardware, unhurried and precise.

The palette is built on cream and deep sage green, with aged gold as its single accent voice. This is an old money palette: nothing shouts, nothing sparkles. The sage recedes; the gold appears exactly where action is required. Typographic contrast between Cormorant Garamond's editorial authority and Inter's quiet utility creates the tension that makes the brand legible: aspirational at the headline, practical at the detail. Every screen is flat by default. Shadows appear only as a whisper of hover feedback. Nothing decorates; everything serves.

This system explicitly rejects: generic Spanish-language SMB web templates, cheap marketplace grid aesthetics, loud or garish color use, neon in any form, and any decorative complexity that reads as unsophisticated.

**Key Characteristics:**
- Committed color strategy: deep sage green carries 30–50% of every screen surface
- A single gold accent voice used at ≤15% of any given screen
- Cormorant Garamond carrying all emotional weight at display sizes
- WhatsApp-first: every primary CTA resolves to a direct phone conversation
- Mobile-first layouts tuned to 375px, 768px, and 1280px

## 2. Colors: The Old Money Palette

A warm-neutrals foundation anchored in deep sage, with one aged gold accent. The palette reads like natural materials from another era: parchment, sage linen, tarnished gold, weathered stone.

### Primary
- **Aged Gold** (`#886214`): The one accent. CTAs, price displays, hover states, the "Más popular" badge fill, selection highlights. Used on ≤15% of any screen surface. Its presence signals action; its scarcity gives it weight.

### Foundation
- **Sage Deep** (`#3A5245`): All headings, body copy, and UI text. A muted, gray-leaning sage green — rich without being saturated. Never pure black. This color also carries large surface areas (section backgrounds, dividers, footer) as the committed anchor hue.
- **Sand Warm** (`#F7EDE4`): Page canvas. The default surface — warm parchment, not white, not beige. Appears everywhere behind content.
- **Ivory Parchment** (`#FAF5EE`): Card surfaces and highlighted containers. A deliberate step lighter than Sand Warm — creates card structure through background contrast, not shadow.
- **Warm Stone** (`#6B6764`): Secondary copy, meta text, descriptions, price units, placeholder fallbacks.
- **Sage Muted** (`#8A9E96`): Supporting tint for subtle surface treatments. Not a second accent; not used on interactive elements.

### Named Rules
**The One Voice Rule.** Aged Gold is the only colored accent in this system. It lives on CTAs, prices, hover states, and badges. It does not live anywhere else. No neon colors. No second accent.

**The No-White Rule.** Pure white (`#ffffff`) is banned as a page background. Sand Warm is the floor. Package cards in the default (non-highlighted) state may use white as an isolated surface, but it is the exception, not the default.

**The Sage Commits Rule.** Sage Deep is not just a text color — it carries large sections of the surface. Footer, hero overlays, feature bands: sage should occupy meaningful real estate. A page where sage only appears in type has not used this palette correctly.

## 3. Typography

**Display Font:** Cormorant Garamond (Georgia, serif fallback)
**Body Font:** Inter (system-ui, sans-serif fallback)

**Character:** The pairing works because the contrast is controlled. Cormorant carries aspiration and craft at large sizes; Inter carries trust and clarity at reading sizes. Neither competes. The serif leads every screen; the sans carries every task.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 6vw, 4.5rem)`, line-height 1.05, tracking 0.02em): Hero headlines, major section anchors. Always Cormorant.
- **Headline** (500, `clamp(1.75rem, 4vw, 3rem)`, line-height 1.1, tracking 0.01em): Package names, section titles, page headings. Always Cormorant.
- **Title** (600, `1.5rem`, line-height 1.2): Card headings, item names, sub-section labels. Always Cormorant.
- **Body** (400, `1rem`, line-height 1.65): Running copy, descriptions, meta. Always Inter. Max line length 70ch.
- **Label** (500, `0.75rem`, line-height 1, tracking 0.08em, uppercase): Category tabs, badge text, navigation links. Always Inter.

### Named Rules
**The Serif Leads Rule.** Every page has at least one Cormorant display or headline element. A screen that uses only Inter has lost the brand identity.

**The Cap Track Rule.** Uppercase letter-spacing (≥ 0.06em) belongs only on Labels. Never on body copy, never on Cormorant headings. Cormorant at large sizes never needs tracking.

## 4. Elevation

This system is flat by default. No decorative shadows, no layered floating surfaces. Depth is expressed through background-color steps (Sand Warm beneath, Ivory Parchment on top) and low-opacity border treatments. Not shadow.

Shadows appear in exactly two contexts: card hover feedback, and the persistent floating WhatsApp button. That is the complete shadow vocabulary.

### Shadow Vocabulary
- **Card hover** (`0 4px 12px rgba(58, 82, 69, 0.08)`): Applied on card `:hover` only. Signals interactivity; invisible at rest.
- **Floating element** (`0 4px 24px rgba(58, 82, 69, 0.16)`): WhatsApp button exclusively. Permanent — this element needs spatial separation from page content at all times.

### Named Rules
**The Flat-at-Rest Rule.** Every surface renders flat at rest. If a surface needs to feel elevated without user interaction, use a border or a background step, not a shadow. Shadow is a state signal, not a style choice.

## 5. Components

Components are refined and restrained: near-flat corners (2px radius), no decorative detail, clear hover feedback without animation theater.

### Buttons
- **Shape:** Nearly square corners (2px, `rounded-sm`). Not pill-shaped, not sharp — a quiet modern edge.
- **Primary (filled gold):** `background: #886214; color: #fff; padding: 12px 20px`. Hover: transitions to `background: #3A5245`. The only filled-background button in the system.
- **Ghost Dark:** `border: 1px solid #3A5245; color: #3A5245; background: transparent`. Hover: fills `#3A5245` with white text. Used for secondary actions alongside a primary ("Ver detalle").
- **Ghost Gold:** `border: 1px solid #886214; color: #886214; background: transparent`. Hover: fills `#886214` with white text. Used for "Consultar" CTAs on catalogue items.
- **Transitions:** 150ms `transition-colors`. No transforms, no lifts. Color feedback only.

### Cards
- **Catalogue Card:** `border: 1px solid rgba(196, 154, 34, 0.15); background: #FAF5EE; border-radius: 2px; box-shadow: 0 1px 3px rgba(58,82,69,0.06)`. Hover: shadow deepens. Image area is a 1:1 aspect-ratio square with `object-cover`; image scales to 105% on hover over 500ms. Missing images render as a Sand Warm fill with the item name centered in Cormorant.
- **Package Card:** `border: 1px solid rgba(196,154,34,0.20); background: #ffffff; border-radius: 2px; padding: 32px`. Highlighted variant: `border-color: #886214; background: #FAF5EE`. The "Más popular" badge is `background: #886214; border-radius: 9999px; padding: 4px 16px; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: #fff`, positioned at `top: -12px`, horizontally centered.
- **No nested cards.** A card inside a card is always wrong.

### Category Tabs
- Horizontally scrollable on mobile, no scrollbar visible.
- **Active:** `background: #886214; color: #ffffff; border-radius: 9999px; padding: 6px 18px`.
- **Inactive:** `border: 1px solid rgba(196,154,34,0.30); color: #6B6764; background: transparent; border-radius: 9999px`. Hover: border becomes full-opacity gold, text becomes Sage Deep.
- Label style: Inter, 0.75rem, 500 weight, uppercase, 0.08em tracking.

### Navigation
- **At top:** Transparent background. Links are `color: #3A5245; font-size: 0.875rem; letter-spacing: 0.05em`. Hover: `color: #886214`.
- **On scroll:** `background: rgba(247,237,228,0.80); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(196,154,34,0.10)`. Transition: 300ms.
- **Mobile drawer:** Full-width below nav, `background: #F7EDE4; border-top: 1px solid rgba(196,154,34,0.10)`. Links at 1rem, 48px tap height.
- No underlines. No active-state borders. Hover color is the only state signal.

### WhatsApp Button
- Fixed bottom-right, `border-radius: 9999px; background: #25D366; padding: 16px`. Permanent shadow (see Elevation).
- Ping animation on a duplicate background element: `opacity: 0.40; animation: ping 2.5s cubic-bezier(0.4,0,0.6,1) infinite`.
- On hover: max-width transition reveals "¡Cotiza ahora!" label. 300ms transition.
- This is the only element in the system with an ambient animation running without user trigger. It is justified by the WhatsApp-first principle.

## 6. Do's and Don'ts

### Do:
- **Do** use Aged Gold (#886214) exclusively for CTAs, prices, active states, and badge fills. One color voice.
- **Do** use Cormorant Garamond for every headline, section title, and price display. Serif presence on every screen.
- **Do** let Sage Deep (#3A5245) carry large sections of the surface — footer, bands, hero overlays. It is an anchor, not just a text color.
- **Do** keep all surfaces flat at rest. Shadow is a hover-state signal only.
- **Do** write all user-facing copy in Spanish. Formal yet warm and direct — never bureaucratic, never stiff.
- **Do** size all interactive tap targets to ≥ 44px height on mobile. WhatsApp CTAs must be thumb-reachable.
- **Do** use Sand Warm (#F7EDE4) for page canvas and Ivory Parchment (#FAF5EE) for card surfaces. The two-tone warmth creates structure without dividers or shadows.
- **Do** end every user flow in a WhatsApp link. That is the conversion.

### Don't:
- **Don't** use pure white (#ffffff) as a page background. It breaks the warm-neutrals palette.
- **Don't** use neon colors anywhere. This palette is sober by design.
- **Don't** introduce a second accent color. Sage Muted (#8A9E96) is a tint, not an accent. Aged Gold is the only colored voice in this system.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on cards, list items, or callouts. Use a background tint or full border instead.
- **Don't** use gradient text (`background-clip: text` with a gradient fill). Emphasis is weight and size — always a single solid color.
- **Don't** apply uppercase letter-spacing to headings or body copy. It belongs only on Labels (category tabs, badges, nav links).
- **Don't** use glassmorphism decoratively. The nav's backdrop-blur is functional (scroll state only). Do not generalize it to cards, drawers, or any other surface.
- **Don't** reach for modals. Catalogue filtering uses URL search params; contact is a direct WhatsApp link. Inline and progressive disclosure first.
- **Don't** let this look like a generic Spanish-language SMB template. If it could belong to any rental service in any Latin American city without changing a word or a color, it is not specific enough.
