// ProjectsSection.jsx
const projects = [
  { id: 1, label: 'FRAME 03 / PROJECT-01', title: 'Orbit Design System', tag: 'design system · 2024', desc: 'Built a token-based system for a 60-person product team. Reduced design-dev handoff time by 40%.', accent: '#0066FF' },
  { id: 2, label: 'FRAME 04 / PROJECT-02', title: 'Nova App Redesign', tag: 'product design · 2023', desc: 'Zero-to-one redesign of a B2C fintech app. Shipped to 200k users in 8 weeks.', accent: '#FF3B00' },
  { id: 3, label: 'FRAME 05 / PROJECT-03', title: 'Pulse Analytics', tag: 'interaction design · 2023', desc: 'Data-dense dashboard with 30+ chart types. Designed the entire component library from scratch.', accent: '#9933FF' },
  { id: 4, label: 'FRAME 06 / PROJECT-04', title: 'Flow CMS', tag: 'ux design · 2022', desc: 'Content management for editorial teams. Focus on keyboard navigation and speed.', accent: '#00CC66' },
];

const ProjectsSection = ({ accent }) => {
  const [selected, setSelected] = React.useState(null);
  const [zoomed, setZoomed] = React.useState(null);

  const open = (p) => { setZoomed(p); setSelected(p.id); };
  const close = () => { setZoomed(null); setSelected(null); };

  return (
    <section style={{ background: '#fff', padding: '96px 80px', position: 'relative' }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 12 }}>FRAME 02 / PROJECTS</div>
      <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, letterSpacing: '-0.03em', color: '#0A0A0A', marginBottom: 48 }}>
        Case files <span style={{ color: accent }}>→</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
        {projects.map(p => (
          <FrameCard key={p.id} label={p.label} selected={selected === p.id} accent={accent} onClick={() => open(p)}>
            <div style={{ padding: '28px 24px' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>{p.tag}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: '#0A0A0A', marginBottom: 12, lineHeight: 1.1 }}>{p.title}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: '#555', lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 700, color: accent }}>Open case file →</div>
            </div>
          </FrameCard>
        ))}
      </div>

      {/* Zoom overlay */}
      {zoomed && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={close}>
          <div style={{ background: '#fff', border: '2px solid #0A0A0A', boxShadow: '12px 12px 0 #0A0A0A', width: '80vw', maxWidth: 720, padding: 48, position: 'relative' }} onClick={e => e.stopPropagation()}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 12 }}>{zoomed.label}</div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 36, fontWeight: 700, color: '#0A0A0A', marginBottom: 16, letterSpacing: '-0.02em' }}>{zoomed.title}</h3>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, color: '#555', lineHeight: 1.7, marginBottom: 32 }}>{zoomed.desc}</p>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ flex: 1, background: '#F5F5F0', border: '2px solid #EBEBEB', padding: '20px 16px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#999' }}>
                Overview / metrics placeholder
              </div>
              <div style={{ flex: 1, background: '#F5F5F0', border: '2px solid #EBEBEB', padding: '20px 16px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#999' }}>
                Process steps placeholder
              </div>
            </div>
            <button onClick={close} style={{ position: 'absolute', top: 16, right: 16, background: '#0A0A0A', color: '#fff', border: 'none', width: 32, height: 32, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, cursor: 'pointer', fontSize: 14 }}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};

Object.assign(window, { ProjectsSection });
