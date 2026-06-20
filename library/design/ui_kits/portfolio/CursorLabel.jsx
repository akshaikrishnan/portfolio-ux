// CursorLabel.jsx — floating label that follows cursor
const CursorLabel = ({ label = 'Designer', accent = '#0066FF', visible = true }) => {
  const [pos, setPos] = React.useState({ x: -200, y: -200 });
  const [smoothPos, setSmoothPos] = React.useState({ x: -200, y: -200 });
  const rafRef = React.useRef();
  const targetRef = React.useRef({ x: -200, y: -200 });

  React.useEffect(() => {
    if (!visible) return;
    const onMove = e => { targetRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      setSmoothPos(prev => ({
        x: lerp(prev.x, targetRef.current.x, 0.12),
        y: lerp(prev.y, targetRef.current.y, 0.12),
      }));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafRef.current); };
  }, [visible]);

  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed',
      left: smoothPos.x + 14,
      top: smoothPos.y + 14,
      background: accent,
      color: '#fff',
      fontFamily: Tokens.fonts.mono,
      fontSize: 11,
      fontWeight: 500,
      padding: '3px 10px',
      pointerEvents: 'none',
      zIndex: 9999,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
    }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.6)', display: 'inline-block' }} />
      {label}
    </div>
  );
};

Object.assign(window, { CursorLabel });
