'use client'

const miniCards = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <polyline points="2,12 5,7.5 9,9.5 14,4" stroke="#1D9E75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: '#E1F5EE', title: 'Yield forecasting', sub: 'Predict harvest outcomes & price trends',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke="#BA7517" strokeWidth="1.2"/>
        <circle cx="8" cy="8" r="2" fill="#BA7517" opacity="0.4"/>
      </svg>
    ),
    bg: '#FAEEDA', title: 'Disease detection', sub: 'Identify leaf diseases from images',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#185FA5" strokeWidth="1.1"/>
        <path d="M5 8h6M8 5v6" stroke="#185FA5" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    bg: '#E6F1FB', title: 'Risk mapping', sub: 'Geo-locate outbreak hotspots',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2.5c0 0-4 3.2-4 6.8C4 12 5.8 13.5 8 13.5s4-1.5 4-4.2C12 5.7 8 2.5 8 2.5z" stroke="#993556" strokeWidth="1.2"/>
      </svg>
    ),
    bg: '#FBEAF0', title: 'Stress analysis', sub: 'Detect nutrient & heat stress',
  },
]

const stats = [
  { num: '4', label: 'AI components' },
  { num: '8+', label: 'ML models' },
  { num: '3', label: 'Diseases covered' },
  { num: '2026', label: 'Research year' },
]

export default function Hero() {
  return (
    <section id="overview" style={{ paddingTop: 120, paddingBottom: 80, borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Two-column hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

          {/* Left */}
          <div className="hero-left">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F0FDF9', border: '0.5px solid rgba(29,158,117,0.25)',
              borderRadius: 20, padding: '5px 14px', marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>
              <span style={{ fontSize: 12, color: '#0F6E56', fontWeight: 500 }}>SLIIT · Research Project 2026</span>
            </div>

            <h1 style={{
              fontSize: 42, fontWeight: 500, lineHeight: 1.18,
              letterSpacing: '-0.02em', marginBottom: 18, color: '#111',
            }}>
              IOT-powered<br/>
              Onion crop <span style={{ color: '#1D9E75' }}>Surveillance</span><br/>
              system
            </h1>

            <p style={{
              fontSize: 15, color: '#6B7280', lineHeight: 1.8,
              marginBottom: 32, maxWidth: 420,
            }}>
              An intelligent mobile platform combining disease detection, yield forecasting,
              risk mapping, and stress analysis — empowering farmers with data-driven insights.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#components" style={{
                background: '#1D9E75', color: '#fff', borderRadius: 8,
                padding: '10px 22px', fontSize: 14, fontWeight: 500,
                textDecoration: 'none', display: 'inline-block',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#17896A')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1D9E75')}
              >
                Explore research
              </a>
              <a href="#documents" style={{
                background: 'transparent', color: '#374151',
                border: '0.5px solid rgba(0,0,0,0.18)',
                borderRadius: 8, padding: '10px 22px',
                fontSize: 14, fontWeight: 400, textDecoration: 'none',
                display: 'inline-block', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)')}
              >
                View documents
              </a>
            </div>
          </div>

          {/* Right — 4 mini cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {miniCards.map((c, i) => (
              <div key={i} style={{
                border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: 14,
                padding: '18px 16px', background: '#fff',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.16)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: 34, height: 34, borderRadius: 9, background: c.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
                }}>
                  {c.icon}
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4, color: '#111' }}>{c.title}</div>
                <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.55 }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0, marginTop: 56,
          border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: 14,
          overflow: 'hidden', background: '#F8FAF9',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '20px 24px', textAlign: 'center',
              borderRight: i < 3 ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
            }}>
              <div style={{ fontSize: 24, fontWeight: 500, color: '#1D9E75', marginBottom: 3 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: '#9CA3AF' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-left h1 { font-size: 28px !important; }
        }
        @media (max-width: 900px) {
          section#overview > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
