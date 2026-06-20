const { useState, useEffect, useRef, useContext } = React;

// ── Sidebar Icons ──────────────────────────────────────────────
const IcoMove = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path d="M3 1l13 8-5.5 1.5L14 16l-2 1-3.5-5.5L7 14 3 1z"/>
  </svg>
);
const IcoFrame = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="10" height="10" rx="0.5"/>
    <line x1="4" y1="1.5" x2="4" y2="4"/><line x1="9" y1="1.5" x2="9" y2="4"/><line x1="14" y1="1.5" x2="14" y2="4"/>
    <line x1="4" y1="14" x2="4" y2="16.5"/><line x1="9" y1="14" x2="9" y2="16.5"/><line x1="14" y1="14" x2="14" y2="16.5"/>
    <line x1="1.5" y1="4" x2="4" y2="4"/><line x1="1.5" y1="9" x2="4" y2="9"/><line x1="1.5" y1="14" x2="4" y2="14"/>
    <line x1="14" y1="4" x2="16.5" y2="4"/><line x1="14" y1="9" x2="16.5" y2="9"/><line x1="14" y1="14" x2="16.5" y2="14"/>
  </svg>
);
const IcoComponent = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path d="M9 2L16 9l-7 7-7-7z" opacity="0.3"/><path d="M9 4.5L13.5 9 9 13.5 4.5 9z"/>
  </svg>
);
const IcoPen = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 3l2 2-6 6-2.5 3.5L6 12l6-6 2 2L16 6 12 2z"/>
    <circle cx="3.5" cy="14.5" r="1"/>
  </svg>
);
const IcoText = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path d="M3 3h12v2.5H10v9h-2v-9H3z"/>
  </svg>
);
const IcoHand = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path d="M8 2a1 1 0 011 1v5h1V4a1 1 0 012 0v4h1V5a1 1 0 012 0v5.5c0 2.5-1.8 4.5-4 4.5H9c-2 0-4-1.5-4-3.5V7.5L3.5 6A1 1 0 015 4.5l3 2V3a1 1 0 011-1z"/>
  </svg>
);
const IcoComment = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 3h12a1 1 0 011 1v7a1 1 0 01-1 1H7l-3 3v-3H3a1 1 0 01-1-1V4a1 1 0 011-1z"/>
  </svg>
);
const IcoCode = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path d="M6.5 5L2 9l4.5 4-1 1.5L0 9l5.5-5.5zM11.5 5l5.5 4-5.5 4.5-1-1.5L15 9l-4.5-4z"/>
  </svg>
);

// ── Figma Logo ─────────────────────────────────────────────────
const FigmaLogo = () => (
  <svg width="22" height="22" viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5A9.5 9.5 0 1128.5 19 9.5 9.5 0 0119 28.5z" fill="#1ABCFE"/>
    <path d="M9.5 57A9.5 9.5 0 019.5 38H19v9.5A9.5 9.5 0 019.5 57z" fill="#0ACF83"/>
    <path d="M19 0H9.5a9.5 9.5 0 000 19H19z" fill="#FF7262"/>
    <path d="M28.5 0H19v19h9.5a9.5 9.5 0 000-19z" fill="#F24E1E"/>
    <path d="M28.5 19H19v19h9.5a9.5 9.5 0 000-19z" fill="#A259FF"/>
  </svg>
);

