import Image from 'next/image'

type TeamMember = {
  id?: string
  name?: string
  role?: string
  bio?: string
  email?: string
  linkedin?: string
  photo?: any
}

type TeamBlockProps = {
  heading?: string
  subheading?: string
  members?: TeamMember[]
  showPlaceholders?: boolean
  placeholderCount?: number
}

function PlaceholderSilhouette({ label }: { label?: string }) {
  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-pink/10 via-brand-blue/10 to-brand-red/10 flex items-center justify-center">
      <svg
        className="w-2/5 h-2/5 text-brand-faint/60"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-10 1.934-10 5.5V22h20v-2.5c0-3.566-6.134-5.5-10-5.5z" />
      </svg>
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <span className="inline-block text-[11px] font-medium tracking-wider uppercase text-brand-muted bg-white/80 backdrop-blur px-2 py-1 rounded-md">
          {label ?? 'Foto folgt'}
        </span>
      </div>
    </div>
  )
}

export function TeamBlock({
  heading = 'Unser Team',
  subheading,
  members,
  showPlaceholders = true,
  placeholderCount = 3,
}: TeamBlockProps) {
  const list: TeamMember[] = members && members.length > 0
    ? members
    : showPlaceholders
      ? Array.from({ length: placeholderCount }).map((_, i) => ({
          id: `placeholder-${i}`,
          name: 'Name folgt',
          role: 'Rolle folgt',
        }))
      : []

  if (list.length === 0) return null

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
          {subheading && (
            <p className="mt-4 text-brand-muted max-w-2xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((member, index) => {
            const photoUrl = member.photo?.url
            return (
              <article
                key={member.id ?? index}
                className="group flex flex-col"
              >
                {photoUrl ? (
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={photoUrl}
                      alt={member.photo?.alt || member.name || ''}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <PlaceholderSilhouette />
                )}

                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {member.name || 'Name folgt'}
                  </h3>
                  {member.role && (
                    <p className="text-sm text-brand-muted mt-1">{member.role}</p>
                  )}
                  {member.bio && (
                    <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                      {member.bio}
                    </p>
                  )}

                  {(member.email || member.linkedin) && (
                    <div className="flex items-center gap-4 mt-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm text-brand-dark hover:text-brand-pink transition-colors"
                        >
                          E-Mail
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-brand-dark hover:text-brand-pink transition-colors"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
