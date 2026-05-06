'use client'


const docs = [
  {
    type: 'Proposal', typeBg: '#E1F5EE', typeColor: '#0F6E56',
    iconBg: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
    iconStroke: '#fff',
    title: 'Project proposal',
    sub: 'Scope, objectives & research questions',
    href: "https://drive.google.com/drive/folders/1nBQCEl_Mumdcg76JM38jV6j7z9Ba01RV?usp=share_link",
  },
  {
    type: 'Report', typeBg: '#E6F1FB', typeColor: '#185FA5',
    iconBg: 'linear-gradient(135deg, #3B82F6 0%, #185FA5 100%)',
    iconStroke: '#fff',
    title: 'Progress Presentation I',
    sub: 'Literature review & methodology',
    href: "https://drive.google.com/drive/folders/1usqAFoDsTw3EoKt5TBruQzohApfRvCul?usp=share_link",
  },
  {
    type: 'Report', typeBg: '#E6F1FB', typeColor: '#185FA5',
    iconBg: 'linear-gradient(135deg, #3B82F6 0%, #185FA5 100%)',
    iconStroke: '#fff',
    title: 'Progress Presentation II',
    sub: 'Implementation & early results',
    href: "https://drive.google.com/drive/folders/1YaBzO0XA1qKXvoi0TNFIVmFYwG3dhp1D?usp=share_link",
  },
  {
    type: 'Slides', typeBg: '#FAEEDA', typeColor: '#854F0B',
    iconBg: 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)',
    iconStroke: '#fff',
    title: 'Final presentation',
    sub: 'Viva & research poster slides',
    href: "https://drive.google.com/drive/folders/1l2nhB7RSN7BCV4T3yC-_qPuTPyFUiStR?usp=share_link",
  },
  {
    type: 'Paper', typeBg: '#EEEDFE', typeColor: '#534AB7',
    iconBg: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    iconStroke: '#fff',
    title: 'Final research paper',
    sub: 'Publication-ready full report',
    href: "https://drive.google.com/drive/folders/1WYqbVoKxVPXnsK2pNAPtQ771gyJ8T2uQ?usp=share_link",
  },
  {
    type: 'Log', typeBg: '#F1F5F9', typeColor: '#475569',
    iconBg: 'linear-gradient(135deg, #64748B 0%, #475569 100%)',
    iconStroke: '#fff',
    title: 'Status documents',
    sub: 'Weekly meeting notes & logs',
    href: "https://drive.google.com/drive/folders/1imjo2-9lqua65KSg-cg1Ab4iPCiRkp0K?usp=share_link",
  },
   {
    type: 'Report', typeBg: '#F1F5F9', typeColor: '#475569',
    iconBg: 'linear-gradient(135deg, #43a2da 0%, #0b517a 100%)',
    iconStroke: '#fff',
    title: 'Thesis',
    sub: 'final report details',
    href: "https://drive.google.com/drive/folders/1vUcTJCoG-S5ZaZ-qxc7Fm3Unpv-0CC4V?usp=sharing",
  },
  {
    type: 'Log', typeBg: '#F1F5F9', typeColor: '#475569',
    iconBg: 'linear-gradient(135deg, #5482c2 0%, #475569 100%)',
    iconStroke: '#fff',
    title: 'Log book',
    sub: 'Comprehensive project logs',
    href: "https://drive.google.com/file/d/1FBKyXH5_HvPe5I6YwBjBXf0DFUsycTLv/view?usp=sharing",
  },
    {
    type: 'Report', typeBg: '#F1F5F9', typeColor: '#475569',
    iconBg: 'linear-gradient(135deg, #aaaf27 0%, #868915 100%)',
    iconStroke: '#fff',
    title: 'Deployment Document',
    sub: 'Deployment details',
    href: "https://drive.google.com/file/d/1IOVT-f76iMQztBvzoAPpzuhlfX6uClBg/view?usp=sharing",
  }
]

function DocIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <rect x="3" y="1.5" width="11" height="14" rx="2" stroke={stroke} strokeWidth="1.2"/>
      <path d="M6 6.5h5M6 9.5h3.5M6 12h4" stroke={stroke} strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

export default function Documents() {
  return (
    <section id="documents" style={{
      padding: '96px 0',
      background: 'linear-gradient(180deg, #F7F9F8 0%, #ffffff 100%)',
    }}>
      <div className="pg-wrap" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#F0FDF9', border: '0.5px solid rgba(29,158,117,0.2)',
            borderRadius: 20, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 11, color: '#0F6E56', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Documents
            </span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, color: '#0D1117' }}>
            Research artifacts
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, maxWidth: 500 }}>
            All submissions, reports, and presentations produced across the project lifecycle at SLIIT.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 14 }} className="docs-grid">
          {docs.map((d, i) => (
            <a key={i} href={d.href} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: 14,
              padding: '18px 20px',
              textDecoration: 'none',
              boxShadow: '0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.03)',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'
              }}
            >
              {/* Icon */}
              <div style={{
                width: 42, height: 42, borderRadius: 11,
                background: d.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              }}>
                <DocIcon stroke={d.iconStroke} />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: '#0D1117', marginBottom: 3 }}>{d.title}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.sub}</div>
              </div>

              {/* Right side */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
                <span style={{
                  fontSize: 10.5, padding: '3px 9px', borderRadius: 6,
                  background: d.typeBg, color: d.typeColor, fontWeight: 600, letterSpacing: '0.02em',
                }}>
                  {d.type}
                </span>
                <div style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: '#F7F9F8', border: '0.5px solid rgba(0,0,0,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .docs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 560px) {
          .docs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
