type Feature = {
  icon: string
  title: string
  description: string
}

type FeaturesBlockProps = {
  heading: string
  description?: string
  features?: Feature[]
}

export function FeaturesBlock({ heading, description, features }: FeaturesBlockProps) {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          {description && (
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        {features && features.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:border-brand-pink/20 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-pink transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
