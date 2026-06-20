const { useState, useRef, useEffect } = React;

const projects = [
  { id:'01', num:'01', title:'Analytics Dashboard', tag:'PRODUCT', tagColor:'#E8E3FF', tagText:'#6B21A8', desc:'A data analytics dashboard that helps teams track KPIs and make informed decisions.', role:'Lead Designer', year:'2023', bg:'#EEF0FF', accent2:'#5B6CF9',
    overview:'Teams struggled to get real-time insights from scattered data. The goal was to design a dashboard that brings everything together and makes data easy to understand and act on.',
    responsibilities:['User research & interviews','Information architecture','UI/UX design & prototyping','Design system & components','Collaboration with engineering'],
    tools:['Figma','Notion','Maze'],
    process:[{icon:'🔍',title:'Research',sub:'User interviews and data analysis'},{icon:'⊞',title:'Structure',sub:'Information architecture and user flows'},{icon:'✏️',title:'Design',sub:'Wireframes, UI and prototyping'},{icon:'✓',title:'Validate',sub:'Usability testing and iteration'}],
    metrics:[{val:'20+',label:'Dashboards created'},{val:'15%',label:'Faster decision making'},{val:'32%',label:'Increase in data usage'}],
    quote:'The new dashboard gave us clarity and confidence in every decision we make. — Product Manager, FinPay' },
  { id:'02', num:'02', title:'Mindful – Meditation App', tag:'MOBILE', tagColor:'#D4F5D4', tagText:'#166534', desc:'A calming meditation app designed to help users build mindful daily habits.', role:'UI/UX Designer', year:'2022', bg:'#E8F5E9', accent2:'#4CAF50',
    overview:'Helping busy professionals build a sustainable meditation practice through gentle design, smart reminders, and a calm aesthetic that reduces friction to entry.',
    responsibilities:['User journey mapping','Mobile UI design','Onboarding flow','Icon design','Usability testing'],
    tools:['Figma','Principle','UserTesting'],
    process:[{icon:'🔍',title:'Research',sub:'User diary studies and surveys'},{icon:'🗺️',title:'Journey Map',sub:'User flows and touch points'},{icon:'📱',title:'Design',sub:'Mobile UI and interactions'},{icon:'✓',title:'Test',sub:'Usability testing with 20 users'}],
    metrics:[{val:'4.8★',label:'App store rating'},{val:'60K+',label:'Downloads in 3 months'},{val:'72%',label:'Day-7 retention rate'}],
    quote:'The most peaceful app I\'ve ever used. — Beta tester' },
  { id:'03', num:'03', title:'Studio – Agency Website', tag:'WEB', tagColor:'#FEF3C7', tagText:'#92400E', desc:'A modern website for a design agency to showcase work and attract new clients.', role:'UI/UX Designer', year:'2022', bg:'#FFF8E1', accent2:'#F59E0B',
    overview:'Redesigning the digital presence of a boutique design studio — making their portfolio feel as premium as their work, with strong editorial layout and smooth interactions.',
    responsibilities:['Brand alignment','Web design','Motion design','CMS integration','Performance optimisation'],
    tools:['Figma','Framer','Webflow'],
    process:[{icon:'🎨',title:'Brand Audit',sub:'Visual identity review'},{icon:'📐',title:'Layout',sub:'Editorial grid system'},{icon:'✨',title:'Motion',sub:'Micro-interactions & transitions'},{icon:'🚀',title:'Launch',sub:'Framer build & CMS'}],
    metrics:[{val:'2.1s',label:'Load time (was 6.8s)'},{val:'3×',label:'Increase in enquiries'},{val:'95',label:'Lighthouse score'}],
    quote:'Our new site finally feels like us. — Studio Director' },
  { id:'04', num:'04', title:'FinPay – Finance App', tag:'MOBILE', tagColor:'#FFE4E6', tagText:'#9F1239', desc:'A finance app that simplifies budgeting, tracking and smart payments.', role:'UI Designer', year:'2021', bg:'#1A1A2E', accent2:'#818CF8', dark:true,
    overview:'Fintech with a human face — making personal finance feel approachable and empowering for young professionals who want control without complexity.',
    responsibilities:['Competitive analysis','Dark UI design','Data visualisation','Onboarding design','Icon system'],
    tools:['Figma','Lottie','Zeplin'],
    process:[{icon:'🔍',title:'Audit',sub:'Competitor teardown'},{icon:'🌙',title:'Dark UI',sub:'Colour system for dark mode'},{icon:'📊',title:'Data Viz',sub:'Charts and spending insights'},{icon:'✓',title:'Polish',sub:'Micro-animations and transitions'}],
    metrics:[{val:'40%',label:'Faster expense logging'},{val:'88%',label:'User satisfaction score'},{val:'2×',label:'Engagement vs old app'}],
    quote:'I actually check my finances now. — Beta user' },
  { id:'05', num:'05', title:'Origin Coffee – E-commerce', tag:'WEB', tagColor:'#FEF3C7', tagText:'#92400E', desc:'An e-commerce experience for a specialty coffee brand.', role:'UI/UX Designer', year:'2021', bg:'#FFF8F0', accent2:'#D97706',
    overview:'Bringing the warmth and craft of a specialty coffee brand online — a shopping experience that feels as considered as the beans themselves.',
    responsibilities:['E-commerce UX','Product photography art direction','Cart & checkout flow','Brand voice integration','Mobile optimisation'],
    tools:['Figma','Shopify','Notion'],
    process:[{icon:'☕',title:'Brand Study',sub:'Tone, voice and values'},{icon:'📸',title:'Art Direction',sub:'Photography and visual style'},{icon:'🛒',title:'Commerce',sub:'PDP and checkout design'},{icon:'📱',title:'Mobile',sub:'Responsive optimisation'}],
    metrics:[{val:'22%',label:'Conversion rate lift'},{val:'35%',label:'Average order value up'},{val:'4.9★',label:'Customer satisfaction'}],
    quote:'Sales tripled the week we launched the new site. — Founder' },
  { id:'06', num:'06', title:'Vanta – Brand Identity', tag:'BRANDING', tagColor:'#F3E8FF', tagText:'#6B21A8', desc:'Brand identity and visual system for a modern tech startup.', role:'Brand Designer', year:'2020', bg:'#F5F5F5', accent2:'#111',
    overview:'Building a brand from zero — naming, logo, colour system, typography and brand guidelines for a B2B SaaS startup positioning themselves as the "trust layer" for modern businesses.',
    responsibilities:['Naming & positioning','Logo design','Brand system','Typography selection','Brand guidelines'],
    tools:['Figma','Illustrator','Notion'],
    process:[{icon:'🎯',title:'Positioning',sub:'Brand strategy workshop'},{icon:'✏️',title:'Logomark',sub:'Concept exploration'},{icon:'🎨',title:'System',sub:'Color, type, grid'},{icon:'📖',title:'Guidelines',sub:'Brand documentation'}],
    metrics:[{val:'3',label:'Weeks to final brand'},{val:'12',label:'Logo concepts explored'},{val:'100+',label:'Pages brand guidelines'}],
    quote:'The brand perfectly captures who we want to be. — CEO' },
];

