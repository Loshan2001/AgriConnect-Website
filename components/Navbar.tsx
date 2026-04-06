'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Components', href: '#components' },
  { label: 'Documents', href: '#documents' },
  { label: 'Technology', href: '#technology' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        borderBottom: scrolled ? '0.5px solid rgba(0,0,0,0.08)' : '0.5px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 9, background: '#1D9E75',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M8.5 2C8.5 2 4 5.2 4 9.5C4 12.2 6 14 8.5 14C11 14 13 12.2 13 9.5C13 5.2 8.5 2 8.5 2Z" fill="white" opacity="0.9"/>
              <path d="M8.5 6.5V13M6 9.5H11" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ fontSize: 17, fontWeight: 500, color: '#111', letterSpacing: '-0.01em' }}>
            Agri<span style={{ color: '#1D9E75' }}>Connect</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: 13, color: '#6B7280', textDecoration: 'none', fontWeight: 400,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#111')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#documents"
            style={{
              background: '#1D9E75', color: '#fff', borderRadius: 7, padding: '7px 16px',
              fontSize: 13, fontWeight: 500, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#17896A')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1D9E75')}
          >
            View documents
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
          className="show-mobile"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <><path d="M5 5l12 12M17 5L5 17" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></>
              : <><path d="M3 6h16M3 11h16M3 16h16" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: '#fff', borderTop: '0.5px solid rgba(0,0,0,0.08)',
          padding: '16px 32px 20px',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '10px 0', fontSize: 14, color: '#374151', textDecoration: 'none',
              borderBottom: '0.5px solid rgba(0,0,0,0.06)',
            }}>
              {l.label}
            </a>
          ))}
          <a href="#documents" style={{
            display: 'inline-block', marginTop: 14, background: '#1D9E75', color: '#fff',
            borderRadius: 7, padding: '9px 20px', fontSize: 13, fontWeight: 500, textDecoration: 'none',
          }}>
            View documents
          </a>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
