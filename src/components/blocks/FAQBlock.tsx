'use client'

import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

type FAQBlockProps = {
  heading: string
  items?: FAQItem[]
}

function AccordionItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-neutral-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold pr-8 group-hover:text-brand-pink transition-colors">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? 'rotate-45 bg-brand-pink text-white' : ''
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-brand-muted leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  )
}

export function FAQBlock({ heading, items }: FAQBlockProps) {
  if (!items || items.length === 0) return null

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{heading}</h2>
        <div className="bg-white rounded-2xl border border-neutral-100 px-8">
          {items.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
