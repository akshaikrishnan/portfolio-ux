// FrameCard.jsx — Brutalist frame card with hover/selected states
const FrameCard = ({ label, title, subtitle, tag, accent = '#0066FF', children, onClick, selected, style }) => {
  const [hovered, setHovered] = React.useState(false);

  const cardStyle = {
    background: '#fff',
    border: selected ? `2px solid ${accent}` : '2px solid #0A0A0A',
    boxShadow: selected
      ? `0 0 0 3px ${accent}33`
      : hovered
        ? '10px 10px 0px #0A0A0A'
        : '6px 6px 0px #0A0A0A',
    transform: hovered && !selected ? 'translate(-2px,-2px)' : 'none',
    transition: 'all 150ms cubic-bezier(0.4,0,0.2,1)',
    cursor: 'pointer',
    position: 'relative',
    ...style,
  };

  const handles = selected ? ['tl','tr','bl','br'].map(pos => {
    const s = { width: 8, height: 8, background: '#fff', border: `1.5px solid ${accent}`, position: 'absolute', zIndex: 2 };
    if (pos === 'tl') { s.top = -5; s.left = -5; }
    if (pos === 'tr') { s.top = -5; s.right = -5; }
    if (pos === 'bl') { s.bottom = -5; s.left = -5; }
    if (pos === 'br') { s.bottom = -5; s.right = -5; }
    return <div key={pos} style={s} />;
  }) : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && (
        <div style={{ fontFamily: Tokens.fonts.mono, fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: selected ? accent : '#555' }}>
          {label}
        </div>
      )}
      <div style={cardStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}>
        {handles}
        {children || (
          <div style={{ padding: '20px 24px' }}>
            {tag && <div style={{ fontFamily: Tokens.fonts.mono, fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', marginBottom: 6 }}>{tag}</div>}
            {title && <div style={{ fontFamily: Tokens.fonts.sans, fontSize: 18, fontWeight: 700, color: '#0A0A0A', marginBottom: 4 }}>{title}</div>}
            {subtitle && <div style={{ fontFamily: Tokens.fonts.mono, fontSize: 12, color: '#555' }}>{subtitle}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { FrameCard });
