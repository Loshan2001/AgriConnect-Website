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
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        borderBottom: scrolled ? '0.5px solid rgba(0,0,0,0.07)' : '0.5px solid transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(29,158,117,0.35)',
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2.5c0 0-4.5 3.5-4.5 7.5C4.5 13 6.5 15 9 15s4.5-2 4.5-5C13.5 6 9 2.5 9 2.5z" fill="white" opacity="0.95"/>
              <path d="M9 7v7M6.5 10.5H11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{
            fontSize: 17, fontWeight: 600,
            color: scrolled ? '#111' : '#fff',
            letterSpacing: '-0.02em',
            transition: 'color 0.35s ease',
          }}>
            Agri<span style={{ color: '#1D9E75' }}>Connect</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: 13.5, fontWeight: 400,
              color: scrolled ? '#6B7280' : 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = scrolled ? '#111' : '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#6B7280' : 'rgba(255,255,255,0.7)')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#documents"
            style={{
              background: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
              color: '#fff', borderRadius: 8, padding: '8px 18px',
              fontSize: 13, fontWeight: 500, textDecoration: 'none',
              boxShadow: '0 2px 10px rgba(29,158,117,0.3)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(29,158,117,0.45)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(29,158,117,0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            View documents
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 6,
            color: scrolled ? '#111' : '#fff',
          }}
          className="show-mobile"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen
              ? <><path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>
              : <><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '0.5px solid rgba(0,0,0,0.07)',
          padding: '16px 32px 24px',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '11px 0', fontSize: 14, color: '#374151',
              textDecoration: 'none', borderBottom: '0.5px solid rgba(0,0,0,0.06)',
            }}>
              {l.label}
            </a>
          ))}
          <a href="#documents" style={{
            display: 'inline-block', marginTop: 16,
            background: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
            color: '#fff', borderRadius: 8, padding: '10px 22px',
            fontSize: 13, fontWeight: 500, textDecoration: 'none',
          }}>
            View documents
          </a>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
