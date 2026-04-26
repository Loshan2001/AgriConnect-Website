'use client'
import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

const contacts = [
  { label: 'Lochan S.', role: 'Disease Identification', email: 'loshansp2001@gmail.com', gradient: 'linear-gradient(135deg, #D4870A 0%, #9A5A0A 100%)', initials: 'LS' },
  { label: 'Kirusanth S.', role: 'ATD Early Warning', email: 'kirusanth200110@gmail.com', gradient: 'linear-gradient(135deg, #3B82F6 0%, #185FA5 100%)', initials: 'KS' },
  { label: 'Harishanth A.', role: 'Yield & Onion Price Prediction', email: 'harishanthanandaraj@gmail.com', gradient: 'linear-gradient(135deg, #B83D64 0%, #7A2243 100%)', initials: 'HA' },
  { label: 'Amarasinghe V. D.', role: 'Soil Nutrient Analysis', gradient: 'linear-gradient(135deg, #534AB7 0%, #3B36A8 100%)', initials: 'AV' },
]

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>
        {label}{required && <span style={{ color: '#EF4444', marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  border: '1px solid rgba(0,0,0,0.1)', borderRadius: 10,
  fontSize: 14, color: '#0D1117', background: '#fff',
  outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const focused = (k: string): React.CSSProperties => focusedField === k
    ? { borderColor: '#1D9E75', boxShadow: '0 0 0 3px rgba(29,158,117,0.12)' }
    : {}

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{
      padding: '96px 0',
      background: 'linear-gradient(180deg, #F7F9F8 0%, #ffffff 100%)',
    }}>
      <div className="pg-wrap" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Section header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#F0FDF9', border: '0.5px solid rgba(29,158,117,0.2)',
            borderRadius: 20, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 11, color: '#0F6E56', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Contact us
            </span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, color: '#0D1117' }}>
            Get in touch
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, maxWidth: 500 }}>
            Have a question about our research or want to collaborate? Send us a message and
            the team will get back to you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 28, alignItems: 'start' }} className="contact-grid">

          {/* Left — info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Info card */}
            <div style={{
              background: 'linear-gradient(145deg, #071912 0%, #0D2A1E 50%, #0F4A35 100%)',
              borderRadius: 20, padding: '28px 26px', position: 'relative', overflow: 'hidden',
            }}>
              {/* Blob */}
              <div style={{
                position: 'absolute', top: -40, right: -40, width: 180, height: 180,
                background: 'radial-gradient(circle, rgba(29,158,117,0.3) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(24px)', pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18, boxShadow: '0 4px 16px rgba(29,158,117,0.4)',
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 5.5C3 4.4 3.9 3.5 5 3.5h10c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-9z" stroke="white" strokeWidth="1.4"/>
                    <path d="M3 6l7 5 7-5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8, letterSpacing: '-0.01em' }}>
                  AgriConnect Research Team
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 0 }}>
                  We&apos;re based at SLIIT, Sri Lanka. Messages go directly to all team members.
                </p>
                <div style={{
                  marginTop: 20, paddingTop: 20,
                  borderTop: '0.5px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2DD4A0', flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>SLIIT · Research Project 2026</span>
                </div>
              </div>
            </div>

            {/* Team email chips */}
            <div style={{
              background: '#fff', borderRadius: 18,
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
              padding: '20px 22px',
            }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
                Team members
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {contacts.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: c.gradient, flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, color: '#fff',
                    }}>{c.initials}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#0D1117' }}>{c.label}</div>
                      <a href={`mailto:${c.email}`} style={{
                        fontSize: 11.5, color: '#9CA3AF', textDecoration: 'none',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        display: 'block', transition: 'color 0.2s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.color = '#1D9E75'}
                        onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
                      >
                        {c.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-card" style={{
            background: '#fff', borderRadius: 22,
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.05)',
            padding: '36px 36px',
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: '#E1F5EE', margin: '0 auto 20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l7 7L23 8" stroke="#1D9E75" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0D1117', marginBottom: 8 }}>Message sent!</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, marginBottom: 24 }}>
                  Your message has been delivered to the AgriConnect team. We&apos;ll get back to you soon.
                </p>
                <button onClick={() => setStatus('idle')} style={{
                  background: '#F0FDF9', border: '1px solid rgba(29,158,117,0.2)',
                  color: '#0F6E56', borderRadius: 10, padding: '10px 22px',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                  <Field label="Full name" required>
                    <input
                      type="text" placeholder="John Silva" value={form.name}
                      onChange={set('name')} required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle, ...focused('name') }}
                    />
                  </Field>
                  <Field label="Email address" required>
                    <input
                      type="email" placeholder="you@example.com" value={form.email}
                      onChange={set('email')} required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...inputStyle, ...focused('email') }}
                    />
                  </Field>
                </div>

                <Field label="Subject">
                  <input
                    type="text" placeholder="Research collaboration, question…" value={form.subject}
                    onChange={set('subject')}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle, ...focused('subject') }}
                  />
                </Field>

                <Field label="Message" required>
                  <textarea
                    placeholder="Write your message here…" value={form.message}
                    onChange={set('message')} required rows={6}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle, ...focused('message'), resize: 'vertical', minHeight: 140 }}
                  />
                </Field>

                {status === 'error' && (
                  <div style={{
                    background: '#FEF2F2', border: '1px solid #FECACA',
                    borderRadius: 10, padding: '12px 16px',
                    display: 'flex', gap: 10, alignItems: 'center',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6.5" stroke="#EF4444" strokeWidth="1.2"/>
                      <path d="M8 5v4M8 11v.5" stroke="#EF4444" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontSize: 13, color: '#DC2626' }}>
                      Failed to send. Please try again or email us directly.
                    </span>
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'} style={{
                  background: status === 'sending'
                    ? '#9CA3AF'
                    : 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
                  color: '#fff', border: 'none', borderRadius: 12,
                  padding: '14px 28px', fontSize: 14, fontWeight: 600,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit', width: '100%',
                  boxShadow: status === 'sending' ? 'none' : '0 4px 20px rgba(29,158,117,0.35)',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
                }}
                  onMouseEnter={e => {
                    if (status !== 'sending') {
                      e.currentTarget.style.boxShadow = '0 6px 28px rgba(29,158,117,0.5)'
                      e.currentTarget.style.transform = 'translateY(-1px)'
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(29,158,117,0.35)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                        <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                        <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M2 7.5h11M9 3.5l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center', margin: 0 }}>
                  Your message is sent to all three team members simultaneously.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
