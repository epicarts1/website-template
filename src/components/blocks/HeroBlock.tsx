import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type HeroBlockProps = {
  headline: string
  subheadline?: string
  image?: any
  cta?: { label?: string; link?: string }
  style?: 'gradient' | 'image' | 'minimal' | 'dark'
}

export function HeroBlock({ headline, subheadline, image, cta, style = 'gradient' }: HeroBlockProps) {
  const isDark = style === 'dark' || style === 'image'

  return (
    <section
      className={cn(
        'relative flex items-center justify-center min-h-[85vh] px-6 overflow-hidden',
        style === 'gradient' && 'bg-brand-gradient text-white',
        style === 'dark' && 'bg-brand-dark text-white',
        style === 'minimal' && 'bg-white text-brand-dark',
        style === 'image' && 'text-white',
      )}
    >
      {style === 'image' && image?.url && (
        <>
          <Image
            src={image.url}
            alt={image.alt || ''}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1
          className={cn(
            'text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6',
            style === 'minimal' && 'brand-gradient-text',
          )}
        >
          {headline}
        </h1>

        {subheadline && (
          <p
            className={cn(
              'text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed',
              isDark || style === 'gradient' ? 'text-white/80' : 'text-brand-muted',
            )}
          >
            {subheadline}
          </p>
        )}

        {cta?.label && cta?.link && (
          <Link
            href={cta.link}
            className={cn(
              'inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105',
              style === 'minimal'
                ? 'bg-brand-gradient text-white shadow-lg hover:shadow-xl'
                : 'bg-white text-brand-dark shadow-lg hover:shadow-xl',
            )}
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}
