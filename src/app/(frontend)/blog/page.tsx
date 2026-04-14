import Link from 'next/link'
import Image from 'next/image'
import { getPayloadClient } from '@/lib/payload'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Epic Arts',
  description: 'Insights, Tipps und News von Epic Arts',
}

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  let posts: any = { docs: [] }
  try {
    const payload = await getPayloadClient()
    posts = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      limit: 50,
    })
  } catch {}

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-brand-muted text-lg mb-12 max-w-2xl">
          Aktuelle Insights, Tipps und News aus der Welt des digitalen Marketings.
        </p>

        {posts.docs.length === 0 ? (
          <p className="text-brand-muted">Noch keine Beitr&auml;ge vorhanden.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.docs.map((post: any) => {
              const featuredImage = post.featuredImage as any
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-neutral-100 hover:border-brand-pink/30 transition-all duration-300 hover:shadow-lg"
                >
                  {featuredImage?.url && (
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={featuredImage.url}
                        alt={featuredImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.categories && (post.categories as any[]).length > 0 && (
                      <div className="flex gap-2 mb-3">
                        {(post.categories as any[]).slice(0, 2).map((cat, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-brand-pink bg-brand-pink/10 px-2.5 py-0.5 rounded-full"
                          >
                            {cat.category}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-brand-pink transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-brand-muted text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-4 flex items-center gap-3 text-xs text-brand-faint">
                      {post.author && <span>{post.author}</span>}
                      {post.publishedAt && (
                        <time>
                          {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
