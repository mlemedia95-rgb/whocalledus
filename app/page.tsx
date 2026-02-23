'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const COUNTRY_CODES = [
  { code: '+1', flag: '🇺🇸', name: 'USA', digits: 10 },
  { code: '+1', flag: '🇨🇦', name: 'Canada', digits: 10 },
  { code: '+44', flag: '🇬🇧', name: 'UK', digits: 10 },
  { code: '+61', flag: '🇦🇺', name: 'Australia', digits: 9 },
  { code: '+64', flag: '🇳🇿', name: 'New Zealand', digits: 9 },
  { code: '+353', flag: '🇮🇪', name: 'Ireland', digits: 9 },
  { code: '+49', flag: '🇩🇪', name: 'Germany', digits: 10 },
  { code: '+33', flag: '🇫🇷', name: 'France', digits: 9 },
  { code: '+39', flag: '🇮🇹', name: 'Italy', digits: 10 },
  { code: '+34', flag: '🇪🇸', name: 'Spain', digits: 9 },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands', digits: 9 },
  { code: '+32', flag: '🇧🇪', name: 'Belgium', digits: 9 },
  { code: '+41', flag: '🇨🇭', name: 'Switzerland', digits: 9 },
  { code: '+43', flag: '🇦🇹', name: 'Austria', digits: 10 },
  { code: '+46', flag: '🇸🇪', name: 'Sweden', digits: 9 },
  { code: '+47', flag: '🇳🇴', name: 'Norway', digits: 8 },
  { code: '+45', flag: '🇩🇰', name: 'Denmark', digits: 8 },
  { code: '+358', flag: '🇫🇮', name: 'Finland', digits: 9 },
  { code: '+351', flag: '🇵🇹', name: 'Portugal', digits: 9 },
  { code: '+30', flag: '🇬🇷', name: 'Greece', digits: 10 },
  { code: '+48', flag: '🇵🇱', name: 'Poland', digits: 9 },
  { code: '+420', flag: '🇨🇿', name: 'Czech Republic', digits: 9 },
  { code: '+36', flag: '🇭🇺', name: 'Hungary', digits: 9 },
  { code: '+40', flag: '🇷🇴', name: 'Romania', digits: 9 },
  { code: '+81', flag: '🇯🇵', name: 'Japan', digits: 10 },
  { code: '+82', flag: '🇰🇷', name: 'South Korea', digits: 10 },
  { code: '+65', flag: '🇸🇬', name: 'Singapore', digits: 8 },
  { code: '+852', flag: '🇭🇰', name: 'Hong Kong', digits: 8 },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia', digits: 9 },
  { code: '+66', flag: '🇹🇭', name: 'Thailand', digits: 9 },
  { code: '+55', flag: '🇧🇷', name: 'Brazil', digits: 11 },
  { code: '+52', flag: '🇲🇽', name: 'Mexico', digits: 10 },
  { code: '+54', flag: '🇦🇷', name: 'Argentina', digits: 10 },
  { code: '+56', flag: '🇨🇱', name: 'Chile', digits: 9 },
  { code: '+57', flag: '🇨🇴', name: 'Colombia', digits: 10 },
  { code: '+27', flag: '🇿🇦', name: 'South Africa', digits: 9 },
  { code: '+971', flag: '🇦🇪', name: 'UAE', digits: 9 },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia', digits: 9 },
  { code: '+91', flag: '🇮🇳', name: 'India', digits: 10 },
]

