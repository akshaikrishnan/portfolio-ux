const { useState } = React;

const blogPosts = [
  { id:'01', title:'Design Systems at Scale', excerpt:'How I build design systems that actually scale across teams and products.', tags:['Design Systems','Process'], date:'May 12, 2024', read:'6 min read', status:'PUBLISHED', featured: true },
  { id:'02', title:'Why UI ≠ UX', excerpt:'Breaking down the common misconceptions and where both intersect.', tags:['UX','Mindset'], date:'Apr 28, 2024', read:'4 min read', status:'PUBLISHED', featured: false },
  { id:'03', title:'My Product Design Process', excerpt:'A step-by-step look at how I take an idea from 0 → 1.', tags:['Process'], date:'Apr 10, 2024', read:'7 min read', status:'PUBLISHED', featured: false },
  { id:'04', title:'Accessibility is a Feature', excerpt:'Coming soon...', tags:['Product'], date:'Mar 15, 2024', read:'5 min read', status:'DRAFT', featured: false },
  { id:'05', title:'Lessons from Shipping 10+ Apps', excerpt:'Hard-earned lessons about product, users, teams and shipping.', tags:['Product'], date:'Mar 5, 2024', read:'5 min read', status:'PUBLISHED', featured: false },
];

const allTags = ['All','UX','Design Systems','Frontend','Process','Thoughts'];
const tagColors = { 'Design Systems': ['#E8E3FF','#6B21A8'], 'Process': ['#D4F5D4','#166534'], 'UX': ['#FEF3C7','#92400E'], 'Mindset': ['#FFE4E6','#9F1239'], 'Product': ['#EEF0FF','#3730A3'] };

