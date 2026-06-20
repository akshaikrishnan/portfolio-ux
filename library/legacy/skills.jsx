const { useState } = React;

const skillsData = [
  { id: 'figma', name: 'Figma', level: 'EXPERT', years: '4+ yrs', color: '#FF7262', desc: 'Design systems, auto layout, components, variants, variables.', dots: 5, category: 'Design', usedFor: ['Design Systems','Wireframing','Prototyping','Components','Auto Layout','Variables'], featured: ['Analytics Dashboard','FinPay App'] },
  { id: 'framer', name: 'Framer', level: 'EXPERT', years: '3+ yrs', color: '#0055FF', desc: 'Interactive prototypes, animations, and production websites.', dots: 5, category: 'Design', usedFor: ['Prototyping','Animations','Production Sites'], featured: ['Studio Website'] },
  { id: 'react', name: 'React', level: 'ADVANCED', years: '3+ yrs', color: '#61DAFB', desc: 'Building reusable components and scalable interfaces.', dots: 4, category: 'Frontend', usedFor: ['Components','State Management','Hooks'], featured: ['Analytics Dashboard'] },
  { id: 'typescript', name: 'TypeScript', level: 'ADVANCED', years: '2+ yrs', color: '#3178C6', desc: 'Type-safe development and better developer experience.', dots: 4, category: 'Frontend', usedFor: ['Type Safety','DX Improvement'], featured: [] },
  { id: 'tailwind', name: 'Tailwind CSS', level: 'ADVANCED', years: '3+ yrs', color: '#06B6D4', desc: 'Utility-first styling for rapid, responsive UI development.', dots: 4, category: 'Frontend', usedFor: ['Styling','Responsive Design'], featured: ['Studio Website'] },
  { id: 'nextjs', name: 'Next.js', level: 'ADVANCED', years: '2+ yrs', color: '#000000', desc: 'Server components, routing, and web performance.', dots: 3, category: 'Frontend', usedFor: ['SSR','Routing','Performance'], featured: [] },
  { id: 'adobexd', name: 'Adobe XD', level: 'INTERMEDIATE', years: '3+ yrs', color: '#FF2BC2', desc: 'Wireframing, prototyping and user experience exploration.', dots: 3, category: 'Design', usedFor: ['Wireframing','Prototyping'], featured: [] },
  { id: 'illustrator', name: 'Illustrator', level: 'INTERMEDIATE', years: '4+ yrs', color: '#FF9A00', desc: 'Vector graphics, illustrations and branding assets.', dots: 3, category: 'Design', usedFor: ['Illustrations','Branding'], featured: ['Vanta Brand Identity'] },
];

const categories = ['All Skills', 'Design', 'Frontend', 'Tools', 'Systems'];
const levelColors = { 'EXPERT': '#D4E8FF', 'ADVANCED': '#D4F0E0', 'INTERMEDIATE': '#FFF3D4' };
const levelText = { 'EXPERT': '#0A5C9E', 'ADVANCED': '#1A6B3C', 'INTERMEDIATE': '#8B5E00' };

