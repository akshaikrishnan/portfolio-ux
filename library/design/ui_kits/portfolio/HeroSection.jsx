// HeroSection.jsx
const HeroSection = ({ accent, setAccent }) => {
  const [selected, setSelected] = React.useState(false);
  const accents = [
    { color: '#0066FF', name: 'Blue' },
    { color: '#FF3B00', name: 'Red' },
    { color: '#00CC66', name: 'Green' },
    { color: '#9933FF', name: 'Purple' },
    { color: '#FF9900', name: 'Amber' },
  ];

  return (
    <section style={{
      minHeight: '100vh',
      background: '#F5F5F0',
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: 48,
    }}>
      {/* Rulers */}
      <div style={{ position: 'absolute', top: 48, left: 24, right: 0, height: 20, background: '#EBEBEB', borderBottom: '1px solid #CCCCCC', display: 'flex', alignItems: 'center', paddingLeft: 4, zIndex: 5, overflow: 'hidden' }}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 24, flexShrink: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: i % 4 === 0 ? 10 : 5, width: 1, background: i % 4 === 0 ? '#666' : '#bbb' }} />
            {i % 4 === 0 && <span style={{ position: 'absolute', top: 10, left: 2, fontFamily: "'JetBrains Mono',monospace", fontSize: 8, color: '#999' }}>{i * 24}</span>}
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', top: 68, left: 24, width: 20, bottom: 0, background: '#EBEBEB', borderRight: '1px solid #CCCCCC', zIndex: 5, overflow: 'hidden' }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{ position: 'absolute', top: i * 24, left: 0, right: 0, height: 1 }}>
            <div style={{ position: 'absolute', left: 0, width: i % 4 === 0 ? 10 : 5, height: 1, background: i % 4 === 0 ? '#666' : '#bbb' }} />
            {i % 4 === 0 && <span style={{ position: 'absolute', top: 1, left: 2, fontFamily: "'JetBrains Mono',monospace", fontSize: 8, color: '#999', writingMode: 'horizontal-tb' }}>{i * 24}</span>}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 900, padding: '0 80px', position: 'relative', zIndex: 10 }}>
        {/* Frame label */}
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>
          FRAME 01 / HERO
        </div>

        {/* Headline with selection illusion */}
        <div
          style={{ position: 'relative', cursor: 'default' }}
          onClick={() => setSelected(s => !s)}
        >
          {selected && (
            <>
              {['tl','tr','bl','br'].map(pos => {
                const s = { width: 10, height: 10, background: '#fff', border: `2px solid ${accent}`, position: 'absolute', zIndex: 2 };
                if (pos === 'tl') { s.top = -6; s.left = -6; }
                if (pos === 'tr') { s.top = -6; s.right = -6; }
                if (pos === 'bl') { s.bottom = -6; s.left = -6; }
                if (pos === 'br') { s.bottom = -6; s.right = -6; }
                return <div key={pos} style={s} />;
              })}
              <div style={{ position: 'absolute', inset: -3, border: `2px solid ${accent}`, pointerEvents: 'none', boxShadow: `0 0 0 3px ${accent}33` }} />
              <div style={{ position: 'absolute', top: -22, left: -3, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 500, color: accent, background: '#fff', padding: '1px 6px', border: `1px solid ${accent}` }}>
                layer: headline
              </div>
            </>
          )}
          <h1 style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: '#0A0A0A',
            marginBottom: 8,
          }}>
            You're not browsing<br />
            <span style={{ color: accent }}>a portfolio</span> —<br />
            you're navigating<br />a design file.
          </h1>
        </div>

        <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, color: '#555', lineHeight: 1.6, maxWidth: 480, marginTop: 24, marginBottom: 40 }}>
          Interactive designer. I build systems that think, interfaces that feel, and experiences that stick.
        </p>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <button style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 700, background: '#0A0A0A', color: '#fff', border: '2px solid #0A0A0A', boxShadow: '4px 4px 0 #0A0A0A', padding: '12px 24px', cursor: 'pointer', borderRadius: 0 }}>
            Open case files →
          </button>
          <button style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 700, background: 'transparent', color: '#0A0A0A', border: '2px solid #0A0A0A', boxShadow: '4px 4px 0 #0A0A0A', padding: '12px 24px', cursor: 'pointer', borderRadius: 0 }}>
            View components
          </button>
        </div>

        {/* Accent switcher */}
        <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999' }}>Accent color /</span>
          {accents.map(a => (
            <button key={a.color} onClick={() => setAccent(a.color)} title={a.name} style={{
              width: 20, height: 20, background: a.color, border: accent === a.color ? '2px solid #0A0A0A' : '2px solid transparent',
              boxShadow: accent === a.color ? '2px 2px 0 #0A0A0A' : 'none',
              cursor: 'pointer', borderRadius: 0, outline: 'none', padding: 0,
              transition: 'all 150ms',
            }} />
          ))}
        </div>
      </div>

      {/* Floating sticky note */}
      <div style={{ position: 'absolute', bottom: 80, right: 120, transform: 'rotate(-2deg)', zIndex: 10 }}>
        <StickyNote color="yellow" rotate={-2.5} style={{ width: 140 }}>
          ← click the headline
        </StickyNote>
      </div>
    </section>
  );
};

Object.assign(window, { HeroSection });
