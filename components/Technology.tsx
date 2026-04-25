'use client'

const techGroups = [
  {
    category: 'Mobile application',
    icon: '📱',
    accent: '#1D9E75',
    accentBg: '#E1F5EE',
    pills: ['React Native', 'Expo', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend API',
    icon: '⚡',
    accent: '#185FA5',
    accentBg: '#E6F1FB',
    pills: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'REST API'],
  },
  {
    category: 'Machine learning',
    icon: '🧠',
    accent: '#993556',
    accentBg: '#FBEAF0',
    pills: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'Keras'],
  },
  {
    category: 'Computer vision',
    icon: '👁',
    accent: '#BA7517',
    accentBg: '#FAEEDA',
    pills: ['YOLOv8', 'VGG16', 'InceptionV3', 'OpenCV'],
  },
  {
    category: 'Data & geospatial',
    icon: '🗺',
    accent: '#534AB7',
    accentBg: '#EEEDFE',
    pills: ['OpenWeather API', 'Leaflet.js', 'GeoJSON', 'Pandas'],
  },
  {
    category: 'Infrastructure',
    icon: '☁',
    accent: '#475569',
    accentBg: '#F1F5F9',
    pills: ['Docker', 'GitHub Actions', 'Cloud deploy', 'Nginx'],
  },
]

const architecture = [
  {
    step: '01', label: 'Mobile App', sub: 'React Native',
    gradient: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="5" y="2" width="10" height="16" rx="2" stroke="white" strokeWidth="1.4"/>
        <circle cx="10" cy="15" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    step: '02', label: 'FastAPI', sub: 'Python server',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #185FA5 100%)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3l7 4v6l-7 4-7-4V7z" stroke="white" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M10 3v14M3 7l7 4 7-4" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    step: '03', label: 'ML Models', sub: 'Inference engine',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" fill="white" opacity="0.9"/>
        <circle cx="4" cy="6" r="2" stroke="white" strokeWidth="1.2"/>
        <circle cx="16" cy="6" r="2" stroke="white" strokeWidth="1.2"/>
        <circle cx="4" cy="14" r="2" stroke="white" strokeWidth="1.2"/>
        <circle cx="16" cy="14" r="2" stroke="white" strokeWidth="1.2"/>
        <path d="M6 6.5L8 9M14 6.5L12 9M6 13.5L8 11M14 13.5L12 11" stroke="white" strokeWidth="0.9"/>
      </svg>
    ),
  },
  {
    step: '04', label: 'PostgreSQL', sub: 'Data storage',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <ellipse cx="10" cy="6" rx="6" ry="2.5" stroke="white" strokeWidth="1.3"/>
        <path d="M4 6v8c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6" stroke="white" strokeWidth="1.3"/>
        <path d="M4 10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5" stroke="white" strokeWidth="1" strokeDasharray="2 1"/>
      </svg>
    ),
  },
]

export default function Technology() {
  return (
    <section id="technology" style={{ padding: '96px 0', background: '#fff' }}>
      <div className="pg-wrap" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#F0FDF9', border: '0.5px solid rgba(29,158,117,0.2)',
            borderRadius: 20, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 11, color: '#0F6E56', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Technology stack
            </span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, color: '#0D1117' }}>
            Built with modern tools
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, maxWidth: 520 }}>
            A full-stack system combining mobile development, AI/ML pipelines, and cloud-ready APIs
            for real-time agricultural intelligence.
          </p>
        </div>

        {/* Architecture flow */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0, marginBottom: 56,
          border: '1px solid rgba(0,0,0,0.07)', borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
        }} className="arch-grid">
          {architecture.map((a, i) => (
            <div key={i} style={{
              padding: '28px 24px', textAlign: 'center',
              borderRight: i < architecture.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
              background: '#fff', position: 'relative',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#FAFCFB'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
              {/* Arrow connector */}
              {i < architecture.length - 1 && (
                <div style={{
                  position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)',
                  width: 24, height: 24, background: '#fff', border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 1,
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <div style={{
                width: 52, height: 52, borderRadius: 16, background: a.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}>
                {a.icon}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#0D1117', marginBottom: 4 }}>{a.label}</div>
              <div style={{ fontSize: 12, color: '#9CA3AF' }}>{a.sub}</div>
              <div style={{
                marginTop: 12, display: 'inline-block',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                color: '#CBD5E1',
              }}>{a.step}</div>
            </div>
          ))}
        </div>

        {/* Tech pills grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18,
        }} className="tech-grid">
          {techGroups.map((g, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: 16, padding: '22px 20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.03)',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.07)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9, background: g.accentBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15,
                }}>
                  {g.icon}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#0D1117' }}>{g.category}</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {g.pills.map(p => (
                  <span key={p} style={{
                    fontSize: 12, padding: '5px 12px', borderRadius: 20,
                    background: '#F7F9F8', border: '0.5px solid rgba(0,0,0,0.08)',
                    color: '#374151', fontWeight: 400,
                  }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .tech-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 768px) {
          .arch-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .arch-grid > div:nth-child(2) { border-right: none !important; }
        }
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: 1fr !important; }
          .arch-grid { grid-template-columns: 1fr !important; }
          .arch-grid > div { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.07) !important; }
        }
      `}</style>
    </section>
  )
}
