# Style Guide

This defines the visual language for `moiskhan.dev`. Claude must follow these rules for all UI work.

---

## Theme

**Dark-first.** The entire site uses a dark background. There is no light mode toggle.

---

## Color Palette

Defined as CSS variables in `src/styles/globals.css`:

```css
:root {
  --bg-primary: #0a0a0a;          /* Near-black page background */
  --bg-secondary: #111111;        /* Card / section backgrounds */
  --bg-tertiary: #1a1a1a;         /* Subtle elevation */

  --text-primary: #f0f0f0;        /* Main body text */
  --text-secondary: #a0a0a0;      /* Muted / supporting text */
  --text-tertiary: #606060;       /* Placeholder, disabled */

  --accent: #e8ff47;              /* Primary accent — sharp yellow-green */
  --accent-dim: rgba(232,255,71,0.12); /* Accent tint for backgrounds */

  --border: #222222;              /* Subtle borders */
  --border-hover: #333333;        /* Border on hover */
}
```

**Rules:**
- The accent color (`--accent`) is used sparingly — active states, highlights, CTAs only
- Never use the accent for large background fills
- All text must pass WCAG AA contrast on `--bg-primary`

---

## Typography

```css
/* Display / Headings */
font-family: 'DM Serif Display', serif;

/* Body */
font-family: 'DM Sans', sans-serif;

/* Monospace / code / labels */
font-family: 'JetBrains Mono', monospace;
```

**Scale:**
| Role | Class |
|---|---|
| Hero heading | `text-5xl md:text-7xl font-serif` |
| Section heading | `text-3xl md:text-4xl font-serif` |
| Card title | `text-xl font-sans font-medium` |
| Body | `text-base font-sans` |
| Caption / label | `text-sm font-mono text-[--text-secondary]` |
| Tag / badge | `text-xs font-mono uppercase tracking-wider` |

---

## Spacing

Use Tailwind's default spacing scale. Key rules:
- Section vertical padding: `py-20 md:py-32`
- Container: `max-w-5xl mx-auto px-6`
- Card padding: `p-6`
- Stack gap (vertical lists): `gap-4` or `gap-6`
- Grid gap: `gap-6` or `gap-8`

---

## Components

### Buttons

```
Primary CTA:  bg-[--accent] text-black font-mono text-sm px-5 py-2.5 
Secondary:    border border-[--border] text-[--text-primary] px-5 py-2.5 hover:border-[--border-hover]
Ghost:        text-[--text-secondary] hover:text-[--text-primary] underline-offset-4 hover:underline
```

### Cards

```
bg-[--bg-secondary] border border-[--border] rounded-lg p-6
hover: border-[--border-hover] transition-colors duration-200
```

### Tags / Badges

```
font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded
bg-[--bg-tertiary] text-[--text-secondary]
```

---

## Animation Conventions (Framer Motion)

**Page transition (wrap each route content):**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, ease: "easeOut" }}
```

**Section reveal (use whileInView):**
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-80px" }}
transition={{ duration: 0.5, ease: "easeOut" }}
```

**Staggered children:**
```tsx
// Parent
transition={{ staggerChildren: 0.08 }}

// Child
initial={{ opacity: 0, y: 16 }}
animate={{ opacity: 1, y: 0 }}
```

**Hover states:** Use Tailwind `transition-colors duration-200` for color transitions. Use Framer only for transform-based hovers.

---

## Layout

- **No centered hero text** — left-aligned layouts feel more editorial and distinct
- **Grid for projects:** 1 col mobile, 2 col tablet, 3 col desktop
- **Section dividers:** Use generous whitespace (`py-24`), not horizontal rules
- **Navbar:** Fixed top, transparent → blur on scroll, height `h-16`

---

## Do Not

- Do not use purple, blue, or gradient hero backgrounds — overused in AI portfolios
- Do not use Inter or Roboto
- Do not center-align body text
- Do not add box shadows — use borders and background contrast instead
- Do not use more than 2 font families
