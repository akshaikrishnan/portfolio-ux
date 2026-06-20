// InspectPanel.jsx — right-side Figma-style inspect panel
const InspectPanel = ({ visible, title = 'Frame', width = 1440, height = 900, color = '#0A0A0A', fontSize = 80, fontWeight = 700, shadow = '6×6 #0A0A0A', accent = '#0066FF' }) => {
  const Row = ({ k, v }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: '1px solid #F0F0F0' }}>
      <span style={{ fontFamily: Tokens.fonts.mono, fontSize: 10, color: '#555' }}>{k}</span>
      <span style={{ fontFamily: Tokens.fonts.mono, fontSize: 10, fontWeight: 500, color: accent }}>{v}</span>
    </div>
  );
  const Section = ({ label, children }) => (
    <div style={{ padding: '10px 14px', borderBottom: '1px solid #EBEBEB' }}>
      <div style={{ fontFamily: Tokens.fonts.mono, fontSize: 9, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>{label}</div>
      {children}
    </div>
  );

  return (
    <div style={{
      position: 'fixed', right: visible ? 0 : -220, top: 48, width: 210, bottom: 0,
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
      borderLeft: '2px solid #0A0A0A',
      transition: 'right 250ms cubic-bezier(0.2,0.8,0.2,1)',
      zIndex: 40, overflowY: 'auto',
    }}>
      <div style={{ background: '#0A0A0A', color: '#fff', padding: '8px 14px', fontFamily: Tokens.fonts.mono, fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
        <span>Inspect</span>
        <span style={{ opacity: 0.5 }}>{title}</span>
      </div>
      <Section label="Layout">
        <Row k="W" v={width} />
        <Row k="H" v={height} />
        <Row k="X" v="0" />
        <Row k="Y" v="0" />
      </Section>
      <Section label="Typography">
        <Row k="Font" v="Space Grotesk" />
        <Row k="Size" v={fontSize} />
        <Row k="Weight" v={fontWeight} />
        <Row k="Leading" v="0.95" />
      </Section>
      <Section label="Fill">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0' }}>
          <span style={{ fontFamily: Tokens.fonts.mono, fontSize: 10, color: '#555' }}>Color</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 12, height: 12, background: color, border: '1px solid #ccc', display: 'inline-block' }} />
            <span style={{ fontFamily: Tokens.fonts.mono, fontSize: 10, fontWeight: 500, color: accent }}>{color}</span>
          </span>
        </div>
      </Section>
      <Section label="Effects">
        <Row k="Shadow" v={shadow} />
      </Section>
    </div>
  );
};

Object.assign(window, { InspectPanel });
