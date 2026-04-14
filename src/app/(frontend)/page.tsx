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
      <section className="flex items-center justify-center min-h-[60vh] px-6">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-bold mb-4 brand-gradient-text">
            Willkommen bei Epic Arts
          </h1>
          <p className="text-brand-muted text-lg">
            Erstelle eine Seite mit dem Slug &quot;home&quot; im CMS, um loszulegen.
          </p>
        </div>
      </section>
    )
  }

  return <BlockRenderer blocks={page.layout ?? []} />
}
