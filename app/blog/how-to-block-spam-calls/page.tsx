import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Block Spam Calls in the USA (2025 Complete Guide) | WhoCalledUs',
  description: 'Learn how to block spam calls, robocalls, and scam callers on iPhone and Android. Register with the Do Not Call list, report scammers to FTC, and use the best call-blocking apps.',
  keywords: 'block spam calls, stop robocalls, do not call list, FTC report spam, call blocking app, iPhone block spam, Android block robocall, how to stop unwanted calls USA',
  openGraph: {
    title: 'How to Block Spam Calls in the USA (2025 Complete Guide)',
    description: 'Step-by-step guide to stopping robocalls, scam calls, and telemarketers on any phone in the United States.',
    type: 'article',
    url: 'https://whocalledus.net/blog/how-to-block-spam-calls',
  },
}

export default function BlockSpamCallsGuide() {
  return (
    <main style={{ maxWidth: '820px', margin: '0 auto', padding: '32px 16px 64px' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>How to Block Spam Calls</span>
      </nav>

      {/* Hero */}
      <header style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span style={{ background: '#eff6ff', color: '#1d4ed8', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>GUIDE</span>
          <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>USA</span>
          <span style={{ background: '#fef9c3', color: '#854d0e', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>UPDATED 2025</span>
        </div>
        <h1 style={{ fontSize: '34px', fontWeight: 'bold', color: '#111827', lineHeight: '1.25', marginBottom: '16px' }}>
          How to Block Spam Calls in the USA (2025 Complete Guide)
        </h1>
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.7' }}>
          Americans received over <strong>50 billion robocalls in 2024</strong>. Whether it&apos;s fake IRS threats, Medicare scams, or endless telemarketers,
          spam calls are a serious problem. This guide explains every method you can use to stop them — for free — on any phone.
        </p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '14px', color: '#6b7280', flexWrap: 'wrap' }}>
          <span>📅 Last updated: January 2025</span>
          <span>⏱ 8 min read</span>
          <span>👤 By WhoCalledUs Editorial Team</span>
        </div>
      </header>

      {/* Table of Contents */}
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '14px', color: '#111827' }}>📑 Table of Contents</h2>
        <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { id: '#why', label: 'Why Are Spam Calls So Common?' },
            { id: '#do-not-call', label: 'Register for the National Do Not Call Registry' },
            { id: '#iphone', label: 'How to Block Spam Calls on iPhone' },
            { id: '#android', label: 'How to Block Spam Calls on Android' },
            { id: '#carrier', label: 'Free Tools from Your Phone Carrier' },
            { id: '#apps', label: 'Best Call-Blocking Apps (2025)' },
            { id: '#ftc', label: 'How to Report Spam Calls to the FTC' },
            { id: '#scams', label: 'Most Common Phone Scams in the USA' },
            { id: '#tips', label: 'Extra Tips to Stay Safe' },
          ].map(item => (
            <li key={item.id}>
              <a href={item.id} style={{ color: '#1d4ed8', textDecoration: 'none', fontSize: '14px' }}>{item.label}</a>
            </li>
          ))}
        </ol>
      </div>

      <article>
        {/* Section 1 */}
        <section id="why" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px', paddingTop: '8px' }}>
            1. Why Are Spam Calls So Common?
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '14px' }}>
            Spam calls exploded in the United States because they are <strong>extremely cheap to make</strong>. A scammer
            using Voice over Internet Protocol (VoIP) can dial thousands of numbers per hour for almost nothing.
            They also use <strong>caller ID spoofing</strong> to make their call appear to come from a local number or even a government agency.
          </p>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '14px' }}>
            The FTC and FCC have put laws in place (like the TRACED Act of 2019) to fight robocalls, but enforcement is
            difficult when callers operate overseas. The best defense is to take action yourself using the steps below.
          </p>
          <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '18px', marginTop: '20px' }}>
            <strong style={{ color: '#c2410c' }}>⚠️ Quick Fact:</strong>
            <p style={{ color: '#7c2d12', margin: '6px 0 0', fontSize: '14px', lineHeight: '1.6' }}>
              The FTC received over 1.8 million do-not-call complaints in 2024. The most reported scam types are
              impostor calls, warranty scams, and student loan fraud.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="do-not-call" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            2. Register for the National Do Not Call Registry
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '14px' }}>
            The <strong>National Do Not Call Registry</strong> is a free service run by the Federal Trade Commission (FTC). When you
            register your phone number, legitimate telemarketers are legally required to stop calling you within 31 days.
          </p>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
            <h3 style={{ color: '#15803d', fontWeight: '700', marginBottom: '12px', fontSize: '16px' }}>✅ How to Register (Takes 2 Minutes)</h3>
            <ol style={{ paddingLeft: '20px', color: '#166534', lineHeight: '2', margin: 0 }}>
              <li>Visit <strong>donotcall.gov</strong> (official FTC website)</li>
              <li>Click &quot;Register Your Phone&quot;</li>
              <li>Enter your phone number and email address</li>
              <li>Check your email and click the confirmation link</li>
              <li>Your number is registered — <strong>registration never expires</strong></li>
            </ol>
          </div>
          <p style={{ color: '#374151', lineHeight: '1.8' }}>
            <strong>Important:</strong> The Do Not Call list only stops <em>legal</em> telemarketers. Scammers and
            overseas robocallers ignore the list entirely. That is why you also need the steps below.
          </p>
        </section>

        {/* Section 3 */}
        <section id="iphone" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            3. How to Block Spam Calls on iPhone
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '16px' }}>
            Apple has built-in features that make it much easier to deal with spam calls on iOS.
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1d4ed8', marginBottom: '12px' }}>
            Method A: Silence Unknown Callers (iOS 13+)
          </h3>
          <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '18px', marginBottom: '20px' }}>
            <ol style={{ paddingLeft: '20px', color: '#374151', lineHeight: '2.2', margin: 0 }}>
              <li>Open <strong>Settings</strong> on your iPhone</li>
              <li>Scroll down and tap <strong>Phone</strong></li>
              <li>Tap <strong>Silence Unknown Callers</strong></li>
              <li>Toggle it <strong>ON</strong></li>
            </ol>
            <p style={{ color: '#6b7280', fontSize: '13px', marginTop: '10px', marginBottom: 0 }}>
              ℹ️ Calls from numbers not in your contacts, recent calls, or Siri suggestions will be silenced and sent to voicemail.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1d4ed8', marginBottom: '12px' }}>
            Method B: Block a Specific Number
          </h3>
          <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '18px', marginBottom: '20px' }}>
            <ol style={{ paddingLeft: '20px', color: '#374151', lineHeight: '2.2', margin: 0 }}>
              <li>Open the <strong>Phone</strong> app and go to <strong>Recents</strong></li>
              <li>Tap the ℹ️ icon next to the spam number</li>
              <li>Scroll down and tap <strong>Block this Caller</strong></li>
              <li>Tap <strong>Block Contact</strong> to confirm</li>
            </ol>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1d4ed8', marginBottom: '12px' }}>
            Method C: Enable Caller ID &amp; Spam Protection
          </h3>
          <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '18px' }}>
            <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '10px' }}>
              Download a call protection app (see Section 6) and enable it under
              <strong> Settings → Phone → Call Blocking &amp; Identification</strong>.
              This allows the app to automatically flag or block known spam numbers.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="android" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            4. How to Block Spam Calls on Android
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '16px' }}>
            Android (especially Google Pixel and Samsung Galaxy) has strong built-in spam protection.
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1d4ed8', marginBottom: '12px' }}>
            Method A: Google Phone App (Built-In Spam Filter)
          </h3>
          <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '18px', marginBottom: '20px' }}>
            <ol style={{ paddingLeft: '20px', color: '#374151', lineHeight: '2.2', margin: 0 }}>
              <li>Open the <strong>Phone</strong> app</li>
              <li>Tap the <strong>three-dot menu</strong> (top right)</li>
              <li>Tap <strong>Settings → Spam and Call Screen</strong></li>
              <li>Enable <strong>See caller &amp; spam ID</strong></li>
              <li>Enable <strong>Filter spam calls</strong> to automatically block them</li>
            </ol>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1d4ed8', marginBottom: '12px' }}>
            Method B: Block a Specific Number
          </h3>
          <div style={{ background: '#f8fafc', borderRadius: '10px', padding: '18px' }}>
            <ol style={{ paddingLeft: '20px', color: '#374151', lineHeight: '2.2', margin: 0 }}>
              <li>Open the <strong>Phone</strong> app and go to <strong>Recents</strong></li>
              <li>Long-press the spam number</li>
              <li>Tap <strong>Block / report spam</strong></li>
              <li>Check the box to report as spam, then tap <strong>Block</strong></li>
            </ol>
          </div>
        </section>

        {/* Section 5 */}
        <section id="carrier" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            5. Free Tools from Your Phone Carrier
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
            All major US carriers offer free spam call protection — most people don&apos;t know about it.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { carrier: 'AT&T', color: '#00a8e0', tool: 'ActiveArmor', desc: 'Free app + network-level blocking. Download the AT&T ActiveArmor app from the App Store or Google Play.' },
              { carrier: 'Verizon', color: '#cd040b', tool: 'Call Filter', desc: 'Free basic spam detection built into the Verizon app. Enable it in My Verizon → Account → Call Filter.' },
              { carrier: 'T-Mobile', color: '#e20074', tool: 'Scam Shield', desc: 'Free Scam Likely warnings on caller ID. Download the T-Mobile app and activate Scam Shield for free.' },
              { carrier: 'US Cellular', color: '#0066cc', tool: 'Call Guardian', desc: 'Identifies and blocks suspected spam calls automatically at the network level.' },
            ].map(item => (
              <div key={item.carrier} style={{ background: 'white', borderRadius: '10px', padding: '18px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ background: item.color, color: 'white', fontWeight: '700', fontSize: '13px', padding: '6px 12px', borderRadius: '6px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {item.carrier}
                </div>
                <div>
                  <strong style={{ color: '#111827', display: 'block', marginBottom: '4px' }}>{item.tool}</strong>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 */}
        <section id="apps" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            6. Best Call-Blocking Apps in 2025
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
            Third-party apps use crowdsourced databases and AI to identify spam calls before you even pick up.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { name: 'Hiya', rating: '4.5★', free: 'Free (Premium available)', desc: 'One of the largest spam number databases. Works on both iPhone and Android. Trusted by AT&T as the backbone for ActiveArmor.' },
              { name: 'Nomorobo', rating: '4.4★', free: 'Free for VoIP / $1.99/mo mobile', desc: 'Award-winning service that won the FTC\'s Robocall Challenge. Excellent for landlines and mobile phones.' },
              { name: 'RoboKiller', rating: '4.3★', free: '$4.99/mo', desc: 'Blocks 99% of robocalls and can even waste scammers\' time with AI "Answer Bots".' },
              { name: 'YouMail', rating: '4.4★', free: 'Free (Plus plans available)', desc: 'Combines voicemail, caller ID, and spam blocking. Especially useful if you want a visual voicemail replacement.' },
              { name: 'Call Control', rating: '4.2★', free: 'Free basic / Premium available', desc: 'Community-powered blocklist with over 1 billion blocked numbers. Great free tier for basic protection.' },
            ].map(item => (
              <div key={item.name} style={{ background: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 style={{ fontWeight: '700', fontSize: '17px', color: '#111827', margin: 0 }}>{item.name}</h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ background: '#fef9c3', color: '#854d0e', fontSize: '12px', padding: '3px 10px', borderRadius: '20px', fontWeight: '600' }}>{item.rating}</span>
                    <span style={{ background: '#f0fdf4', color: '#166534', fontSize: '12px', padding: '3px 10px', borderRadius: '20px', fontWeight: '600' }}>{item.free}</span>
                  </div>
                </div>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7 */}
        <section id="ftc" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            7. How to Report Spam Calls to the FTC
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '16px' }}>
            Reporting spam calls helps the FTC identify and take down scam operations. Your report directly
            feeds data to law enforcement investigations.
          </p>
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: '#1d4ed8', fontWeight: '700', marginBottom: '14px', fontSize: '16px' }}>📝 How to File an FTC Complaint</h3>
            <ol style={{ paddingLeft: '20px', color: '#1e3a8a', lineHeight: '2.2', margin: 0 }}>
              <li>Go to <strong>reportfraud.ftc.gov</strong> (official FTC reporting page)</li>
              <li>Select <strong>&quot;Unwanted calls, emails, and texts&quot;</strong></li>
              <li>Fill in the phone number, date, and what was said</li>
              <li>Submit the report — it takes about 2 minutes</li>
            </ol>
            <p style={{ color: '#1d4ed8', fontSize: '13px', marginTop: '14px', marginBottom: 0 }}>
              You can also call <strong>1-888-382-1222</strong> to report by phone (TTY: 1-866-290-4236).
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section id="scams" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            8. Most Common Phone Scams in the USA (2025)
          </h2>
          <p style={{ color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
            Knowing what scams are active helps you recognize them immediately. Never share personal information or money over the phone unless you initiated the call.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: '🏛️', name: 'IRS / Social Security Impersonation', warning: 'HIGH RISK', desc: 'Callers claim you owe back taxes or your SSN was "suspended". The government never calls to demand immediate payment by gift card or wire transfer.' },
              { icon: '💻', name: 'Tech Support Scams', warning: 'HIGH RISK', desc: 'Fake Microsoft/Apple calls say your computer has a virus. They want remote access to your device. Never give anyone remote access unless you called them first.' },
              { icon: '🏆', name: 'Sweepstakes / Lottery Scams', warning: 'COMMON', desc: 'You\'ve won a prize you never entered! They ask for an "processing fee" to release your winnings. Real lotteries never ask for payment upfront.' },
              { icon: '💊', name: 'Medicare / Health Insurance', warning: 'COMMON', desc: 'Scammers offer fake health plans or request your Medicare number. Your Medicare number is as sensitive as your credit card number.' },
              { icon: '🎓', name: 'Student Loan Forgiveness', warning: 'GROWING', desc: 'Calls offer to cancel your student loans for an upfront fee. Official loan forgiveness programs never charge a fee.' },
              { icon: '🚗', name: 'Vehicle Warranty', warning: 'VERY COMMON', desc: '"Your vehicle warranty is about to expire." These calls are almost always scams trying to collect your credit card details.' },
            ].map(item => (
              <div key={item.name} style={{ background: 'white', borderRadius: '10px', padding: '18px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', gap: '14px' }}>
                <span style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontWeight: '700', fontSize: '15px', color: '#111827', margin: 0 }}>{item.name}</h3>
                    <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px' }}>{item.warning}</span>
                  </div>
                  <p style={{ color: '#4b5563', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9 */}
        <section id="tips" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            9. Extra Tips to Stay Safe from Spam Calls
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { tip: 'Never press "1" or any button to opt out', detail: 'This confirms your number is active and can result in even more calls.' },
              { tip: 'Don\'t answer unknown numbers', detail: 'Let unfamiliar numbers go to voicemail. Legitimate callers will leave a message.' },
              { tip: 'Use WhoCalledUs to look up unknown numbers', detail: 'Search the number here before calling back — we show spam reports and user comments.' },
              { tip: 'Be careful where you share your number', detail: 'Every online form, app, or store loyalty card is a potential source of telemarketer lists.' },
              { tip: 'Use a secondary number for online signups', detail: 'Apps like Google Voice give you a free US number to use for forms and websites.' },
              { tip: 'Update your phone\'s operating system', detail: 'New iOS and Android versions often include improved spam detection and security patches.' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '10px', padding: '16px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ background: '#1d4ed8', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px', flexShrink: 0, marginTop: '1px' }}>
                  {idx + 1}
                </div>
                <div>
                  <strong style={{ color: '#111827', display: 'block', marginBottom: '4px', fontSize: '15px' }}>{item.tip}</strong>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '36px', textAlign: 'center', marginTop: '40px' }}>
          <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 'bold', marginBottom: '12px' }}>
            Got a suspicious call?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '24px', fontSize: '16px' }}>
            Look up any phone number instantly — see spam reports and user comments for free.
          </p>
          <Link href="/" style={{
            background: '#f97316',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '10px',
            fontWeight: '700',
            fontSize: '16px',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            🔍 Search a Phone Number
          </Link>
        </div>
      </article>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Block Spam Calls in the USA (2025 Complete Guide)',
            description: 'Learn how to stop robocalls, report scammers to the FTC, and use call-blocking apps on Android and iPhone.',
            url: 'https://whocalledus.net/blog/how-to-block-spam-calls',
            datePublished: '2025-01-01',
            dateModified: '2025-01-15',
            author: { '@type': 'Organization', name: 'WhoCalledUs', url: 'https://whocalledus.net' },
            publisher: { '@type': 'Organization', name: 'WhoCalledUs', url: 'https://whocalledus.net' },
          })
        }}
      />
    </main>
  )
}
