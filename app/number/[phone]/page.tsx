import { supabaseAdmin } from '@/lib/supabase'
import CommentForm from './CommentForm'
import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

interface Props {
  params: Promise<{ phone: string }>
}

function formatPhoneDisplay(digits: string) {
  // Strip leading country code 1 for US numbers
  const d = digits.startsWith('1') && digits.length === 11 ? digits.slice(1) : digits
  if (d.length === 10) {
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
  }
  return digits
}

function getAreaCode(digits: string) {
  const d = digits.startsWith('1') && digits.length === 11 ? digits.slice(1) : digits
  return d.slice(0, 3)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { phone } = await params
  const digits = phone.replace(/\D/g, '')
  const formatted = formatPhoneDisplay(digits)

  // Get report count for dynamic description
  const { count } = await supabaseAdmin
    .from('comments')
    .select('*', { count: 'exact', head: true })
    .eq('phone_number', digits)

  const reportCount = count || 0
  const hasReports = reportCount > 0

  const title = hasReports
    ? `${formatted} - ${reportCount} Spam Reports | WhoCalledUs`
    : `${formatted} - Is This a Spam Number? | WhoCalledUs`

  const description = hasReports
    ? `${formatted} has ${reportCount} user report${reportCount > 1 ? 's' : ''} on WhoCalledUs. See what others say about this number and check if it is spam, scam, or robocall.`
    : `Is ${formatted} spam? Search this number on WhoCalledUs for free. See user reports, comments, and spam warnings. Leave your own review to help others.`

  return {
    title,
    description,
    alternates: { canonical: `/number/${digits}` },
    openGraph: {
      title: `${formatted} - Is this a spam number?`,
      description: `Check if ${formatted} is spam. See reports from real users on WhoCalledUs.`,
      url: `https://whocalledus.net/number/${digits}`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${formatted} - Spam Check | WhoCalledUs`,
      description: `Is ${formatted} spam? Free reverse phone lookup on WhoCalledUs.`,
    },
  }
}

export default async function NumberPage({ params }: Props) {
  const { phone } = await params
  const digits = phone.replace(/\D/g, '')
  const formatted = formatPhoneDisplay(digits)
  const areaCode = getAreaCode(digits)

  // Increment search count
  const { data: existing } = await supabaseAdmin
    .from('phone_numbers')
    .select('id, search_count')
    .eq('number', digits)
    .single()

  if (existing) {
    await supabaseAdmin
      .from('phone_numbers')
      .update({ search_count: existing.search_count + 1 })
      .eq('number', digits)
  } else {
    await supabaseAdmin
      .from('phone_numbers')
      .insert({ number: digits, search_count: 1 })
  }

  // Get comments
  const { data: comments } = await supabaseAdmin
    .from('comments')
    .select('*')
    .eq('phone_number', digits)
    .order('created_at', { ascending: false })

  const spamCount = comments?.filter(c => c.is_spam).length || 0
  const totalComments = comments?.length || 0
  const avgRating = totalComments > 0
    ? (comments?.reduce((sum, c) => sum + (c.rating || 3), 0) || 0) / totalComments
    : null

  const spamPercent = totalComments > 0 ? Math.round((spamCount / totalComments) * 100) : 0
  const riskLevel = spamPercent >= 70 ? 'HIGH RISK' : spamPercent >= 30 ? 'MODERATE RISK' : totalComments === 0 ? 'NOT YET RATED' : 'LOW RISK'
  const riskColor = spamPercent >= 70 ? '#dc2626' : spamPercent >= 30 ? '#f97316' : totalComments === 0 ? '#6b7280' : '#16a34a'

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${formatted} - Phone Number Lookup`,
    description: `User reports and spam information for phone number ${formatted}`,
    url: `https://whocalledus.net/number/${digits}`,
    mainEntity: {
      '@type': 'Thing',
      name: formatted,
      description: totalComments > 0
        ? `${totalComments} user report${totalComments > 1 ? 's' : ''}, ${spamCount} spam report${spamCount > 1 ? 's' : ''}`
        : 'No reports yet for this number',
    },
    ...(totalComments > 0 && avgRating !== null && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: avgRating.toFixed(1),
        reviewCount: totalComments,
        worstRating: 1,
        bestRating: 5,
      },
    }),
  }

  return (
    <main style={{ maxWidth: '800px', margin: '32px auto', padding: '0 16px' }}>
      {/* Schema Markup */}
      <Script
        id="number-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '13px', color: '#6b7280', marginBottom: '16px' }}>
        <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 6px' }}>›</span>
        <Link href={`/area-code/${areaCode}`} style={{ color: '#1d4ed8', textDecoration: 'none' }}>Area Code {areaCode}</Link>
        <span style={{ margin: '0 6px' }}>›</span>
        <span>{formatted}</span>
      </nav>

      {/* Number Header */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px', border: '1px solid #f3f4f6' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '6px', color: '#111827' }}>{formatted}</h1>
        <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>
          Phone number lookup — United States ({areaCode} area code)
        </p>

        {/* Risk Badge */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: riskColor,
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontWeight: 'bold',
            fontSize: '14px',
          }}>
            {spamPercent >= 70 ? '🚫' : spamPercent >= 30 ? '⚠️' : totalComments === 0 ? '❓' : '✅'}
            {riskLevel}
          </div>
          <span style={{ background: '#f3f4f6', padding: '6px 14px', borderRadius: '20px', fontSize: '14px', color: '#374151' }}>
            📋 {totalComments} report{totalComments !== 1 ? 's' : ''}
          </span>
          {spamCount > 0 && (
            <span style={{ background: '#fee2e2', color: '#dc2626', padding: '6px 14px', borderRadius: '20px', fontSize: '14px' }}>
              🚫 {spamCount} spam
            </span>
          )}
          {avgRating !== null && (
            <span style={{ background: '#fef3c7', color: '#92400e', padding: '6px 14px', borderRadius: '20px', fontSize: '14px' }}>
              ★ {avgRating.toFixed(1)}/5
            </span>
          )}
        </div>
      </div>

      {/* Safety Summary Box - shown when no reports yet */}
      {totalComments === 0 && (
        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', color: '#92400e', marginBottom: '10px' }}>
            ⚠️ No Reports Yet for {formatted}
          </h2>
          <p style={{ color: '#78350f', fontSize: '14px', lineHeight: '1.7', marginBottom: '14px' }}>
            This number has not been reported yet on WhoCalledUs. If you received a call from <strong>{formatted}</strong>,
            you can be the first to leave a report below to help others identify this caller.
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ background: 'white', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: '#374151', border: '1px solid #fde68a' }}>
              🔒 Check if this number is listed on the <strong>FTC Do Not Call Registry</strong>
            </div>
            <div style={{ background: 'white', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: '#374151', border: '1px solid #fde68a' }}>
              📞 Area code <strong>{areaCode}</strong> is a US phone number
            </div>
          </div>
        </div>
      )}

      {/* Stats when there are reports */}
      {totalComments > 0 && (
        <div style={{ background: 'white', borderRadius: '12px', padding: '20px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px', border: '1px solid #f3f4f6' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '14px', color: '#111827' }}>
            Summary for {formatted}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '16px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1d4ed8' }}>{totalComments}</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Total Reports</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc2626' }}>{spamCount}</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Spam Reports</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: riskColor }}>{spamPercent}%</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Spam Rate</div>
            </div>
            {avgRating !== null && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>{avgRating.toFixed(1)}</div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>Avg Rating</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Comments */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: '20px', border: '1px solid #f3f4f6' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>
          User Reports ({totalComments})
        </h2>
        {totalComments === 0 ? (
          <div style={{ textAlign: 'center', padding: '32px 0', color: '#6b7280' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📭</div>
            <p style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>No reports yet for this number</p>
            <p style={{ fontSize: '14px' }}>Be the first to share your experience with {formatted}</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {comments?.map((comment) => (
              <div key={comment.id} style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#eff6ff',
                      color: '#1d4ed8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '14px',
                    }}>
                      {(comment.name || 'A')[0].toUpperCase()}
                    </div>
                    <span style={{ fontWeight: '600', fontSize: '14px', color: '#111827' }}>
                      {comment.name || 'Anonymous'}
                    </span>
                    {comment.is_spam && (
                      <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '10px' }}>
                        SPAM
                      </span>
                    )}
                  </div>
                  <span style={{ color: '#9ca3af', fontSize: '13px' }}>
                    {new Date(comment.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
                {comment.rating && (
                  <div style={{ marginBottom: '6px', color: '#f59e0b', fontSize: '16px' }}>
                    {'★'.repeat(comment.rating)}{'☆'.repeat(5 - comment.rating)}
                  </div>
                )}
                <p style={{ color: '#374151', lineHeight: '1.7', fontSize: '14px' }}>{comment.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comment Form */}
      <CommentForm phoneNumber={digits} />

      {/* SEO Content Block */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '24px 28px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: '20px', border: '1px solid #f3f4f6' }}>
        <h2 style={{ fontSize: '17px', fontWeight: 'bold', marginBottom: '12px', color: '#111827' }}>
          About {formatted}
        </h2>
        <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.8', marginBottom: '10px' }}>
          <strong>{formatted}</strong> is a phone number with area code <strong>{areaCode}</strong>, originating from the United States.
          {totalComments > 0
            ? ` This number has received ${totalComments} report${totalComments > 1 ? 's' : ''} from users on WhoCalledUs, with ${spamCount} marked as spam.`
            : ' This number has not yet been reported on WhoCalledUs. If you received a call from this number, please leave a report below.'}
        </p>
        <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.8' }}>
          If you received an unwanted call from <strong>{formatted}</strong>, you can report it to the{' '}
          <a href="https://donotcall.gov" target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#1d4ed8' }}>
            FTC Do Not Call Registry
          </a>{' '}
          or file a complaint at{' '}
          <a href="https://reportfraud.ftc.gov" target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#1d4ed8' }}>
            reportfraud.ftc.gov
          </a>.
        </p>
      </div>

      {/* Related Links */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
        <Link
          href={`/area-code/${areaCode}`}
          style={{ color: '#1d4ed8', fontSize: '14px', textDecoration: 'none', background: '#eff6ff', padding: '6px 14px', borderRadius: '8px' }}
        >
          📍 More numbers from area code {areaCode}
        </Link>
        <Link
          href="/blog/how-to-block-spam-calls"
          style={{ color: '#1d4ed8', fontSize: '14px', textDecoration: 'none', background: '#eff6ff', padding: '6px 14px', borderRadius: '8px' }}
        >
          🛡️ How to block spam calls
        </Link>
      </div>

      {/* Disclaimer */}
      <div style={{ background: '#f9fafb', borderRadius: '10px', padding: '16px', marginTop: '16px', fontSize: '13px', color: '#6b7280', border: '1px solid #f3f4f6' }}>
        <strong>Disclaimer:</strong> All reports are submitted by users. WhoCalledUs.net is not a Consumer Reporting Agency (CRA).
        This information should not be used for FCRA-regulated purposes including credit, employment, or housing decisions.
      </div>
    </main>
  )
}
