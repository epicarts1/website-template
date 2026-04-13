'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type NavChild = {
  label: string
  link: string
}

type NavItem = {
  label: string
  link: string
  children?: NavChild[]
}

type HeaderData = {
  logo?: any
  navItems?: NavItem[]
}

export function Header() {
  const [data, setData] = useState<HeaderData | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    fetch('/api/globals/header')
      .then((res) => res.json())
      .then(setData)
      .catch(() => {})
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {data?.logo?.url ? (
            <Image
              src={data.logo.url}
              alt={data.logo.alt || 'Logo'}
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          ) : (
            <span className="text-xl font-bold brand-gradient-text">Epic Arts</span>
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {data?.navItems?.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.link}
                className="text-sm font-medium text-brand-dark hover:text-brand-pink transition-colors py-2"
              >
                {item.label}
              </Link>

              {item.children && item.children.length > 0 && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-neutral-100 py-2 min-w-[200px]">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.link}
                        className="block px-4 py-2.5 text-sm text-brand-muted hover:text-brand-pink hover:bg-neutral-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <nav className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {data?.navItems?.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium py-2 text-brand-dark hover:text-brand-pink transition-colors"
                >
                  {item.label}
                </Link>
                {item.children?.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.link}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm py-1.5 pl-4 text-brand-muted hover:text-brand-pink transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
