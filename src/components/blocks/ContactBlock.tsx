'use client'

type ContactBlockProps = {
  heading: string
  description?: string
  email?: string
  phone?: string
  address?: string
  showMap?: boolean
}

export function ContactBlock({ heading, description, email, phone, address }: ContactBlockProps) {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h2>
            {description && (
              <p className="text-brand-muted text-lg mb-10 leading-relaxed">{description}</p>
            )}

            <div className="space-y-6">
              {email && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-faint mb-1">Email</div>
                    <a href={`mailto:${email}`} className="text-brand-dark hover:text-brand-pink transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {phone && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-faint mb-1">Telefon</div>
                    <a href={`tel:${phone}`} className="text-brand-dark hover:text-brand-pink transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {address && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-brand-faint mb-1">Adresse</div>
                    <p className="text-brand-dark whitespace-pre-line">{address}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-neutral-100">
            <h3 className="text-xl font-semibold mb-6">Nachricht senden</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Dein Name"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="deine@email.de"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Nachricht</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Deine Nachricht..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-brand-gradient text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