function WritingSection({ accent }) {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(blogPosts[0]);
  const [selFrame, setSelFrame] = useState('01');

  const filtered = filter === 'All' ? blogPosts : blogPosts.filter(p => p.tags.includes(filter));

  return (
    <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>

      {/* Left: Drafts panel */}
      <div style={{ width: 200, flexShrink: 0, borderRight: '1px solid #E0E0E8', background: '#FAFAFA', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '36px 20px 16px' }}>
          <SectionBadge label="Section 05" accent={accent} />
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 44, color: '#111', lineHeight: 1 }}>Writing<span style={{ color: accent }}>.</span></h2>
          <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#666', marginTop: 8, lineHeight: 1.6 }}>Thoughts, ideas and lessons from my design journey.</p>
        </div>
        <div style={{ borderTop: '1px solid #E0E0E8' }}>
          <div style={{ padding: '10px 20px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fontWeight: 700, color: '#444' }}>DRAFTS</span>
            <span style={{ fontSize: 12, color: '#aaa', cursor: 'pointer' }}>⊞</span>
          </div>
          <div style={{ padding: '0 12px 12px' }}>
            {blogPosts.map(post => (
              <div key={post.id} onClick={() => setSelected(post)} style={{ padding: '8px', borderRadius: 5, cursor: 'pointer', background: selected?.id === post.id ? `${accent}10` : 'transparent', marginBottom: 2, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: post.status === 'PUBLISHED' ? accent : '#ddd', flexShrink: 0, marginTop: 3 }} />
                <div>
                  <div style={{ fontFamily: 'Inter', fontSize: 11, color: selected?.id === post.id ? '#111' : '#555', fontWeight: selected?.id === post.id ? 600 : 400, lineHeight: 1.3, marginBottom: 2 }}>{post.title}</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: post.status === 'PUBLISHED' ? '#4CAF50' : '#F59E0B' }}>{post.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: '0 16px', marginTop: 'auto', paddingBottom: 20 }}>
          <StickyNote color="#C8F135" rotate={-1} style={{ fontSize: 10, lineHeight: 1.5 }}>
            More ideas brewing... ☕
          </StickyNote>
        </div>
      </div>

      {/* Center: Blog grid */}
      <div style={{ flex: 1, overflow: 'auto', padding: '36px 24px 30px' }}>
        {/* Filter + sticky note row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 24 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#888' }}>Filter by:</span>
              {allTags.map(t => (
                <button key={t} onClick={() => setFilter(t)} style={{ padding: '4px 12px', border: `1.5px solid ${filter===t ? accent : '#E0E0E8'}`, borderRadius: 20, background: filter===t ? accent : '#fff', color: filter===t ? '#fff' : '#666', fontSize: 10, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter', transition: 'all 0.15s' }}>{t}</button>
              ))}
            </div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <StickyNote color="#E8E3FF" rotate={-3} pinned style={{ fontSize: 10, lineHeight: 1.4 }}>
              I write to clarify my thinking. :)
            </StickyNote>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'start' }}>
          {filtered.map((post, i) => (
            <BlogCard key={post.id} post={post} accent={accent} selected={selected?.id === post.id} selFrame={selFrame} onSelect={() => { setSelected(post); setSelFrame(post.id); }} index={i} />
          ))}
          {/* Currently writing card */}
          <div style={{ background: '#FFFDE7', border: '1.5px dashed #E0D060', borderRadius: 8, padding: '16px 16px 14px', minHeight: 100 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#888', lineHeight: 1.5, marginBottom: 10 }}>Currently writing about something exciting...</div>
            <span style={{ background: '#FFC107', color: '#000', fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 2 }}>IN PROGRESS</span>
          </div>
        </div>
      </div>

      {/* Right: Preview panel */}
      {selected && (
        <div style={{ width: 240, flexShrink: 0, borderLeft: '1px solid #E0E0E8', background: '#fff', display: 'flex', flexDirection: 'column', animation: 'slideInRight 0.25s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #EEE' }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, fontWeight: 700, color: '#444' }}>Blog {selected.id}</span>
            <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: '#aaa', fontSize: 16, cursor: 'pointer' }}>×</button>
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: 16 }}>
            {/* Image placeholder */}
            <div style={{ width: '100%', height: 110, background: 'linear-gradient(135deg, #E8E3FF 0%, #C8C0FF 100%)', borderRadius: 7, marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #DDD8FF' }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#A890FF', textAlign: 'center', lineHeight: 2 }}>████ ████████<br/>██████ ████<br/>cover image</div>
            </div>
            <span style={{ background: selected.status === 'PUBLISHED' ? '#D4F5D4' : '#FFF3D4', color: selected.status === 'PUBLISHED' ? '#166534' : '#92400E', fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 2 }}>{selected.status}</span>
            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 16, color: '#111', marginTop: 8, marginBottom: 6, lineHeight: 1.3 }}>{selected.title}</h3>
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#aaa' }}>📅 {selected.date}</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#aaa' }}>⏱ {selected.read}</span>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#666', lineHeight: 1.6, marginBottom: 14 }}>Design systems are more than components and tokens. They're the operating system for consistency, collaboration and velocity.</p>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#888', marginBottom: 8 }}>In this article, I cover:</div>
              {['What makes a design system scale','Core principles I follow','Pitfalls I\'ve learned the hard way','Real examples from my work'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 5 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: accent, marginTop: 3, flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 11, color: '#555', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
            <button style={{ width: '100%', padding: '9px', background: accent, color: '#fff', border: 'none', borderRadius: 6, fontFamily: 'Inter', fontWeight: 600, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginBottom: 8 }}>Read full article ↗</button>
            <button style={{ width: '100%', padding: '8px', background: 'transparent', color: '#555', border: '1px solid #E0E0E8', borderRadius: 6, fontFamily: 'Inter', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>View all blogs ☰</button>
          </div>
        </div>
      )}
    </div>
  );
}

function BlogCard({ post, accent, selected, onSelect, index }) {
  const [hov, setHov] = useState(false);
  const isActive = selected || hov;

  if (post.status === 'DRAFT' && post.id === '04') {
    return (
      <div style={{ background: '#FFF', border: '1.5px dashed #E0E0E8', borderRadius: 8, padding: '16px', minHeight: 160, animation: `fadeSlideIn 0.3s ease ${index*0.07}s both` }}>
        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 8 }}>{post.title}</div>
        <span style={{ background: '#FFF3D4', color: '#92400E', fontFamily: 'JetBrains Mono', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 2, display: 'inline-block', marginBottom: 10 }}>DRAFT</span>
        <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#bbb', fontStyle: 'italic' }}>Coming soon...</div>
      </div>
    );
  }

  return (
    <div onClick={onSelect} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: '#fff', border: `1.5px solid ${selected ? accent : isActive ? accent+'60' : '#E0E0E8'}`, borderRadius: 8, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s', boxShadow: selected ? `3px 3px 0 ${accent}30` : isActive ? `2px 2px 0 ${accent}20` : '2px 2px 0 #E0E0E8', transform: isActive ? 'translateY(-2px)' : 'none', position: 'relative', animation: `fadeSlideIn 0.3s ease ${index*0.07}s both` }}>
      {selected && (
        <>
          <div style={{ position: 'absolute', inset: -2, border: `2px solid ${accent}`, borderRadius: 9, pointerEvents: 'none', zIndex: 5 }}>
            {['tl','tr','bl','br'].map(pos => <div key={pos} style={{ position:'absolute', width:6, height:6, background:'#fff', border:`1.5px solid ${accent}`, borderRadius:1, top:pos.includes('t')?-3:'auto', bottom:pos.includes('b')?-3:'auto', left:pos.includes('l')?-3:'auto', right:pos.includes('r')?-3:'auto' }} />)}
          </div>
          <div style={{ position: 'absolute', top: -18, left: 0, background: accent, color: '#fff', fontSize: 9, fontFamily: 'JetBrains Mono', fontWeight: 600, padding: '2px 8px', borderRadius: '3px 3px 0 0', zIndex: 10 }}>Frame {post.id} / Selected</div>
        </>
      )}
      {/* Color bar header */}
      <div style={{ height: 80, background: `linear-gradient(135deg, ${accent}20 0%, ${accent}40 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #F0F0F4' }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 8, color: `${accent}80`, textAlign: 'center', lineHeight: 1.8 }}>████████<br/>██████ ████<br/>cover</div>
      </div>
      <div style={{ padding: '12px 14px' }}>
        <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 12, color: '#bbb' }}>{post.id}</span>
        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14, color: '#111', margin: '4px 0 6px', lineHeight: 1.3 }}>{post.title}</h3>
        <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#777', lineHeight: 1.5, marginBottom: 10 }}>{post.excerpt}</p>
        <div style={{ display: 'flex', gap: 5, marginBottom: 8, flexWrap: 'wrap' }}>
          {post.tags.map(t => {
            const [bg, tx] = tagColors[t] || ['#F0F0F0','#555'];
            return <span key={t} style={{ background: bg, color: tx, fontFamily: 'JetBrains Mono', fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 2 }}>{t}</span>;
          })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#bbb' }}>📅 {post.date}</span>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#bbb' }}>⏱ {post.read}</span>
          </div>
          <button style={{ width: 22, height: 22, border: `1px solid ${hov ? accent : '#E0E0E8'}`, borderRadius: 4, background: hov ? accent : '#fff', color: hov ? '#fff' : '#aaa', cursor: 'pointer', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s' }}>↗</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { WritingSection });
