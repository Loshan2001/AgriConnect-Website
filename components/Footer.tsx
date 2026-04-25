'use client'

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Components', href: '#components' },
  { label: 'Documents', href: '#documents' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Technology', href: '#technology' },
  { label: 'Team', href: '#team' },
]

const researchLinks = [
  { label: 'Project proposal', href: '#' },
  { label: 'Progress report I', href: '#' },
  { label: 'Progress report II', href: '#' },
  { label: 'Final paper', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #071912 0%, #0D1F17 100%)',
      paddingTop: 60, paddingBottom: 32,
    }}>
      <div className="pg-wrap" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Top section */}
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
          gap: 48, paddingBottom: 48,
          borderBottom: '0.5px solid rgba(255,255,255,0.08)',
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 11,
                background: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(29,158,117,0.4)',
              }}>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path d="M9.5 2.5c0 0-5 4-5 8C4.5 13.5 6.7 16 9.5 16s5-2.5 5-5.5C14.5 6.5 9.5 2.5 9.5 2.5z" fill="white" opacity="0.95"/>
                  <path d="M9.5 7v8M7 11h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' }}>
                <span style={{ color: '#fff' }}>Agri</span>
                <span style={{
                  background: 'linear-gradient(135deg, #2DD4A0 0%, #1D9E75 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Connect</span>
              </span>
            </a>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 320, marginBottom: 24 }}>
              An AI-based onion crop monitoring system leveraging IoT, computer vision, and machine learning
              to empower farmers with intelligent insights.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['GitHub', 'Contact'].map(label => (
                <a key={label} href="#" style={{
                  fontSize: 12, padding: '6px 14px', borderRadius: 8,
                  background: 'rgba(255,255,255,0.07)',
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.6)', textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {navLinks.map(l => (
                <a key={l.label} href={l.href} style={{
                  fontSize: 13.5, color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Research */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>
              Research
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {researchLinks.map(l => (
                <a key={l.label} href={l.href} style={{
                  fontSize: 13.5, color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24, flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 AgriConnect · Sri Lanka Institute of Information Technology (SLIIT)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75' }} />
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Research project · SLIIT 2026</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
