'use client'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '0.5px solid rgba(0,0,0,0.08)',
      padding: '28px 0',
      background: '#fff',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        {/* Logo + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 26, height: 26, borderRadius: 7, background: '#1D9E75',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1.5c0 0-3 2.5-3 5C3.5 9.2 4.8 11 6.5 11s3-1.8 3-4.5C9.5 4 6.5 1.5 6.5 1.5z" fill="white" opacity="0.9"/>
              <path d="M6.5 5v5M5 7.5h3" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#111' }}>Agri<span style={{ color: '#1D9E75' }}>Connect</span></span>
            <span style={{ fontSize: 12, color: '#9CA3AF', marginLeft: 10 }}>
              © 2026 · Sri Lanka Institute of Information Technology (SLIIT)
            </span>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {['GitHub', 'Documents', 'Contact'].map(l => (
            <a key={l} href="#" style={{
              fontSize: 13, color: '#9CA3AF', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#374151'}
              onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
