# Hero Section — Build Complete ✓

## Component: `src/components/sections/Hero.tsx`

### 🎨 Design Specifications

**Layout:**
- ✅ **Full viewport height** — `min-h-screen` with centered content
- ✅ **Left-aligned** — No centered text (editorial style)
- ✅ **Top padding** — `pt-16` accounts for fixed navbar
- ✅ **Container** — `max-w-5xl mx-auto px-6` (consistent with site)

**Typography (Style Guide Compliant):**
- ✅ **Name** — `text-5xl md:text-7xl font-serif` (DM Serif Display)
- ✅ **Tagline** — `text-xl md:text-2xl` with `text-[--text-secondary]`
- ✅ **Spacing** — `mb-6` after name, `mb-8` after tagline
- ✅ **Max width** — Tagline constrained to `max-w-3xl` for readability

**Colors:**
- ✅ Name: `--text-primary` (#f0f0f0)
- ✅ Tagline: `--text-secondary` (#a0a0a0)
- ✅ Primary CTA: `--accent` background (#e8ff47) with black text
- ✅ Secondary CTA: Border `--border` with hover `--border-hover`

---

## Content Integration

### Data Source: `src/data/personal.ts`

```typescript
personal.name           // "Md. Mois Khan"
personal.tagline        // "I build things for the web — and make them smarter with AI."
personal.email          // "contact@moiskhan.dev"
personal.availableForWork  // true
```

All content dynamically loaded — no hardcoded text.

---

## CTA Buttons

### Two Actions:

**1. View Projects (Primary)**
```tsx
<Link to="/projects">
  <Button variant="primary">View Projects</Button>
</Link>
```
- Routes to `/projects` page
- Primary accent button (bright yellow-green background)
- TanStack Router navigation

**2. Contact (Secondary)**
```tsx
<a href={`mailto:${personal.email}`}>
  <Button variant="secondary">Contact</Button>
</a>
```
- Opens email client to `contact@moiskhan.dev`
- Border button with hover effect
- Native `mailto:` link

**Button Styles (from Style Guide):**
```
Primary:   bg-[--accent] text-black font-mono text-sm px-5 py-2.5
Secondary: border border-[--border] text-[--text-primary] px-5 py-2.5 hover:border-[--border-hover]
```

Both use `font-mono` (JetBrains Mono) as specified.

---

## Framer Motion Animations

### Main Content Animation

**Style Guide Spec:**
```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: "easeOut" }}
```

**Applied to:**
- Entire hero content wraps in `<motion.div>`
- Fade in from below (y: 30 → 0)
- 500ms duration with ease-out curve

### "Open to Work" Badge

**Delayed entrance:**
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.3, duration: 0.4 }}
```

**Visual indicator:**
- Pulsing green dot: `bg-[--accent] rounded-full animate-pulse`
- Text: `font-mono text-sm text-[--text-secondary]`
- Only shows if `personal.availableForWork === true`

---

## Responsive Behavior

### Breakpoints

**Mobile (< md):**
- Name: `text-5xl`
- Tagline: `text-xl`
- Buttons: Stack with `flex-wrap gap-4`

**Desktop (>= md):**
- Name: `text-7xl`
- Tagline: `text-2xl`
- Buttons: Inline horizontal

Both sizes maintain left alignment.

---

## Key Implementation Details

### 1. Conditional "Open to Work" Badge
```typescript
{personal.availableForWork && (
  <motion.div>
    <span className="inline-flex items-center gap-2">
      <span className="w-2 h-2 bg-[--accent] rounded-full animate-pulse" />
      Open to work
    </span>
  </motion.div>
)}
```
- Only renders if `availableForWork: true`
- Animated pulse effect on indicator dot
- Delayed fade-in (300ms after main content)

### 2. Button Wrapper Links
```typescript
<Link to="/projects">
  <Button variant="primary">View Projects</Button>
</Link>
```
- TanStack Router `<Link>` wraps button for internal navigation
- Native `<a>` for email (external action)

### 3. Tagline Width Constraint
```typescript
<p className="...max-w-3xl">
```
- Prevents tagline from spanning full width
- Improves readability on large screens
- Still responsive on mobile

---

## Style Guide Compliance Checklist

### Typography
- ✅ Hero heading: `text-5xl md:text-7xl font-serif`
- ✅ Tagline: `text-xl md:text-2xl` with secondary color
- ✅ Buttons: `font-mono text-sm`
- ✅ Badge: `font-mono text-sm`

### Colors
- ✅ Primary text: `--text-primary`
- ✅ Secondary text: `--text-secondary`
- ✅ Accent: `--accent` (#e8ff47)
- ✅ Borders: `--border` and `--border-hover`

### Layout
- ✅ Left-aligned (not centered)
- ✅ Container: `max-w-5xl mx-auto`
- ✅ Vertical spacing: `mb-6`, `mb-8`, `mt-8`
- ✅ Responsive padding: `px-6`

### Animation
- ✅ Entrance: `opacity: 0 → 1, y: 30 → 0`
- ✅ Duration: `0.5s` with `ease-out`
- ✅ Delayed badge: `delay: 0.3s`
- ✅ Tailwind transitions: `transition-colors duration-200` on buttons

---

## Data Flow Diagram

```
src/data/personal.ts
    ↓
{
  name: "Md. Mois Khan"
  tagline: "I build things..."
  email: "contact@moiskhan.dev"
  availableForWork: true
}
    ↓
src/components/sections/Hero.tsx
    ↓
┌──────────────────────────────┐
│ [Name - 7xl serif]           │
│ [Tagline - 2xl secondary]    │
│ [View Projects] [Contact]    │
│ ● Open to work               │
└──────────────────────────────┘
```

---

## Testing

✅ **Dev server verified:** Compiles successfully on `http://localhost:5174/`
✅ **Animations working:** Framer Motion fade-in confirmed
✅ **Buttons functional:** Links route correctly
✅ **Data integration:** Reads from `personal.ts`
✅ **Responsive:** Scales properly on mobile and desktop
✅ **Type safety:** All TypeScript types correct

---

## Next Steps

Hero section is complete! Next components:
1. ✅ Hero (Done)
2. About — Bio paragraph from `personal.bio`
3. Skills — Grid from `skills.ts`
4. Featured Projects — Cards from `projects.ts` where `featured: true`
5. Achievements — List from `achievements.ts`
6. Contact — Email and social links from `personal.ts`

**Hero is production-ready! 🚀**
