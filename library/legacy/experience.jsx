const { useState } = React;

const experiences = [
  { id: '01', title: 'Senior UI Designer', company: 'Linear', period: 'Mar 2023 → Present', location: 'San Francisco, CA', tags: ['Design Systems', 'Product'], status: 'CURRENT', bullets: ['Leading product design for core features used by millions of teams worldwide. Built and scaled the design system, improved UX consistency and shipped 20+ major features.'], metrics: [{ icon: '📈', val: '20+', label: 'Major features shipped' }, { icon: '👥', val: '3M+', label: 'Users impacted' }, { icon: '↑', val: '28%', label: 'Increase in activation' }] },
  { id: '02', title: 'UI Designer', company: 'Webflow', period: 'Aug 2021 – Feb 2023', location: '', tags: ['Product', 'Web'], status: '', bullets: ['Redesigned dashboard experience', 'Improved design system adoption', 'Collaborated with engineering team'], metrics: [] },
  { id: '03', title: 'Product Designer', company: 'Tally', period: 'Jan 2020 – Jul 2021', location: '', tags: ['Product'], status: '', bullets: ['Designed user flows and wireframes', 'Conducted user research', 'Shipped landing page redesign'], metrics: [] },
  { id: '04', title: 'Junior Designer', company: 'Crazy Egg', period: 'Jun 2019 – Dec 2019', location: '', tags: ['Web'], status: '', bullets: ['Created marketing assets', 'Assisted in UI improvements', 'Learned and iterated fast'], metrics: [] },
];

