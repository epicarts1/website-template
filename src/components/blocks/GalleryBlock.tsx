import Image from 'next/image'

type GalleryImage = {
  image: any
  caption?: string
}

type GalleryBlockProps = {
  heading: string
  images?: GalleryImage[]
}

export function GalleryBlock({ heading, images }: GalleryBlockProps) {
  if (!images || images.length === 0) return null

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{heading}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item, index) => {
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
          })}
        </div>
      </div>
    </section>
  )
}