function SkillsSection({ accent }) {
  const [activeCategory, setActiveCategory] = useState('All Skills');
  const [selected, setSelected] = useState(skillsData[0]);
  const [view, setView] = useState('grid');

  const filtered = activeCategory === 'All Skills' ? skillsData : skillsData.filter(s => s.category === activeCategory);

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>

      {/* Left panel */}
      <div style={{ width: 210, flexShrink: 0, padding: '36px 20px 20px', display: 'flex', flexDirection: 'column', gap: 20, borderRight: '1px solid #E0E0E8', background: '#FAFAFA' }}>
        <div>
          <SectionBadge label="Section 03" accent={accent} />
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 44, color: '#111', lineHeight: 1 }}>Skills<span style={{ color: accent }}>.</span></h2>
          <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#666', marginTop: 8, lineHeight: 1.6 }}>The tools, technologies and craft I use to turn ideas into meaningful experiences.</p>
        </div>

        <PanelCard title="ASSETS" style={{ width: '100%' }}>
          {categories.map(cat => {
            const count = cat === 'All Skills' ? skillsData.length : skillsData.filter(s => s.category === cat).length;
            if (count === 0) return null;
            return (
              <div key={cat} onClick={() => setActiveCategory(cat)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 4px', cursor: 'pointer', borderRadius: 4, background: activeCategory === cat ? `${accent}15` : 'transparent', marginBottom: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: activeCategory === cat ? accent : '#ccc' }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 12, color: activeCategory === cat ? '#111' : '#666', fontWeight: activeCategory === cat ? 600 : 400 }}>{cat}</span>
                </div>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa' }}>{count}</span>
              </div>
            );
          })}
        </PanelCard>

        <StickyNote color="#E8E3FF" rotate={2} pinned style={{ fontSize: 11 }}>
          ⭐ These are my<br />superpowers
        </StickyNote>
      </div>

      {/* Center: Skills grid */}
      <div style={{ flex: 1, overflow: 'auto', padding: '36px 24px' }}>
        {/* Top controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#888', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: accent }}>✦</span> Canvas / Skills Library
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ display: 'flex', background: '#fff', border: '1px solid #E0E0E8', borderRadius: 6, overflow: 'hidden' }}>
              {[{ id:'grid', icon:'⊞ Grid' }, { id:'list', icon:'☰ List' }].map(v => (
                <button key={v.id} onClick={() => setView(v.id)} style={{ padding: '6px 14px', border: 'none', background: view === v.id ? accent : 'transparent', color: view === v.id ? '#fff' : '#666', fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter' }}>{v.icon}</button>
              ))}
            </div>
            <select style={{ border: '1px solid #E0E0E8', borderRadius: 6, padding: '5px 10px', fontSize: 11, fontFamily: 'Inter', color: '#555', background: '#fff', cursor: 'pointer' }}>
              <option>Most Used</option><option>Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Annotation */}
        <div style={{ position: 'absolute', top: 80, right: 260, fontFamily: 'JetBrains Mono', fontSize: 11, color: '#aaa' }}>
          Drag around!
          <svg style={{ display: 'block' }} width="28" height="20" viewBox="0 0 28 20" fill="none" stroke="#ccc" strokeWidth="1.2">
            <path d="M4 4 C10 8, 18 10, 24 16" strokeDasharray="2 2"/>
            <path d="M20 14 L24 16 L22 12"/>
          </svg>
        </div>

        {/* Grid */}
        <div style={{ border: '1.5px dashed #C8C9D4', borderRadius: 8, padding: 20, background: 'rgba(255,255,255,0.5)' }}>
          <div style={{ display: view === 'grid' ? 'grid' : 'flex', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, flexDirection: 'column' }}>
            {filtered.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} accent={accent} selected={selected?.id === skill.id} onSelect={() => setSelected(skill)} index={i} view={view} />
            ))}
          </div>
        </div>

        {/* Bottom expertise row */}
        <div style={{ marginTop: 24, background: '#111', borderRadius: 8, padding: '16px 20px', display: 'flex', gap: 24 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#8FCC14', fontWeight: 700, whiteSpace: 'nowrap', alignSelf: 'center' }}>WHAT I'M<br />EXPERT AT</div>
          {[{ icon: '⊞', title: 'Design Systems', sub: 'Scalable systems that bring consistency and speed to teams.' }, { icon: '⊙', title: 'Interaction Design', sub: 'Creating intuitive, delightful interactions that solve real user problems.' }, { icon: '👤', title: 'User Research', sub: 'Understanding users deeply to design experiences that truly matter.' }, { icon: '♿', title: 'Accessibility', sub: 'Building inclusive products that are usable by everyone.' }].map(item => (
            <div key={item.title} style={{ flex: 1 }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{item.icon}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 13, color: '#fff', marginBottom: 3 }}>{item.title}</div>
              <div style={{ fontFamily: 'Inter', fontSize: 10, color: '#888', lineHeight: 1.4 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Detail panel */}
      {selected && (
        <div style={{ width: 220, flexShrink: 0, borderLeft: '1px solid #E0E0E8', background: '#fff', padding: 16, overflow: 'auto', animation: 'slideInRight 0.25s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 15, color: '#111' }}>{selected.name}</span>
            <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: '#aaa', fontSize: 16, cursor: 'pointer' }}>×</button>
          </div>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', marginBottom: 4 }}>Level</div>
            <span style={{ background: levelColors[selected.level], color: levelText[selected.level], fontFamily: 'JetBrains Mono', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 3 }}>{selected.level}</span>
          </div>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', marginBottom: 4 }}>Years of experience</div>
            <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#333' }}>{selected.years}</div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', marginBottom: 6 }}>I use it for</div>
            {selected.usedFor.map(u => (
              <div key={u} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent, flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter', fontSize: 11, color: '#444' }}>{u}</span>
              </div>
            ))}
          </div>
          {selected.featured.length > 0 && (
            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', marginBottom: 8 }}>Featured in</div>
              {selected.featured.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', background: '#F8F8FC', border: '1px solid #EEEEF4', borderRadius: 5, marginBottom: 5, cursor: 'pointer' }}>
                  <span style={{ fontFamily: 'Inter', fontSize: 11, color: '#444' }}>{f}</span>
                  <span style={{ color: '#aaa', fontSize: 10 }}>↗</span>
                </div>
              ))}
              <button style={{ width: '100%', marginTop: 8, padding: '8px', border: `1px solid ${accent}`, borderRadius: 5, color: accent, background: 'transparent', fontFamily: 'Inter', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>View projects using this ↗</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SkillCard({ skill, accent, selected, onSelect, index, view }) {
  const [hov, setHov] = useState(false);
  const levelBg = levelColors[skill.level];
  const levelTx = levelText[skill.level];

  if (view === 'list') {
    return (
      <div onClick={onSelect} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#fff', border: `1.5px solid ${selected ? accent : hov ? '#C8C9D4' : '#E0E0E8'}`, borderRadius: 6, cursor: 'pointer', transition: 'all 0.15s', boxShadow: selected ? `2px 2px 0 ${accent}40` : hov ? '2px 2px 0 #D0D0D8' : 'none', animation: `fadeSlideIn 0.3s ease ${index*0.05}s both` }}>
        <div style={{ width: 32, height: 32, borderRadius: 6, background: skill.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 12, color: skill.color }}>{skill.name[0]}</div>
        <div style={{ flex: 1 }}>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14, color: '#111' }}>{skill.name}</span>
        </div>
        <span style={{ background: levelBg, color: levelTx, fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 2 }}>{skill.level}</span>
        <div style={{ display: 'flex', gap: 3 }}>{Array.from({ length: 5 }).map((_, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i < skill.dots ? accent : '#E0E0E8' }} />)}</div>
      </div>
    );
  }

  return (
    <div onClick={onSelect} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: '#fff', border: `1.5px solid ${selected ? accent : hov ? '#C8C9D4' : '#E0E0E8'}`, borderRadius: 8, padding: '14px 14px 12px', cursor: 'pointer', transition: 'all 0.15s', boxShadow: selected ? `3px 3px 0 ${accent}40` : hov ? '2px 2px 0 #D0D0D8' : 'none', animation: `fadeSlideIn 0.3s ease ${index*0.06}s both`, position: 'relative' }}>
      {selected && (
        <div style={{ position: 'absolute', inset: -2, border: `2px solid ${accent}`, borderRadius: 9, pointerEvents: 'none' }}>
          {['tl','tr','bl','br'].map(p => <div key={p} style={{ position: 'absolute', width: 6, height: 6, background: '#fff', border: `1.5px solid ${accent}`, borderRadius: 1, top: p.includes('t') ? -3 : 'auto', bottom: p.includes('b') ? -3 : 'auto', left: p.includes('l') ? -3 : 'auto', right: p.includes('r') ? -3 : 'auto' }} />)}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 15, color: '#111' }}>{skill.name}</div>
        <span style={{ background: levelBg, color: levelTx, fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 2, whiteSpace: 'nowrap' }}>{skill.level}</span>
      </div>
      <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#777', lineHeight: 1.5, marginBottom: 10 }}>{skill.desc}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa' }}>{skill.years}</span>
        <div style={{ display: 'flex', gap: 3 }}>{Array.from({ length: 5 }).map((_, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i < skill.dots ? accent : '#E0E0E8', transition: 'background 0.2s' }} />)}</div>
      </div>
      {selected && <div style={{ position: 'absolute', bottom: -18, left: '50%', transform: 'translateX(-50%)', background: accent, color: '#fff', fontSize: 9, fontFamily: 'JetBrains Mono', padding: '1px 6px', borderRadius: 2, whiteSpace: 'nowrap', zIndex: 20 }}>280 × 160</div>}
    </div>
  );
}

Object.assign(window, { SkillsSection });
