'use client'
import Image from 'next/image'

const team = [
  {
    initials: 'M1', name: 'Harishanth A.', role: 'Yield & price forecasting',
    gradient: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
    ringColor: 'rgba(29,158,117,0.25)',
    component: '01', compLabel: 'Forecasting',
    photo: '/images/Harishanth.jpg',
  },
  {
    initials: 'M2', name: 'Lochan S.', role: 'Disease identification',
    gradient: 'linear-gradient(135deg, #D4870A 0%, #9A5A0A 100%)',
    ringColor: 'rgba(212,135,10,0.25)',
    component: '02', compLabel: 'Disease AI',
    photo: '/images/lochan.jpg',
    photoFit: 'contain' as const,
    photoBg: '#F5EFE6',
  },
  {
    initials: 'M3', name: 'Kirusanth S.', role: 'Disease Early Warning System',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #185FA5 100%)',
    ringColor: 'rgba(59,130,246,0.25)',
    component: '03', compLabel: 'Risk Maps',
    photo: '/images/kirusanth.jpeg',
  },
  {
    initials: 'M4', name: 'Amarasinghe V.D', role: 'Stress & deficiency detection',
    gradient: 'linear-gradient(135deg, #B83D64 0%, #7A2243 100%)',
    ringColor: 'rgba(184,61,100,0.25)',
    component: '04', compLabel: 'Stress AI',
    photo: '/images/vinuki.jpg',
  },
]

const supervisor = {
  initials: 'SV',
  name: 'Dr. Darshana Kasthurirathna',
  role: 'Research advisor & faculty mentor',
  org: 'SLIIT',
  gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
  ringColor: 'rgba(139,92,246,0.25)',
  photo: '/images/supervisor.png',
  component: 'SV', compLabel: 'Supervisor',
}

type Member = typeof team[0] & { photoFit?: 'cover' | 'contain'; photoBg?: string }

function MemberCard({ member }: { member: Member }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)',
        display: 'flex', flexDirection: 'column',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.12)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'
      }}
    >
      {/* Photo / avatar area — fixed height */}
      <div style={{ position: 'relative', height: 220, flexShrink: 0, background: member.photoBg ?? '#F3F4F6' }}>
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            style={{
              objectFit: member.photoFit ?? 'cover',
              objectPosition: 'center top',
              background: member.photoBg ?? 'transparent',
            }}
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: member.gradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>
              {member.initials}
            </span>
          </div>
        )}
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 90,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        {/* Component badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(8px)',
          borderRadius: 7, padding: '4px 10px',
          fontSize: 10.5, fontWeight: 700, color: '#fff', letterSpacing: '0.06em',
        }}>
          {member.component}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#0D1117' }}>{member.name}</div>
        <div style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.5, flex: 1 }}>{member.role}</div>
        <span style={{
          display: 'inline-block', marginTop: 8,
          fontSize: 11, padding: '4px 10px', borderRadius: 6,
          background: '#F7F9F8', color: '#475569', fontWeight: 500,
          border: '0.5px solid rgba(0,0,0,0.07)', alignSelf: 'flex-start',
        }}>
          {member.compLabel}
        </span>
      </div>
    </div>
  )
}

function SupervisorCard() {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)',
        display: 'flex', flexDirection: 'column',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.12)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'
      }}
    >
      {/* Photo area */}
      <div style={{ position: 'relative', height: 220, flexShrink: 0 }}>
        <Image
          src={supervisor.photo}
          alt={supervisor.name}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          sizes="(max-width: 768px) 100vw, 20vw"
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 90,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        {/* Badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: 'rgba(139,92,246,0.7)', backdropFilter: 'blur(8px)',
          borderRadius: 7, padding: '4px 10px',
          fontSize: 10.5, fontWeight: 700, color: '#fff', letterSpacing: '0.06em',
        }}>
          SUPERVISOR
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#0D1117', lineHeight: 1.3 }}>{supervisor.name}</div>
        <div style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.5, flex: 1 }}>{supervisor.role}</div>
        <div style={{ display: 'flex', gap: 7, marginTop: 8, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 11, padding: '4px 10px', borderRadius: 6,
            background: '#EEEDFE', color: '#534AB7', fontWeight: 600,
          }}>
            {supervisor.org}
          </span>
          <span style={{
            fontSize: 11, padding: '4px 10px', borderRadius: 6,
            background: '#F7F9F8', color: '#475569', fontWeight: 500,
            border: '0.5px solid rgba(0,0,0,0.07)',
          }}>
            Faculty mentor
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" style={{
      padding: '96px 0',
      background: 'linear-gradient(180deg, #F7F9F8 0%, #F0F9F5 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#F0FDF9', border: '0.5px solid rgba(29,158,117,0.2)',
            borderRadius: 20, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 11, color: '#0F6E56', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Team
            </span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, color: '#0D1117' }}>
            Research team · SLIIT 2026
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75 }}>
            Four researchers and a faculty supervisor collaborating across the system&apos;s components.
          </p>
        </div>

        {/* 5 equal cards in one row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: 16,
        }} className="team-grid">
          {team.map((m, i) => <MemberCard key={i} member={m} />)}
          <SupervisorCard />
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .team-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
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
