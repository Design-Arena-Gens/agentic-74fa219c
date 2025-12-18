import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhatsApp SaaS - Business Messaging Platform',
  description: 'Enterprise WhatsApp Business Solution for Customer Engagement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
