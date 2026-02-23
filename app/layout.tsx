import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Who Called Us - Free Reverse Phone Lookup & Spam Call Checker',
  description: 'Find out who called you. Search any phone number worldwide to see spam reports, comments, and scam warnings from other users. Free reverse phone lookup for USA, UK, Canada and 40+ countries.',
  keywords: 'who called me, reverse phone lookup, spam calls, phone number search, robocall checker, who is calling me, unknown number lookup, phone scam checker, block spam calls, telemarketer lookup',
  authors: [{ name: 'WhoCalledUs', url: 'https://whocalledus.net' }],
  metadataBase: new URL('https://whocalledus.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WhoCalledUs - Free Reverse Phone Lookup',
    description: 'Search any phone number to see spam reports and scam warnings from millions of users. Free reverse phone lookup.',
    url: 'https://whocalledus.net',
    siteName: 'WhoCalledUs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhoCalledUs - Free Reverse Phone Lookup',
    description: 'Search any phone number to see spam reports and scam warnings. Free reverse phone lookup for 40+ countries.',
    site: '@whocalledus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '4CkjTUekW64amok32b_iarFV_EoGkSLtg6DWQdlefvw',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-L4CMD73W1F" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L4CMD73W1F');
          `}
        </Script>
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'WhoCalledUs',
            url: 'https://whocalledus.net',
            description: 'Free reverse phone lookup. Search any phone number to see spam reports and user comments.',
            potentialAction: {
              '@type': 'SearchAction',
              target: { '@type': 'EntryPoint', urlTemplate: 'https://whocalledus.net/number/{search_term_string}' },
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </head>
      <body>
        <header style={{ background: '#1d4ed8', color: 'white', padding: '12px 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '20px', fontWeight: 'bold' }}>
              📞 WhoCalledUs
            </a>
            <nav style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="/blog/how-to-block-spam-calls" style={{ color: 'white', textDecoration: 'none' }}>Block Spam</a>
              <a href="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy</a>
              <a href="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms</a>
            </nav>
          </div>
        </header>
        {children}
        <footer style={{ background: '#1f2937', color: '#9ca3af', padding: '40px 16px', marginTop: '48px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
              <div>
                <h3 style={{ color: 'white', fontWeight: 'bold', marginBottom: '12px', fontSize: '16px' }}>📞 WhoCalledUs</h3>
                <p style={{ fontSize: '13px', lineHeight: '1.7' }}>Free reverse phone lookup. Search any number worldwide to see spam reports and user comments.</p>
              </div>
              <div>
                <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '12px', fontSize: '14px' }}>Resources</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                  <a href="/blog/how-to-block-spam-calls" style={{ color: '#9ca3af', textDecoration: 'none' }}>How to Block Spam Calls</a>
                  <a href="/privacy" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
                  <a href="/terms" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms of Use</a>
                  <a href="/dmca" style={{ color: '#9ca3af', textDecoration: 'none' }}>DMCA</a>
                </div>
              </div>
              <div>
                <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '12px', fontSize: '14px' }}>Popular Lookups</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                  <a href="/number/8005551234" style={{ color: '#9ca3af', textDecoration: 'none' }}>800 Numbers</a>
                  <a href="/number/8885551234" style={{ color: '#9ca3af', textDecoration: 'none' }}>888 Numbers</a>
                  <a href="/number/8775551234" style={{ color: '#9ca3af', textDecoration: 'none' }}>877 Numbers</a>
                  <a href="/number/8665551234" style={{ color: '#9ca3af', textDecoration: 'none' }}>866 Numbers</a>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #374151', paddingTop: '20px', textAlign: 'center' }}>
              <p style={{ marginBottom: '6px', fontSize: '13px' }}>© 2025 WhoCalledUs.net - Free Reverse Phone Lookup</p>
              <p style={{ fontSize: '12px' }}>
                User-submitted reports. We do not guarantee accuracy. For informational purposes only. Not a Consumer Reporting Agency (CRA).
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
