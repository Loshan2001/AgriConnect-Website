'use client'

const team = [
  {
    initials: 'M1', name: 'Member 1', role: 'Yield & price forecasting',
    avatarBg: '#E1F5EE', avatarColor: '#085041',
    component: '01',
  },
  {
    initials: 'M2', name: 'Member 2', role: 'Disease identification',
    avatarBg: '#FAEEDA', avatarColor: '#633806',
    component: '02',
  },
  {
    initials: 'M3', name: 'Member 3', role: 'Predictive risk mapping',
    avatarBg: '#E6F1FB', avatarColor: '#0C447C',
    component: '03',
  },
  {
    initials: 'M4', name: 'Member 4', role: 'Stress & deficiency detection',
    avatarBg: '#FBEAF0', avatarColor: '#72243E',
    component: '04',
  },
]

const supervisor = {
  initials: 'SV', name: 'Supervisor', role: 'Research advisor', org: 'SLIIT',
  avatarBg: '#EEEDFE', avatarColor: '#3C3489',
}

export default function Team() {
  return (
    <section id="team" style={{
      padding: '80px 0', borderBottom: '0.5px solid rgba(0,0,0,0.08)',
      background: '#F8FAF9',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
            Team
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 10, color: '#111' }}>
            Research team · SLIIT 2026
          </h2>
          <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>
            Four researchers and a faculty supervisor collaborating across the system&apos;s components.
          </p>
        </div>

        {/* Main 4 team members */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: 14, marginBottom: 14,
        }} className="team-grid">
          {team.map((m, i) => (
            <div key={i} style={{
              background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)',
              borderRadius: 14, padding: '24px 16px', textAlign: 'center',
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
                width: 52, height: 52, borderRadius: '50%',
                background: m.avatarBg, color: m.avatarColor,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px', fontSize: 14, fontWeight: 500,
              }}>
                {m.initials}
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#111', marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.5, marginBottom: 12 }}>{m.role}</div>
              <span style={{
                fontSize: 10, padding: '3px 8px', borderRadius: 5,
                background: '#F1F5F9', color: '#64748B', fontWeight: 500,
              }}>
                Component {m.component}
              </span>
            </div>
          ))}
        </div>

        {/* Supervisor — centered */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)',
            borderRadius: 14, padding: '24px 32px', textAlign: 'center',
            display: 'flex', alignItems: 'center', gap: 16, minWidth: 280,
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}
          >
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: supervisor.avatarBg, color: supervisor.avatarColor,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 500, flexShrink: 0,
            }}>
              {supervisor.initials}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: '#111', marginBottom: 3 }}>{supervisor.name}</div>
              <div style={{ fontSize: 12, color: '#6B7280', marginBottom: 6 }}>{supervisor.role}</div>
              <span style={{
                fontSize: 10, padding: '3px 8px', borderRadius: 5,
                background: '#EEEDFE', color: '#534AB7', fontWeight: 600,
              }}>
                {supervisor.org} · Faculty supervisor
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
