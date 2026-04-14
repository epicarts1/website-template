import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayloadClient } from '@/lib/payload'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'

type Args = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  let payload
  try { payload = await getPayloadClient() } catch { return {} }

  const pages = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const page = pages.docs[0]
  if (!page) return {}

  const meta = page.meta as { title?: string; description?: string; image?: any } | undefined

  return {
    title: meta?.title || page.title,
    description: meta?.description || undefined,
    openGraph: {
      title: meta?.title || page.title,
      description: meta?.description || undefined,
      images: meta?.image
        ? [{ url: typeof meta.image === 'string' ? meta.image : meta.image.url }]
        : undefined,
    },
  }
}

export default async function DynamicPage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayloadClient()

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const page = pages.docs[0]
  if (!page) notFound()

  return <BlockRenderer blocks={page.layout ?? []} />
}
