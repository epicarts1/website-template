import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'

import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Services } from './collections/Services'
import { Team } from './collections/Team'
import { Testimonials } from './collections/Testimonials'
import { CaseStudies } from './collections/CaseStudies'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { SiteSettings } from './globals/SiteSettings'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' | Epic Arts CMS',
    },
  },

  collections: [Pages, Posts, Services, Team, Testimonials, CaseStudies, Media, Users],
  globals: [Header, Footer, SiteSettings],

  editor: lexicalEditor(),

  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),

  plugins: [
    vercelBlobStorage({
      enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
      collections: { media: true },
    }),
  ],

  secret: process.env.PAYLOAD_SECRET || 'epicarts-default-secret-change-me',
  sharp,
  typescript: { outputFile: path.resolve(__dirname, '../payload-types.ts') },
})
