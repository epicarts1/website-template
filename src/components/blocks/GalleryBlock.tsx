import Image from 'next/image'

type GalleryImage = {
  image: any
  caption?: string
}

type GalleryBlockProps = {
  heading: string
  images?: GalleryImage[]
  showPlaceholders?: boolean
  placeholderCount?: number
  placeholderLabel?: string
}

function PlaceholderTile({ label }: { label: string }) {
  return (
    <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-brand-pink/10 via-brand-blue/10 to-brand-red/10 flex items-center justify-center border border-dashed border-brand-faint/40">
      <svg
        className="w-10 h-10 text-brand-faint/60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" />
        <path d="M21 15l-5-5L5 19" />
      </svg>
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <span className="inline-block text-[11px] font-medium tracking-wider uppercase text-brand-muted bg-white/80 backdrop-blur px-2 py-1 rounded-md">
          {label}
        </span>
      </div>
    </div>
  )
}

export function GalleryBlock({
  heading,
  images,
  showPlaceholders = true,
  placeholderCount = 6,
  placeholderLabel = 'Foto folgt',
}: GalleryBlockProps) {
  const hasImages = images && images.length > 0

  if (!hasImages && !showPlaceholders) return null

  const placeholders = !hasImages
    ? Array.from({ length: placeholderCount }).map((_, i) => i)
    : []

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{heading}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hasImages
            ? images!.map((item, index) => {
                const img = item.image
                if (!img?.url) return null

                return (
                  <div
                    key={index}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt || item.caption || ''}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium">{item.caption}</p>
                      </div>
                    )}
                  </div>
                )
              })
            : placeholders.map((i) => (
                <PlaceholderTile key={i} label={placeholderLabel} />
              ))}
        </div>
      </div>
    </section>
  )
}
