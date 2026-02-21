'use client'

import { useState } from 'react'

interface Props {
  phoneNumber: string
}

export default function CommentForm({ phoneNumber }: Props) {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [isSpam, setIsSpam] = useState(false)
  const [rating, setRating] = useState(0)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!comment.trim()) return
    setLoading(true)
    setError('')

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone_number: phoneNumber,
        name: name.trim() || null,
        comment: comment.trim(),
        is_spam: isSpam,
        rating: rating || null,
      }),
    })

    if (res.ok) {
      setSuccess(true)
      setName('')
      setComment('')
      setIsSpam(false)
      setRating(0)
    } else {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  if (success) {
    return (
      <div style={{ background: '#dcfce7', borderRadius: '10px', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '16px' }}>✅ Thank you! Your report has been submitted.</p>
        <button
          onClick={() => setSuccess(false)}
          style={{ marginTop: '12px', color: '#16a34a', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Add another comment
        </button>
      </div>
    )
  }

  return (
    <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Leave a Report</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px' }}>
            Your Name (optional)
          </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Anonymous"
            maxLength={100}
            style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '15px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px' }}>
            Rating
          </label>
          <div style={{ display: 'flex', gap: '4px' }}>
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star === rating ? 0 : star)}
                style={{ fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer', color: star <= rating ? '#f59e0b' : '#d1d5db' }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            id="isSpam"
            checked={isSpam}
            onChange={e => setIsSpam(e.target.checked)}
            style={{ width: '16px', height: '16px' }}
          />
          <label htmlFor="isSpam" style={{ fontSize: '14px', cursor: 'pointer' }}>
            🚫 Report as spam / scam / robocall
          </label>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px' }}>
            Comment <span style={{ color: '#dc2626' }}>*</span>
          </label>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Describe your experience with this number..."
            required
            maxLength={1000}
            rows={4}
            style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '15px', resize: 'vertical' }}
          />
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>{comment.length}/1000</p>
        </div>

        {error && <p style={{ color: '#dc2626', fontSize: '14px' }}>{error}</p>}

        <button
          type="submit"
          disabled={loading || !comment.trim()}
          style={{
            padding: '12px',
            background: loading || !comment.trim() ? '#9ca3af' : '#1d4ed8',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: loading || !comment.trim() ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Submitting...' : 'Submit Report'}
        </button>

        <p style={{ fontSize: '12px', color: '#9ca3af' }}>
          By submitting, you agree to our Terms of Use. Do not include personal information about yourself or others.
        </p>
      </form>
    </div>
  )
}
