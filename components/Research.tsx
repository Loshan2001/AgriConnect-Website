'use client'
import { useState } from 'react'

const tabs = [
  {
    num: '01',
    short: 'Yield & Price',
    title: 'Yield Forecasting & Price Prediction',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <polyline points="2,17 6,10 11,13 16,7 20,9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="9" r="1.5" fill="currentColor"/>
      </svg>
    ),
    accent: '#1D9E75',
    accentGrad: 'linear-gradient(135deg, #1D9E75 0%, #0F6E56 100%)',
    lightBg: '#E8FBF4',
    tagBg: '#E1F5EE',
    tagColor: '#0F6E56',
    problem: {
      label: 'Research Problem',
      text: 'Onion cultivation in Sri Lanka faces severe uncertainty due to fluctuating yields and volatile market prices. Farmers currently rely on experience and outdated market reports, with no access to real-time predictive insights for planning harvest or sales decisions.',
    },
    gaps: [
      'No scientific or data-driven yield prediction model',
      'No forward-looking onion price forecasting system',
      'No real-time IoT + environmental data integration',
      'No combined yield–price correlation modeling',
      'No adaptive system for changing climate/market conditions',
      'No predictive alerts for harvest, storage, or selling decisions',
    ],
    approach: [
      'AI-based yield prediction using soil, environmental, and satellite data',
      'Time-series model for 30-day price forecasting',
      'Real-time IoT data integration for live predictions',
      'Combined yield–price correlation model',
      'Self-learning system that improves with new data',
      'Smart recommendations for harvest, storage, and selling timing',
    ],
    extra: null,
  },
  {
    num: '02',
    short: 'Disease ID',
    title: 'Disease Identification System',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M8 11.5C8 9.5 9.4 8 11 8s3 1.5 3 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="11" cy="14.5" r="1.2" fill="currentColor"/>
      </svg>
    ),
    accent: '#BA7517',
    accentGrad: 'linear-gradient(135deg, #D4870A 0%, #9A5A0A 100%)',
    lightBg: '#FEF3E2',
    tagBg: '#FAEEDA',
    tagColor: '#854F0B',
    problem: {
      label: 'Why It Matters',
      text: 'Onion is a high-value cash crop used globally in fresh consumption and processing industries. Diseases can cause 30–50% yield loss if not detected early. Common diseases include Purple Blotch, Downy Mildew, Neck Rot, Rust, and Botrytis Leaf Blight.',
    },
    gaps: [
      'Limited detection of only 1–2 diseases in existing systems',
      'No disease severity classification (early, moderate, severe)',
      'No lesion segmentation or damage estimation',
      'No disease progression forecasting',
      'Mostly leaf-only analysis — bulb ignored',
    ],
    approach: [
      'Multi-disease classification system',
      'Multi-stage severity detection',
      'Lesion segmentation with affected-area estimation',
      'Disease progression forecasting using time-series AI',
      'Combined leaf + bulb image analysis',
    ],
    extra: {
      label: 'Research Questions',
      icon: '❓',
      items: [
        'Which onion diseases can be detected from images?',
        'Can severity levels be classified accurately?',
        'Can disease spread be predicted over time?',
      ],
    },
  },
  {
    num: '03',
    short: 'Early Warning',
    title: 'Disease Early Warning System',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="6" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14.5L9.5 12.5M12.5 9.5L14 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#185FA5',
    accentGrad: 'linear-gradient(135deg, #3B82F6 0%, #185FA5 100%)',
    lightBg: '#EBF3FE',
    tagBg: '#E6F1FB',
    tagColor: '#185FA5',
    problem: {
      label: 'Problem Context',
      text: 'Anthracnose Twister Disease (ATD) is one of the most destructive onion diseases in Sri Lanka. It causes twisted leaves, white lesions, and total crop failure, thriving in high humidity and waterlogged conditions during monsoon seasons. Farmers currently detect it too late — only after visible damage appears.',
    },
    gaps: [
      'No early warning system for disease outbreaks',
      'No climate-based prediction model',
      'No spatial disease tracking system',
      'No community-driven reporting mechanism',
      'No real-time risk alerts for farmers',
    ],
    approach: [
      'AI-based early outbreak prediction model',
      'IoT + climate data integration (humidity, rainfall, soil moisture)',
      'Geospatial risk mapping of disease spread',
      'Crowdsourced farmer reporting system',
      'Spatially weighted outbreak signal processing',
      'Real-time early warning alerts',
    ],
    extra: null,
  },
  {
    num: '04',
    short: 'Nutrient & Soil',
    title: 'Nutrient & Environmental Risk Analysis',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3c0 0-6 5-6 10.5C5 17.5 7.7 20 11 20s6-2.5 6-6.5C17 8 11 3 11 3z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11 9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#993556',
    accentGrad: 'linear-gradient(135deg, #B83D64 0%, #7A2243 100%)',
    lightBg: '#FDEEF4',
    tagBg: '#FBEAF0',
    tagColor: '#993556',
    problem: {
      label: 'Problem Context',
      text: 'Farmers in Sri Lanka lose 30–50% of onion yield every season due to soil-borne diseases. Problems are usually detected too late, when symptoms are already visible. Existing tools only monitor soil nutrients but do not provide disease risk prediction or actionable guidance.',
    },
    gaps: [
      'No disease risk prediction from soil data',
      'Reactive systems instead of predictive systems',
      'No integration of soil + weather + moisture data',
      'No decision support for fertilizer or treatment usage',
      'No continuous real-time risk monitoring',
    ],
    approach: [
      'AI-based soil disease risk prediction model',
      'Real-time IoT soil monitoring system',
      'Early disease risk alerts before symptoms appear',
      'Smart recommendation engine (what, how much, when)',
      'Adaptive seasonal risk prediction system',
    ],
    extra: {
      label: 'Farmer Needs',
      icon: '🎯',
      items: [
        'Continuous soil health monitoring',
        'Early disease warnings before symptoms appear',
        'Simple recommendations for fertilizer and treatment',
        'Clear timing guidance for crop decisions',
      ],
    },
  },
]

