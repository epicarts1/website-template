import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
