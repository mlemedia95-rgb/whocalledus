'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [phone, setPhone] = useState('')
  const router = useRouter()

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, '')
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(e.target.value))
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) return
    router.push(`/number/${digits}`)
  }

  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#1d4ed8', color: 'white', padding: '48px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px' }}>
            Who Called You?
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px' }}>
            Search any US phone number to see spam reports and user comments. Free reverse phone lookup.
          </p>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="tel"
              value={phone}
              onChange={handleChange}
              placeholder="(555) 555-5555"
              maxLength={14}
              style={{
                padding: '14px 20px',
                fontSize: '18px',
                borderRadius: '8px',
                border: 'none',
                width: '260px',
                outline: 'none',
                color: '#111',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 28px',
                fontSize: '16px',
                fontWeight: 'bold',
                background: '#f97316',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Info */}
      <section style={{ maxWidth: '800px', margin: '40px auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
          How It Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {[
            { icon: '🔍', title: 'Search a Number', text: 'Enter any US phone number to instantly see reports from other users.' },
            { icon: '📋', title: 'Read Reports', text: 'See if others have reported the number as spam, scam, or robocall.' },
            { icon: '✍️', title: 'Leave a Comment', text: 'Share your experience to help others avoid unwanted calls.' },
          ].map((item) => (
            <div key={item.title} style={{ background: 'white', borderRadius: '10px', padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ fontWeight: 'bold', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{ maxWidth: '800px', margin: '0 auto 40px', padding: '0 16px' }}>
        <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>About WhoCalledUs</h2>
          <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '12px' }}>
            WhoCalledUs is a free community-powered reverse phone lookup service. We help Americans identify unknown callers,
            robocalls, telemarketers, and phone scams. Our database is built entirely from user-submitted reports.
          </p>
          <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
            All information on this site is submitted by users and is intended for informational purposes only.
            We are not a Consumer Reporting Agency (CRA) and our data should not be used for credit, employment,
            or tenant screening decisions as defined by the Fair Credit Reporting Act (FCRA).
          </p>
        </div>
      </section>
    </main>
  )
}
