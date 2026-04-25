'use client'
import { useState } from 'react'

const tabs = [
  {
    num: '01',
    short: 'Literature survey',
    title: 'Literature survey',
    showOnlyExtra: true,
    description: 'In recent years, the use of technology in onion farming has moved from basic monitoring to smart systems that can think and predict. Researchers have found that while simple sensors can track the weather, predicting the future price of onions requires more complex math. Specifically, combining CNNs (which look at data patterns) with LSTMs (which remember past trends) has proven to be the best way to handle the "rollercoaster" nature of onion prices [1]. On the disease side, many farmers struggle with slow internet in rural areas. To solve this, a new field called TinyML has become popular; it allows small, cheap devices to run powerful models like MobileNet right on the farm without needing the cloud [2]. These models are now smart enough not just to name a disease, but to tell if it is just starting or if it is already severe. Additionally, new studies highlight that farming is a community effort. When one farmer reports a disease, using GPS-linked warning systems can save entire regions by alerting neighbors [3]. Finally, because onion leaves show very specific colors when they lack nutrients, computer vision is now being used as a "digital eye" to tell farmers exactly which fertilizer to buy, preventing them from wasting money on the wrong chemicals [4].',
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
    extra: {
      label: 'References',
      icon: '📚',
      items: [
        'R. Kumar and A. Singh, "Hybrid CNN-LSTM Framework for Agricultural Commodity Price Prediction," IEEE Trans. on Agri-Informatics, vol. 9, no. 2, pp. 112-124, 2025.',
        'M. S. Gupta et al., "TinyML on the Edge: Real-time Onion Disease Severity Grading using MobileNet," Journal of Low Power Electronics, vol. 18, no. 1, pp. 45-58, 2026.',
        'L. Chen and K. Wong, "Geospatial Outbreak Reporting: A Crowd-Sourced Model for Community-Level Crop Protection," IEEE Access, vol. 14, pp. 5601-5615, 2026.',
        'P. Sharma, "Automated Nutrient Deficiency Detection and Fertilizer Recommendation Systems in Bulb Crops," Int. J. of Computer Vision Research, vol. 11, no. 4, pp. 89-103, 2025.',
      ],
    },
  },
  {
    num: '02',
    short: 'Research gap',
    title: 'Research gap',
    description: 'Key limitations in current onion-farming technology and how this research addresses each one.',
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
    gapParts: [
      {
        title: 'Technical Connectivity Gap',
        gap: 'Most current agricultural systems rely heavily on the cloud. In many onion-growing regions, internet connectivity is unstable, so when signal is lost the smart system stops working.',
        solution: 'Using TinyML (MobileNet) moves the AI brain directly onto the on-farm device. This enables offline intelligence and keeps the system running in remote fields without internet access.',
      },
      {
        title: 'Community Gap: Lack of Collaboration Between Farmers',
        gap: 'Existing apps mainly support individual farming, but diseases like Downy Mildew and Purple Blotch spread through wind and water to nearby fields. There is no digital neighborhood watch for onion farmers.',
        solution: 'Geospatial Outbreak Reporting builds a community-wide defense system. It turns individual reports into shared alerts that protect neighboring farms across the village.',
      },
      {
        title: 'Economic Gap: Inconsistent Market Yield and Price',
        gap: 'Research often studies yield and price separately. A farmer may produce high yield, but if everyone harvests at once, market prices can crash.',
        solution: 'The system links IoT-based Yield Prediction with CNN-LSTM Price Forecasting. This closes the decision-support gap by helping farmers decide not only how to grow, but when to sell for better returns.',
      },
      {
        title: 'Severity Gap: Identification & classification',
        gap: 'Many AI models only detect whether a disease is present. Farmers also need severity stage information to choose the right treatment strategy.',
        solution: 'Severity grading (Early, Moderate, Severe) provides actionable diagnostics so treatment can be matched to disease stage instead of relying on a generic disease label.',
      },
    ],
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
    short: 'Research Problem',
    title: 'Research Problem',
    showOnlyApproach: true,
    solutionLabel: 'Research solution',
    description: 'Onion farming is very risky because of two main things: disease and price drops. Farmers often do not realize their onions are sick or hungry for nutrients until it is too late to save them. Even if they grow a great crop, the market price might crash suddenly, and they lose money. Currently, there is no easy-to-use tool that tells a farmer: "Your crop is slightly low on Nitrogen, a disease is spreading in the next village, and the price will be highest in two weeks, so you should harvest soon."',
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
      'Late detection of disease and nutrient deficiency leads to avoidable losses',
      'High market volatility can crash prices after harvest',
      'No integrated tool combines crop health and market timing guidance',
      'Farmers do not get simple, actionable, situation-based recommendations',
      'Decision-making remains reactive instead of predictive',
    ],
    approach: [
      'The proposed solution is an Integrated IoT Surveillance Ecosystem. This system acts as a "digital consultant" for the farmer. It uses low-cost sensors in the soil to predict how many onions will grow and smart AI to track market trends so the farmer knows the best time to sell. It uses a tiny camera on the farm to catch diseases early and automatically sends a "SOS" signal to nearby farmers if a contagious disease is spotted. Finally, it analyzes the color of the leaves to give specific advice on which fertilizer to use, ensuring the crop stays healthy and costs stay low.',
    ],
    extra: null,
  },
  {
    num: '04',
    short: 'Research objectives',
    title: 'Research objectives',
    showOnlyObjectives: true,
    objectiveLabel: 'Research objectives',
    description: 'Four objectives that guide the proposed onion-farming research system.',
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
    objectiveParts: [
      {
        title: 'Smart Forecasting (Yield & Price)',
        goal: 'To create a "Profit Predictor" that tells farmers how much they will grow and what it will be worth.',
        do: 'Build a system using IoT sensors to track soil moisture and air humidity, together with AI models such as Linear Regression and CNN-LSTM.',
        benefit: 'The system gives a harvest forecast from current soil conditions and past market trends, helping farmers decide whether to sell immediately or store onions for a few weeks until prices improve.',
      },
      {
        title: 'On-Device Disease Grading (TinyML)',
        goal: 'To turn a simple smartphone or small camera into a "Digital Doctor" that works without the internet.',
        do: 'Train a MobileNet model to recognize three onion diseases and judge how bad they are by grading them as Early, Moderate, or Severe.',
        benefit: 'Because the model runs on-device through TinyML, farmers in remote areas get instant diagnosis and a severity report so they know exactly how much medicine the plants need.',
      },
      {
        title: 'The Community Warning Network',
        goal: 'To stop diseases from spreading from one farm to another by creating a "Neighborhood Watch".',
        do: 'Develop a feature where farmers can report an outbreak and use that data to map the spread of disease across a geographic area.',
        benefit: 'When a disease is confirmed in one field, the system automatically sends a Proximity Alert to nearby farmers so they can protect their crops before infection arrives.',
      },
      {
        title: 'Nutrient & Stress Diagnosis',
        goal: 'To identify exactly what a plant is lacking so the farmer does not waste money on the wrong fertilizers.',
        do: 'Use Computer Vision to analyze the color and shape of onion leaves to detect stress such as thirst or nutrient deficiency.',
        benefit: 'Once the model identifies the missing nutrient, such as Nitrogen or Potassium, it gives a Smart Recommendation so the farmer gets a specific fertilizer instruction instead of guessing.',
      },
    ],
  },
  {
    num: '05',
    short: 'Methodology',
    title: 'Methodology',
    showOnlyMethodology: true,
    methodologyLabel: 'Methodology',
    description: 'Four implementation components that define how the proposed onion-farming system will work.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M6 4h10M6 11h10M6 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#2D5B93',
    accentGrad: 'linear-gradient(135deg, #3B82F6 0%, #2D5B93 100%)',
    lightBg: '#EEF5FF',
    tagBg: '#E8F1FF',
    tagColor: '#1F4D85',
    methodologyParts: [
      {
        title: 'Yield & Price Forecasting',
        data: 'Collects live soil moisture and temperature via IoT sensors, and historical market data via APIs.',
        model: 'Uses Linear Regression for yield prediction and CNN-LSTM for price prediction.',
        action: 'Compares predicted yield with predicted price trends.',
        benefit: 'Tells the farmer the best date to harvest and sell to make the most money.',
      },
      {
        title: 'Disease Identification & Grading',
        data: 'Uses a dataset of onion leaf images labeled with three diseases and three severity levels.',
        model: 'Uses MobileNet optimized with TinyML to run directly on low-power hardware like a smartphone or ESP32-CAM.',
        action: 'Scans a leaf and classifies it as Early, Moderate, or Severe stage.',
        benefit: 'Works offline and tells the farmer exactly how urgent the treatment needs to be.',
      },
      {
        title: 'Community Outbreak Reporting',
        data: 'Collects “Report Outbreak” submissions from users, including GPS location and disease type.',
        model: 'Uses a geospatial model to track the density and movement of reported infections.',
        action: 'When a cluster is detected, the system sends an automated push notification to all users within a 10 km radius.',
        benefit: 'Acts as a digital early warning, helping neighbors spray protective fungicides before the wind carries the disease to them.',
      },
      {
        title: 'Nutrient & Stress Analysis',
        data: 'Captures high-resolution images of onion leaf tips and color patterns.',
        model: 'Uses Computer Vision (Color Space Analysis) to detect stress markers like yellowing or tip-burn.',
        action: 'Matches the visual symptoms against a Fertilizer Decision Matrix.',
        benefit: 'Gives a specific recommendation, such as “Add 5kg Potash”, to fix the nutrient gap and prevent crop failure.',
      },
    ],
    extra: null,
  },
]

