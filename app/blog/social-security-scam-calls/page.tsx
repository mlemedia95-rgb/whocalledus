import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Security Scam Calls 2025: How to Spot SSA Phone Fraud | WhoCalledUs',
  description: 'Protect yourself from Social Security Administration scam calls in 2025. Learn SSA impersonation tactics, phone numbers to watch for, and how to report fraud.',
  keywords: 'social security scam calls, SSA phone scam, social security impersonation, fake SSA calls, social security fraud phone, who called me SSA',
  alternates: { canonical: '/blog/social-security-scam-calls' },
  openGraph: {
    title: 'Social Security Scam Calls 2025 - Spot and Report SSA Fraud',
    description: 'The SSA never calls to suspend your Social Security number. Learn how these scams work and how to protect yourself.',
    url: 'https://whocalledus.net/blog/social-security-scam-calls',
    type: 'article',
  },
}

export default function SocialSecurityScamCalls() {
  const reportedNums = [
    { number: '800-772-1213', slug: '8007721213', label: 'Spoofed SSA main line' },
    { number: '844-819-0930', slug: '8448190930', label: 'Reported SSA impersonation' },
    { number: '833-902-3403', slug: '8339023403', label: 'Fake SSA suspension alert' },
    { number: '877-482-2942', slug: '8774822942', label: 'SSA benefits fraud call' },
    { number: '202-515-2000', slug: '2025152000', label: 'Spoofed DC SSA number' },
  ]
  return (
    <main style={{ maxWidth: '820px', margin: '0 auto', padding: '32px 16px 64px' }}>
      <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>&#8250;</span>
        <Link href="/blog/how-to-block-spam-calls" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Blog</Link>
        <span style={{ margin: '0 8px' }}>&#8250;</span>
        <span>Social Security Scam Calls</span>
      </nav>

      <header style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>SSA FRAUD</span>
          <span style={{ background: '#fef9c3', color: '#854d0e', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>UPDATED 2025</span>
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', lineHeight: '1.25', marginBottom: '16px' }}>Social Security Scam Calls 2025: How to Recognize and Stop SSA Fraud</h1>
        <p style={{ fontSize: '17px', color: '#4b5563', lineHeight: '1.7' }}>
          Social Security Administration scam calls are among the <strong>most reported phone frauds</strong> in America.
          Scammers impersonate SSA agents, threaten to suspend your Social Security number, and pressure you into making
          immediate payments. This guide explains every tactic they use and how to protect yourself.
        </p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px', fontSize: '14px', color: '#6b7280', flexWrap: 'wrap' }}>
          <span>Updated January 2025</span>
          <span>6 min read</span>
        </div>
      </header>
      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px', marginBottom: '36px' }}>
        <h2 style={{ color: '#1d4ed8', fontWeight: '700', fontSize: '16px', marginBottom: '14px' }}>SSA Scam Fast Facts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
          {[
            { stat: '.1B+', label: 'Lost to SSA impersonation annually' },
            { stat: '#2', label: 'Most impersonated federal agency' },
            { stat: '500K+', label: 'SSA fraud reports in 2024' },
            { stat: 'K+', label: 'Average loss per victim' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center', background: 'white', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1d4ed8' }}>{item.stat}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <article>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>When the SSA Will NEVER Call You</h2>
        <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>The Social Security Administration does occasionally call people for follow-ups on applications or existing cases. However, there are very specific things the SSA will never do by phone, and these are exactly what scammers threaten.</p>
        <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '24px', marginBottom: '28px', border: '1px solid #fecaca' }}>
          <h3 style={{ color: '#dc2626', fontWeight: '700', fontSize: '17px', marginBottom: '14px' }}>The SSA will NEVER call to:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Threaten to suspend or cancel your Social Security number',
              'Demand immediate payment by gift card, wire transfer, or cryptocurrency',
              'Threaten arrest by police or immigration officials for unpaid debts',
              'Promise to increase your benefits in exchange for personal information',
              'Ask you to wire money to protect your assets from a criminal investigation',
              'Request your complete Social Security number over an unsolicited call',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', color: '#7f1d1d', fontSize: '14px', lineHeight: '1.6' }}>
                <span style={{ color: '#dc2626', fontWeight: '700', flexShrink: 0 }}>&#x2717;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', marginTop: '32px' }}>Common SSA Scam Tactics in 2025</h2>
        {[
          { rank: 1, icon: '🚫', title: 'The SSN Suspension Threat', risk: 'MOST COMMON',
            body: 'A robocall or live agent claims your Social Security number has been suspended due to suspicious activity or criminal use. They say you must verify your identity and pay fees immediately to unlock it. Social Security numbers cannot be suspended.',
            tip: 'Social Security numbers cannot be suspended. Any call making this claim is a 100% guaranteed scam.' },
          { rank: 2, icon: '👮', title: 'The Arrest Warrant Scam', risk: 'HIGH RISK',
            body: 'The caller claims a warrant has been issued for your arrest for tax fraud, money laundering, or drug trafficking linked to your SSN. They say paying an immediate fine will stop the arrest. They often stay on the phone while you buy gift cards or wire money.',
            tip: 'Federal agents do not call to warn you about impending arrests. They come to your door with paperwork.' },
          { rank: 3, icon: '💰', title: 'The Benefits Increase Scam', risk: 'GROWING',
            body: 'Scammers call claiming you are entitled to an increase in your Social Security benefits, but must verify your identity and bank account to receive the increase. They collect your banking details and drain your account within hours.',
            tip: 'The SSA contacts you by mail about benefit changes. Never give bank account details to an unsolicited caller.' },
          { rank: 4, icon: '🔒', title: 'The Safe Account Scam', risk: 'SOPHISTICATED',
            body: 'The scammer says your SSN was used in crimes and your money is at risk. They instruct you to move your savings to a safe government account. The account belongs to the scammer. Victims have lost entire retirement savings this way.',
            tip: 'No government agency will ever ask you to move money to protect it. This is always a scam.' },
          { rank: 5, icon: '📱', title: 'The Callback Robocall', risk: 'COMMON',
            body: 'You receive a robocall with an urgent message about your SSN and a number to call back. The callback number often starts with 844, 833, or 877. When you call, a live scammer is ready to continue the fraud and collect payment or personal information.',
            tip: 'Do not call back 844/833/877 numbers from SSA voicemails. Call the real SSA at 1-800-772-1213.' },
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
                  <span style={{ color: '#15803d', fontWeight: '600', fontSize: '13px' }}>&#10003; Tip: </span>
                  <span style={{ color: '#166534', fontSize: '13px' }}>{item.tip}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6', marginBottom: '24px', marginTop: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>Reported SSA Scam Phone Numbers</h2>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>These numbers have been reported as SSA impersonation lines. Click to view community warnings:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {reportedNums.map(item => (
              <Link key={item.number} href={'/number/' + item.slug}
                style={{ background: '#eff6ff', color: '#1d4ed8', padding: '8px 16px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', fontSize: '14px', border: '1px solid #bfdbfe' }}>
                {item.number} <span style={{ fontWeight: '400', color: '#6b7280', fontSize: '12px' }}>&#8212; {item.label}</span>
              </Link>
            ))}
          </div>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '14px' }}>Note: Scammers frequently rotate numbers. Treat any call matching the above tactics as suspicious.</p>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', marginTop: '32px' }}>How to Protect Yourself from SSA Scams</h2>
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '24px', marginBottom: '28px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Create a my Social Security account at ssa.gov to monitor your benefits and SSN status online.',
              'Know that SSA cannot suspend your Social Security number — any such claim is a scam.',
              'Never pay by gift card, wire transfer, or cryptocurrency in response to any government-related call.',
              'If you receive an unexpected SSA call, hang up and call SSA directly at 1-800-772-1213.',
              'Report SSA impersonation scams to the SSA OIG at oig.ssa.gov or call 1-800-269-0271.',
              'Use call-blocking apps like Hiya or Nomorobo to filter known scam numbers automatically.',
              'Tell elderly relatives — SSA scams disproportionately target people aged 60 and over.',
            ].map((tip, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', color: '#166534', fontSize: '14px', lineHeight: '1.6' }}>
                <span style={{ color: '#16a34a', fontWeight: '700', flexShrink: 0 }}>&#10003;</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#111827', marginBottom: '14px' }}>Related Articles</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href="/blog/irs-scam-phone-numbers" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>IRS Scam Phone Numbers 2025: How to Spot Fake IRS Calls</Link>
            <Link href="/blog/medicare-scam-calls" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>Medicare Scam Calls 2025: Protecting Your Health Benefits</Link>
            <Link href="/blog/robocall-blocker-apps" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>Best Robocall Blocker Apps 2025</Link>
            <Link href="/blog/how-to-block-spam-calls" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>How to Block Spam Calls on iPhone and Android</Link>
            <Link href="/blog/florida-phone-scams" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>Florida Phone Scams 2025: Most Common Spam Calls in FL</Link>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '32px', textAlign: 'center', marginTop: '32px' }}>
          <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Got a suspicious SSA call?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>Search any phone number for free and see if others have reported it as a Social Security scam.</p>
          <Link href="/" style={{ background: '#f97316', color: 'white', padding: '13px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-block' }}>Search a Number Now</Link>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'Social Security Scam Calls 2025: How to Spot SSA Phone Fraud',
        description: 'Protect yourself from Social Security Administration scam calls. Learn SSA impersonation tactics and how to report fraud.',
        url: 'https://whocalledus.net/blog/social-security-scam-calls',
        datePublished: '2025-01-01', dateModified: '2025-01-15',
        author: { '@type': 'Organization', name: 'WhoCalledUs', url: 'https://whocalledus.net' },
      })}} />
    </main>
  )
}