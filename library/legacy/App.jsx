const { useState, useEffect, useCallback } = React;

const ACCENT_DEFAULTS = [
  '#5B6CF9','#9747FF','#FF2D78','#FF6B35','#8FCC14','#111111'
];

function App() {
  const [section, setSection] = useState(0);
  const [accent, setAccent] = useState('#5B6CF9');
  const [snap, setSnap] = useState(true);
  const [caseStudy, setCaseStudy] = useState(null);
  const [prevSection, setPrevSection] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  // Update CSS variable whenever accent changes
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
  }, [accent]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = e => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(Math.min(section + 1, 5));
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(Math.max(section - 1, 0));
      if (e.key === 'Escape' && caseStudy) setCaseStudy(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [section, caseStudy]);

  const goTo = useCallback((idx) => {
    if (idx === section || transitioning) return;
    setTransitioning(true);
    setPrevSection(section);
    setTimeout(() => {
      setSection(idx);
      setTransitioning(false);
    }, 180);
  }, [section, transitioning]);

  const openCase = useCallback((project) => {
    setCaseStudy(project);
  }, []);

  const navCase = useCallback((project) => {
    setCaseStudy(project);
  }, []);

  const SECTIONS_COUNT = 6;

  const renderSection = () => {
    switch (section) {
      case 0: return <HeroSection accent={accent} onNav={goTo} />;
      case 1: return <ExperienceSection accent={accent} />;
      case 2: return <SkillsSection accent={accent} />;
      case 3: return <ProjectsSection accent={accent} onOpenCase={openCase} />;
      case 4: return <WritingSection accent={accent} />;
      case 5: return <ContactSection accent={accent} onNav={goTo} />;
      default: return null;
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>

      {/* Cursor labels — always on */}
      <CursorLabels accent={accent} />

      {/* Left Sidebar */}
      <LeftSidebar section={section} />

      {/* Right panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>

        {/* Top Bar */}
        <TopBar section={section} onNav={goTo} accent={accent} />

        {/* Canvas area */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>

          {/* Horizontal ruler */}
          <div style={{ position: 'absolute', top: 0, left: 22, right: 0, zIndex: 50 }}>
            <HRuler />
          </div>

          {/* Vertical ruler */}
          <div style={{ position: 'absolute', top: 22, left: 0, bottom: 0, zIndex: 50 }}>
            <VRuler />
          </div>

          {/* Main canvas */}
          <div style={{ position: 'absolute', top: 22, left: 22, right: 0, bottom: 0, overflow: 'hidden' }}>
            <GridBackground snap={snap} />

            {/* Section content */}
            <div
              key={section}
              style={{
                position: 'absolute', inset: 0,
                animation: transitioning ? 'none' : 'fadeSlideIn 0.28s cubic-bezier(0.2,0.8,0.2,1) both',
                zIndex: 10,
              }}
            >
              {renderSection()}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <BottomBar
          section={section}
          accent={accent}
          onAccentChange={setAccent}
          snapToGrid={snap}
          onSnapChange={setSnap}
          totalSections={SECTIONS_COUNT}
          onNav={goTo}
        />
      </div>

      {/* Section nav dots — right side */}
      <div style={{ position: 'fixed', right: 18, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 8, zIndex: 300 }}>
        {['Hero','Experience','Skills','Projects','Writing','Contact'].map((name, i) => (
          <div key={name} onClick={() => goTo(i)} title={name} style={{ width: i === section ? 8 : 6, height: i === section ? 8 : 6, borderRadius: '50%', background: i === section ? accent : '#C8C9D4', cursor: 'pointer', transition: 'all 0.2s', border: i === section ? `2px solid ${accent}40` : 'none', margin: '0 auto' }}
            onMouseEnter={e => { e.currentTarget.style.background = accent; e.currentTarget.style.transform = 'scale(1.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = i === section ? accent : '#C8C9D4'; e.currentTarget.style.transform = 'scale(1)'; }} />
        ))}
      </div>

      {/* Case Study Modal */}
      {caseStudy && (
        <CaseStudyModal
          project={caseStudy}
          onClose={() => setCaseStudy(null)}
          accent={accent}
          onNav={navCase}
        />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
