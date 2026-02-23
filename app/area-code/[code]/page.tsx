import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ code: string }>
}

const AREA_CODE_DATA: Record<string, {
  city: string
  state: string
  stateAbbr: string
  population: string
  region: string
  timezone: string
  spamTypes: string[]
  knownSpamPrefixes: string[]
  tips: string[]
  neighborCodes: string[]
}> = {
  '212': {
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3 million',
    region: 'Manhattan',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['IRS impersonation', 'Social Security scams', 'Real estate robocalls', 'Credit card offers', 'Student loan forgiveness'],
    knownSpamPrefixes: ['212-555', '212-800', '212-999'],
    tips: ['Manhattan residents report high rates of IRS impersonation calls', 'Many 212 spam calls claim to be from NYC government agencies', 'Real estate robocalls are especially common in NYC area'],
    neighborCodes: ['646', '718', '917', '347'],
  },
  '646': {
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3 million',
    region: 'Manhattan (overlay)',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Tech support scams', 'Warranty robocalls', 'Fake package delivery', 'IRS impersonation', 'Debt collection scams'],
    knownSpamPrefixes: ['646-555', '646-800'],
    tips: ['646 is an overlay code for Manhattan alongside 212', 'Many scammers spoof 646 numbers to appear local to NYC', 'High volume of fake package delivery calls in this area'],
    neighborCodes: ['212', '718', '917', '347'],
  },
  '718': {
    city: 'New York City',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3 million',
    region: 'Brooklyn, Queens, Bronx, Staten Island',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Medicare scams', 'Utility company impersonation', 'Debt collection', 'Auto warranty', 'Prize/sweepstakes scams'],
    knownSpamPrefixes: ['718-555', '718-000'],
    tips: ['718 covers the outer boroughs of NYC', 'Utility scams impersonating Con Edison are common', 'Medicare and health insurance scams target seniors in this area'],
    neighborCodes: ['212', '646', '917', '347'],
  },
  '213': {
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9 million',
    region: 'Downtown Los Angeles',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Entertainment industry scams', 'Mortgage robocalls', 'IRS impersonation', 'Immigration scams', 'Lottery scams'],
    knownSpamPrefixes: ['213-555', '213-800'],
    tips: ['LA area sees many entertainment and casting scams', 'Immigration-related phone scams are very common in LA', 'Mortgage and real estate robocalls are frequent'],
    neighborCodes: ['310', '323', '424', '818'],
  },
  '310': {
    city: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9 million',
    region: 'West LA, Santa Monica, Beverly Hills',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Real estate robocalls', 'Investment scams', 'Tech support', 'Auto warranty', 'Health insurance'],
    knownSpamPrefixes: ['310-555', '310-800'],
    tips: ['West LA area gets many luxury real estate robocalls', 'Investment scams frequently target 310 area residents', 'High rate of spoofed local numbers to appear trustworthy'],
    neighborCodes: ['213', '323', '424', '818'],
  },
  '312': {
    city: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7 million',
    region: 'Downtown Chicago',
    timezone: 'Central Time (CT)',
    spamTypes: ['Utility scams', 'IRS impersonation', 'Social Security', 'Auto warranty', 'Health insurance robocalls'],
    knownSpamPrefixes: ['312-555', '312-800'],
    tips: ['ComEd (utility) impersonation scams are very common in Chicago', 'Many scammers use 312 spoofed numbers to appear local', 'High volume of health insurance robocalls in Illinois'],
    neighborCodes: ['773', '872', '630', '847'],
  },
  '713': {
    city: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3 million',
    region: 'Central Houston',
    timezone: 'Central Time (CT)',
    spamTypes: ['Energy company scams', 'IRS impersonation', 'Contractor fraud calls', 'Medicare scams', 'Vehicle warranty'],
    knownSpamPrefixes: ['713-555', '713-800'],
    tips: ['Houston area sees many energy/utility company impersonation calls', 'Contractor scam calls are common especially after storms', 'High volume of Medicare and insurance robocalls'],
    neighborCodes: ['832', '281', '346'],
  },
  '832': {
    city: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3 million',
    region: 'Greater Houston (overlay)',
    timezone: 'Central Time (CT)',
    spamTypes: ['Debt collection', 'Auto warranty', 'IRS scams', 'Tech support', 'Payday loan robocalls'],
    knownSpamPrefixes: ['832-555', '832-800'],
    tips: ['832 is an overlay for Houston alongside 713', 'Many robocallers spoof 832 numbers to appear local', 'Payday loan and debt collection scams are very active'],
    neighborCodes: ['713', '281', '346'],
  },
  '305': {
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '470,000',
    region: 'Miami-Dade County',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Medicare fraud', 'Immigration scams', 'Lottery scams', 'Romance scams', 'IRS impersonation'],
    knownSpamPrefixes: ['305-555', '305-800'],
    tips: ['Miami is a major hub for Medicare fraud calls targeting seniors', 'Immigration scams in Spanish are very common in 305 area', 'High volume of international lottery and prize scams'],
    neighborCodes: ['786', '954', '561'],
  },
  '786': {
    city: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    population: '470,000',
    region: 'Miami-Dade County (overlay)',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Spanish-language robocalls', 'Medicare scams', 'Fake charity calls', 'Debt collection', 'Travel scams'],
    knownSpamPrefixes: ['786-555', '786-800'],
    tips: ['786 is an overlay for Miami alongside 305', 'Many bilingual (Spanish/English) scam calls use 786 numbers', 'Travel and vacation club scams are frequent in Miami area'],
    neighborCodes: ['305', '954', '561'],
  },
  '214': {
    city: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '1.3 million',
    region: 'Dallas',
    timezone: 'Central Time (CT)',
    spamTypes: ['Real estate robocalls', 'IRS impersonation', 'Business loan scams', 'Auto warranty', 'Utility scams'],
    knownSpamPrefixes: ['214-555', '214-800'],
    tips: ['Dallas area has high rates of real estate robocalls', 'Business loan and investment scams frequently target 214 numbers', 'Oncor (utility) impersonation calls are common'],
    neighborCodes: ['469', '972', '817'],
  },
  '404': {
    city: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    population: '500,000',
    region: 'Atlanta',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['IRS scams', 'Social Security impersonation', 'Health insurance', 'Auto warranty', 'Student loan forgiveness'],
    knownSpamPrefixes: ['404-555', '404-800'],
    tips: ['Atlanta area sees high rates of government impersonation calls', 'Many scammers spoof CDC or other Atlanta-based agency numbers', 'Student loan forgiveness scams are very active in Georgia'],
    neighborCodes: ['678', '770', '470'],
  },
  '602': {
    city: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.6 million',
    region: 'Phoenix',
    timezone: 'Mountain Time (no DST)',
    spamTypes: ['Medicare scams', 'Social Security', 'Home warranty', 'Solar panel robocalls', 'Debt collection'],
    knownSpamPrefixes: ['602-555', '602-800'],
    tips: ['Phoenix area has many solar panel installation robocalls', 'High senior population means Medicare scams are very common', 'Home warranty robocalls are among the most reported in AZ'],
    neighborCodes: ['480', '623', '520'],
  },
  '415': {
    city: 'San Francisco',
    state: 'California',
    stateAbbr: 'CA',
    population: '870,000',
    region: 'San Francisco',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Tech support scams', 'Crypto investment fraud', 'IRS impersonation', 'Student loan', 'Fake job offers'],
    knownSpamPrefixes: ['415-555', '415-800'],
    tips: ['SF area sees many tech company impersonation scams (fake Google, Apple)', 'Cryptocurrency investment fraud calls are very common in Bay Area', 'Fake job offer scams frequently target tech workers'],
    neighborCodes: ['510', '650', '408', '628'],
  },
  '206': {
    city: 'Seattle',
    state: 'Washington',
    stateAbbr: 'WA',
    population: '750,000',
    region: 'Seattle',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Amazon impersonation', 'Microsoft tech support', 'IRS scams', 'Auto warranty', 'Health insurance'],
    knownSpamPrefixes: ['206-555', '206-800'],
    tips: ['Amazon impersonation scams are extremely common in Seattle area', 'Microsoft tech support scams frequently spoof Seattle area numbers', 'High rate of phishing calls targeting Amazon Prime members'],
    neighborCodes: ['253', '425', '360'],
  },
  '617': {
    city: 'Boston',
    state: 'Massachusetts',
    stateAbbr: 'MA',
    population: '675,000',
    region: 'Boston',
    timezone: 'Eastern Time (ET)',
    spamTypes: ['Student loan scams', 'IRS impersonation', 'Medicare', 'Utility scams', 'Charity fraud'],
    knownSpamPrefixes: ['617-555', '617-800'],
    tips: ['Boston area has many student loan-related scam calls targeting college students', 'Eversource/National Grid utility impersonation calls are common', 'High volume of Medicare scams targeting senior population'],
    neighborCodes: ['781', '339', '508', '978'],
  },
  '702': {
    city: 'Las Vegas',
    state: 'Nevada',
    stateAbbr: 'NV',
    population: '650,000',
    region: 'Las Vegas Valley',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['Gambling/casino scams', 'Timeshare calls', 'IRS scams', 'Hotel deal robocalls', 'Debt collection'],
    knownSpamPrefixes: ['702-555', '702-800'],
    tips: ['Las Vegas area has many timeshare cancellation scam calls', 'Casino and gambling-related fraud calls are unique to this area', 'Hotel and vacation deal robocalls are very frequent'],
    neighborCodes: ['725', '775'],
  },
  '503': {
    city: 'Portland',
    state: 'Oregon',
    stateAbbr: 'OR',
    population: '650,000',
    region: 'Portland',
    timezone: 'Pacific Time (PT)',
    spamTypes: ['IRS impersonation', 'Social Security', 'Auto warranty', 'Health insurance', 'Charity fraud'],
    knownSpamPrefixes: ['503-555', '503-800'],
    tips: ['Portland area sees many IRS and SSA impersonation calls', 'High rate of fake charity calls especially around holidays', 'Auto warranty robocalls are among the most common complaints'],
    neighborCodes: ['971', '360', '541'],
  },
  '480': {
    city: 'Scottsdale / Mesa',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '500,000',
    region: 'East Valley, Phoenix Metro',
    timezone: 'Mountain Time (no DST)',
    spamTypes: ['Solar panel robocalls', 'Medicare scams', 'Home warranty', 'Real estate', 'Debt collection'],
    knownSpamPrefixes: ['480-555', '480-800'],
    tips: ['480 area has very high solar panel installation robocall rates', 'Real estate robocalls are common in the Scottsdale market', 'Medicare and senior-targeted scams are highly active here'],
    neighborCodes: ['602', '623', '520'],
  },
  '773': {
    city: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7 million',
    region: 'Chicago (outer neighborhoods)',
    timezone: 'Central Time (CT)',
    spamTypes: ['Utility scams', 'Debt collection', 'Auto warranty', 'IRS impersonation', 'Payday loan robocalls'],
    knownSpamPrefixes: ['773-555', '773-800'],
    tips: ['773 covers Chicago neighborhoods outside downtown', 'Many scammers spoof 773 to appear as local Chicago calls', 'ComEd utility impersonation is very common in this area'],
    neighborCodes: ['312', '872', '708', '847'],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const data = AREA_CODE_DATA[code]
  if (!data) {
    return { title: 'Area Code Not Found | WhoCalledUs' }
  }
  return {
    title: `Area Code ${code} (${data.city}, ${data.stateAbbr}) - Spam Call Reports | WhoCalledUs`,
    description: `Getting calls from area code ${code}? See spam reports, scam warnings, and user comments for ${data.city}, ${data.state} phone numbers. Free reverse lookup.`,
    keywords: `area code ${code}, ${code} spam calls, who called from ${code}, ${data.city} spam calls, ${data.city} robocalls, ${code} scam calls, reverse lookup ${code}`,
    alternates: { canonical: `/area-code/${code}` },
    openGraph: {
      title: `Area Code ${code} Spam Reports - ${data.city}, ${data.stateAbbr}`,
      description: `Is a ${code} number calling you? Check spam reports for ${data.city}, ${data.state} phone numbers on WhoCalledUs.`,
      url: `https://whocalledus.net/area-code/${code}`,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(AREA_CODE_DATA).map((code) => ({ code }))
}

export default async function AreaCodePage({ params }: Props) {
  const { code } = await params
  const data = AREA_CODE_DATA[code]

  if (!data) notFound()

  return (
    <main style={{ maxWidth: '860px', margin: '0 auto', padding: '32px 16px 64px' }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
        <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span>Area Code {code}</span>
      </nav>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '32px', color: 'white', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '16px 24px', textAlign: 'center', flexShrink: 0 }}>
            <div style={{ fontSize: '40px', fontWeight: 'bold' }}>{code}</div>
            <div style={{ fontSize: '13px', opacity: 0.85 }}>Area Code</div>
          </div>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', lineHeight: '1.2' }}>
              Area Code {code} — {data.city}, {data.state}
            </h1>
            <p style={{ opacity: 0.9, fontSize: '16px', marginBottom: '12px' }}>
              Getting unwanted calls from a {code} number? Search any number below or read about common spam calls from this area.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '13px' }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px' }}>📍 {data.region}</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px' }}>🕐 {data.timezone}</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px' }}>👥 Pop. {data.population}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick search */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6', marginBottom: '28px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '14px', color: '#111827' }}>
          🔍 Look Up a Specific {code} Number
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>
          Enter the full 7-digit number after the area code to see spam reports:
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ background: '#f3f4f6', padding: '12px 16px', borderRadius: '8px', fontWeight: '600', color: '#374151', fontSize: '16px' }}>
            ({code})
          </span>
          <Link
            href="/"
            style={{
              background: '#f97316',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '15px',
            }}
          >
            Search on WhoCalledUs →
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        {/* Common spam types */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
            🚫 Most Common Spam Call Types in {data.city}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {data.spamTypes.map((type, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: '#fef2f2', borderRadius: '8px' }}>
                <span style={{ color: '#dc2626', fontWeight: '700', fontSize: '13px', background: '#fee2e2', padding: '2px 8px', borderRadius: '10px', flexShrink: 0 }}>#{idx + 1}</span>
                <span style={{ color: '#374151', fontSize: '14px' }}>{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Local tips */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
            💡 {data.city} Spam Call Tips
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.tips.map((tip, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', padding: '12px', background: '#f0fdf4', borderRadius: '8px' }}>
                <span style={{ color: '#16a34a', flexShrink: 0, marginTop: '1px' }}>✓</span>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nearby area codes */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6', marginBottom: '28px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
          📍 Nearby Area Codes
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {data.neighborCodes.map((neighborCode) => (
            <Link
              key={neighborCode}
              href={AREA_CODE_DATA[neighborCode] ? `/area-code/${neighborCode}` : `/number/${neighborCode}0000000`}
              style={{
                background: '#eff6ff',
                color: '#1d4ed8',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '700',
                textDecoration: 'none',
                fontSize: '15px',
              }}
            >
              {neighborCode}
              {AREA_CODE_DATA[neighborCode] && (
                <span style={{ fontWeight: '400', fontSize: '12px', display: 'block', color: '#6b7280' }}>
                  {AREA_CODE_DATA[neighborCode].city.split('/')[0].trim()}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* How to protect yourself */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #f3f4f6', marginBottom: '28px' }}>
        <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>
          🛡️ How to Protect Yourself from {code} Spam Calls
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
          {[
            { step: '1', title: 'Look up the number', desc: `Search the exact ${code} number on WhoCalledUs before calling back.` },
            { step: '2', title: 'Register for Do Not Call', desc: 'Visit donotcall.gov to add your number to the national registry.' },
            { step: '3', title: 'Report spam calls', desc: 'Report to the FTC at reportfraud.ftc.gov to help others avoid the same scam.' },
            { step: '4', title: 'Block on your phone', desc: 'Use your phone\'s built-in blocking or a call-blocking app like Hiya or Nomorobo.' },
          ].map(item => (
            <div key={item.step} style={{ display: 'flex', gap: '12px', padding: '14px', background: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ background: '#1d4ed8', color: 'white', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '13px', flexShrink: 0 }}>
                {item.step}
              </div>
              <div>
                <strong style={{ color: '#111827', display: 'block', fontSize: '14px', marginBottom: '4px' }}>{item.title}</strong>
                <p style={{ color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
        <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
          Received a call from a {code} number?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '20px', fontSize: '15px' }}>
          Search the full number to see if others have reported it as spam.
        </p>
        <Link href="/" style={{
          background: '#f97316',
          color: 'white',
          padding: '13px 28px',
          borderRadius: '10px',
          fontWeight: '700',
          fontSize: '15px',
          textDecoration: 'none',
          display: 'inline-block',
        }}>
          🔍 Search a {code} Number
        </Link>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `Area Code ${code} Spam Call Reports - ${data.city}, ${data.state}`,
            description: `Spam call reports and scam warnings for area code ${code} (${data.city}, ${data.state}). Free reverse phone lookup.`,
            url: `https://whocalledus.net/area-code/${code}`,
          })
        }}
      />
    </main>
  )
}
