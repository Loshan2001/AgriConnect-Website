'use client'

const milestones = [
  {
    date: '27th June 2025',
    title: 'TAF Submission',
    desc: 'Topic Approval Form submitted to the department for research topic registration and academic approval.',
    marks: 2,
    done: true,
  },
  {
    date: '23rd July 2025',
    title: 'Charter Submission',
    desc: 'Project charter documenting research objectives, scope, team responsibilities, and methodology submitted.',
    marks: 2,
    done: true,
  },
  {
    date: '8–12 September 2025',
    title: 'Proposal Presentation',
    desc: 'Formal research proposal presented to the evaluation panel detailing problem statement, literature review, and planned approach.',
    marks: 6,
    done: true,
  },
  {
    date: '15–19 December 2025',
    title: 'Progress Presentation I',
    desc: 'First interim presentation reviewing project completion status, covering implementation progress and preliminary results.',
    marks: 15,
    done: true,
  },
  {
    date: '9–12 March 2026',
    title: 'Progress Presentation II',
    desc: 'Second interim presentation showcasing advanced implementation, system evaluation, and refined performance metrics.',
    marks: 18,
    done: true,
  },
  {
    date: '26th April 2026',
    title: 'Website Submission',
    desc: 'Research project website submitted for evaluation showcasing the system, research team, and all artifacts.',
    marks: 2,
    done: true,
  },
  {
    date: '27 April – 6 May 2026',
    title: 'Final Presentation & Viva',
    desc: 'Comprehensive final presentation and oral examination before the evaluation panel covering all system components.',
    marks: 20,
    done: true,
  },
  {
    date: '30th April 2026',
    title: 'Final Checklist Submission',
    desc: 'Submission of the final project checklist confirming all deliverables and documentation are complete.',
    marks: 2,
    done: false,
  },
  {
    date: '27 April – 6 May 2026',
    title: 'Website Evaluation & Logbook Submission',
    desc: 'Final evaluation of the project website along with submission of logbook documenting the full research journey.',
    marks: 3,
    done: false,
  },
  {
    date: '8th May 2026',
    title: 'Research Paper Submission',
    desc: 'Completed research paper submitted to a peer-reviewed conference or journal for academic evaluation.',
    marks: 10,
    done: false,
  },
  {
    date: '13th May 2026',
    title: 'Final Thesis Submission',
    desc: 'Comprehensive final thesis document submitted to the department with all research findings and conclusions.',
    marks: 10,
    done: false,
  },
  {
    date: '15th June 2026',
    title: 'Research Paper Publication Evidence',
    desc: 'Evidence of research paper submission or acceptance to a recognised academic conference or journal submitted.',
    marks: 10,
    done: false,
  },
]

export default function Milestones() {
  return (
    <section id="milestones" style={{
      padding: '96px 0',
      background: 'linear-gradient(180deg, #EDF7F1 0%, #F4FBF7 100%)',
    }}>
      <div className="pg-wrap" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#F0FDF9', border: '0.5px solid rgba(29,158,117,0.2)',
            borderRadius: 20, padding: '5px 14px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 11, color: '#0F6E56', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Milestones
            </span>
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 12, color: '#0D1117' }}>
            Timeline in Brief
          </h2>
          <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, maxWidth: 520 }}>
            Key deliverables and submission deadlines across the AgriConnect research project lifecycle at SLIIT.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 860 }} className="milestone-container">

          {/* Vertical line */}
          <div className="milestone-line" style={{
            position: 'absolute',
            left: 179,
            top: 12, bottom: 12,
            width: 2,
            background: 'linear-gradient(to bottom, #1D9E75 43%, #1D2A1E 43%)',
          }} />

          {milestones.map((m, i) => (
            <div key={i} style={{ display: 'flex', marginBottom: 52, position: 'relative' }} className="milestone-row">

              {/* Left — label column */}
              <div className="milestone-left" style={{ width: 180, flexShrink: 0, position: 'relative' }}>
                {/* Diamond marker */}
                <div style={{
                  position: 'absolute',
                  right: -11,
                  top: 6,
                  width: 20,
                  height: 20,
                  transform: 'rotate(45deg)',
                  background: m.done ? '#fff' : '#0D1117',
                  border: m.done ? '2.5px solid #1D9E75' : '2.5px solid #0D1117',
                  boxShadow: m.done ? '0 0 0 5px rgba(29,158,117,0.14)' : '0 0 0 5px rgba(13,17,23,0.07)',
                }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingLeft: 40 }} className="milestone-content">
                {/* Date badge */}
                <span style={{
                  display: 'inline-block',
                  background: m.done ? '#1D9E75' : '#0D1117',
                  color: '#fff',
                  padding: '5px 16px',
                  fontSize: 13,
                  fontWeight: 500,
                  borderRadius: m.done ? 6 : 3,
                  marginBottom: 14,
                  letterSpacing: '0.01em',
                }}>
                  {m.date}
                </span>

                <h3 style={{
                  fontSize: 28, fontWeight: 700,
                  color: '#0D1117', marginBottom: 10,
                  lineHeight: 1.2, letterSpacing: '-0.02em',
                }}>
                  {m.title}
                </h3>

                <p style={{
                  fontSize: 14, color: '#4B5563',
                  lineHeight: 1.8, marginBottom: 18, maxWidth: 580,
                }}>
                  {m.desc}
                </p>

                <div style={{ fontSize: 14, marginBottom: 10, color: '#0D1117' }}>
                  <strong>Marks Allocated</strong> : {m.marks}
                </div>

                {/* Progress bar */}
                <div style={{
                  background: '#D1FAE5',
                  borderRadius: 4,
                  height: 24,
                  maxWidth: 580,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${m.marks}%`,
                    minWidth: 42,
                    height: '100%',
                    background: m.done
                      ? 'linear-gradient(90deg, #1D9E75 0%, #2DD4A0 100%)'
                      : '#6B7280',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 10,
                  }}>
                    <span style={{ fontSize: 11, color: '#fff', fontWeight: 700 }}>
                      {m.marks}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