export default function Research() {
  const [active, setActive] = useState(0)
  const t = tabs[active]

  return (
    <section id="research" style={{ padding: '96px 0', background: '#fff' }}>
      <div className="pg-wrap" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

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
            Five research topics addressing critical gaps in onion cultivation
            using AI, IoT, and geospatial intelligence.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{
          display: 'flex', gap: 8,
          marginBottom: 32,
          padding: '6px',
          background: '#F7F9F8',
          borderRadius: 14,
          border: '1px solid rgba(0,0,0,0.06)',
          width: 'fit-content',
          maxWidth: '100%',
          overflowX: 'auto',
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
                
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0D1117', letterSpacing: '-0.02em', marginBottom: 10 }}>
                {t.title}
              </h3>
              <p style={{ fontSize: 14, color: '#4B5563', lineHeight: 1.8, maxWidth: 720, margin: 0 }}>
                {t.description || ''}
              </p>
            </div>
          </div>

          {/* Columns */}
          {t.methodologyParts ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              padding: '22px',
              background: '#fff',
            }} className="research-cols">
              {t.methodologyParts.map((part, i) => (
                <div key={i} style={{
                  background: '#F8FBFF',
                  border: `1px solid ${t.accent}22`,
                  borderRadius: 14,
                  padding: '18px 18px 16px',
                }}>
                  <h4 style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#0D1117',
                    lineHeight: 1.5,
                  }}>
                    {part.title}
                  </h4>
                  <p style={{ margin: '10px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: '#7C2D12' }}>Data:</strong> {part.data}
                  </p>
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: t.accent }}>Model:</strong> {part.model}
                  </p>
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: '#1D4ED8' }}>Action:</strong> {part.action}
                  </p>
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: '#0F6E56' }}>Benefit:</strong> {part.benefit}
                  </p>
                </div>
              ))}
              <div style={{
                marginTop: 8,
                border: '1px solid rgba(59,130,246,0.18)',
                borderRadius: 18,
                overflow: 'hidden',
                background: '#F8FBFF',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              }}>
                <img
                  src="/images/methodology.png"
                  alt="Onion crop surveillance ecosystem methodology diagram"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          ) : t.objectiveParts ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              padding: '22px',
              background: '#fff',
            }} className="research-cols">
              {t.objectiveParts.map((part, i) => (
                <div key={i} style={{
                  background: '#fff',
                  border: `1px solid ${t.accent}22`,
                  borderRadius: 14,
                  padding: '18px 18px 16px',
                }}>
                  <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#0D1117', lineHeight: 1.5 }}>
                    {part.title}
                  </h4>
                  <p style={{ margin: '10px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: '#7C2D12' }}>The Goal:</strong> {part.goal}
                  </p>
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: t.accent }}>Implementation:</strong> {part.do}
                  </p>
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: '#1D4ED8' }}>The Benefit:</strong> {part.benefit}
                  </p>
                </div>
              ))}
            </div>
          ) : t.gapParts ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 16,
              padding: '22px',
              background: '#fff',
            }} className="research-cols">
              {t.gapParts.map((part, i) => (
                <div key={i} style={{
                  border: `1px solid ${t.accent}22`,
                  borderRadius: 14,
                  padding: '18px 18px 16px',
                  background: '#FFFDF9',
                }}>
                  <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#0D1117', lineHeight: 1.5 }}>
                    {part.title}
                  </h4>
                  <p style={{ margin: '10px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: '#7C2D12' }}>The Gap:</strong> {part.gap}
                  </p>
                  <p style={{ margin: '8px 0 0', fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
                    <strong style={{ color: t.accent }}>Our Solution:</strong> {part.solution}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: t.showOnlyApproach ? '1fr' : (t.showOnlyExtra ? '1fr' : (t.extra ? '1fr 1fr 1fr' : '1fr 1fr')),
              background: '#fff',
            }} className="research-cols">
              {!t.showOnlyExtra && !t.showOnlyApproach && (
                <div style={{ padding: '28px 30px', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 20 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>⚠️</div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0D1117', letterSpacing: '-0.01em' }}>Research Gaps</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {t.gaps.map((g, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{ width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1, background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M2 2l5 5M7 2L2 7" stroke="#EF4444" strokeWidth="1.4" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.6 }}>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!t.showOnlyExtra && (
                <div style={{ padding: '28px 30px', borderRight: t.extra ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 20 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0D1117', letterSpacing: '-0.01em' }}>
                      {t.solutionLabel || 'Proposed Approach'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {t.approach.map((a, i) => (
                      <div key={i} style={t.showOnlyApproach ? { background: t.lightBg, border: `1px solid ${t.accent}22`, borderRadius: 10, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start' } : { display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        {t.showOnlyApproach ? (
                          <span style={{ fontSize: 13, fontWeight: 700, color: t.accent, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                        ) : (
                          <div style={{ width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1, background: t.tagBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                              <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        )}
                        <span style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.6 }}>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {t.extra && (
                <div style={{ padding: '28px 30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 20 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: '#F0F9FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{t.extra.icon}</div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0D1117', letterSpacing: '-0.01em' }}>{t.extra.label}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {t.extra.items.map((item, i) => (
                      <div key={i} style={{ background: t.lightBg, border: `1px solid ${t.accent}22`, borderRadius: 10, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: t.accent, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                        <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

    </section>
  )
}
