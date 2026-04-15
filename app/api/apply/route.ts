import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { fullName, email, country, experience, recordingLink } = await req.json()

  if (!fullName || !email) {
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
      subject: `New VA Application — ${fullName} (${country || 'No country'})`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#111">
          <h2 style="margin-bottom:4px">New VA Application</h2>
          <p style="color:#555;margin-top:0">Submitted via fluentcallers.com/apply</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#888;width:160px">Name</td><td style="padding:8px 0"><strong>${fullName}</strong></td></tr>
            <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888">Country</td><td style="padding:8px 0">${country || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#888">Experience</td><td style="padding:8px 0">${experience || '—'}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#888;margin-bottom:6px">Recording Link</p>
          <p><a href="${recordingLink}" style="color:#D62828">${recordingLink}</a></p>
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
