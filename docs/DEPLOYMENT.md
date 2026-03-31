# Deployment Guide

## Recommended: Vercel

Vercel is the recommended platform for deploying `moiskhan.dev`. It handles custom domains, HTTPS, preview deployments, and edge caching with zero config for Vite projects.

---

## Step 1: Deploy to Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → Select your repo
3. Framework preset: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy

---

## Step 2: Connect moiskhan.dev

1. In your Vercel project → **Settings → Domains**
2. Add `moiskhan.dev` and `www.moiskhan.dev`
3. Vercel will give you DNS records to add
4. In your domain registrar (wherever you bought `moiskhan.dev`):
   - Add an **A record** pointing to Vercel's IP: `76.76.21.21`
   - Add a **CNAME** for `www` pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (usually under 30 minutes)
6. Vercel auto-provisions SSL — your site will be live at `https://moiskhan.dev`

---

## Step 3: Deploy individual projects

Each project in a separate repo should be deployed to its own Vercel project (or Netlify, Railway, etc.).

**Example:**
- `moiskhan-ecommerce` repo → deployed at `ecommerce.moiskhan.dev` or `moiskhan-ecommerce.vercel.app`
- Add that URL as `liveUrl` in `src/data/projects.ts` in this portfolio repo

> ⚠️ Important: When deploying your projects, make sure they do NOT block iframes.
> On Vercel, the default headers allow iframe embedding. Do not add custom `X-Frame-Options` headers.

### Vercel headers check (for your project repos)

In your project's `vercel.json`, do NOT add this (it breaks iframe embedding):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

If you need security headers, use this safe version instead:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Content-Security-Policy", "value": "frame-ancestors 'self' https://moiskhan.dev" }
      ]
    }
  ]
}
```

---

## Preview Deployments

Every PR to `main` gets an automatic preview URL from Vercel. This is useful for testing new projects or blog posts before going live.

---

## Environment Variables

Currently no environment variables are needed. If you add a contact form backend or CMS later, add variables in **Vercel Project Settings → Environment Variables**.

---

## Alternative: Netlify

If you prefer Netlify:
1. Connect repo → Build command: `npm run build` → Publish directory: `dist`
2. Add `moiskhan.dev` in **Domain Management**
3. Same DNS setup as above but point to Netlify's load balancer IP

Add a `netlify.toml` for SPA routing:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

> Note: Vite + TanStack Router is a SPA. You MUST configure the above redirect rule on any static host, otherwise direct URL access (e.g. `moiskhan.dev/projects/ecommerce`) will 404.
> On Vercel this is handled automatically.
