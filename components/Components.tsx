'use client'

const components = [
  {
    num: '01',
    iconBg: '#E1F5EE',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <polyline points="2,14 5.5,8.5 9,11 13,5.5 16,7.5" stroke="#1D9E75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Yield & price forecasting',
    desc: 'Uses historical weather and price data to predict harvest volumes and market trends, helping farmers plan the best time to harvest and sell.',
    tags: ['Random Forest', 'XGBoost', 'LSTM'],
    tagBg: '#E1F5EE', tagColor: '#0F6E56',
  },
  {
    num: '02',
    iconBg: '#FAEEDA',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6" stroke="#BA7517" strokeWidth="1.2"/>
        <path d="M6.5 9.5C6.5 7.8 7.6 6.5 9 6.5s2.5 1.3 2.5 3" stroke="#BA7517" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="9" cy="11.5" r="1" fill="#BA7517"/>
      </svg>
    ),
    title: 'Disease identification',
    desc: 'Detects Purple Blotch, Downy Mildew, and Neck Rot from leaf and bulb images, classifying each into early, moderate, or severe stages.',
    tags: ['MobileNetV2','VGG16','VGG19','InceptionV3','ResNet50','YOLOv8'],
    tagBg: '#FAEEDA', tagColor: '#854F0B',
  },
  {
    num: '03',
    iconBg: '#E6F1FB',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="5" cy="13" r="2" stroke="#185FA5" strokeWidth="1.1"/>
        <circle cx="13" cy="5" r="2" stroke="#185FA5" strokeWidth="1.1"/>
        <circle cx="9" cy="9" r="2" stroke="#185FA5" strokeWidth="1.1"/>
        <path d="M6.3 12L8 10.5M10 7.5L11.7 6" stroke="#185FA5" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Predictive risk mapping',
    desc: 'Combines disease records, weather data, and GPS location to forecast future outbreak zones and generate interactive risk maps for farmers.',
    tags: ['K-Means', 'DBSCAN', 'LSTM', 'XGBoost'],
    tagBg: '#E6F1FB', tagColor: '#185FA5',
  },
  {
    num: '04',
    iconBg: '#FBEAF0',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 3c0 0-4.5 3.5-4.5 7.5C4.5 13.5 6.5 15 9 15s4.5-1.5 4.5-4.5C13.5 6.5 9 3 9 3z" stroke="#993556" strokeWidth="1.2"/>
        <path d="M9 7v6" stroke="#993556" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Stress & deficiency detection',
    desc: 'Identifies water stress, heat stress, and nutrient deficiencies from leaf images using CNN models, distinguishing them from disease symptoms.',
    tags: ['CNN', 'Weather API', 'Classification'],
    tagBg: '#FBEAF0', tagColor: '#993556',
  },
]

export default function Components() {
  return (
    <section id="components" style={{ padding: '80px 0', borderBottom: '0.5px solid rgba(0,0,0,0.08)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
            System components
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 10, color: '#111' }}>
            Four intelligent modules
          </h2>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, maxWidth: 500 }}>
            Each module addresses a distinct challenge in onion cultivation using machine learning,
            computer vision, and spatial analysis.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16 }} className="comp-grid">
          {components.map((c, i) => (
            <div key={i} style={{
              border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: 16,
              padding: '22px 20px', background: '#fff',
              transition: 'border-color 0.2s, transform 0.2s',
              display: 'flex', flexDirection: 'column',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500, marginBottom: 14 }}>{c.num}</div>

              <div style={{
                width: 38, height: 38, borderRadius: 10, background: c.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
              }}>
                {c.icon}
              </div>

              <h3 style={{ fontSize: 14, fontWeight: 500, color: '#111', marginBottom: 8, lineHeight: 1.4 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.7, marginBottom: 18, flex: 1 }}>
                {c.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto' }}>
                {c.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 11, padding: '3px 8px', borderRadius: 5,
                    background: c.tagBg, color: c.tagColor, fontWeight: 500,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .comp-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 560px) {
          .comp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
