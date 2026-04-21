import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECIPIENTS = [
  'loshansp2001@gmail.com',
  'kirusanth200110@gmail.com',
  'harishanthanandaraj@gmail.com',
]

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const html = `
    <div style="font-family:'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#111;">
      <div style="background:linear-gradient(135deg,#1D9E75,#0F6E56);padding:28px 32px;border-radius:12px 12px 0 0;">
        <h2 style="margin:0;color:#fff;font-size:20px;font-weight:700;">AgriConnect — New Contact Message</h2>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px;">Received via the research website contact form</p>
      </div>
      <div style="background:#F7F9F8;padding:28px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          <tr><td style="padding:8px 0;font-size:13px;color:#6B7280;width:90px;">Name</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#111;">${name}</td></tr>
          <tr><td style="padding:8px 0;font-size:13px;color:#6B7280;">Email</td><td style="padding:8px 0;font-size:14px;color:#1D9E75;"><a href="mailto:${email}" style="color:#1D9E75;text-decoration:none;">${email}</a></td></tr>
          ${subject ? `<tr><td style="padding:8px 0;font-size:13px;color:#6B7280;">Subject</td><td style="padding:8px 0;font-size:14px;color:#111;">${subject}</td></tr>` : ''}
        </table>
        <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:18px 20px;">
          <p style="margin:0 0 6px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#9CA3AF;">Message</p>
          <p style="margin:0;font-size:14px;color:#374151;line-height:1.75;white-space:pre-wrap;">${message}</p>
        </div>
        <p style="margin:20px 0 0;font-size:12px;color:#9CA3AF;">© 2026 AgriConnect · SLIIT Research Project</p>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"AgriConnect Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENTS.join(', '),
      replyTo: email,
      subject: `[AgriConnect] ${subject || `New message from ${name}`}`,
      html,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mail send error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
