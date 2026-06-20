const { useState, useEffect, useRef } = React;

// ── Cursor Labels ───────────────────────────────────────────────
function CursorLabels({ accent }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [display, setDisplay] = useState({ x: 0, y: 0 });
  const rafRef = useRef();

  useEffect(() => {
    const onMove = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      setDisplay(prev => ({
        x: lerp(prev.x, pos.x, 0.08),
        y: lerp(prev.y, pos.y, 0.08),
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pos]);

  const labels = [
    { dx: 60, dy: -30, text: 'Designer', color: accent },
    { dx: -80, dy: 40, text: 'Client', color: '#9747FF' },
  ];

  return (
    <>
      {labels.map(({ dx, dy, text, color }) => (
        <div key={text} style={{ position: 'fixed', left: display.x + dx, top: display.y + dy, pointerEvents: 'none', zIndex: 9999, display: 'flex', alignItems: 'center', gap: 4, transition: 'opacity 0.3s' }}>
          <svg width="12" height="14" viewBox="0 0 12 14" fill={color}>
            <path d="M0 0l12 8-4.5 1.5L10 14l-2 .5L5.5 9 1 11z"/>
          </svg>
          <span style={{ background: color, color: '#fff', fontFamily: 'Inter', fontWeight: 600, fontSize: 11, padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>{text}</span>
        </div>
      ))}
      <div style={{ position: 'fixed', left: display.x + 10, top: display.y + 50, pointerEvents: 'none', zIndex: 9999, display: 'flex', alignItems: 'center', gap: 4 }}>
        <svg width="12" height="14" viewBox="0 0 12 14" fill="#E53935">
          <path d="M0 0l12 8-4.5 1.5L10 14l-2 .5L5.5 9 1 11z"/>
        </svg>
        <span style={{ background: '#E53935', color: '#fff', fontFamily: 'Inter', fontWeight: 600, fontSize: 11, padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>You</span>
      </div>
    </>
  );
}

// ── Sticky Note ─────────────────────────────────────────────────
function StickyNote({ children, color = '#C8F135', rotate = -2, pinned = false, taped = false, style = {} }) {
  return (
    <div style={{
      background: color, padding: '14px 16px', borderRadius: 2,
      boxShadow: '3px 3px 0 rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      fontFamily: 'JetBrains Mono', fontSize: 12, lineHeight: 1.5, color: '#222',
      position: 'relative', minWidth: 120, maxWidth: 180,
      animation: 'float 5s ease-in-out infinite',
      ...style,
    }}>
      {taped && (
        <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', width: 40, height: 16, background: 'rgba(0,0,0,0.25)', borderRadius: 1, opacity: 0.6 }} />
      )}
      {pinned && (
        <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', width: 12, height: 12, borderRadius: '50%', background: accent || '#5B6CF9', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
      )}
      {children}
    </div>
  );
}

// ── Frame Label ─────────────────────────────────────────────────
function FrameLabel({ label, accent }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
      <span style={{ color: accent, fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 600 }}>✦</span>
      <span style={{ color: accent, fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 600 }}>{label}</span>
    </div>
  );
}

// ── Selection Frame ─────────────────────────────────────────────
function SelectionFrame({ children, label, accent, width, height, style = {}, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(s => !s);
    if (onClick) onClick();
  };

  const isActive = selected || hovered;

  return (
    <div style={{ position: 'relative', display: 'inline-block', cursor: 'pointer', ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}>
      {isActive && (
        <>
          <div style={{ position: 'absolute', inset: -2, border: `2px solid ${accent}`, borderRadius: 2, pointerEvents: 'none', zIndex: 10 }}>
            {['tl','tr','bl','br'].map(p => (
              <div key={p} style={{
                position: 'absolute', width: 7, height: 7, background: '#fff', border: `1.5px solid ${accent}`, borderRadius: 1,
                top: p.includes('t') ? -4 : 'auto', bottom: p.includes('b') ? -4 : 'auto',
                left: p.includes('l') ? -4 : 'auto', right: p.includes('r') ? -4 : 'auto',
              }} />
            ))}
          </div>
          {label && (
            <div style={{ position: 'absolute', top: -22, left: -2, background: accent, color: '#fff', fontSize: 10, fontFamily: 'JetBrains Mono', fontWeight: 600, padding: '2px 6px', borderRadius: '3px 3px 0 0', whiteSpace: 'nowrap', zIndex: 11 }}>
              {label} {selected ? '/ Selected' : ''}
            </div>
          )}
          {(width && height) && (
            <div style={{ position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)', background: accent, color: '#fff', fontSize: 10, fontFamily: 'JetBrains Mono', padding: '2px 8px', borderRadius: 3, whiteSpace: 'nowrap', zIndex: 11 }}>
              {width} × {height}
            </div>
          )}
        </>
      )}
      {children}
    </div>
  );
}

// ── Annotation ──────────────────────────────────────────────────
function Annotation({ text, style = {} }) {
  return (
    <div style={{ position: 'absolute', fontFamily: 'JetBrains Mono', fontSize: 11, color: '#666', lineHeight: 1.4, pointerEvents: 'none', ...style }}>
      {text}
      <svg style={{ position: 'absolute', bottom: -16, left: 10 }} width="24" height="20" viewBox="0 0 24 20" fill="none" stroke="#999" strokeWidth="1.5">
        <path d="M2 2 C8 8, 16 12, 22 18" strokeDasharray="3 2"/>
        <path d="M18 16 L22 18 L20 14"/>
      </svg>
    </div>
  );
}

// ── Size Label ──────────────────────────────────────────────────
function SizeLabel({ w, h, accent }) {
  return (
    <div style={{ display: 'inline-block', background: accent, color: '#fff', fontFamily: 'JetBrains Mono', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 3 }}>
      {w} × {h}
    </div>
  );
}

// ── Section Badge ───────────────────────────────────────────────
function SectionBadge({ label, accent }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 12 }}>
      <span style={{ color: accent, fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 600 }}>✦</span>
      <span style={{ color: accent, fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 600 }}>{label}</span>
    </div>
  );
}

// ── Panel Card ──────────────────────────────────────────────────
function PanelCard({ title, children, style = {} }) {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #E2E2E8', borderRadius: 8, overflow: 'hidden', boxShadow: '2px 2px 0 #d0d0d8', ...style }}>
      {title && (
        <div style={{ background: '#F8F8FC', borderBottom: '1px solid #E2E2E8', padding: '7px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', fontWeight: 600, color: '#444' }}>{title}</span>
          <span style={{ fontSize: 11, color: '#aaa' }}>⊞</span>
        </div>
      )}
      <div style={{ padding: 12 }}>{children}</div>
    </div>
  );
}

Object.assign(window, { CursorLabels, StickyNote, FrameLabel, SelectionFrame, Annotation, SizeLabel, SectionBadge, PanelCard });