export default function Home() {
  const [phone, setPhone] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '')
    if (selectedCountry.code === '+1') {
      if (digits.length <= 3) return digits
      if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
    }
    return digits
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(e.target.value))
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 6) return
    const fullNumber = selectedCountry.code.replace('+', '') + digits
    router.push(`/number/${fullNumber}`)
  }

  function selectCountry(country: typeof COUNTRY_CODES[0]) {
    setSelectedCountry(country)
    setPhone('')
    setShowDropdown(false)
  }

  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', color: 'white', padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', lineHeight: '1.2' }}>
            Who Called You?
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '36px', lineHeight: '1.6' }}>
            Search any phone number worldwide to see spam reports and user comments. Free reverse phone lookup.
          </p>

          {/* Search Box - contrasting white background */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px 28px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          }}>
            <p style={{ color: '#374151', fontSize: '14px', fontWeight: '600', marginBottom: '14px', textAlign: 'left' }}>
              Select country &amp; enter phone number
            </p>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'stretch' }}>
              {/* Country selector */}
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{
                    padding: '13px 14px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: '2px solid #e5e7eb',
                    background: '#f9fafb',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#111',
                    whiteSpace: 'nowrap',
                    height: '52px',
                  }}
                >
                  <span>{selectedCountry.flag}</span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>{selectedCountry.code}</span>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>▼</span>
                </button>

                {showDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '10px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    zIndex: 100,
                    maxHeight: '300px',
                    overflowY: 'auto',
                    minWidth: '240px',
                    marginTop: '4px',
                  }}>
                    {COUNTRY_CODES.map((country, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => selectCountry(country)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          width: '100%',
                          padding: '10px 14px',
                          border: 'none',
                          background: selectedCountry.name === country.name ? '#eff6ff' : 'transparent',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontSize: '14px',
                          color: '#111',
                        }}
                      >
                        <span style={{ fontSize: '18px' }}>{country.flag}</span>
                        <span style={{ fontWeight: '500' }}>{country.name}</span>
                        <span style={{ color: '#6b7280', marginLeft: 'auto' }}>{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone input */}
              <input
                type="tel"
                value={phone}
                onChange={handleChange}
                placeholder={selectedCountry.code === '+1' ? '(555) 555-5555' : 'Phone number'}
                maxLength={16}
                style={{
                  padding: '13px 18px',
                  fontSize: '18px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  flex: 1,
                  minWidth: '180px',
                  outline: 'none',
                  color: '#111',
                  height: '52px',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#1d4ed8' }}
                onBlur={(e) => { e.target.style.borderColor = '#e5e7eb' }}
              />

              {/* Search button */}
              <button
                type="submit"
                style={{
                  padding: '13px 28px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  background: '#f97316',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  height: '52px',
                  whiteSpace: 'nowrap',
                }}
              >
                🔍 Search
              </button>
            </form>

            <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '10px', textAlign: 'left' }}>
              Free • No registration required • Results are instant
            </p>
          </div>

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
            {[
              { value: '2M+', label: 'Phone Reports' },
              { value: '40+', label: 'Countries Supported' },
              { value: '100%', label: 'Free to Use' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 'bold' }}>{stat.value}</div>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ maxWidth: '900px', margin: '56px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center', color: '#111827' }}>
          How It Works
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '32px', fontSize: '16px' }}>
          Identify spam calls in seconds with community-powered data
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
            { icon: '🔍', title: 'Search a Number', text: 'Enter any phone number from 40+ countries to instantly see spam reports and user comments.' },
            { icon: '📋', title: 'Read Reports', text: 'See if others have reported the number as spam, scam, robocall, or telemarketer.' },
            { icon: '✍️', title: 'Leave a Comment', text: 'Share your experience to help millions of others avoid unwanted and dangerous calls.' },
          ].map((item) => (
            <div key={item.title} style={{ background: 'white', borderRadius: '12px', padding: '28px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textAlign: 'center', border: '1px solid #f3f4f6' }}>
              <div style={{ fontSize: '40px', marginBottom: '14px' }}>{item.icon}</div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '17px', color: '#111827' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ maxWidth: '900px', margin: '48px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>
          Featured Guide
        </h2>
        <Link href="/blog/how-to-block-spam-calls" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: '1px solid #f3f4f6',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            <div style={{ fontSize: '48px' }}>🛡️</div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <span style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px' }}>
                GUIDE
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '8px', marginBottom: '8px', color: '#111827' }}>
                How to Block Spam Calls in the USA (2025 Complete Guide)
              </h3>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
                Learn how to stop robocalls, report scammers to the FTC, and use call-blocking apps on Android and iPhone.
              </p>
            </div>
            <div style={{ color: '#1d4ed8', fontWeight: '600', fontSize: '14px', whiteSpace: 'nowrap' }}>
              Read Guide →
            </div>
          </div>
        </Link>
      </section>

      {/* About */}
      <section style={{ maxWidth: '900px', margin: '40px auto 0', padding: '0 16px' }}>
        <div style={{ background: 'white', borderRadius: '12px', padding: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '14px', color: '#111827' }}>About WhoCalledUs</h2>
          <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '12px' }}>
            WhoCalledUs is a free community-powered reverse phone lookup service. We help people worldwide identify unknown callers,
            robocalls, telemarketers, and phone scams. Our database combines user-submitted reports with official FTC complaint records
            to give you the most accurate caller information available.
          </p>
          <p style={{ color: '#4b5563', lineHeight: '1.8' }}>
            All information on this site is submitted by users and is intended for informational purposes only.
            We are not a Consumer Reporting Agency (CRA) and our data should not be used for credit, employment,
            or tenant screening decisions as defined by the Fair Credit Reporting Act (FCRA).
          </p>
        </div>
      </section>

      {/* SEO content - Recent topics */}
      <section style={{ maxWidth: '900px', margin: '40px auto 56px', padding: '0 16px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>
          Common Spam Call Types
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {[
            { icon: '🤖', title: 'Robocalls', desc: 'Automated calls from political campaigns, scammers, or telemarketers.' },
            { icon: '💳', title: 'Credit Card Scams', desc: 'Calls claiming you owe money or offering fake card deals.' },
            { icon: '🏥', title: 'Medicare/Insurance', desc: 'Unsolicited calls about health insurance or Medicare benefits.' },
            { icon: '🏛️', title: 'IRS Impersonation', desc: 'Fake government calls threatening legal action over taxes.' },
            { icon: '🏆', title: 'Prize Scams', desc: 'You\'ve won a lottery you never entered - a classic red flag.' },
            { icon: '📱', title: 'Tech Support', desc: 'Fake Microsoft or Apple calls about your "infected" computer.' },
          ].map((item) => (
            <div key={item.title} style={{ background: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
              <h3 style={{ fontWeight: '600', fontSize: '14px', marginBottom: '6px', color: '#111827' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
