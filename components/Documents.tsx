'use client'

const docs = [
  {
    type: 'Proposal', typeBg: '#E1F5EE', typeColor: '#0F6E56',
    iconBg: '#E1F5EE', iconStroke: '#1D9E75',
    title: 'Project proposal',
    sub: 'Scope, objectives & research questions',
    href: '#',
  },
  {
    type: 'Report', typeBg: '#E6F1FB', typeColor: '#185FA5',
    iconBg: '#E6F1FB', iconStroke: '#185FA5',
    title: 'Progress report I',
    sub: 'Literature review & methodology',
    href: '#',
  },
  {
    type: 'Report', typeBg: '#E6F1FB', typeColor: '#185FA5',
    iconBg: '#E6F1FB', iconStroke: '#185FA5',
    title: 'Progress report II',
    sub: 'Implementation & early results',
    href: '#',
  },
  {
    type: 'Slides', typeBg: '#FAEEDA', typeColor: '#854F0B',
    iconBg: '#FAEEDA', iconStroke: '#BA7517',
    title: 'Final presentation',
    sub: 'Viva & research poster slides',
    href: '#',
  },
  {
    type: 'Paper', typeBg: '#EEEDFE', typeColor: '#534AB7',
    iconBg: '#EEEDFE', iconStroke: '#534AB7',
    title: 'Final research paper',
    sub: 'Publication-ready full report',
    href: '#',
  },
  {
    type: 'Log', typeBg: '#F1EFE8', typeColor: '#444441',
    iconBg: '#F1EFE8', iconStroke: '#5F5E5A',
    title: 'Status documents',
    sub: 'Weekly meeting notes & logs',
    href: '#',
  },
]

function DocIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="3" y="1.5" width="10" height="13" rx="1.5" stroke={stroke} strokeWidth="1.1"/>
      <path d="M5.5 6h5M5.5 9h3.5" stroke={stroke} strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

export default function Documents() {
  return (
    <section id="documents" style={{
      padding: '80px 0', borderBottom: '0.5px solid rgba(0,0,0,0.08)',
      background: '#F8FAF9',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
            Documents
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 10, color: '#111' }}>
            Research artifacts
          </h2>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, maxWidth: 480 }}>
            All submissions, reports, and presentations produced across the project lifecycle at SLIIT.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }} className="docs-grid">
          {docs.map((d, i) => (
            <a key={i} href={d.href} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)',
              borderRadius: 12, padding: '16px 18px', textDecoration: 'none',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 9, background: d.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <DocIcon stroke={d.iconStroke} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#111', marginBottom: 2 }}>{d.title}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.sub}</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                <span style={{
                  fontSize: 10, padding: '3px 8px', borderRadius: 5,
                  background: d.typeBg, color: d.typeColor, fontWeight: 600,
                }}>
                  {d.type}
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .docs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 560px) {
          .docs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
