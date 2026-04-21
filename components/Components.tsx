'use client'

const components = [
  {
    num: '01',
    accentColor: '#1D9E75',
    accentBg: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
    iconBg: '#E1F5EE',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polyline points="2,15 6,9 10,12 14,6 18,8" stroke="#1D9E75" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Yield & price forecasting',
    desc: 'Uses historical weather and price data to predict harvest volumes and market trends, helping farmers plan the best time to harvest and sell.',
    tags: ['Random Forest', 'XGBoost', 'LSTM'],
    tagBg: '#E1F5EE', tagColor: '#0F6E56',
  },
  {
    num: '02',
    accentColor: '#BA7517',
    accentBg: 'linear-gradient(135deg, #D4870A 0%, #9A5A0A 100%)',
    iconBg: '#FAEEDA',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#BA7517" strokeWidth="1.3"/>
        <path d="M7 11C7 9 8.2 7.5 10 7.5s3 1.5 3 3.5" stroke="#BA7517" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="10" cy="13" r="1.1" fill="#BA7517"/>
      </svg>
    ),
    title: 'Disease identification',
    desc: 'Detects Purple Blotch, Downy Mildew, and Neck Rot from leaf and bulb images, classifying each into early, moderate, or severe stages.',
    tags: ['MobileNetV2', 'VGG16', 'VGG19', 'InceptionV3', 'ResNet50', 'YOLOv8'],
    tagBg: '#FAEEDA', tagColor: '#854F0B',
  },
  {
    num: '03',
    accentColor: '#185FA5',
    accentBg: 'linear-gradient(135deg, #1E6FC0 0%, #0F4A8A 100%)',
    iconBg: '#E6F1FB',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="5" cy="15" r="2.5" stroke="#185FA5" strokeWidth="1.2"/>
        <circle cx="15" cy="5" r="2.5" stroke="#185FA5" strokeWidth="1.2"/>
        <circle cx="10" cy="10" r="2.5" stroke="#185FA5" strokeWidth="1.2"/>
        <path d="M7 13.5L8.5 11.5M11.5 8.5L13 6.5" stroke="#185FA5" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Disease Early Warning System',
    desc: 'Combines disease records, weather data, and GPS location to forecast future outbreak zones and generate interactive risk maps for farmers.',
    tags: ['K-Means', 'DBSCAN', 'LSTM', 'XGBoost'],
    tagBg: '#E6F1FB', tagColor: '#185FA5',
  },
  {
    num: '04',
    accentColor: '#993556',
    accentBg: 'linear-gradient(135deg, #B83D64 0%, #7A2243 100%)',
    iconBg: '#FBEAF0',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3c0 0-5 4-5 8.5C5 14.5 7.2 17 10 17s5-2.5 5-5.5C15 7 10 3 10 3z" stroke="#993556" strokeWidth="1.3"/>
        <path d="M10 8v7" stroke="#993556" strokeWidth="1.5" strokeLinecap="round"/>
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
    <section id="components" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#F0FDF9', border: '0.5px solid rgba(29,158,117,0.2)',
            borderRadius: 20, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 11, color: '#0F6E56', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              System components
            </span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, color: '#0D1117' }}>
            Four intelligent modules
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, maxWidth: 520 }}>
            Each module addresses a distinct challenge in onion cultivation using machine learning,
            computer vision, and spatial analysis.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }} className="comp-grid">
          {components.map((c, i) => (
            <div key={i} style={{
              borderRadius: 18, background: '#fff', overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
              display: 'flex', flexDirection: 'column',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.04)`
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.11)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'
              }}
            >
              {/* Gradient top accent */}
              <div style={{ height: 3, background: c.accentBg }} />

              <div style={{ padding: '22px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Number */}
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                  color: c.accentColor, marginBottom: 16, opacity: 0.7,
                }}>{c.num}</div>

                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: c.iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
                }}>
                  {c.icon}
                </div>

                <h3 style={{ fontSize: 14.5, fontWeight: 600, color: '#0D1117', marginBottom: 10, lineHeight: 1.4 }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.75, marginBottom: 20, flex: 1 }}>
                  {c.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto' }}>
                  {c.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 11, padding: '4px 9px', borderRadius: 6,
                      background: c.tagBg, color: c.tagColor, fontWeight: 500,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .comp-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 560px) {
          .comp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
