import React from 'react'

type RichTextNode = {
  type?: string
  tag?: string
  format?: number | string
  text?: string
  children?: RichTextNode[]
  url?: string
  listType?: string
  value?: any
  fields?: any
  [key: string]: unknown
}

type RichTextBlockProps = {
  content: any
}

function serializeNode(node: RichTextNode, index: number): React.ReactNode {
  if (!node) return null

  if (node.text !== undefined) {
    let text: React.ReactNode = node.text

    if (typeof node.format === 'number') {
      if (node.format & 1) text = <strong key={index}>{text}</strong>
      if (node.format & 2) text = <em key={index}>{text}</em>
      if (node.format & 4) text = <s key={index}>{text}</s>
      if (node.format & 8) text = <u key={index}>{text}</u>
      if (node.format & 16) text = <code key={index} className="bg-neutral-100 px-1.5 py-0.5 rounded text-sm">{text}</code>
    }

    return text
  }

  const children = node.children?.map((child, i) => serializeNode(child, i)) ?? []

  switch (node.type) {
    case 'heading':
      const HeadingTag = (node.tag || 'h2') as keyof JSX.IntrinsicElements
      return <HeadingTag key={index} className="font-bold mt-8 mb-4">{children}</HeadingTag>

    case 'paragraph':
      return <p key={index} className="mb-4 leading-relaxed">{children}</p>

    case 'list':
      if (node.listType === 'number') {
        return <ol key={index} className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
      }
      return <ul key={index} className="list-disc list-inside mb-4 space-y-1">{children}</ul>

    case 'listitem':
      return <li key={index}>{children}</li>

    case 'link':
    case 'autolink':
      return (
        <a
          key={index}
          href={node.fields?.url || node.url || '#'}
          className="text-brand-pink hover:underline"
          target={node.fields?.newTab ? '_blank' : undefined}
          rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )

    case 'quote':
      return (
        <blockquote key={index} className="border-l-4 border-brand-pink pl-6 my-6 italic text-brand-muted">
          {children}
        </blockquote>
      )

    case 'upload':
      if (node.value?.url) {
        return (
          <figure key={index} className="my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={node.value.url}
              alt={node.value.alt || ''}
              className="rounded-xl w-full"
            />
          </figure>
        )
      }
      return null

    default:
      return <>{children}</>
  }
}

export function RichTextBlock({ content }: RichTextBlockProps) {
  if (!content) return null

  const root = content.root || content

  if (!root?.children) return null

  return (
    <div className="prose prose-lg max-w-none">
      {root.children.map((node: RichTextNode, index: number) => serializeNode(node, index))}
    </div>
  )
}
