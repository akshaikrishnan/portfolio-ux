const { useState, useEffect, useRef } = React;

function HeroSection({ accent, onNav }) {
  const [panel, setPanel] = useState('inspect');
  const [accentLocal, setAccentLocal] = useState(accent);

  useEffect(() => { setAccentLocal(accent); }, [accent]);

  const InspectTab = () => (
    <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11 }}>
      <div style={{ background: '#1E1E1E', borderRadius: 4, padding: 10, marginBottom: 12 }}>
        <div style={{ color: '#7EC8A4' }}>&lt;<span style={{ color: '#6CBDE8' }}>div</span> <span style={{ color: '#C8A86C' }}>class</span>=<span style={{ color: '#C87C6C' }}>"hero-heading"</span>&gt;</div>
        <div style={{ color: '#CCC', paddingLeft: 14 }}>I design interfaces</div>
        <div style={{ paddingLeft: 14 }}>&lt;<span style={{ color: '#6CBDE8' }}>span</span>&gt;<span style={{ color: '#CCC' }}>people</span>&lt;/<span style={{ color: '#6CBDE8' }}>span</span>&gt;<span style={{ color: '#CCC' }}> love</span></div>
        <div style={{ color: '#7EC8A4' }}>&lt;/<span style={{ color: '#6CBDE8' }}>div</span>&gt;</div>
      </div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ color: '#888', marginBottom: 4 }}>Accent Color:</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#5B6CF9','#9747FF','#FF2D78','#FF6B35','#8FCC14'].map(c => (
            <div key={c} onClick={() => setAccentLocal(c)} style={{ width: 20, height: 20, borderRadius: '50%', background: c, cursor: 'pointer', border: accentLocal === c ? '2px solid #fff' : '2px solid transparent', boxSizing: 'border-box', transition: 'transform 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          ))}
        </div>
      </div>
    </div>
  );

  const DesignTab = () => (
    <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#444' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 10, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
        {['⊞','↑','↓','→','←','⊡','—','|'].map((s,i) => <span key={i} style={{ cursor: 'pointer', color: '#888', padding: '2px 3px' }}>{s}</span>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8 }}>
        <span style={{ color: '#888', fontSize: 10 }}>Frame</span>
        <span style={{ color: '#5B6CF9', fontSize: 10 }}>▾</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
          <span style={{ fontSize: 10, background: '#f0f0f0', padding: '1px 5px', borderRadius: 2 }}>⊞</span>
          <span style={{ fontSize: 10, background: '#f0f0f0', padding: '1px 5px', borderRadius: 2 }}>☰</span>
        </div>
      </div>
      {[['X','120','Y','96'],['W','600','H','420']].map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 4, marginBottom: 6 }}>
          {row.map((v, j) => (
            <div key={j} style={{ background: j%2===0 ? 'transparent' : '#f5f5f5', border: j%2===0 ? 'none' : '1px solid #e5e5e5', borderRadius: 3, padding: '3px 6px', textAlign: 'center', fontSize: 10, color: j%2===0 ? '#999' : '#333' }}>{v}</div>
          ))}
        </div>
      ))}
      <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
        <input type="checkbox" defaultChecked style={{ accentColor: accent }} />
        <span style={{ fontSize: 10, color: '#555' }}>Clip content</span>
      </div>
    </div>
  );

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'auto', padding: '40px 60px 60px' }}>

      {/* Frame Label */}
      <FrameLabel label="Frame 01" accent={accent} />

      {/* Main Content + Panel Row */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>

        {/* Hero Frame */}
        <SelectionFrame label="Frame 01" accent={accent} width="600" height="420" style={{ flexShrink: 0 }}>
          <div style={{ width: 580, background: '#fff', border: '1.5px solid #E0E0E8', borderRadius: 4, padding: '36px 40px 40px', boxShadow: '4px 4px 0 #D0D0DC' }}>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 60, lineHeight: 1.05, color: '#111', marginBottom: 24, letterSpacing: -2 }}>
              I design<br />
              interfaces<br />
              <span style={{ background: accentLocal, padding: '0 6px', borderRadius: 2, display: 'inline' }}>people</span>
              <span style={{ color: '#111' }}> love</span>
              <span style={{ color: accentLocal }}>.</span>
            </h1>
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#555', lineHeight: 1.6, maxWidth: 420, marginBottom: 28 }}>
              Hey! I'm Akshai, a UI/UX designer who loves turning complex problems into clean, intuitive and impactful designs.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => onNav(3)} style={{ background: accentLocal, color: '#fff', border: 'none', borderRadius: 4, padding: '12px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: `3px 3px 0 ${accentLocal}88` }}>
                View my work <span>↗</span>
              </button>
              <button onClick={() => onNav(5)} style={{ background: '#fff', color: '#111', border: '1.5px solid #111', borderRadius: 4, padding: '12px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '3px 3px 0 #111' }}>
                Let's talk <span>○</span>
              </button>
            </div>
          </div>
        </SelectionFrame>

        {/* Right Panel — Design/Inspect */}
        <div style={{ width: 220, background: '#fff', border: '1.5px solid #E0E0E8', borderRadius: 8, boxShadow: '3px 3px 0 #D0D0DC', overflow: 'hidden', flexShrink: 0 }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #eee' }}>
            {['Design','Inspect'].map(t => (
              <button key={t} onClick={() => setPanel(t.toLowerCase())} style={{ flex: 1, padding: '9px 0', border: 'none', background: panel === t.toLowerCase() ? '#fff' : '#F8F8FC', color: panel === t.toLowerCase() ? '#111' : '#888', fontSize: 12, fontWeight: 600, cursor: 'pointer', borderBottom: panel === t.toLowerCase() ? `2px solid ${accent}` : '2px solid transparent' }}>{t}</button>
            ))}
          </div>
          <div style={{ padding: 12 }}>
            {panel === 'inspect' ? <InspectTab /> : <DesignTab />}
          </div>
        </div>
      </div>

      {/* Floating rotated card */}
      <div style={{ position: 'absolute', right: 280, top: 180, transform: 'rotate(6deg)', background: '#fff', border: '1.5px solid #DDD', borderRadius: 8, padding: '16px 20px', boxShadow: '4px 4px 0 #D0D0D8', maxWidth: 200, zIndex: 10 }}>
        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14, color: '#111', marginBottom: 4 }}>UI Designer</div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#555', lineHeight: 1.5 }}>Crafting <span style={{ color: accent, fontStyle: 'italic' }}>delightful</span><br />digital experiences</div>
        <button style={{ position: 'absolute', top: 6, right: 8, background: 'none', border: 'none', color: '#999', fontSize: 14, cursor: 'pointer', lineHeight: 1 }}>×</button>
      </div>

      {/* Annotation */}
      <div style={{ position: 'absolute', left: 50, top: 340, fontFamily: 'JetBrains Mono', fontSize: 11, color: '#888', lineHeight: 1.5 }}>
        Auto layout<br />makes life<br />easier
        <svg style={{ display: 'block', marginTop: 4 }} width="30" height="24" viewBox="0 0 30 24" fill="none" stroke="#bbb" strokeWidth="1.5">
          <path d="M2 2 C10 8, 20 14, 28 22" strokeDasharray="3 2"/>
          <path d="M24 20 L28 22 L26 18"/>
        </svg>
      </div>

      {/* Size label below frame */}
      <div style={{ marginTop: 16, marginLeft: 2, display: 'flex', alignItems: 'center', gap: 8 }}>
        <SizeLabel w="600" h="420" accent={accent} />
      </div>

      {/* Accent color strip at bottom of canvas */}
      <div style={{ position: 'absolute', bottom: 30, left: 60, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#888' }}>Accent Color:</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#5B6CF9','#9747FF','#FF2D78','#FF6B35','#8FCC14','#111111'].map(c => (
            <div key={c} style={{ width: 22, height: 22, borderRadius: '50%', background: c, border: accentLocal === c ? '2.5px solid #333' : '2px solid #ccc', cursor: 'pointer', transition: 'transform 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
          ))}
        </div>
      </div>

      {/* Sticky note */}
      <div style={{ position: 'absolute', right: 60, bottom: 80 }}>
        <StickyNote color="#E8E3FF" rotate={3} taped style={{ fontSize: 11 }}>
          "Design is not just what it looks like — it's how it works."
        </StickyNote>
      </div>
    </div>
  );
}

Object.assign(window, { HeroSection });
