import Link from 'next/link'
import { cn } from '@/lib/utils'

type CTABlockProps = {
  heading: string
  description?: string
  buttonLabel: string
  buttonLink: string
  style?: 'gradient' | 'outline' | 'dark'
}

export function CTABlock({ heading, description, buttonLabel, buttonLink, style = 'gradient' }: CTABlockProps) {
  return (
    <section
      className={cn(
        'py-24 px-6',
        style === 'gradient' && 'bg-brand-gradient',
        style === 'dark' && 'bg-brand-dark',
        style === 'outline' && 'bg-white',
      )}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={cn(
            'text-3xl md:text-5xl font-bold mb-6',
            style === 'outline' ? 'text-brand-dark' : 'text-white',
          )}
        >
          {heading}
        </h2>

        {description && (
          <p
            className={cn(
              'text-lg mb-10 max-w-xl mx-auto',
              style === 'outline' ? 'text-brand-muted' : 'text-white/80',
            )}
          >
            {description}
          </p>
        )}

        <Link
          href={buttonLink}
          className={cn(
            'inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105',
            style === 'outline'
              ? 'border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white'
              : 'bg-white text-brand-dark shadow-lg hover:shadow-xl',
          )}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
