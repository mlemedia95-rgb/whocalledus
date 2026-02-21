import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Who Called Us - Reverse Phone Lookup & Spam Call Checker',
  description: 'Find out who called you. Search any US phone number to see reports, comments, and spam warnings from other users. Free reverse phone lookup.',
  keywords: 'who called me, reverse phone lookup, spam calls, phone number search, robocall checker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: '#1d4ed8', color: 'white', padding: '12px 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>
              📞 WhoCalledUs
            </a>
            <nav style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy</a>
              <a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms</a>
            </nav>
          </div>
        </header>
        {children}
        <footer style={{ background: '#1f2937', color: '#9ca3af', padding: '32px 16px', marginTop: '48px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginBottom: '8px' }}>© 2025 WhoCalledUs.net - Free Reverse Phone Lookup</p>
            <p style={{ fontSize: '13px', marginBottom: '12px' }}>
              User-submitted reports. We do not guarantee accuracy. For informational purposes only.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', fontSize: '13px' }}>
              <a href="/privacy" style={{ color: '#9ca3af' }}>Privacy Policy</a>
              <a href="/terms" style={{ color: '#9ca3af' }}>Terms of Use</a>
              <a href="/dmca" style={{ color: '#9ca3af' }}>DMCA</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
