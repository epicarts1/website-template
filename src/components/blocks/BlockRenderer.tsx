import React from 'react'
import { HeroBlock } from './HeroBlock'
import { FeaturesBlock } from './FeaturesBlock'
import { CTABlock } from './CTABlock'
import { TestimonialsBlock } from './TestimonialsBlock'
import { FAQBlock } from './FAQBlock'
import { PricingBlock } from './PricingBlock'
import { GalleryBlock } from './GalleryBlock'
import { ContactBlock } from './ContactBlock'
import { RichTextBlock } from './RichTextBlock'
import { TeamBlock } from './TeamBlock'

const blockComponents: Record<string, React.FC<any>> = {
  hero: HeroBlock,
  features: FeaturesBlock,
  cta: CTABlock,
  'testimonials-block': TestimonialsBlock,
  faq: FAQBlock,
  pricing: PricingBlock,
  gallery: GalleryBlock,
  team: TeamBlock,
  contact: ContactBlock,
  richtext: RichTextBlock,
}

type Block = {
  blockType: string
  [key: string]: unknown
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        const Component = blockComponents[block.blockType]
        if (!Component) return null
        return <Component key={index} {...block} />
      })}
    </>
  )
}
