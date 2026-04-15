import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, company, industry, message } = await req.json()

  if (!firstName || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Fluent Callers <onboarding@resend.dev>',
      to: ['jackson@fluentcallers.com'],
      reply_to: email,
      subject: `New VA Request — ${firstName} ${lastName || ''} (${company || 'No company'})`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111">
          <h2 style="margin-bottom:4px">New VA Request</h2>
          <p style="color:#555;margin-top:0">Submitted via fluentcallers.com</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#888;width:140px">Name</td><td style="padding:8px 0"><strong>${firstName} ${lastName || ''}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888">Company</td><td style="padding:8px 0">${company || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Industry</td><td style="padding:8px 0">${industry || '—'}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#888;margin-bottom:6px">Message</p>
          <p style="white-space:pre-wrap">${message || '—'}</p>
        </div>
      `,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
