// SkillsSection.jsx — component library metaphor
const skillGroups = [
  {
    category: 'Design',
    skills: ['Interaction Design', 'Visual Design', 'Design Systems', 'Prototyping', 'Motion Design'],
  },
  {
    category: 'Tools',
    skills: ['Figma', 'Framer', 'After Effects', 'Principle', 'Lottie'],
  },
  {
    category: 'Code',
    skills: ['HTML / CSS', 'React', 'JavaScript', 'CSS Animation', 'SVG'],
  },
  {
    category: 'Process',
    skills: ['User Research', 'Wireframing', 'Handoff', 'Component Audit', 'Design Critique'],
  },
];

const SkillChip = ({ label, accent }) => {
  const [dragging, setDragging] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [hovered, setHovered] = React.useState(false);
  const startRef = React.useRef(null);

  const onMouseDown = e => {
    startRef.current = { mx: e.clientX, my: e.clientY, ox: offset.x, oy: offset.y };
    setDragging(true);
  };

  React.useEffect(() => {
    if (!dragging) return;
    const move = e => {
      const dx = e.clientX - startRef.current.mx;
      const dy = e.clientY - startRef.current.my;
      setOffset({ x: startRef.current.ox + dx, y: startRef.current.oy + dy });
    };
    const up = () => {
      setDragging(false);
      setOffset({ x: 0, y: 0 }); // snap back
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
  }, [dragging]);

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: 12,
        fontWeight: 500,
        padding: '8px 16px',
        background: hovered ? accent : '#fff',
        color: hovered ? '#fff' : '#0A0A0A',
        border: `2px solid ${hovered ? accent : '#0A0A0A'}`,
        boxShadow: dragging ? '0px 0px 0 #0A0A0A' : hovered ? `4px 4px 0 ${accent}` : '3px 3px 0 #0A0A0A',
        transform: dragging
          ? `translate(${offset.x}px, ${offset.y}px) scale(1.04)`
          : hovered ? 'translate(-1px,-1px)' : 'none',
        cursor: dragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        transition: dragging ? 'box-shadow 80ms' : 'all 150ms cubic-bezier(0.34,1.56,0.64,1)',
        zIndex: dragging ? 50 : 1,
        position: 'relative',
      }}
    >
      {label}
    </div>
  );
};

const SkillsSection = ({ accent }) => (
  <section style={{ background: '#F5F5F0', backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px', padding: '96px 80px' }}>
    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 12 }}>COMPONENT LIBRARY / v1.0</div>
    <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, letterSpacing: '-0.02em', color: '#0A0A0A', marginBottom: 48 }}>Skills <span style={{ color: accent }}>—</span> drag to explore</h2>
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
      {skillGroups.map(g => (
        <div key={g.category} style={{ background: '#fff', border: '2px solid #0A0A0A', boxShadow: '6px 6px 0 #0A0A0A', padding: '24px', minWidth: 200 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 16, borderBottom: '1px solid #EBEBEB', paddingBottom: 8 }}>{g.category}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {g.skills.map(s => <SkillChip key={s} label={s} accent={accent} />)}
          </div>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 32 }}>
      <StickyNote color="blue" rotate={1.5} style={{ display: 'inline-block' }}>drag me → snap back</StickyNote>
    </div>
  </section>
);

Object.assign(window, { SkillsSection, SkillChip });