function ExperienceSection({ accent }) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState([0]);
  const exp = experiences[active];

  const toggle = (i) => {
    setActive(i);
    setExpanded(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden', padding: '36px 40px', gap: 28 }}>

      {/* Left: section header + layers */}
      <div style={{ width: 220, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <SectionBadge label="Section 02" accent={accent} />
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 52, color: '#111', lineHeight: 1, marginBottom: 12 }}>Experience</h2>
          <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#666', lineHeight: 1.6 }}>A timeline of places I've worked, problems I've solved, and impact I've made.</p>
        </div>

        <PanelCard title="LAYERS" style={{ width: '100%' }}>
          {experiences.map((e, i) => (
            <div key={e.id} onClick={() => toggle(i)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 4px', cursor: 'pointer', borderRadius: 4, background: active === i ? `${accent}15` : 'transparent', marginBottom: 2 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: active === i ? accent : '#ccc', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Inter', fontSize: 12, color: active === i ? '#111' : '#666', fontWeight: active === i ? 600 : 400 }}>Experience {e.id}</span>
            </div>
          ))}
        </PanelCard>

        <StickyNote color="#C8F135" rotate={-1} taped style={{ fontSize: 11, lineHeight: 1.5 }}>
          Every role shaped how I design today. :)
        </StickyNote>
      </div>

      {/* Center: sticky card */}
      <div style={{ width: 220, flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 60 }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', marginBottom: 8 }}>scroll to explore ↓</div>
        {/* Timeline dot */}
        <div style={{ width: 14, height: 14, borderRadius: '50%', border: `3px solid ${accent}`, background: '#fff', marginBottom: 0, zIndex: 2 }} />
        <div style={{ width: 2, height: 30, background: '#ddd' }} />

        <div style={{ background: '#C8F135', borderRadius: 6, padding: 20, boxShadow: '4px 4px 0 rgba(0,0,0,0.1)', position: 'relative', width: 200 }}>
          <button style={{ position: 'absolute', top: 8, right: 8, background: '#00000020', border: 'none', borderRadius: '50%', width: 20, height: 20, cursor: 'pointer', color: '#333', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, color: '#111', marginBottom: 6 }}>{exp.company}</div>
          <div style={{ background: '#111', color: '#fff', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 12, padding: '4px 10px', borderRadius: 3, display: 'inline-block', marginBottom: 16 }}>{exp.title}</div>
          <div style={{ borderTop: '1px dashed #00000030', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono', fontSize: 11 }}>
              <span>📅</span><span>{exp.period}</span>
            </div>
            {exp.location && <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono', fontSize: 11 }}><span>📍</span><span>{exp.location}</span></div>}
            <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 4 }}>
              {exp.tags.map(t => <span key={t} style={{ background: '#00000015', fontFamily: 'JetBrains Mono', fontSize: 10, padding: '3px 8px', borderRadius: 3 }}>{t}</span>)}
            </div>
          </div>
          <div style={{ marginTop: 10, fontFamily: 'JetBrains Mono', fontSize: 20, color: '#00000040', textAlign: 'right' }}>~~~</div>
        </div>

        <div style={{ width: 2, flex: 1, background: '#ddd', minHeight: 40 }} />
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', marginTop: 6, textAlign: 'center', maxWidth: 160 }}>This card sticks while you scroll</div>
      </div>

      {/* Right: timeline cards */}
      <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 16, paddingRight: 4 }}>
        {/* Timeline line */}
        <div style={{ position: 'relative' }}>
          {experiences.map((e, i) => (
            <div key={e.id} style={{ position: 'relative', marginBottom: 14, animation: 'fadeSlideIn 0.4s ease both', animationDelay: `${i * 0.08}s` }}>
              {/* Timeline dot */}
              <div style={{ position: 'absolute', left: -24, top: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', border: `2px solid ${active === i ? accent : '#ccc'}`, background: active === i ? accent : '#fff', transition: 'all 0.2s' }} />
              </div>

              <div onClick={() => toggle(i)} style={{
                background: '#fff', border: `1.5px solid ${active === i ? accent : '#E0E0E8'}`,
                borderRadius: 8, overflow: 'hidden', cursor: 'pointer',
                boxShadow: active === i ? `3px 3px 0 ${accent}40` : '2px 2px 0 #D8D8E0',
                transition: 'all 0.2s',
              }}>
                {/* Card header */}
                <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 6, background: active === i ? `${accent}15` : '#F5F5F8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 13, color: active === i ? accent : '#888', flexShrink: 0 }}>{e.id}</div>
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 18, color: '#111', marginBottom: 2 }}>{e.title}</div>
                      <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#888', marginBottom: 4 }}>{e.company}</div>
                      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa' }}>{e.period}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {e.status && <span style={{ background: '#D4F5D4', color: '#2E7D32', fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 3 }}>{e.status}</span>}
                    {i === 0 && <span style={{ background: `${accent}15`, color: accent, fontFamily: 'JetBrains Mono', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 3 }}>ACTIVE</span>}
                    <div style={{ width: 24, height: 24, borderRadius: '50%', border: '1.5px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#aaa' }}>{expanded.includes(i) ? '−' : '+'}</div>
                  </div>
                </div>

                {/* Expanded content */}
                {expanded.includes(i) && (
                  <div style={{ borderTop: '1px solid #F0F0F4', padding: '14px 18px', animation: 'fadeSlideIn 0.25s ease both' }}>
                    <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#555', lineHeight: 1.6, marginBottom: i === 0 ? 16 : 0 }}>{e.bullets[0]}</p>
                    {i > 0 && (
                      <ul style={{ paddingLeft: 16 }}>
                        {e.bullets.map((b, bi) => <li key={bi} style={{ fontFamily: 'Inter', fontSize: 12, color: '#666', lineHeight: 1.7 }}>{b}</li>)}
                      </ul>
                    )}
                    {e.metrics.length > 0 && (
                      <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
                        {e.metrics.map(m => (
                          <div key={m.label} style={{ flex: 1, background: '#F8F8FC', border: '1px solid #EBEBF2', borderRadius: 6, padding: '10px 12px' }}>
                            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, color: '#111' }}>{m.val}</div>
                            <div style={{ fontFamily: 'Inter', fontSize: 10, color: '#888', marginTop: 2 }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ExperienceSection });
