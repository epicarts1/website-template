# Epic Arts Website Factory

> Next.js 14 + Payload CMS v3 + Vercel — Kunden-Websites in 2-4h statt 2 Wochen.

## Features

- ⚡ **Next.js 15** mit App Router + React 19
- 🎨 **Payload CMS v3** — Self-hosted Admin UI auf `/admin`
- 🧱 **9 Content Blocks** — Hero, Features, CTA, FAQ, Pricing, Gallery, Contact, Testimonials, RichText
- 📝 **8 Collections** — Pages, Posts, Services, Team, Testimonials, Case Studies, Media, Users
- 🎯 **3 Globals** — Header, Footer, Site Settings
- 🎨 **Tailwind CSS** mit Epic Arts Brand Defaults
- 📦 **Vercel Blob Storage** für Media Uploads
- 🗄️ **PostgreSQL** als Datenbank
- 🚀 **Vercel-optimiert** — Deploy in einem Klick

---

## Neue Kunden-Website erstellen

### 1. Template klonen (GitHub)

Gehe auf https://github.com/epicarts1/website-template und klicke **"Use this template"** → "Create a new repository".

Alternativ via CLI:
```bash
gh repo create epicarts1/kunden-name --template epicarts1/website-template --private --clone
cd kunden-name
```

### 2. Lokale Entwicklung starten

```bash
npm install --legacy-peer-deps
cp .env.example .env.local
# Fülle die Env Vars aus (siehe unten)
npm run dev
```

→ Öffne http://localhost:3000 (Website) und http://localhost:3000/admin (CMS)

### 3. Auf Vercel deployen

```bash
vercel link         # Mit Vercel Account verbinden
vercel deploy --prod
```

### 4. Datenbank einrichten (Vercel Postgres / Neon)

In der Vercel Dashboard:
1. Projekt → **Storage** → **Create Database** → **Neon (Postgres)**
2. Wähle Region: `Frankfurt (fra1)`
3. Name: `kunden-name-db`
4. Klicke **Connect** — Env Var `DATABASE_URL` wird automatisch gesetzt

### 5. Blob Storage für Medien

In der Vercel Dashboard:
1. Projekt → **Storage** → **Create Database** → **Blob**
2. Name: `kunden-name-media`
3. Klicke **Connect** — Env Var `BLOB_READ_WRITE_TOKEN` wird automatisch gesetzt

### 6. Payload Secret setzen

```bash
openssl rand -hex 32 | pbcopy   # Kopiert 64-char hex in Zwischenablage
vercel env add PAYLOAD_SECRET production
# Paste den kopierten Wert
vercel env add PAYLOAD_SECRET preview
vercel env add PAYLOAD_SECRET development
```

### 7. Redeploy mit allen Env Vars

```bash
vercel deploy --prod
```

### 8. Erster Admin-Login

Öffne `https://kunden-name.vercel.app/admin` — Payload erstellt automatisch den ersten Admin beim ersten Aufruf.

### 9. Custom Domain

```bash
vercel domains add kunden-name.de
```

---

## Content-Struktur

### Collections

| Collection | Was wird gespeichert |
|-----------|---------------------|
| **Pages** | Seiten mit Block-basiertem Layout (Home, Über uns, Kontakt, etc.) |
| **Posts** | Blog-Artikel mit Rich Text |
| **Services** | Dienstleistungen / Produkte |
| **Team** | Team-Mitglieder |
| **Testimonials** | Kundenstimmen |
| **Case Studies** | Referenzen / Erfolgsgeschichten |
| **Media** | Bilder, Videos |
| **Users** | Admin-Accounts |

### Content Blocks (für Pages)

| Block | Zweck |
|-------|-------|
| **Hero** | Headline, Subheadline, CTA, 4 Style-Varianten |
| **Features** | 3-Spalten Feature-Grid |
| **CTA** | Call-to-Action Sektion |
| **Testimonials** | Kundenstimmen-Grid |
| **FAQ** | Accordion mit häufigen Fragen |
| **Pricing** | Preistabelle (3 Pläne, Highlighted-Option) |
| **Gallery** | Bildergalerie |
| **Contact** | Kontaktformular + Infos |
| **RichText** | Freier Text mit Formatierung |

### Globals

| Global | Konfiguration |
|--------|---------------|
| **Header** | Logo, Nav-Items (mit Children) |
| **Footer** | Copyright, Spalten mit Links, Social Links |
| **Site Settings** | Name, Tagline, Logo, Farben (Primary/Secondary/Accent), SEO-Defaults, Analytics IDs |

---

## Environment Variables

```env
# Database (Vercel Postgres / Neon)
DATABASE_URL=postgres://user:pass@host:5432/dbname

# Payload Authentication
PAYLOAD_SECRET=your-64-char-hex-here

# Media Storage
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# Site Config
NEXT_PUBLIC_SITE_URL=https://kunde.de
```

---

## Brand anpassen

1. **Logo:** `public/brand/logo.png` ersetzen
2. **Favicon:** `public/brand/favicon.png` ersetzen
3. **Farben:** `tailwind.config.ts` → `theme.extend.colors.brand`
4. **Fonts:** `src/app/layout.tsx` → Font-Import
5. **Site-Settings:** Im Admin unter `/admin/globals/site-settings`

---

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **CMS:** Payload CMS v3
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (via Vercel Postgres / Neon)
- **Storage:** Vercel Blob
- **Hosting:** Vercel
- **Rich Text:** Lexical Editor

---

## Epic Arts

Built by **Epic Arts sp. z o.o.** — Premium Digital Marketing Agency in Wrocław, Polen.

Website: https://epicarts.ai  
Email: stefan@epicarts.ai