export default function Research() {
  const [active, setActive] = useState(0)
  const t = tabs[active]

  return (
    <section id="research" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Section header */}
        <div style={{ marginBottom: 52 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#F0FDF9', border: '0.5px solid rgba(29,158,117,0.2)',
            borderRadius: 20, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 11, color: '#0F6E56', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Research
            </span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, color: '#0D1117' }}>
            Research scope & methodology
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, maxWidth: 540 }}>
            Four independent research components addressing critical gaps in onion cultivation
            using AI, IoT, and geospatial intelligence.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap',
          marginBottom: 32,
          padding: '6px',
          background: '#F7F9F8',
          borderRadius: 14,
          border: '1px solid rgba(0,0,0,0.06)',
          width: 'fit-content',
        }}>
          {tabs.map((tab, i) => {
            const isActive = active === i
            return (
              <button key={i} onClick={() => setActive(i)} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 10, border: 'none',
                cursor: 'pointer', fontFamily: 'inherit',
                background: isActive ? '#fff' : 'transparent',
                color: isActive ? tab.accent : '#6B7280',
                fontWeight: isActive ? 600 : 400,
                fontSize: 13.5,
                boxShadow: isActive ? '0 1px 4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.2s ease',
              }}>
                <span style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 28, height: 28, borderRadius: 8,
                  background: isActive ? tab.lightBg : 'transparent',
                  color: isActive ? tab.accent : '#9CA3AF',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}>
                  {tab.icon}
                </span>
                <span className="tab-label">{tab.short}</span>
              </button>
            )
          })}
        </div>

        {/* Tab content */}
        <div key={active} style={{
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: 22,
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.04)',
          animation: 'fadeUp 0.35s ease forwards',
        }}>

          {/* Card hero row */}
          <div style={{
            background: t.lightBg,
            padding: '32px 36px',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            display: 'flex', gap: 28, alignItems: 'flex-start',
          }} className="research-hero">
            {/* Icon */}
            <div style={{
              width: 56, height: 56, borderRadius: 16,
              background: t.accentGrad,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', flexShrink: 0,
              boxShadow: `0 4px 20px ${t.accent}44`,
            }}>
              {t.icon}
            </div>
            {/* Title + problem */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  color: t.accent, textTransform: 'uppercase',
                }}>Component {t.num}</span>
                <span style={{ width: 1, height: 14, background: 'rgba(0,0,0,0.15)', display: 'inline-block' }} />
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: '3px 9px',
                  borderRadius: 6, background: t.tagBg, color: t.tagColor,
                }}>{t.problem.label}</span>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0D1117', letterSpacing: '-0.02em', marginBottom: 10 }}>
                {t.title}
              </h3>
              <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.8, maxWidth: 720, margin: 0 }}>
                {t.problem.text}
              </p>
            </div>
          </div>

          {/* Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: t.extra ? '1fr 1fr 1fr' : '1fr 1fr',
            background: '#fff',
          }} className="research-cols">

            {/* Research Gaps */}
            <div style={{
              padding: '28px 30px',
              borderRight: '1px solid rgba(0,0,0,0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 20 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 8,
                  background: '#FEF2F2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14,
                }}>⚠️</div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0D1117', letterSpacing: '-0.01em' }}>
                  Research Gaps
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.gaps.map((g, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
                      background: '#FEE2E2',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M2 2l5 5M7 2L2 7" stroke="#EF4444" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.6 }}>{g}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proposed Approach */}
            <div style={{
              padding: '28px 30px',
              borderRight: t.extra ? '1px solid rgba(0,0,0,0.06)' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 20 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 8,
                  background: t.lightBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14,
                }}>⚙️</div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0D1117', letterSpacing: '-0.01em' }}>
                  Proposed Approach
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {t.approach.map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
                      background: t.tagBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.6 }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra column (Research Questions / Farmer Needs) */}
            {t.extra && (
              <div style={{ padding: '28px 30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 20 }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 8,
                    background: '#F0F9FF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14,
                  }}>{t.extra.icon}</div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0D1117', letterSpacing: '-0.01em' }}>
                    {t.extra.label}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {t.extra.items.map((item, i) => (
                    <div key={i} style={{
                      background: t.lightBg,
                      border: `1px solid ${t.accent}22`,
                      borderRadius: 10, padding: '12px 14px',
                      display: 'flex', gap: 10, alignItems: 'flex-start',
                    }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: t.accent, flexShrink: 0 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  )
}
