'use client'

const techGroups = [
  {
    category: 'Mobile application',
    pills: ['React Native', 'Expo', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend API',
    pills: ['FastAPI', 'Python 3.11', 'PostgreSQL', 'REST API'],
  },
  {
    category: 'Machine learning',
    pills: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'Keras'],
  },
  {
    category: 'Computer vision',
    pills: ['YOLOv8', 'VGG16', 'InceptionV3', 'OpenCV'],
  },
  {
    category: 'Data & geospatial',
    pills: ['OpenWeather API', 'Leaflet.js', 'GeoJSON', 'Pandas'],
  },
  {
    category: 'Infrastructure',
    pills: ['Docker', 'GitHub Actions', 'Cloud deploy', 'Nginx'],
  },
]

const architecture = [
  { step: '01', label: 'Mobile app', sub: 'React Native', color: '#E1F5EE', textColor: '#0F6E56' },
  { step: '02', label: 'FastAPI backend', sub: 'Python server', color: '#E6F1FB', textColor: '#185FA5' },
  { step: '03', label: 'ML models', sub: 'Inference engine', color: '#FAEEDA', textColor: '#854F0B' },
  { step: '04', label: 'PostgreSQL', sub: 'Data storage', color: '#EEEDFE', textColor: '#534AB7' },
]

export default function Technology() {
  return (
    <section id="technology" style={{ padding: '80px 0', borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
            Technology stack
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 10, color: '#111' }}>
            Built with modern tools
          </h2>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, maxWidth: 500 }}>
            A full-stack system combining mobile development, AI/ML pipelines, and cloud-ready APIs
            for real-time agricultural intelligence.
          </p>
        </div>

        {/* Architecture flow */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 0,
          border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: 14,
          overflow: 'hidden', marginBottom: 48, background: '#F8FAF9',
        }} className="arch-row">
          {architecture.map((a, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{
                flex: 1, padding: '18px 20px', textAlign: 'center',
                borderRight: i < architecture.length - 1 ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: 8, background: a.color,
                  fontSize: 11, fontWeight: 600, color: a.textColor, marginBottom: 8,
                }}>
                  {a.step}
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#111', marginBottom: 2 }}>{a.label}</div>
                <div style={{ fontSize: 11, color: '#9CA3AF' }}>{a.sub}</div>
              </div>
              {i < architecture.length - 1 && (
                <div style={{ padding: '0 2px', color: '#D1D5DB', fontSize: 16, flexShrink: 0 }}>→</div>
              )}
            </div>
          ))}
        </div>

        {/* Tech pills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24 }} className="tech-grid">
          {techGroups.map((g, i) => (
            <div key={i}>
              <div style={{ fontSize: 12, fontWeight: 500, color: '#374151', marginBottom: 10 }}>{g.category}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {g.pills.map(p => (
                  <span key={p} style={{
                    fontSize: 12, padding: '5px 12px', borderRadius: 20,
                    background: '#fff', border: '0.5px solid rgba(0,0,0,0.1)',
                    color: '#6B7280', fontWeight: 400,
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
        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .arch-row { flex-direction: column !important; }
          .arch-row > div { width: 100% !important; }
        }
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
