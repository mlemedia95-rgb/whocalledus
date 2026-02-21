import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { phone_number, name, comment, is_spam, rating } = body

    if (!phone_number || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (comment.length > 1000) {
      return NextResponse.json({ error: 'Comment too long' }, { status: 400 })
    }

    const { error } = await supabaseAdmin.from('comments').insert({
      phone_number,
      name: name || null,
      comment,
      is_spam: is_spam || false,
      rating: rating || null,
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
