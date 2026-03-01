import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Florida Phone Scams 2025: Most Common Spam Calls in FL | WhoCalledUs',
  description: 'Florida leads the nation in phone scams. Learn about the most common spam calls targeting Florida residents in 2025, including Medicare fraud, timeshare scams, and IRS impersonation.',
  keywords: 'Florida phone scams, Florida spam calls, Florida robocalls, Medicare fraud Florida, timeshare scam calls Florida, IRS scam Florida, who called me Florida',
  alternates: { canonical: '/blog/florida-phone-scams' },
  openGraph: {
    title: 'Florida Phone Scams 2025 - Most Common Spam & Robocalls in FL',
    description: 'Florida is the #1 state for phone scams. See the top scam types targeting FL residents and how to protect yourself.',
    url: 'https://whocalledus.net/blog/florida-phone-scams',
    type: 'article',
  },
}

export default function FloridaPhoneScams() {
  const floridaAreaCodes = [
    { code: '305', city: 'Miami' },
    { code: '786', city: 'Miami (overlay)' },
    { code: '954', city: 'Fort Lauderdale' },
    { code: '561', city: 'West Palm Beach' },
    { code: '813', city: 'Tampa' },
    { code: '727', city: 'St. Petersburg' },
    { code: '407', city: 'Orlando' },
    { code: '321', city: 'Orlando (overlay)' },
    { code: '904', city: 'Jacksonville' },
    { code: '850', city: 'Tallahassee / Pensacola' },
  ]

  return (
    <main style={{ maxWidth: '820px', margin: '0 auto', padding: '32px 16px 64px' }}>
      <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <Link href="/blog/how-to-block-spam-calls" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Blog</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>Florida Phone Scams</span>
      </nav>

      <header style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>FLORIDA</span>
          <span style={{ background: '#fef9c3', color: '#854d0e', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>UPDATED 2025</span>
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', lineHeight: '1.25', marginBottom: '16px' }}>
          Florida Phone Scams 2025: Most Common Spam Calls in the Sunshine State
        </h1>
        <p style={{ fontSize: '17px', color: '#4b5563', lineHeight: '1.7' }}>
          Florida consistently ranks among the <strong>top 3 states for phone scams</strong> in America.
          With a large senior population, millions of tourists, and a thriving real estate market,
          Florida residents are prime targets for robocallers and fraudsters. Here&apos;s what you need to know.
        </p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px', fontSize: '14px', color: '#6b7280', flexWrap: 'wrap' }}>
          <span>📅 Updated January 2025</span>
          <span>⏱ 6 min read</span>
        </div>
      </header>

      {/* Stats box */}
      <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '24px', marginBottom: '36px' }}>
        <h2 style={{ color: '#dc2626', fontWeight: '700', fontSize: '16px', marginBottom: '14px' }}>🚨 Florida Scam Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
          {[
            { stat: '#2', label: 'State for FTC fraud reports' },
            { stat: '$400M+', label: 'Lost to phone fraud yearly' },
            { stat: '65+', label: 'Age group most targeted' },
            { stat: '50B+', label: 'Robocalls in US per year' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center', background: 'white', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#dc2626' }}>{item.stat}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <article>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '20px' }}>
          Top 8 Phone Scams Targeting Florida Residents
        </h2>

        {[
          {
            rank: 1,
            icon: '🏥',
            title: 'Medicare & Health Insurance Fraud',
            risk: 'HIGHEST RISK',
            body: 'Florida has one of the largest Medicare-enrolled populations in the country. Scammers call claiming to offer "free" medical equipment, genetic testing kits, or updated Medicare cards. They use your Medicare number to bill for services never rendered. Never give your Medicare card number to an unsolicited caller.',
            tip: 'Medicare will never call you unsolicited to verify your benefits or ask for your Medicare number.',
          },
          {
            rank: 2,
            icon: '🏖️',
            title: 'Timeshare Cancellation Scams',
            risk: 'VERY COMMON',
            body: 'Florida has more timeshares than any other state. Scammers call timeshare owners offering to cancel their contracts for an upfront fee — sometimes thousands of dollars. They often claim to be attorneys or a government agency. Once you pay, they disappear.',
            tip: 'Legitimate timeshare exit companies never guarantee results or demand large upfront payments.',
          },
          {
            rank: 3,
            icon: '🌪️',
            title: 'Contractor & Storm Damage Fraud',
            risk: 'SEASONAL',
            body: 'After hurricanes and major storms, scammers flood Florida with calls offering cheap roof repairs, debris removal, and insurance claims help. They collect deposits and never show up, or do shoddy work. This surges every hurricane season (June–November).',
            tip: 'Always verify contractor licenses at myfloridalicense.com before paying any deposit.',
          },
          {
            rank: 4,
            icon: '🏦',
            title: 'IRS & Social Security Impersonation',
            risk: 'HIGH RISK',
            body: 'Callers claiming to be from the IRS or Social Security Administration threaten arrest for unpaid taxes or say your SSN has been "suspended." They demand immediate payment by wire transfer or gift cards. Florida seniors are disproportionately targeted by these scams.',
            tip: 'The IRS only contacts you first by mail, never by phone threatening immediate arrest.',
          },
          {
            rank: 5,
            icon: '🏠',
            title: 'Real Estate & Mortgage Robocalls',
            risk: 'COMMON',
            body: 'Florida\'s hot real estate market attracts constant robocalls offering to buy your house for cash, refinance your mortgage, or provide real estate leads. While some may be legitimate, many use high-pressure tactics or collect personal information for fraud.',
            tip: 'Register your number at donotcall.gov and report persistent real estate robocallers to the FTC.',
          },
          {
            rank: 6,
            icon: '🎁',
            title: 'Lottery & Prize Notification Scams',
            risk: 'COMMON',
            body: 'Florida has a large tourist population and many retirees. Scammers call claiming you\'ve won a Florida lottery prize, vacation package, or sweepstakes. They ask for a "processing fee" or "taxes" to release your prize — which doesn\'t exist.',
            tip: 'You cannot win a lottery you never entered. Real prize notifications never ask for upfront fees.',
          },
          {
            rank: 7,
            icon: '💊',
            title: 'Prescription Drug & Pharmacy Scams',
            risk: 'GROWING',
            body: 'Calls offer cheap prescription drugs, pain medication, or supplements. Some are fronts for illegal pill mills, others simply steal your credit card information. Florida has historically struggled with prescription drug abuse, making residents a target.',
            tip: 'Only buy medications from licensed US pharmacies. Report suspicious offers to the DEA at dea.gov.',
          },
          {
            rank: 8,
            icon: '🌞',
            title: 'Solar Panel Installation Robocalls',
            risk: 'GROWING',
            body: 'Florida\'s sunny climate has made solar installation robocalls extremely common. Callers claim you qualify for a "government program" for free or heavily discounted solar panels. The real goal is to collect personal info or sign you up for a high-interest lease.',
            tip: 'Contact solar companies directly rather than responding to unsolicited calls.',
          },
        ].map(item => (
          <div key={item.rank} style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ background: '#eff6ff', borderRadius: '10px', padding: '10px', fontSize: '28px', flexShrink: 0 }}>{item.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontWeight: '700', fontSize: '17px', color: '#111827', margin: 0 }}>#{item.rank} {item.title}</h3>
                  <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px' }}>{item.risk}</span>
                </div>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.7', marginBottom: '10px' }}>{item.body}</p>
                <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '10px 14px' }}>
                  <span style={{ color: '#15803d', fontWeight: '600', fontSize: '13px' }}>✓ Tip: </span>
                  <span style={{ color: '#166534', fontSize: '13px' }}>{item.tip}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Area codes */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6', marginBottom: '24px', marginTop: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
            📞 Florida Area Codes — Check Spam Reports
          </h2>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
            Getting calls from a Florida number? Click any area code below to see spam reports:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {floridaAreaCodes.map(ac => (
              <Link
                key={ac.code}
                href={`/area-code/${ac.code}`}
                style={{ background: '#eff6ff', color: '#1d4ed8', padding: '8px 16px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', fontSize: '14px' }}
              >
                {ac.code} <span style={{ fontWeight: '400', color: '#6b7280' }}>({ac.city})</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '32px', textAlign: 'center', marginTop: '32px' }}>
          <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Got a suspicious Florida call?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>Search any FL phone number for free — see spam reports instantly.</p>
          <Link href="/" style={{ background: '#f97316', color: 'white', padding: '13px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-block' }}>
            🔍 Search a Florida Number
          </Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'Florida Phone Scams 2025: Most Common Spam Calls in FL',
        description: 'Florida leads the nation in phone scams. Learn about Medicare fraud, timeshare scams, IRS impersonation and more.',
        url: 'https://whocalledus.net/blog/florida-phone-scams',
        datePublished: '2025-01-01', dateModified: '2025-01-15',
        author: { '@type': 'Organization', name: 'WhoCalledUs', url: 'https://whocalledus.net' },
      })}} />
    </main>
  )
}
