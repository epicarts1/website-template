import Link from 'next/link'
import { cn } from '@/lib/utils'

type PlanFeature = {
  feature: string
}

type Plan = {
  name: string
  price: string
  period?: string
  features?: PlanFeature[]
  highlighted?: boolean
  ctaLabel?: string
  ctaLink?: string
}

type PricingBlockProps = {
  heading: string
  plans?: Plan[]
}

export function PricingBlock({ heading, plans }: PricingBlockProps) {
  if (!plans || plans.length === 0) return null

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{heading}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                'rounded-2xl p-8 transition-all duration-300 hover:shadow-lg',
                plan.highlighted
                  ? 'brand-gradient-border bg-white shadow-lg scale-105'
                  : 'bg-white border border-neutral-100',
              )}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-brand-muted">{plan.period}</span>}
              </div>

              {plan.features && plan.features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 text-brand-pink flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-brand-muted">{f.feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {plan.ctaLink && (
                <Link
                  href={plan.ctaLink}
                  className={cn(
                    'block w-full text-center py-3 rounded-full font-semibold transition-all duration-300',
                    plan.highlighted
                      ? 'bg-brand-gradient text-white hover:shadow-lg'
                      : 'border-2 border-neutral-200 text-brand-dark hover:border-brand-pink hover:text-brand-pink',
                  )}
                >
                  {plan.ctaLabel || 'Ausw\u00e4hlen'}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
