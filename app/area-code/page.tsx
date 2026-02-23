import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'US Area Codes - Spam Call Reports by Area Code | WhoCalledUs',
  description: 'Browse spam call reports by US area code. Find out which numbers are calling from your area and how to block them. Free reverse phone lookup by area code.',
  keywords: 'area code spam calls, US area codes, phone number lookup by area code, who called from area code, reverse phone lookup area code',
  alternates: { canonical: '/area-code' },
}

const AREA_CODES = [
  { code: '212', city: 'New York City', state: 'NY', region: 'Manhattan' },
  { code: '646', city: 'New York City', state: 'NY', region: 'Manhattan (overlay)' },
  { code: '718', city: 'New York City', state: 'NY', region: 'Brooklyn/Queens/Bronx' },
  { code: '213', city: 'Los Angeles', state: 'CA', region: 'Downtown LA' },
  { code: '310', city: 'Los Angeles', state: 'CA', region: 'West LA / Beverly Hills' },
  { code: '312', city: 'Chicago', state: 'IL', region: 'Downtown Chicago' },
  { code: '773', city: 'Chicago', state: 'IL', region: 'Chicago Neighborhoods' },
  { code: '713', city: 'Houston', state: 'TX', region: 'Central Houston' },
  { code: '832', city: 'Houston', state: 'TX', region: 'Greater Houston' },
  { code: '305', city: 'Miami', state: 'FL', region: 'Miami-Dade County' },
  { code: '786', city: 'Miami', state: 'FL', region: 'Miami-Dade (overlay)' },
  { code: '214', city: 'Dallas', state: 'TX', region: 'Dallas' },
  { code: '404', city: 'Atlanta', state: 'GA', region: 'Atlanta' },
  { code: '602', city: 'Phoenix', state: 'AZ', region: 'Phoenix' },
  { code: '480', city: 'Scottsdale/Mesa', state: 'AZ', region: 'East Valley' },
  { code: '415', city: 'San Francisco', state: 'CA', region: 'San Francisco' },
  { code: '206', city: 'Seattle', state: 'WA', region: 'Seattle' },
  { code: '617', city: 'Boston', state: 'MA', region: 'Boston' },
  { code: '702', city: 'Las Vegas', state: 'NV', region: 'Las Vegas Valley' },
  { code: '503', city: 'Portland', state: 'OR', region: 'Portland' },
]

export default function AreaCodeIndex() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px 64px' }}>
      <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>Area Codes</span>
      </nav>

      <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '12px' }}>
        Spam Call Reports by US Area Code
      </h1>
      <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.7', marginBottom: '36px' }}>
        Browse spam call reports organized by US area code. Click your area code to see the most common scam types,
        local tips, and search for specific numbers from that region.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {AREA_CODES.map((item) => (
          <Link
            key={item.code}
            href={`/area-code/${item.code}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid #f3f4f6',
              display: 'flex',
              gap: '14px',
              alignItems: 'center',
              transition: 'border-color 0.2s',
            }}>
              <div style={{
                background: '#eff6ff',
                color: '#1d4ed8',
                borderRadius: '10px',
                padding: '10px 14px',
                fontWeight: '800',
                fontSize: '20px',
                flexShrink: 0,
                minWidth: '64px',
                textAlign: 'center',
              }}>
                {item.code}
              </div>
              <div>
                <div style={{ fontWeight: '600', color: '#111827', fontSize: '15px' }}>{item.city}</div>
                <div style={{ color: '#6b7280', fontSize: '13px' }}>{item.region}, {item.state}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '24px', marginTop: '40px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#1d4ed8', marginBottom: '10px' }}>
          Can&apos;t find your area code?
        </h2>
        <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.6', marginBottom: '14px' }}>
          You can search any US phone number directly — just enter the full number including area code on our homepage.
        </p>
        <Link href="/" style={{
          background: '#1d4ed8',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none',
          fontSize: '14px',
          display: 'inline-block',
        }}>
          Search Any Number →
        </Link>
      </div>
    </main>
  )
}