function CaseStudyModal({ project, onClose, accent, onNav }) {
  const [tab, setTab] = useState('Overview');
  const tabs = ['Overview','Problem','Solution','Process','Impact'];
  const [mounted, setMounted] = useState(false);
  const currentIdx = projects.findIndex(p => p.id === project.id);

  useEffect(() => { setTimeout(() => setMounted(true), 10); }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', flexDirection: 'column', background: '#ECEDF0', animation: 'frameExpand 0.35s cubic-bezier(0.2,0.8,0.2,1) both' }}>
      {/* Case study top bar */}
      <div style={{ height: 44, background: '#1E1E1E', borderBottom: '1px solid #2c2c2c', display: 'flex', alignItems: 'center', paddingInline: 16, gap: 12, flexShrink: 0 }}>
        <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: '1px solid #3a3a3a', borderRadius: 6, padding: '5px 12px', color: '#ccc', fontSize: 12, cursor: 'pointer' }}>← Back to projects</button>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#5B6CF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 10, color: '#fff', fontWeight: 700 }}>A</span></div>
          <button style={{ background: accent, color: '#fff', border: 'none', borderRadius: 6, padding: '5px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Let's talk ↗</button>
          <button style={{ background: 'transparent', border: '1px solid #3a3a3a', borderRadius: 6, padding: '5px 10px', color: '#aaa', fontSize: 12, cursor: 'pointer' }}>↓</button>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Main content */}
        <div style={{ flex: 1, overflow: 'auto', padding: '32px 40px' }}>
          {/* Frame label */}
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: accent, marginBottom: 8, fontWeight: 600 }}>Frame {project.num} / Selected</div>

          {/* Hero row */}
          <div style={{ display: 'flex', gap: 28, marginBottom: 28, background: '#fff', border: `1.5px solid ${accent}40`, borderRadius: 10, overflow: 'hidden', boxShadow: `4px 4px 0 ${accent}20` }}>
            <div style={{ flex: 1, padding: '28px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 16 }}>
                <div style={{ background: `${accent}15`, borderRadius: 8, padding: '8px 14px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 32, color: accent }}>{project.num}</div>
                </div>
                <div>
                  <span style={{ background: project.tagColor, color: project.tagText, fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 3, display: 'inline-block', marginBottom: 6 }}>{project.tag}</span>
                  <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 28, color: '#111', lineHeight: 1.1 }}>{project.title}</h2>
                </div>
              </div>
              <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>{project.desc}</p>
              <div style={{ display: 'flex', gap: 20 }}>
                <div><div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#aaa', marginBottom: 2 }}>Role</div><div style={{ fontFamily: 'Inter', fontSize: 12, color: '#444' }}>{project.role}</div></div>
                <div><div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#aaa', marginBottom: 2 }}>Year</div><div style={{ fontFamily: 'Inter', fontSize: 12, color: '#444' }}>{project.year}</div></div>
                <div style={{ alignSelf: 'flex-end' }}><a href="#" style={{ fontFamily: 'Inter', fontSize: 12, color: accent, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>Visit live site ↗</a></div>
              </div>
            </div>
            {/* Preview mock */}
            <div style={{ width: 280, background: project.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ padding: 20, textAlign: 'center' }}>
                <div style={{ width: 180, height: 110, background: project.dark ? '#252540' : '#fff', borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: project.dark ? '#888' : '#ccc', textAlign: 'center', lineHeight: 1.8 }}>
                    ████ ████<br/>█████████ ██<br/>████ █████████<br/>── ── ── ──<br/><span style={{ color: project.accent2, fontWeight: 700 }}>▓▓▓▓▓▓ ▓▓▓▓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: '7px 16px', border: `1.5px solid ${tab===t ? accent : '#E0E0E8'}`, borderRadius: 20, background: tab===t ? accent : '#fff', color: tab===t ? '#fff' : '#666', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter', transition: 'all 0.15s' }}>{t}</button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ background: '#fff', border: '1.5px solid #E0E0E8', borderRadius: 8, padding: '20px 24px' }}>
              <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#555', lineHeight: 1.7, marginBottom: 16 }}>{project.overview}</p>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: accent, fontWeight: 700, marginBottom: 8 }}>MY RESPONSIBILITIES</div>
              {project.responsibilities.map(r => (
                <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: accent, flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#444' }}>{r}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: '#fff', border: '1.5px solid #E0E0E8', borderRadius: 8, padding: '16px 20px', marginBottom: 16 }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', marginBottom: 12 }}>THE PROCESS</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {project.process.map((p, i) => (
                    <React.Fragment key={p.title}>
                      <div style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: `${accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, margin: '0 auto 6px' }}>{p.icon}</div>
                        <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 10, color: '#333', marginBottom: 2 }}>{i+1}. {p.title}</div>
                        <div style={{ fontFamily: 'Inter', fontSize: 9, color: '#999', lineHeight: 1.4 }}>{p.sub}</div>
                      </div>
                      {i < project.process.length-1 && <span style={{ color: '#ddd', fontSize: 16, flexShrink: 0 }}>→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                {project.metrics.map(m => (
                  <div key={m.label} style={{ flex: 1, background: '#fff', border: '1.5px solid #E0E0E8', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, color: accent, animation: 'countUp 0.5s ease both' }}>{m.val}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: 10, color: '#888', marginTop: 3 }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: `${accent}08`, border: `1px solid ${accent}30`, borderRadius: 8, padding: '12px 16px' }}>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#555', lineHeight: 1.6, fontStyle: 'italic' }}>"{project.quote}"</div>
              </div>
              {project.tools && (
                <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#aaa' }}>TOOLS USED</span>
                  {project.tools.map(t => <span key={t} style={{ fontFamily: 'JetBrains Mono', fontSize: 9, background: '#F0F0F4', border: '1px solid #E0E0E8', padding: '2px 8px', borderRadius: 3, color: '#555' }}>{t}</span>)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ width: 200, flexShrink: 0, borderLeft: '1px solid #E0E0E8', background: '#fff', padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <StickyNote color="#EDE8FF" rotate={2} taped style={{ fontSize: 11, lineHeight: 1.5 }}>Detail matters.<br/>Clarity wins.<br/>:)</StickyNote>

          <div style={{ background: '#F8F8FC', border: '1px solid #EEEEF4', borderRadius: 8, padding: '12px 14px' }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#aaa', marginBottom: 10 }}>ON THIS PAGE</div>
            {tabs.map((t, i) => (
              <div key={t} onClick={() => setTab(t)} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7, cursor: 'pointer' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: tab===t ? accent : '#ddd' }} />
                <span style={{ fontFamily: 'Inter', fontSize: 11, color: tab===t ? '#111' : '#888', fontWeight: tab===t ? 600 : 400 }}>{t}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #EEE', marginTop: 8, paddingTop: 10, fontFamily: 'JetBrains Mono', fontSize: 9, color: '#aaa', marginBottom: 8 }}>Navigate</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button onClick={() => currentIdx > 0 && onNav(projects[currentIdx-1])} disabled={currentIdx === 0} style={{ flex: 1, padding: '6px', border: '1px solid #E0E0E8', borderRadius: 5, background: currentIdx===0 ? '#F8F8FC' : '#fff', color: currentIdx===0 ? '#ccc' : '#555', cursor: currentIdx===0 ? 'default' : 'pointer', fontSize: 13 }}>↑</button>
              <button onClick={() => currentIdx < projects.length-1 && onNav(projects[currentIdx+1])} disabled={currentIdx===projects.length-1} style={{ flex: 1, padding: '6px', border: '1px solid #E0E0E8', borderRadius: 5, background: currentIdx===projects.length-1 ? '#F8F8FC' : '#fff', color: currentIdx===projects.length-1 ? '#ccc' : '#555', cursor: currentIdx===projects.length-1 ? 'default' : 'pointer', fontSize: 13 }}>↓</button>
            </div>
            <div style={{ marginTop: 8, fontFamily: 'JetBrains Mono', fontSize: 9, color: '#bbb', textAlign: 'center' }}>Quick nav<br/>between sections</div>
          </div>
        </div>
      </div>

      {/* Bottom thumbnail strip */}
      <div style={{ height: 90, background: '#1E1E1E', borderTop: '1px solid #2c2c2c', display: 'flex', alignItems: 'center', paddingInline: 16, gap: 8, overflow: 'auto', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 8 }}>
          <button style={{ width: 28, height: 28, border: '1px solid #3a3a3a', borderRadius: 5, background: '#2a2a2a', color: '#888', cursor: 'pointer', fontSize: 12 }}>⊞</button>
          <span style={{ color: '#555', fontSize: 12 }}>−</span>
          <span style={{ color: '#888', fontSize: 11, fontFamily: 'JetBrains Mono' }}>+</span>
          <span style={{ color: '#666', fontSize: 11, fontFamily: 'JetBrains Mono', marginLeft: 4 }}>100%</span>
        </div>
        {projects.map((p, i) => (
          <div key={p.id} onClick={() => onNav(p)} style={{ flexShrink: 0, width: 100, height: 66, borderRadius: 5, border: `2px solid ${p.id===project.id ? accent : '#3a3a3a'}`, background: p.bg, cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', position: 'relative', transition: 'border-color 0.15s' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 7, color: p.dark ? '#555' : '#ccc', textAlign: 'center', lineHeight: 1.6 }}>████████<br/>██ ████<br/>████████</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '3px 5px' }}>
              <div style={{ fontFamily: 'Inter', fontSize: 8, color: '#eee', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.num} {p.title.split(' – ')[0]}</div>
            </div>
          </div>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          <button onClick={() => currentIdx > 0 && onNav(projects[currentIdx-1])} style={{ width: 28, height: 28, border: '1px solid #3a3a3a', borderRadius: 5, background: '#2a2a2a', color: '#888', cursor: 'pointer' }}>←</button>
          <button onClick={() => currentIdx < projects.length-1 && onNav(projects[currentIdx+1])} style={{ width: 28, height: 28, border: '1px solid #3a3a3a', borderRadius: 5, background: '#2a2a2a', color: '#888', cursor: 'pointer' }}>→</button>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection({ accent, onOpenCase }) {
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState('grid');
  const [hovered, setHovered] = useState(null);
  const filters = ['All','Product','Web','Mobile','Branding'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tag.toUpperCase().includes(filter.toUpperCase()) || p.tag === filter.toUpperCase());

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
      {/* Left layers panel */}
      <div style={{ width: 200, flexShrink: 0, padding: '36px 20px 20px', borderRight: '1px solid #E0E0E8', background: '#FAFAFA', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <SectionBadge label="Section 04" accent={accent} />
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 36, lineHeight: 1.05, color: '#111' }}>Projects <span style={{ color: accent }}>/</span><br/>Case Studies</h2>
          <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#666', marginTop: 8, lineHeight: 1.6 }}>A selection of projects where strategy, design and technology come together.</p>
        </div>
        <PanelCard title="LAYERS">
          {projects.map((p, i) => (
            <div key={p.id} onClick={() => onOpenCase(p)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 4px', cursor: 'pointer', borderRadius: 4, background: hovered === p.id ? `${accent}10` : 'transparent', marginBottom: 2 }}
              onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: hovered === p.id ? accent : '#ccc' }} />
              <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#666' }}>Project {p.id}</span>
            </div>
          ))}
        </PanelCard>
        <StickyNote color="#C8F135" rotate={3} pinned style={{ fontSize: 10, lineHeight: 1.5 }}>
          Click any card to see the full case study →
        </StickyNote>
      </div>

      {/* Right content */}
      <div style={{ flex: 1, overflow: 'auto', padding: '36px 32px' }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#888' }}>Filter by:</span>
              {filters.map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{ padding: '5px 14px', border: `1.5px solid ${filter===f ? accent : '#E0E0E8'}`, borderRadius: 20, background: filter===f ? accent : '#fff', color: filter===f ? '#fff' : '#666', fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter', transition: 'all 0.15s' }}>{f}</button>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#aaa', marginBottom: 4, textAlign: 'right' }}>switch view ↓</div>
            <div style={{ display: 'flex', background: '#fff', border: '1px solid #E0E0E8', borderRadius: 6, overflow: 'hidden' }}>
              {[{id:'grid',icon:'⊞'},{id:'list',icon:'☰'}].map(v => (
                <button key={v.id} onClick={() => setView(v.id)} style={{ width: 34, height: 30, border: 'none', background: view===v.id ? accent : 'transparent', color: view===v.id ? '#fff' : '#888', cursor: 'pointer', fontSize: 14 }}>{v.icon}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky note */}
        <div style={{ position: 'absolute', top: 60, right: 100 }}>
          <StickyNote color="#E8E3FF" rotate={-3} pinned style={{ fontSize: 11, lineHeight: 1.5 }}>
            Each project is a problem I was excited to solve :)
          </StickyNote>
        </div>

        {/* Grid */}
        <div style={{ display: view==='grid' ? 'grid' : 'flex', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, flexDirection: 'column' }}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} accent={accent} onOpen={() => onOpenCase(p)} index={i} view={view} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project: p, accent, onOpen, index, view }) {
  const [hov, setHov] = useState(false);
  const [sel, setSel] = useState(false);

  const handleClick = () => { setSel(true); setTimeout(onOpen, 200); };

  if (view === 'list') {
    return (
      <div onClick={handleClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: '#fff', border: `1.5px solid ${hov ? accent : '#E0E0E8'}`, borderRadius: 8, cursor: 'pointer', transition: 'all 0.15s', boxShadow: hov ? `2px 2px 0 ${accent}30` : '2px 2px 0 #E0E0E8', animation: `fadeSlideIn 0.3s ease ${index*0.07}s both` }}>
        <div style={{ width: 60, height: 44, background: p.bg, borderRadius: 5, flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 15, color: '#111' }}>{p.title}</div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#888', marginTop: 2 }}>{p.desc}</div>
        </div>
        <span style={{ background: p.tagColor, color: p.tagText, fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 2 }}>{p.tag}</span>
        <span style={{ fontSize: 13, color: '#aaa' }}>↗</span>
      </div>
    );
  }

  return (
    <div onClick={handleClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: '#fff', border: `1.5px solid ${sel ? accent : hov ? accent+'80' : '#E0E0E8'}`, borderRadius: 10, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s', boxShadow: sel ? `4px 4px 0 ${accent}40` : hov ? `3px 3px 0 ${accent}30` : '2px 2px 0 #E0E0E8', transform: hov ? 'translateY(-2px)' : 'none', animation: `fadeSlideIn 0.35s ease ${index*0.07}s both`, position: 'relative' }}>
      {/* Selection handles */}
      {hov && (
        <div style={{ position: 'absolute', inset: -1, border: `2px solid ${accent}`, borderRadius: 10, pointerEvents: 'none', zIndex: 5 }}>
          {['tl','tr','bl','br'].map(pos => <div key={pos} style={{ position: 'absolute', width: 7, height: 7, background: '#fff', border: `1.5px solid ${accent}`, borderRadius: 1, top: pos.includes('t') ? -4 : 'auto', bottom: pos.includes('b') ? -4 : 'auto', left: pos.includes('l') ? -4 : 'auto', right: pos.includes('r') ? -4 : 'auto' }} />)}
          <div style={{ position: 'absolute', top: -18, left: 0, background: accent, color: '#fff', fontSize: 9, fontFamily: 'JetBrains Mono', fontWeight: 600, padding: '2px 6px', borderRadius: '3px 3px 0 0' }}>Frame {p.id}</div>
        </div>
      )}
      {/* Preview */}
      <div style={{ height: 130, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #F0F0F4' }}>
        <div style={{ width: '75%', height: 80, background: p.dark ? '#252540' : 'rgba(255,255,255,0.7)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 8, color: p.dark ? '#555' : '#C8C9D4', textAlign: 'center', lineHeight: 1.8 }}>████████<br/>██ ██ ████<br/>█████ ████<br/><span style={{ color: p.accent2 }}>▓▓▓▓▓ ▓▓▓</span></div>
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 11, color: '#bbb' }}>{p.num}</span>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 15, color: '#111', flex: 1 }}>{p.title}</span>
          <span style={{ background: p.tagColor, color: p.tagText, fontFamily: 'JetBrains Mono', fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 2 }}>{p.tag}</span>
        </div>
        <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#777', lineHeight: 1.5, marginBottom: 12 }}>{p.desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderTop: '1px solid #F0F0F4', paddingTop: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: '#bbb' }}>👤</span>
            <div><div style={{ fontFamily: 'Inter', fontSize: 9, color: '#aaa' }}>Role</div><div style={{ fontFamily: 'Inter', fontSize: 11, color: '#555', fontWeight: 500 }}>{p.role}</div></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: '#bbb' }}>📅</span>
            <div><div style={{ fontFamily: 'Inter', fontSize: 9, color: '#aaa' }}>Year</div><div style={{ fontFamily: 'Inter', fontSize: 11, color: '#555', fontWeight: 500 }}>{p.year}</div></div>
          </div>
          <button style={{ marginLeft: 'auto', width: 26, height: 26, border: `1.5px solid ${hov ? accent : '#E0E0E8'}`, borderRadius: 5, background: hov ? accent : '#fff', color: hov ? '#fff' : '#aaa', cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s' }}>↗</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProjectsSection, CaseStudyModal, projects });
