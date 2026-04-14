import { getPayloadClient } from '@/lib/payload'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  let pages: any = { docs: [] }
  try {
    const payload = await getPayloadClient()
    pages = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: 'home' },
        status: { equals: 'published' },
      },
      limit: 1,
    })
  } catch {}

  const page = pages.docs[0]

  if (!page) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-brand-red via-brand-pink to-brand-blue">
        <div className="max-w-2xl bg-white/95 backdrop-blur rounded-3xl p-10 md:p-14 shadow-2xl">
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-brand-pink uppercase mb-4">
            Epic Arts Website Factory
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-brand-dark">
            🚀 Dein neues Website-Projekt ist bereit
          </h1>
          <p className="text-lg text-brand-muted mb-8 leading-relaxed">
            Willkommen im <strong>Epic Arts Template</strong>. Um deine Website mit Inhalten zu füllen, folge diesen Schritten:
          </p>
          <ol className="space-y-4 mb-8">
            {[
              { n: 1, t: 'Datenbank verbinden', d: 'Vercel Dashboard → Storage → Create Database → Neon (Postgres)' },
              { n: 2, t: 'Blob Storage verbinden', d: 'Vercel Dashboard → Storage → Create Database → Blob' },
              { n: 3, t: 'PAYLOAD_SECRET setzen', d: 'openssl rand -hex 32 → vercel env add PAYLOAD_SECRET' },
              { n: 4, t: 'Admin öffnen', d: 'Gehe zu /admin und erstelle den ersten Admin-Account' },
              { n: 5, t: 'Home-Seite anlegen', d: 'Erstelle Page mit Slug "home" und baue sie mit Blocks' },
            ].map(s => (
              <li key={s.n} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-brand-pink text-white font-bold flex items-center justify-center text-sm">{s.n}</div>
                <div>
                  <div className="font-semibold text-brand-dark">{s.t}</div>
                  <div className="text-sm text-brand-muted">{s.d}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-3">
            <a href="/admin" className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
              → CMS öffnen
            </a>
            <a href="https://github.com/epicarts1/website-template" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-brand-dark/20 text-brand-dark px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark/5 transition">
              📖 Dokumentation
            </a>
          </div>
        </div>
      </section>
    )
  }

  return <BlockRenderer blocks={page.layout ?? []} />
}
