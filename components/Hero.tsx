'use client'

const miniCards = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <polyline points="2,13 5,8 9,10 14,4" stroke="#2DD4A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: 'rgba(29,158,117,0.18)', title: 'Yield forecasting', sub: 'Predict harvest outcomes & price trends',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6" stroke="#FBBF24" strokeWidth="1.4"/>
        <circle cx="9" cy="9" r="2.5" fill="#FBBF24" opacity="0.5"/>
      </svg>
    ),
    bg: 'rgba(251,191,36,0.18)', title: 'Disease detection', sub: 'Identify leaf diseases from images',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="5" cy="13" r="2" stroke="#60A5FA" strokeWidth="1.2"/>
        <circle cx="13" cy="5" r="2" stroke="#60A5FA" strokeWidth="1.2"/>
        <circle cx="9" cy="9" r="2" stroke="#60A5FA" strokeWidth="1.2"/>
        <path d="M6.5 12L8 10.5M10 7.5L11.5 6.5" stroke="#60A5FA" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    bg: 'rgba(96,165,250,0.18)', title: 'Risk mapping', sub: 'Geo-locate outbreak hotspots',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2.5c0 0-5 4-5 8C4 13.5 6.2 15.5 9 15.5s5-2 5-5C14 6.5 9 2.5 9 2.5z" stroke="#F472B6" strokeWidth="1.3"/>
        <path d="M9 7v7" stroke="#F472B6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    bg: 'rgba(244,114,182,0.18)', title: 'Stress analysis', sub: 'Detect nutrient & heat stress',
  },
]

const stats = [
  { num: '4', label: 'AI Components' },
  { num: '8+', label: 'ML Models' },
  { num: '3', label: 'Diseases Covered' },
  { num: '2026', label: 'Research Year' },
]

export default function Hero() {
  return (
    <section id="overview" style={{
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(145deg, #071912 0%, #0D2A1E 45%, #0F4A35 100%)',
      paddingTop: 130, paddingBottom: 96,
    }}>
      {/* Background blobs */}
      <div className="animate-blob" style={{
        position: 'absolute', top: -120, right: -80,
        width: 560, height: 560,
        background: 'radial-gradient(circle, rgba(29,158,117,0.28) 0%, transparent 65%)',
        borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none',
      }} />
      <div className="animate-blob" style={{
        position: 'absolute', bottom: -160, left: -120,
        width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(29,158,117,0.18) 0%, transparent 65%)',
        borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none',
        animationDelay: '4s',
      }} />
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(45,212,160,0.08) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
        transform: 'translateX(-50%)',
      }} />

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative' }}>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div className="hero-left animate-fade-up">
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: 'rgba(29,158,117,0.15)',
              border: '0.5px solid rgba(29,158,117,0.4)',
              borderRadius: 24, padding: '6px 16px', marginBottom: 30,
            }}>
              <span className="animate-pulse-dot" style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#2DD4A0', display: 'inline-block',
              }} />
              <span style={{ fontSize: 12, color: 'rgba(45,212,160,0.9)', fontWeight: 500, letterSpacing: '0.02em' }}>
                SLIIT · Research Project 2026
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 54, fontWeight: 700, lineHeight: 1.1,
              letterSpacing: '-0.03em', marginBottom: 22, color: '#fff',
            }}>
              IoT-powered<br />
              Onion Crop<br />
              <span style={{
                background: 'linear-gradient(135deg, #5EEFC0 0%, #2DD4A0 50%, #1D9E75 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Surveillance
              </span>
            </h1>

            <p style={{
              fontSize: 15.5, color: 'rgba(255,255,255,0.58)', lineHeight: 1.8,
              marginBottom: 38, maxWidth: 440,
            }}>
              An intelligent mobile platform combining disease detection, yield forecasting,
              risk mapping, and stress analysis — empowering farmers with data-driven insights.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#components" style={{
                background: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
                boxShadow: '0 4px 24px rgba(29,158,117,0.45)',
                color: '#fff', borderRadius: 10, padding: '12px 26px',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 6px 32px rgba(29,158,117,0.6)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(29,158,117,0.45)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Explore research
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#documents" style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '0.5px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.85)', borderRadius: 10, padding: '12px 26px',
                fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-block',
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View documents
              </a>
            </div>
          </div>

          {/* Right — 4 glass cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {miniCards.map((c, i) => (
              <div key={i} className={`animate-fade-up delay-${(i + 2) * 100}`} style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '0.5px solid rgba(255,255,255,0.1)',
                borderRadius: 16, padding: '20px 18px',
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                opacity: 0,
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 12, background: c.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
                }}>
                  {c.icon}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 5, color: '#fff' }}>{c.title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.48)', lineHeight: 1.6 }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          marginTop: 64,
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(255,255,255,0.1)',
          borderRadius: 18, overflow: 'hidden',
        }} className="stats-bar">
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '24px 28px', textAlign: 'center',
              borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{
                fontSize: 30, fontWeight: 700,
                background: 'linear-gradient(135deg, #5EEFC0 0%, #2DD4A0 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                marginBottom: 5, letterSpacing: '-0.02em',
              }}>{s.num}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 400, letterSpacing: '0.02em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .hero-left h1 { font-size: 36px !important; }
          .stats-bar { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
