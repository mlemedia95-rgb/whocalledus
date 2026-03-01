import Link from 'next/link'
import { supabaseAdmin } from '@/lib/supabase'
import HomeSearch from './HomeSearch'

function formatPhone(digits: string) {
  if (digits.startsWith('1') && digits.length === 11) digits = digits.slice(1)
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  return digits
}

// Top spam numbers from FTC data (updated periodically)
const TOP_SPAM_NUMBERS = [
  { number: '8559090816', count: 79, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '8774196664', count: 51, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '8669591526', count: 36, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '5044818700', count: 34, subject: 'Other Spam', type: 'Live Caller' },
  { number: '3152158150', count: 30, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '8669591606', count: 18, subject: 'Other Spam', type: 'Live Caller' },
  { number: '8668786251', count: 18, subject: 'Work from Home Scam', type: 'Robocall' },
  { number: '8335883805', count: 15, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '3149678711', count: 14, subject: 'Medical & Prescription Scam', type: 'Live Caller' },
  { number: '8559090804', count: 13, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '3152158146', count: 12, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '8556881429', count: 12, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '8669590962', count: 11, subject: 'Debt Reduction Scam', type: 'Robocall' },
  { number: '8335101147', count: 11, subject: 'Government Impersonation', type: 'Robocall' },
  { number: '8337279955', count: 10, subject: 'Other Spam', type: 'Live Caller' },
  { number: '8887215215', count: 9, subject: 'Other Spam', type: 'Live Caller' },
  { number: '2015345822', count: 8, subject: 'Other Spam', type: 'Live Caller' },
  { number: '8669708121', count: 8, subject: 'Government Impersonation', type: 'Robocall' },
  { number: '7712473445', count: 8, subject: 'Government Impersonation', type: 'Live Caller' },
  { number: '6187954446', count: 8, subject: 'Other Spam', type: 'Live Caller' },
]

export default async function Home() {
  // Fetch recently searched numbers from Supabase
  const { data: recentNumbers } = await supabaseAdmin
    .from('phone_numbers')
    .select('number, search_count')
    .order('search_count', { ascending: false })
    .limit(12)

  return (
    <main>
      {/* Hero + Search */}
      <HomeSearch />

      {/* Top Spam Numbers - FTC Data */}
      <section style={{ maxWidth: '900px', margin: '56px auto 0', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
              🚨 Most Reported Spam Numbers in the USA
            </h2>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              Source: FTC (Federal Trade Commission) official complaint database
            </p>
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6', overflow: 'hidden' }}>
          {TOP_SPAM_NUMBERS.map((item, idx) => (
            <Link
              key={item.number}
              href={`/number/${item.number}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 20px',
                borderBottom: idx < TOP_SPAM_NUMBERS.length - 1 ? '1px solid #f3f4f6' : 'none',
              }}>
                <div style={{
                  minWidth: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: idx < 3 ? '#dc2626' : idx < 10 ? '#f97316' : '#6b7280',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}>
                  {idx + 1}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: '700', fontSize: '16px', color: '#111827' }}>
                    {formatPhone(item.number)}
                  </div>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '2px' }}>
                    {item.subject}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span style={{
                    background: '#fee2e2',
                    color: '#dc2626',
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.count} FTC reports
                  </span>
                  <span style={{
                    background: item.type === 'Robocall' ? '#fef3c7' : '#f3f4f6',
                    color: item.type === 'Robocall' ? '#92400e' : '#374151',
                    fontSize: '11px',
                    padding: '1px 6px',
                    borderRadius: '8px',
                  }}>
                    {item.type}
                  </span>
                </div>
                <div style={{ color: '#1d4ed8', fontSize: '18px' }}>›</div>
              </div>
            </Link>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '10px' }}>
          Data sourced from FTC Do Not Call complaints. Numbers ranked by complaint frequency.
        </p>
      </section>

      {/* Most Searched Numbers */}
      {recentNumbers && recentNumbers.length > 0 && (
        <section style={{ maxWidth: '900px', margin: '48px auto 0', padding: '0 16px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '8px', color: '#111827' }}>
            🔍 Most Searched Numbers
          </h2>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>
            Numbers other users are actively looking up right now
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
            {recentNumbers.map((item) => (
              <Link
                key={item.number}
                href={`/number/${item.number}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  border: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontWeight: '600', fontSize: '15px', color: '#1d4ed8' }}>
                    {formatPhone(item.number)}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                    {item.search_count} searches
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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

      {/* Common Spam Types */}
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
            { icon: '🏆', title: 'Prize Scams', desc: "You've won a lottery you never entered - a classic red flag." },
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
