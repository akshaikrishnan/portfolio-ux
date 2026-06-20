// StickyNote.jsx
const StickyNote = ({ children, color = 'yellow', rotate = -1.5, style }) => {
  const palettes = {
    yellow: { bg: '#FFE566', shadow: '#D4BF3A' },
    pink:   { bg: '#FFB3C1', shadow: '#D48090' },
    blue:   { bg: '#B3D9FF', shadow: '#80AEDD' },
    green:  { bg: '#B3FFD9', shadow: '#6DDBA8' },
  };
  const p = palettes[color] || palettes.yellow;
  return (
    <div style={{
      background: p.bg,
      boxShadow: `3px 3px 0 ${p.shadow}`,
      borderRadius: 2,
      padding: '14px 16px',
      fontFamily: Tokens.fonts.mono,
      fontSize: 12,
      lineHeight: 1.5,
      color: '#0A0A0A',
      transform: `rotate(${rotate}deg)`,
      userSelect: 'none',
      ...style,
    }}>
      {children}
    </div>
  );
};

Object.assign(window, { StickyNote });
