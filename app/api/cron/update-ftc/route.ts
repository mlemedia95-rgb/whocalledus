import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(request: Request) {
  // Güvenlik kontrolü
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Dünün tarihini al
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const dateStr = yesterday.toISOString().split('T')[0] // YYYY-MM-DD

    const url = `https://www.ftc.gov/sites/default/files/DNC_Complaint_Numbers_${dateStr}.csv`

    const res = await fetch(url)
    if (!res.ok) {
      return NextResponse.json({ message: `No data for ${dateStr}` }, { status: 200 })
    }

    const csv = await res.text()
    const lines = csv.trim().split('\n').slice(1)

    const phoneNumbers: { number: string; search_count: number }[] = []
    const comments: {
      phone_number: string
      name: string
      comment: string
      is_spam: boolean
      rating: number
      created_at: string
    }[] = []

    for (const line of lines) {
      const cols = line.split(',')
      const number = cols[0]?.replace(/\D/g, '').trim()
      const subject = cols[6]?.replace(/"/g, '').trim()
      const isRobocall = cols[7]?.trim().toUpperCase() === 'Y'
      const date = cols[1]?.trim()

      if (!number || number.length < 10) continue

      phoneNumbers.push({ number, search_count: 0 })

      const commentText = subject
        ? `FTC Complaint: ${subject}${isRobocall ? ' (Robocall)' : ''}`
        : `FTC Complaint reported${isRobocall ? ' (Robocall)' : ''}`

      comments.push({
        phone_number: number,
        name: 'FTC Report',
        comment: commentText,
        is_spam: true,
        rating: 1,
        created_at: date || new Date().toISOString(),
      })
    }

    // Unique numbers
    const uniqueNumbers = [...new Map(phoneNumbers.map(p => [p.number, p])).values()]

    // Batch upload
    const BATCH = 500
    let phonesAdded = 0
    let commentsAdded = 0

    for (let i = 0; i < uniqueNumbers.length; i += BATCH) {
      const batch = uniqueNumbers.slice(i, i + BATCH)
      const { error } = await supabaseAdmin
        .from('phone_numbers')
        .upsert(batch, { onConflict: 'number' })
      if (!error) phonesAdded += batch.length
    }

    for (let i = 0; i < comments.length; i += BATCH) {
      const batch = comments.slice(i, i + BATCH)
      const { error } = await supabaseAdmin.from('comments').insert(batch)
      if (!error) commentsAdded += batch.length
    }

    return NextResponse.json({
      success: true,
      date: dateStr,
      phonesAdded,
      commentsAdded,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
