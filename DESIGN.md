---
name: Better Mayang Imphal (BMI)
description: Nordic Lagom Minimalist civic design system for transparent local planning and STEM advocacy
colors:
  primary: "#182230"
  primary-foreground: "#f7f6f1"
  secondary: "#264938"
  secondary-foreground: "#f7f6f1"
  background: "#f7f6f1"
  foreground: "#181c20"
  card: "#ffffff"
  card-foreground: "#181c20"
  popover: "#ffffff"
  popover-foreground: "#181c20"
  muted: "#edebe4"
  muted-foreground: "#555d67"
  accent: "#e6e3da"
  accent-foreground: "#182230"
  border: "#dedbd2"
  input: "#dedbd2"
  ring: "#264938"
  destructive: "#9e2a2b"
  nordic-stone: "#f7f6f1"
  nordic-paper: "#ffffff"
  nordic-charcoal: "#181c20"
  nordic-fjord: "#182230"
  nordic-pine: "#264938"
  nordic-amber: "#b8793b"
  nordic-sand: "#edebe4"
  brand-navy: "#101722"
typography:
  display:
    fontFamily: "var(--font-headline), Source Serif 4, Georgia, serif"
    fontSize: "3.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-headline), Source Serif 4, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "var(--font-headline), Source Serif 4, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0em"
  subtitle:
    fontFamily: "var(--font-headline), Source Serif 4, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0em"
  body:
    fontFamily: "var(--font-body), Public Sans, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  sm:
    fontFamily: "var(--font-body), Public Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "var(--font-body), Public Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
  caption:
    fontFamily: "var(--font-body), Public Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  micro:
    fontFamily: "var(--font-mono), Geist Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.02em"
  mono:
    fontFamily: "var(--font-mono), Geist Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#1e3a2c"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  badge:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.none}"
    padding: "24px"
---

# Design System

## Overview

Better Mayang Imphal (BMI) employs a **Nordic Lagom Minimalist** aesthetic rooted in architectural restraint, civic gravitas, and honest communication. Lagom—"not too little, not too much, just enough"—rejects empty tech decoration, artificial urgency, and AI visual cliches in favor of calm, high-contrast, editorial clarity.

Every layout is built on a rectilinear grid with zero rounded corners (`rounded-none`), evoking statutory municipal charters, town planning maps, and physical civic monuments.

## Colors

The palette balances warm limestone surfaces with deep fjord ink and botanical pine:

- **Nordic Stone (`#f7f6f1` / `--background`):** Light, warm paper background that prevents screen glare and evokes natural parchment.
- **Nordic Charcoal (`#181c20` / `--foreground`):** High-contrast neutral ink for effortless long-form reading.
- **Nordic Fjord (`#182230` / `--primary`):** Deep oceanic navy used for major editorial structures, deep headers, and anchors.
- **Nordic Pine (`#264938` / `--secondary`):** Rich evergreen accent representing civic growth, environmental stewardship, and primary interactive commitments.
- **Nordic Amber (`#b8793b` / `--nordic-amber`):** Warm burnished gold for statutory alerts, application deadlines, and verified status markers.
- **Stone Border (`#dedbd2` / `--border`):** Tactile architectural dividing lines that provide structure without visual clutter.
- **Dark Mode:** Deep slate granite (`#0f141c`), night fjord card beds (`#151c26`), and soft warm white ink (`#f2f0eb`).

## Typography

Typography establishes clear civic hierarchy and editorial authority:

- **Headlines (Source Serif 4):** Editorial serif combining classical authority with modern digital proportions. Used for page titles, section headers, and statistical hero metrics.
- **Body & UI (Public Sans):** A neutral, highly legible geometric grotesk designed for public sector clarity. Ensures effortless scanning across tables, cards, and descriptions.
- **Statutory Data & Codes (Geist Mono):** Dedicated monospaced typography for coordinates, tender IDs, ward numbers, and cryptographic verification hashes.

Typographic hierarchy:
1. Display / Hero Title: 44px–52px, bold, -0.02em tracking.
2. Section Headings (H2): 28px–36px, bold, tight leading.
3. Card & Subsection Titles (H3): 18px–22px, semi-bold.
4. Body Text: 15px (0.9375rem), 1.6 line height.
5. Functional UI & Captions: 12px–13px, font-medium, always above the 11px floor.

## Layout

- **Container Scale:** Maximum content width constrained to `max-w-7xl` (1280px) for wide sections and `max-w-4xl` for editorial reading.
- **Rhythm & Spacing:** Generous whitespace between sections (`py-16` to `py-24`) paired with dense, structured groupings within data tables and cards (`gap-4` to `gap-6`).
- **Grid Alignment:** Explicit 12-column and modular asymmetrical grids that reflect municipal master planning layouts.
- **No Monotonous Spacing:** Distinct separation between structural boundaries and inline content relationships.

## Elevation & Depth

- **Tonal Layering over Shadows:** Elevation is achieved through contrasting background planes (Stone -> Card White -> Deep Fjord) rather than fuzzy drop shadows.
- **Borders as Structure:** Subtle 1px stone borders (`border-border`) anchor interactive elements and cards to the page.
- **Zero Floating Glows:** No chromatic radial halos or neon blur effects. All depth is structural and physically plausible.

## Shapes

- **Rectilinear Geometry:** Strictly `rounded-none` (`0px` border-radius) across buttons, input fields, badges, and cards.
- **Architectural Edge:** Straight lines convey stability, civic permanence, and transparency.
- **Pills Reserved for Badges:** Only micro status badges may optionally use restrained radius when distinct from structural buttons.

## Components

- **Buttons:**
  - `Primary`: Rectilinear Nordic Pine button with crisp high-contrast white typography, 2px focus ring.
  - `Secondary / Outline`: Transparent background, 1px stone border, hover fill to subtle tint.
  - `Civic Action`: High visibility, minimum 44px touch target height.
- **Cards:**
  - Solid white or stone bed with crisp 1px border.
  - No nested cards (container inside container); uses typographic dividers and spacing instead.
- **Status Badges:**
  - Two-state decoupling: *Proposed Initiative* (Amber tint) vs *Officially Sanctioned* (Pine tint).
  - Explicit metadata: tender source, verification date, jurisdiction tag.
- **Intake Forms:**
  - Uncluttered fields with visible labels, clear field descriptions, and explicit DPDP consent confirmation.

## Do's and Don'ts

### Do:
- Ground every claim with a verifiable citation or official departmental reference.
- Explicitly differentiate between community concepts and funded government works.
- Maintain high contrast ratios (WCAG AA minimum 4.5:1 for body, 3:1 for large text).
- Use Source Serif 4 for headlines and Public Sans for body copy.
- Keep interactive button and card edges rectilinear (`rounded-none`).

### Don't:
- Don't use purple-to-cyan gradients, dark glowing halos, or floating spotlights.
- Don't nest cards within cards (avoid container-in-container visual bloat).
- Don't use bouncy or rubber-band animations; use subtle ease-out deceleration.
- Don't reduce functional UI text below 11px.
- Don't hide important statutory disclaimers in tiny unreadable smallprint.
