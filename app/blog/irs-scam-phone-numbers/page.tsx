import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IRS Scam Phone Numbers 2025: Fake IRS Calls & How to Spot Them | WhoCalledUs',
  description: 'Learn how to identify IRS impersonation scam phone numbers in 2025. Discover when the IRS never calls, known fake IRS number patterns, and how to report fraud to the FTC.',
  keywords: 'IRS scam phone numbers, fake IRS calls, IRS impersonation scam, IRS phone fraud 2025, fake IRS number, report IRS scam, 855 IRS scam, who called me IRS',
  alternates: { canonical: '/blog/irs-scam-phone-numbers' },
  openGraph: {
    title: 'IRS Scam Phone Numbers 2025 - Fake IRS Calls Explained',
    description: 'The IRS will never call to demand immediate payment. Learn how to spot fake IRS calls, known scam number patterns, and how to protect yourself.',
    url: 'https://whocalledus.net/blog/irs-scam-phone-numbers',
    type: 'article',
  },
}

export default function IrsScamPhoneNumbers() {
  const nums = [
    { number: '855-980-4221', slug: '8559804221', label: 'Reported IRS impersonation' },
    { number: '855-492-6775', slug: '8554926775', label: 'Fake IRS tax debt call' },
    { number: '855-750-2032', slug: '8557502032', label: 'Fraudulent IRS agent claim' },
    { number: '202-864-7179', slug: '2028647179', label: 'Fake DC IRS number' },
    { number: '800-906-9458', slug: '8009069458', label: 'Spoofed IRS helpline' },
    { number: '855-462-1530', slug: '8554621530', label: 'IRS arrest threat scam' },
  ]
  return (
    <main style={{ maxWidth: '820px', margin: '0 auto', padding: '32px 16px 64px' }}>
      <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>&#8250;</span>
        <Link href="/blog/how-to-block-spam-calls" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Blog</Link>
        <span style={{ margin: '0 8px' }}>&#8250;</span>
        <span>IRS Scam Phone Numbers</span>
      </nav>

      <header style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{ background: '#fef2f2', color: '#dc2626', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>IRS FRAUD</span>
          <span style={{ background: '#fef9c3', color: '#854d0e', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>UPDATED 2025</span>
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', lineHeight: '1.25', marginBottom: '16px' }}>
          IRS Scam Phone Numbers 2025: How to Spot Fake IRS Calls and Protect Yourself
        </h1>
        <p style={{ fontSize: '17px', color: '#4b5563', lineHeight: '1.7' }}>
          IRS impersonation scams are consistently among the <strong>top reported phone frauds</strong> in the United States.
          Scammers use fear tactics, spoofed caller IDs, and urgent threats to steal money from unsuspecting taxpayers.
          This guide explains how these scams work, what fake IRS phone numbers look like, and how to report them.
        </p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px', fontSize: '14px', color: '#6b7280', flexWrap: 'wrap' }}>
          <span>Updated January 2025</span>
          <span>7 min read</span>
        </div>
      </header>

      <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '24px', marginBottom: '36px' }}>
        <h2 style={{ color: '#dc2626', fontWeight: '700', fontSize: '16px', marginBottom: '14px' }}>IRS Scam Fast Facts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
          {[
            { stat: '.6B+', label: 'Lost to tax fraud annually' },
            { stat: '#1', label: 'Most impersonated US agency' },
            { stat: '2.4M', label: 'IRS scam reports to FTC (2024)' },
            { stat: '00+', label: 'Average victim loss per incident' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'center', background: 'white', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#dc2626' }}>{item.stat}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <article>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          When the IRS Will NEVER Call You
        </h2>
        <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
          The single most important thing to understand about IRS scam calls is this: {' '}
          <strong>the IRS always initiates contact by mail, not by phone.</strong> If you receive an unexpected phone
          call from someone claiming to be the IRS, treat it as a scam until proven otherwise.
        </p>
        <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '24px', marginBottom: '28px', border: '1px solid #fecaca' }}>
          <h3 style={{ color: '#dc2626', fontWeight: '700', fontSize: '17px', marginBottom: '14px' }}>The IRS will NEVER call to:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Demand immediate payment without first mailing you an official notice',
              'Require a specific payment method such as a gift card, wire transfer, or cryptocurrency',
              'Threaten to bring in police or immigration agents to arrest you',
              'Demand payment without giving you the chance to question or appeal the amount',
              'Ask for credit or debit card numbers over the phone',
              'Tell you that you owe taxes without giving you the opportunity to consult a lawyer',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', color: '#7f1d1d', fontSize: '14px', lineHeight: '1.6' }}>
                <span style={{ color: '#dc2626', fontWeight: '700', flexShrink: 0 }}>&#x2717;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', marginTop: '32px' }}>
          How IRS Phone Scams Work in 2025
        </h2>
        {[
          { rank: 1, icon: '📞', title: 'The Threatening Robocall', risk: 'MOST COMMON',
            body: 'You receive a robocall often spoofed to display a government or IRS number stating that a lawsuit has been filed against you for tax fraud. The automated message says you must call back immediately or face arrest. These calls are designed to create panic and get you on the phone with a live scammer.',
            tip: 'Hang up immediately. Do not call back any number left in a voicemail claiming to be the IRS.' },
          { rank: 2, icon: '🎭', title: 'The Live Agent Threat', risk: 'HIGH RISK',
            body: 'A scammer posing as an IRS agent calls you directly or transfers you after the robocall. They may know your name, partial address, and the last 4 digits of your SSN purchased from data breaches. They claim you owe back taxes and must pay immediately via wire transfer, Zelle, or gift cards to avoid arrest.',
            tip: 'Any payment demand via gift card, wire transfer, or cryptocurrency is a guaranteed scam. Real IRS agents never request these methods.' },
          { rank: 3, icon: '🔁', title: 'The Callback Scam', risk: 'GROWING',
            body: 'You receive a missed call from a number starting with 855 or 877, or sometimes a spoofed Washington DC area code (202). When you call back, a fake IRS agent claims to have important information about your tax account and needs to verify your Social Security Number.',
            tip: 'Never call back unknown missed calls, especially 855/877 numbers claiming to be about tax issues.' },
          { rank: 4, icon: '📧', title: 'Phishing + Follow-Up Call', risk: 'SOPHISTICATED',
            body: 'Some scammers send a fake IRS email or letter first, then call to follow up. The letter may look official with IRS logos and an OMB number. The call references the fake letter to build credibility. This two-step approach fools many victims who assume a letter proves legitimacy.',
            tip: 'Verify any IRS letter by calling the IRS directly at 1-800-829-1040, the official number found on irs.gov.' },
        ].map(item => (
          <div key={item.rank} style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #f3f4f6', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ background: '#fef2f2', borderRadius: '10px', padding: '10px', fontSize: '28px', flexShrink: 0 }}>{item.icon}</div>
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
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>Known IRS Scam Phone Numbers</h2>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>The following numbers have been widely reported as IRS impersonation scam lines. Click any number to view community reports:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {nums.map(item => (
              <Link key={item.number} href={'/number/' + item.slug}
                style={{ background: '#fef2f2', color: '#dc2626', padding: '8px 16px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', fontSize: '14px', border: '1px solid #fecaca' }}>
                {item.number} <span style={{ fontWeight: '400', color: '#6b7280', fontSize: '12px' }}>&#8212; {item.label}</span>
              </Link>
            ))}
          </div>
          <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '14px' }}>Note: Scammers constantly rotate numbers. A number not listed here may still be fraudulent.</p>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', marginTop: '32px' }}>Red Flags: How to Identify a Fake IRS Call</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '28px' }}>
          {[
            { flag: 'Immediate payment demand', detail: 'Real IRS gives you time to verify and appeal before any action' },
            { flag: 'Gift card or wire payment', detail: 'IRS only accepts checks, direct pay, or credit card via IRS.gov' },
            { flag: 'Threatens arrest on the call', detail: 'IRS agents cannot arrest anyone — that requires a court action' },
            { flag: '855 or 877 callback number', detail: 'Toll-free numbers are easily spoofed and faked by scammers' },
            { flag: 'Caller ID shows IRS', detail: 'Caller ID spoofing is trivial and proves nothing about the caller' },
            { flag: 'Asks for your full SSN', detail: 'The IRS already has your SSN on file from your filed returns' },
          ].map(item => (
            <div key={item.flag} style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '16px' }}>
              <div style={{ fontWeight: '700', color: '#92400e', fontSize: '14px', marginBottom: '6px' }}>{item.flag}</div>
              <div style={{ color: '#78350f', fontSize: '13px', lineHeight: '1.5' }}>{item.detail}</div>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', marginTop: '32px' }}>How to Report IRS Scam Calls</h2>
        <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>Reporting scam calls is one of the most effective ways to shut down fraudulent operations. When you report, you help the FTC, IRS, and law enforcement track patterns and identify scam rings. It takes only a few minutes and could protect thousands of others.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
          {[
            { step: '1', title: 'Report to the FTC', body: 'Visit reportfraud.ftc.gov and file a detailed report. Include the phone number, date, time, what was said, and any payment demands.' },
            { step: '2', title: 'Report to the IRS Treasury Inspector General', body: 'Call 1-800-366-4484 or visit tigta.gov to report directly to the agency being impersonated.' },
            { step: '3', title: 'File with the Internet Crime Complaint Center', body: 'If you lost money, file at ic3.gov. The FBI tracks financial fraud and can sometimes help recover funds if reported quickly.' },
            { step: '4', title: 'Report the Number on WhoCalledUs', body: 'Search the scam number on our site to warn others. Your community report helps thousands of people avoid the same scam.' },
          ].map(item => (
            <div key={item.step} style={{ background: 'white', borderRadius: '10px', padding: '18px 20px', boxShadow: '0 1px 6px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: '#1d4ed8', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>{item.step}</div>
              <div>
                <div style={{ fontWeight: '700', color: '#111827', fontSize: '15px', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', marginTop: '32px' }}>Protection Tips: How to Avoid IRS Scams</h2>
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '24px', marginBottom: '28px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Create an IRS Online Account at irs.gov to verify your real tax status at any time.',
              'Never pay taxes by gift card, wire transfer, cryptocurrency, or Venmo/Zelle — these are scam-only payment methods.',
              'If you owe taxes, the IRS will send multiple official letters before any phone contact.',
              'Sign up for IRS Identity Protection PIN (IP PIN) to prevent someone else from filing taxes with your SSN.',
              'Use a call-blocking app like Hiya or Nomorobo to automatically filter known scam numbers.',
              'If uncertain, hang up and call the IRS directly at 1-800-829-1040, the official number found on irs.gov.',
              'Tell elderly family members about these scams — seniors over 65 are the most targeted demographic.',
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
            <Link href="/blog/social-security-scam-calls" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>Social Security Scam Calls: How to Spot SSA Impersonators</Link>
            <Link href="/blog/medicare-scam-calls" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>Medicare Scam Calls 2025: Protecting Your Health Benefits</Link>
            <Link href="/blog/robocall-blocker-apps" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>Best Robocall Blocker Apps 2025: Hiya vs Nomorobo vs RoboKiller</Link>
            <Link href="/blog/how-to-block-spam-calls" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>How to Block Spam Calls on iPhone and Android</Link>
            <Link href="/blog/florida-phone-scams" style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>Florida Phone Scams 2025: Most Common Spam Calls in FL</Link>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '32px', textAlign: 'center', marginTop: '32px' }}>
          <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Got a suspicious IRS call?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '20px' }}>Search any phone number for free and see if others have reported it as an IRS scam.</p>
          <Link href="/" style={{ background: '#f97316', color: 'white', padding: '13px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'inline-block' }}>Search a Number Now</Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'IRS Scam Phone Numbers 2025: Fake IRS Calls & How to Spot Them',
        description: 'Learn how to identify IRS impersonation scam phone numbers, when the IRS never calls, and how to report fraud to the FTC.',
        url: 'https://whocalledus.net/blog/irs-scam-phone-numbers',
        datePublished: '2025-01-01', dateModified: '2025-01-15',
        author: { '@type': 'Organization', name: 'WhoCalledUs', url: 'https://whocalledus.net' },
      })}} />
    </main>
  )
}