// ── Left Sidebar ────────────────────────────────────────────────
function LeftSidebar({ section }) {
  const [active, setActive] = useState('move');
  const tools = [
    { id: 'move', Icon: IcoMove },
    { id: 'frame', Icon: IcoFrame },
    { id: 'component', Icon: IcoComponent },
    { id: 'pen', Icon: IcoPen },
    { id: 'text', Icon: IcoText },
    { id: 'hand', Icon: IcoHand },
    { id: 'comment', Icon: IcoComment },
    { id: 'code', Icon: IcoCode },
  ];
  return (
    <div style={{ width: 52, background: '#1E1E1E', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10, gap: 2, borderRight: '1px solid #2c2c2c', zIndex: 200, flexShrink: 0 }}>
      <div style={{ padding: '8px 0 14px' }}><FigmaLogo /></div>
      {tools.map(({ id, Icon }) => (
        <button key={id} onClick={() => setActive(id)} style={{ width: 36, height: 36, borderRadius: 6, border: 'none', background: active === id ? '#3a3a3a' : 'transparent', color: active === id ? '#fff' : '#888', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s', cursor: 'pointer' }}
          onMouseEnter={e => { if (active !== id) e.currentTarget.style.background = '#2a2a2a'; e.currentTarget.style.color = '#ccc'; }}
          onMouseLeave={e => { if (active !== id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#888'; } }}>
          <Icon />
        </button>
      ))}
      <div style={{ marginTop: 'auto', marginBottom: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#5B6CF9', border: '2px solid #444', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>A</span>
        </div>
      </div>
    </div>
  );
}

// ── Top Bar ─────────────────────────────────────────────────────
const SECTIONS = ['Hero', 'Experience', 'Skills', 'Projects', 'Writing', 'Contact'];

function TopBar({ section, onNav, accent }) {
  if (section === 0) {
    return (
      <div style={{ height: 44, background: '#1E1E1E', borderBottom: '1px solid #2c2c2c', display: 'flex', alignItems: 'center', paddingInline: 14, gap: 10, flexShrink: 0, zIndex: 150 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px', cursor: 'pointer' }}>
          <span style={{ color: '#ddd', fontSize: 12, fontFamily: 'Inter' }}>Portfolio 2025</span>
          <span style={{ color: '#666', fontSize: 10 }}>▾</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ color: '#666', fontSize: 12 }}>Drafts</span>
          <span style={{ color: '#444', fontSize: 12 }}>/</span>
          <span style={{ color: '#aaa', fontSize: 12 }}>Portfolio</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#5B6CF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 11, color: '#fff', fontWeight: 700 }}>A</span>
          </div>
          <button style={{ background: accent, color: '#fff', border: 'none', borderRadius: 6, padding: '5px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Share</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px', cursor: 'pointer' }}>
            <span style={{ color: '#ccc', fontSize: 12 }}>▶</span>
            <span style={{ color: '#555', fontSize: 12, margin: '0 4px' }}>▾</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px', cursor: 'pointer' }}>
            <span style={{ color: '#ccc', fontSize: 12 }}>100%</span>
            <span style={{ color: '#555', fontSize: 10 }}>▾</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ height: 44, background: '#1E1E1E', borderBottom: '1px solid #2c2c2c', display: 'flex', alignItems: 'center', paddingInline: 14, gap: 12, flexShrink: 0, zIndex: 150 }}>
      <button onClick={() => onNav(section - 1)} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: '1px solid #3a3a3a', borderRadius: 6, padding: '5px 12px', color: '#ccc', fontSize: 12, cursor: 'pointer' }}>
        ← {section > 1 ? SECTIONS[section - 1] : 'Back'}
      </button>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#5B6CF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 11, color: '#fff', fontWeight: 700 }}>A</span>
        </div>
        <button onClick={() => onNav(5)} style={{ background: accent, color: '#fff', border: 'none', borderRadius: 6, padding: '5px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          Let's talk <span style={{ fontSize: 10 }}>↗</span>
        </button>
        <button style={{ background: 'transparent', border: '1px solid #3a3a3a', borderRadius: 6, padding: '5px 10px', color: '#aaa', fontSize: 13, cursor: 'pointer' }}>↓</button>
      </div>
    </div>
  );
}

// ── Rulers ──────────────────────────────────────────────────────
function HRuler() {
  const ticks = [];
  for (let v = -400; v <= 1400; v += 100) {
    const x = v + 500;
    ticks.push({ v, x });
  }
  return (
    <div style={{ height: 22, background: '#ECEDF0', borderBottom: '1px solid #D4D5DC', display: 'flex', alignItems: 'flex-end', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ position: 'absolute', left: 500, top: 0, width: 2, height: '100%', background: '#5B6CF9', zIndex: 2 }} />
      {ticks.map(({ v, x }) => (
        <div key={v} style={{ position: 'absolute', left: x, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: v === 0 ? '#5B6CF9' : '#aaa', fontWeight: v === 0 ? 700 : 400, position: 'absolute', top: 2, transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>{v}</span>
          <div style={{ width: 1, height: v % 200 === 0 ? 10 : 6, background: '#ccc', marginTop: 'auto' }} />
        </div>
      ))}
      {Array.from({ length: 90 }).map((_, i) => {
        const x = i * 20 + (500 % 20);
        return <div key={i} style={{ position: 'absolute', left: x, bottom: 0, width: 1, height: 4, background: '#ddd' }} />;
      })}
    </div>
  );
}

function VRuler() {
  const ticks = [];
  for (let v = -100; v <= 900; v += 100) {
    ticks.push(v);
  }
  return (
    <div style={{ width: 22, background: '#ECEDF0', borderRight: '1px solid #D4D5DC', display: 'flex', flexDirection: 'column', position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
      {ticks.map(v => (
        <div key={v} style={{ position: 'absolute', top: v + 100, display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 8, color: v === 0 ? '#5B6CF9' : '#aaa', position: 'absolute', left: 2, transform: 'rotate(-90deg) translateX(-50%)', transformOrigin: 'left center', whiteSpace: 'nowrap', top: 0 }}>{v}</span>
          <div style={{ position: 'absolute', right: 0, width: v % 200 === 0 ? 10 : 6, height: 1, background: '#ccc' }} />
        </div>
      ))}
    </div>
  );
}

// ── Bottom Bar ──────────────────────────────────────────────────
const ACCENT_COLORS = [
  { id: 'blue', color: '#5B6CF9' },
  { id: 'purple', color: '#9747FF' },
  { id: 'pink', color: '#FF2D78' },
  { id: 'orange', color: '#FF6B35' },
  { id: 'lime', color: '#8FCC14' },
  { id: 'black', color: '#111111' },
];

function BottomBar({ section, accent, onAccentChange, snapToGrid, onSnapChange, totalSections, onNav }) {
  const accentId = ACCENT_COLORS.find(a => a.color === accent)?.id || 'blue';
  return (
    <div style={{ height: 44, background: '#1E1E1E', borderTop: '1px solid #2c2c2c', display: 'flex', alignItems: 'center', paddingInline: 14, gap: 12, flexShrink: 0, zIndex: 150 }}>
      {section === 0 ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px' }}>
            <FigmaLogo />
            <span style={{ color: '#aaa', fontSize: 11, fontFamily: 'Inter' }}>Figma</span>
            <span style={{ color: '#555', fontSize: 10 }}>▾</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px' }}>
            <span style={{ color: '#888', fontSize: 11 }}>⊡</span>
            <span style={{ color: '#888', fontSize: 11 }}>⊞</span>
            <span style={{ color: '#888', fontSize: 11 }}>⊕</span>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 12, color: '#888', fontFamily: 'JetBrains Mono' }}>💜 Thanks for stopping by! &nbsp;|&nbsp; Press <kbd style={{ background: '#333', border: '1px solid #555', borderRadius: 3, padding: '1px 5px', fontSize: 11, color: '#ccc' }}>/</kbd> to see easter eggs</span>
          </div>
          <button onClick={() => onNav(1)} style={{ background: accent, color: '#fff', border: 'none', borderRadius: 6, padding: '5px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            Play <span style={{ fontSize: 10 }}>▶</span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px' }}>
            <span style={{ color: '#888', fontSize: 12, fontFamily: 'JetBrains Mono' }}>1 / {totalSections}</span>
            <span style={{ color: '#555', fontSize: 12 }}>☰</span>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px' }}>
            <FigmaLogo />
            <span style={{ color: '#aaa', fontSize: 11 }}>Figma</span>
            <span style={{ color: '#555', fontSize: 10 }}>▾</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px' }}>
            <span style={{ color: '#888', fontSize: 11 }}>⊡</span>
            <span style={{ color: '#888', fontSize: 11 }}>⊞</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#888', fontSize: 11, fontFamily: 'JetBrains Mono' }}>Accent Color:</span>
            <div style={{ display: 'flex', gap: 5 }}>
              {ACCENT_COLORS.map(({ id, color }) => (
                <button key={id} onClick={() => onAccentChange(color)} style={{ width: 18, height: 18, borderRadius: '50%', background: color, border: accentId === id ? '2px solid #fff' : '2px solid #555', cursor: 'pointer', transition: 'transform 0.15s', outline: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 16 }}>
            <span style={{ color: '#888', fontSize: 11, fontFamily: 'JetBrains Mono' }}>Snap to grid</span>
            <div onClick={() => onSnapChange(!snapToGrid)} style={{ width: 32, height: 18, borderRadius: 9, background: snapToGrid ? accent : '#444', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}>
              <div style={{ position: 'absolute', top: 2, left: snapToGrid ? 16 : 2, width: 14, height: 14, borderRadius: '50%', background: '#fff', transition: 'left 0.2s' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#2a2a2a', border: '1px solid #3a3a3a', borderRadius: 6, padding: '4px 10px' }}>
            <span style={{ color: '#888', fontSize: 12, fontFamily: 'JetBrains Mono' }}>{section + 1} / {totalSections}</span>
          </div>
        </>
      )}
    </div>
  );
}

// ── Grid Background ─────────────────────────────────────────────
function GridBackground({ snap }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0,
      background: '#ECEDF0',
      backgroundImage: `radial-gradient(circle, ${snap ? '#B8B9C4' : '#C8C9D4'} 1px, transparent 1px)`,
      backgroundSize: '20px 20px' }} />
  );
}

Object.assign(window, { LeftSidebar, TopBar, HRuler, VRuler, GridBackground, BottomBar, ACCENT_COLORS });
