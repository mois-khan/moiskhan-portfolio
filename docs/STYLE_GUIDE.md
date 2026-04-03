# Style Guide

This defines the visual language for `moiskhan.dev`. Claude must follow these rules for all UI work.

---

COLORS:
--bg-primary:    #000000          ← pure black like Raycast
--bg-secondary:  #0d0d0d          ← cards
--bg-tertiary:   #141414          ← hover states
--text-primary:  #ffffff
--text-secondary:#a0a0a0
--text-tertiary: #505050
--accent:        #e8ff47          ← keep your yellow-green, it works
--accent-glow:   rgba(232,255,71,0.15)
--border:        rgba(255,255,255,0.06)
--border-hover:  rgba(255,255,255,0.12)
--glow-purple:   rgba(139,92,246,0.15)  ← Raycast signature glow

TYPOGRAPHY:
--font-display:  'Cal Sans' or 'DM Serif Display'
--font-body:     'Inter'  ← yes I know I said avoid it, 
                            but Raycast uses it and it works 
                            at this precision level
--font-mono:     'JetBrains Mono'

EFFECTS:
- Cards: backdrop-blur-sm, border border-white/[0.06]
- Glow behind hero: radial-gradient blur blob, purple-tinted
- Gradient borders on featured cards
- Animated gradient background (subtle, slow)
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

### 2. Gradient Borders on Cards
Cards don't have plain borders — they have **gradient borders** that shift on hover. Creates depth without being loud.

### 3. Spotlight / Cursor Glow Effect
As you move your cursor across the page, a **soft light follows it** — illuminating cards slightly. This is Raycast's signature interaction.

### 4. Text Shimmer Animation
Key words in headlines have a **shimmer/gradient sweep** across them. Subtle but premium.

### 5. Staggered Entry Animations
Elements don't appear all at once — they **cascade in** with staggered delays using Framer Motion. Each section reveals as you scroll.

### 6. Hover Lift on Cards
Cards have a micro **upward shift + glow intensification** on hover. Feels physical.

### 7. Smooth Number Counters
Stats like `8.5 SGPA`, `2 Projects`, `2 Awards` count up when they enter the viewport.

### 8. Command Palette Style
The AI chat widget opens like Raycast itself — **scales up from center** with a blur backdrop.