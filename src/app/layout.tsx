// Minimal root layout — each route group ((frontend) and (payload)) defines its own html/body.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}

export const metadata = {
  title: 'Epic Arts',
  description: 'Creative Agency for Digital Excellence',
}
