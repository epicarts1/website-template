import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPayloadClient } from '@/lib/payload'
import { RichTextBlock } from '@/components/blocks/RichTextBlock'

type Args = {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  let payload
  try { payload = await getPayloadClient() } catch { return {} }

  const posts = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = posts.docs[0]
  if (!post) return {}

  const featuredImage = post.featuredImage as any

  return {
    title: `${post.title} | Epic Arts Blog`,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: featuredImage?.url ? [{ url: featuredImage.url }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: Args) {
  const { slug } = await params
  const payload = await getPayloadClient()

  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const post = posts.docs[0]
  if (!post) notFound()

  const featuredImage = post.featuredImage as any

  return (
    <article className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-pink transition-colors mb-8"
        >
          &larr; Alle Beitr&auml;ge
        </Link>

        <header className="mb-12">
          {post.categories && (post.categories as any[]).length > 0 && (
            <div className="flex gap-2 mb-4">
              {(post.categories as any[]).map((cat, i) => (
                <span
                  key={i}
                  className="text-xs font-medium text-brand-pink bg-brand-pink/10 px-2.5 py-0.5 rounded-full"
                >
                  {cat.category}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-brand-muted">{post.excerpt}</p>
          )}
          <div className="mt-6 flex items-center gap-4 text-sm text-brand-faint">
            {post.author && <span className="font-medium text-brand-dark">{post.author}</span>}
            {post.publishedAt && (
              <time>
                {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </div>
        </header>

        {featuredImage?.url && (
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <RichTextBlock content={post.content} />
        </div>
      </div>
    </article>
  )
}
