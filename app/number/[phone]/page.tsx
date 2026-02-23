import { supabaseAdmin } from '@/lib/supabase'
import CommentForm from './CommentForm'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ phone: string }>
}

function formatPhoneDisplay(digits: string) {
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  return digits
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { phone } = await params
  const digits = phone.replace(/\D/g, '')
  const formatted = formatPhoneDisplay(digits)
  return {
    title: `${formatted} - Phone Number Lookup & Spam Reports | WhoCalledUs`,
    description: `Is ${formatted} a spam call? See user reports, comments, and spam warnings for this phone number. Free reverse lookup on WhoCalledUs.`,
    alternates: { canonical: `/number/${digits}` },
    openGraph: {
      title: `${formatted} - Is this a spam number?`,
      description: `Check if ${formatted} is spam. See reports from real users on WhoCalledUs.`,
      url: `https://whocalledus.net/number/${digits}`,
    },
  }
}

export default async function NumberPage({ params }: Props) {
  const { phone } = await params
  const digits = phone.replace(/\D/g, '')
  const formatted = formatPhoneDisplay(digits)

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

  return (
    <main style={{ maxWidth: '800px', margin: '32px auto', padding: '0 16px' }}>
      {/* Number Header */}
      <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>{formatted}</h1>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ background: '#f3f4f6', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>
            📋 {totalComments} report{totalComments !== 1 ? 's' : ''}
          </span>
          {spamCount > 0 && (
            <span style={{ background: '#fee2e2', color: '#dc2626', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>
              🚫 {spamCount} spam report{spamCount !== 1 ? 's' : ''}
            </span>
          )}
          {spamCount === 0 && totalComments === 0 && (
            <span style={{ background: '#dcfce7', color: '#16a34a', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>
              ✅ No reports yet
            </span>
          )}
        </div>
      </div>

      {/* Comments */}
      <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
          User Reports ({totalComments})
        </h2>
        {totalComments === 0 ? (
          <p style={{ color: '#6b7280', textAlign: 'center', padding: '20px 0' }}>
            No reports yet. Be the first to leave a comment about this number.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {comments?.map((comment) => (
              <div key={comment.id} style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                      {comment.name || 'Anonymous'}
                    </span>
                    {comment.is_spam && (
                      <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: '12px', padding: '2px 8px', borderRadius: '10px' }}>
                        Spam
                      </span>
                    )}
                  </div>
                  <span style={{ color: '#9ca3af', fontSize: '13px' }}>
                    {new Date(comment.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                </div>
                {comment.rating && (
                  <div style={{ marginBottom: '6px', color: '#f59e0b' }}>
                    {'★'.repeat(comment.rating)}{'☆'.repeat(5 - comment.rating)}
                  </div>
                )}
                <p style={{ color: '#374151', lineHeight: '1.6' }}>{comment.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comment Form */}
      <CommentForm phoneNumber={digits} />

      {/* Disclaimer */}
      <div style={{ background: '#f9fafb', borderRadius: '10px', padding: '16px', marginTop: '20px', fontSize: '13px', color: '#6b7280' }}>
        <strong>Disclaimer:</strong> All reports are submitted by users. WhoCalledUs.net is not a Consumer Reporting Agency.
        This information should not be used for FCRA-regulated purposes including credit, employment, or housing decisions.
      </div>
    </main>
  )
}
