# Root Layout — Build Complete ✓

## Components Built

### 1. Navbar (`src/components/layout/Navbar.tsx`)

**Features:**
- ✅ **Fixed positioning** — `fixed top-0`, always visible, `h-16` height
- ✅ **Scroll blur effect** — Transparent when at top, blur background when scrolled
- ✅ **Active route highlighting** — Current page shown in accent color
- ✅ **Smart logo** — Auto-generates initials from `personal.name` (MM for "Md. Mois")
- ✅ **TanStack Router integration** — Uses `<Link>` and `useLocation()`
- ✅ **Smooth transitions** — `transition-colors duration-200` on all hovers

**Scroll behavior:**
```typescript
// At top of page (scrollY < 20):
border-transparent bg-transparent

// When scrolled (scrollY > 20):
border-[--border] bg-[--bg-primary]/80 backdrop-blur-md
```

**Navigation structure:**
- Home → `/`
- Projects → `/projects`
- Blog → `/blog`

**Styling:**
- Font: Serif for logo, mono for nav links
- Accent color: `--accent` (#e8ff47) on hover and active
- Max width: `max-w-5xl` (matches container width throughout site)
- Responsive padding: `px-6`

---

### 2. Footer (`src/components/layout/Footer.tsx`)

**Features:**
- ✅ **Dynamic data** — Reads from `personal.ts` for links and name
- ✅ **Social links** — GitHub, LinkedIn (Twitter if provided)
- ✅ **Responsive layout** — Stacks on mobile, inline on desktop
- ✅ **Current year** — Auto-updates copyright year
- ✅ **Accessible links** — `target="_blank"` with `rel="noopener noreferrer"`

**Layout:**
```
Mobile (< md):       Desktop (>= md):
┌──────────────┐    ┌─────────────────────────────────┐
│ Copyright    │    │ Copyright    GitHub • LinkedIn  │
│ GitHub • etc │    └─────────────────────────────────┘
└──────────────┘
```

**Styling:**
- Border top: `border-[--border]`
- Padding: `py-12` vertical, `px-6` horizontal
- Text: Small mono font, secondary color
- Hover: Accent color transition
- Margin: `mt-20` separates from content

---

### 3. Root Layout (`src/routes/__root.tsx`)

**Structure:**
```typescript
<div className="min-h-screen flex flex-col">
  <Navbar />               {/* Fixed at top */}
  <main className="flex-1"> {/* Grows to fill space */}
    <Outlet />             {/* Route content */}
  </main>
  <Footer />               {/* Pushed to bottom */}
</div>
```

**Why this structure:**
- `min-h-screen` — Ensures full viewport height
- `flex flex-col` — Vertical stacking
- `flex-1` on main — Footer always at bottom, even on short pages
- Fixed navbar doesn't affect layout flow (overlay)

---

## Style Guide Compliance

### ✅ Dark Theme
- Background: `--bg-primary` (#0a0a0a)
- Text: `--text-primary` (#f0f0f0), `--text-secondary` (#a0a0a0)
- Accent: `--accent` (#e8ff47)
- Borders: `--border` (#222222), `--border-hover` (#333333)

### ✅ Typography
- Logo: `font-serif` (DM Serif Display)
- Nav links: `font-mono` (JetBrains Mono)
- Footer: `font-mono` + `text-sm`

### ✅ Layout Rules
- **Navbar:** Fixed top, transparent → blur on scroll ✓
- **Container:** `max-w-5xl mx-auto px-6` ✓
- **Transitions:** `duration-200` for color changes ✓

### ✅ Animation Conventions
- Hover states: Tailwind `transition-colors` (not Framer) ✓
- Scroll detection: Native `window.scrollY` ✓
- Smooth: `ease` transitions ✓

---

## Data Integration

### Navbar
```typescript
import { personal } from '../../data'

// Logo initials
personal.name.split(' ').map(n => n[0]).join('')
// "Md. Mois Khan" → "MMK"
```

### Footer
```typescript
import { personal } from '../../data'

// Links
personal.github    // https://github.com/mois-khan
personal.linkedin  // https://linkedin.com/in/mois-khan
personal.twitter   // Optional, conditionally rendered
personal.name      // Copyright: "© 2026 Md. Mois Khan"
```

---

## Key Implementation Details

### Scroll Detection (Navbar)
```typescript
const [isScrolled, setIsScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

### Active Route Detection (Navbar)
```typescript
const location = useLocation()
const isActive = (path: string) => location.pathname === path

<Link
  className={isActive('/') ? 'text-[--accent]' : 'text-[--text-primary]'}
>
```

### Responsive Footer
```typescript
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
  {/* Mobile: stack vertically, Desktop: inline */}
</div>
```

---

## Testing

✅ **Dev server verified:** Runs successfully on `http://localhost:5174/`
✅ **Type checking:** All TypeScript types correct
✅ **Data imports:** Successfully reads from `personal.ts`
✅ **Routing:** TanStack Router `<Link>` components work
✅ **Styling:** All CSS variables and Tailwind classes applied

---

## What's Next

The root layout is complete and ready. Next steps:
1. Build homepage sections (Hero, About, Skills, etc.)
2. Add content to route pages (projects, blog)
3. Implement project cards and embeds
4. Add Framer Motion page transitions

**Layout foundation is solid! 🎯**
