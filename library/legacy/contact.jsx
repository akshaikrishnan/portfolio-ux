const { useState, useRef } = React;

function ContactSection({ accent, onNav }) {
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    if (!msg.trim()) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  const socials = [
    { icon: '✉', label: 'Email', val: 'akshai.design@gmail.com', color: '#EEF0FF', border: accent },
    { icon: 'in', label: 'LinkedIn', val: '/in/akshai-d', color: '#E8F4FD', border: '#0077B5' },
    { icon: '𝕏', label: 'Twitter', val: '@akshai_design', color: '#F8F9FA', border: '#111' },
    { icon: '⊙', label: 'Dribbble', val: '/akshai_d', color: '#FFF0F5', border: '#EA4C89' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'auto' }}>
      {/* Main canvas area */}
      <div style={{ flex: 1, padding: '36px 40px 30px', display: 'flex', gap: 40 }}>

        {/* Left col */}
        <div style={{ width: 280, flexShrink: 0 }}>
          <SectionBadge label="Section 06" accent={accent} />
          <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 50, lineHeight: 1.05, color: '#111', marginBottom: 16 }}>
            Let's work<br /><span style={{ color: accent }}>together</span><span style={{ color: '#111' }}>.</span>
          </h1>
          <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#666', lineHeight: 1.7, marginBottom: 28, maxWidth: 260 }}>
            Have a project in mind, a question, or just want to say hi?<br />I'd love to hear from you.
          </p>

          {/* About card */}
          <div style={{ background: '#fff', border: '1.5px dashed #D0D0D8', borderRadius: 8, padding: '14px 16px', position: 'relative' }}>
            {/* Pin */}
            <div style={{ position: 'absolute', top: -8, left: 16, width: 12, height: 12, borderRadius: '50%', background: accent, boxShadow: `0 2px 4px ${accent}60` }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff', fontFamily: 'Space Grotesk' }}>A</div>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14, color: '#111' }}>A little about me</span>
              <span style={{ marginLeft: 'auto', fontSize: 14, color: '#bbb' }}>↗</span>
            </div>
            {[
              { icon: '⊙', text: 'Product Designer focused on meaningful products and delightful experiences.' },
              { icon: '📅', text: '4+ years of experience across startups and global teams.' },
              { icon: '⊞', text: 'Design systems enthusiast and problem solver.' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: accent, marginTop: 1, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontFamily: 'Inter', fontSize: 11, color: '#555', lineHeight: 1.5 }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Handwritten annotation */}
          <div style={{ marginTop: 20, fontFamily: 'JetBrains Mono', fontSize: 11, color: '#999', lineHeight: 1.5, fontStyle: 'italic' }}>
            Let's create<br />something awesome!
            <svg style={{ display: 'block', marginTop: 4 }} width="36" height="24" viewBox="0 0 36 24" fill="none" stroke="#bbb" strokeWidth="1.2">
              <path d="M4 4 C12 8, 24 12, 32 20" strokeDasharray="3 2"/>
              <path d="M28 18 L32 20 L30 16"/>
            </svg>
          </div>
        </div>

        {/* Center: Contact form */}
        <div style={{ flex: 1, maxWidth: 520 }}>
          <div style={{ position: 'relative' }}>
            {/* Frame label */}
            <div style={{ position: 'absolute', top: -22, left: 0, background: focused ? accent : '#555', color: '#fff', fontFamily: 'JetBrains Mono', fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: '4px 4px 0 0', transition: 'background 0.2s' }}>
              Contact Frame {focused ? '/ Active' : ''}
            </div>

            {/* Selection handles when focused */}
            {focused && (
              <div style={{ position: 'absolute', inset: -3, border: `2px solid ${accent}`, borderRadius: 12, pointerEvents: 'none', zIndex: 5 }}>
                {['tl','tr','bl','br'].map(p => <div key={p} style={{ position:'absolute', width:8, height:8, background:'#fff', border:`2px solid ${accent}`, borderRadius:1, top:p.includes('t')?-4:'auto', bottom:p.includes('b')?-4:'auto', left:p.includes('l')?-4:'auto', right:p.includes('r')?-4:'auto' }} />)}
              </div>
            )}

            <div style={{ background: '#fff', border: `1.5px solid ${focused ? accent : '#E0E0E8'}`, borderRadius: 10, padding: '24px 28px', boxShadow: focused ? `4px 4px 0 ${accent}30` : '3px 3px 0 #D8D8E0', transition: 'all 0.2s' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', animation: 'fadeSlideIn 0.4s ease' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, color: '#111', marginBottom: 8 }}>Message sent!</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#666' }}>I usually reply within a day. Talk soon!</p>
                  <button onClick={() => { setSent(false); setMsg(''); }} style={{ marginTop: 20, padding: '9px 20px', background: accent, color: '#fff', border: 'none', borderRadius: 6, fontFamily: 'Inter', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Send another</button>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: `${accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✉</div>
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 16, color: '#111' }}>Send me a message 👋</div>
                      <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#888' }}>I usually reply within a day.</div>
                    </div>
                  </div>

                  {/* To row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, padding: '8px 0', borderBottom: '1px solid #F0F0F4' }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#aaa', width: 24 }}>To</span>
                    <div style={{ flex: 1, background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 4, padding: '4px 10px', fontFamily: 'JetBrains Mono', fontSize: 11, color: accent }}>akshai.design@gmail.com</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50' }} />
                      <span style={{ fontFamily: 'Inter', fontSize: 10, color: '#888' }}>Available for work</span>
                    </div>
                  </div>

                  {/* Message area */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#888', marginBottom: 6 }}>Your message</div>
                    <textarea
                      value={msg}
                      onChange={e => setMsg(e.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="Say hi, pitch an idea, or just chat about design..."
                      maxLength={500}
                      rows={5}
                      style={{ width: '100%', padding: '12px 14px', border: `1.5px solid ${focused ? accent : '#E0E0E8'}`, borderRadius: 6, fontFamily: 'Inter', fontSize: 13, color: '#333', resize: 'none', outline: 'none', lineHeight: 1.6, transition: 'border-color 0.2s', background: '#FAFAFA' }}
                    />
                    <div style={{ textAlign: 'right', fontFamily: 'JetBrains Mono', fontSize: 9, color: '#bbb', marginTop: 3 }}>{msg.length} / 500</div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', border: '1.5px solid #E0E0E8', borderRadius: 6, background: '#fff', color: '#555', fontSize: 11, cursor: 'pointer', fontFamily: 'Inter' }}>
                      <span>📎</span> Attach file
                    </button>
                    <span style={{ fontFamily: 'Inter', fontSize: 10, color: '#bbb' }}>PNG, PDF up to 10MB</span>
                    <button onClick={handleSend} disabled={!msg.trim() || sending} style={{ marginLeft: 'auto', padding: '9px 20px', background: msg.trim() ? accent : '#E0E0E8', color: msg.trim() ? '#fff' : '#aaa', border: 'none', borderRadius: 6, fontFamily: 'Inter', fontWeight: 600, fontSize: 12, cursor: msg.trim() ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s', boxShadow: msg.trim() ? `2px 2px 0 ${accent}50` : 'none' }}>
                      {sending ? 'Sending...' : <><span>Send message</span><span style={{ fontSize: 10 }}>↗</span></>}
                    </button>
                  </div>
                </>
              )}
            </div>
            {focused && <div style={{ position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)', background: accent, color: '#fff', fontFamily: 'JetBrains Mono', fontSize: 9, padding: '2px 8px', borderRadius: 2 }}>560 × 420</div>}
          </div>
        </div>

        {/* Right col: socials + sticky */}
        <div style={{ width: 200, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <StickyNote color="#EDE8FF" rotate={3} taped style={{ fontSize: 11, lineHeight: 1.5 }}>
            Looking forward to hearing from you! 😊
          </StickyNote>

          <div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#888', marginBottom: 10 }}>Other ways to connect</div>
            {socials.map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', background: '#fff', border: '1.5px solid #E0E0E8', borderRadius: 7, marginBottom: 8, cursor: 'pointer', transition: 'all 0.15s', boxShadow: '1px 1px 0 #E8E8EE' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.border; e.currentTarget.style.boxShadow = `2px 2px 0 ${s.border}30`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E0E0E8'; e.currentTarget.style.boxShadow = '1px 1px 0 #E8E8EE'; }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontSize: 11, fontWeight: 700, color: s.border, flexShrink: 0 }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: 12, color: '#333' }}>{s.label}</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#aaa' }}>{s.val}</div>
                </div>
                <span style={{ color: '#bbb', fontSize: 12 }}>↗</span>
              </div>
            ))}
          </div>

          <StickyNote color="#C8F135" rotate={-2} pinned style={{ fontSize: 11, lineHeight: 1.5 }}>
            Based in India, working with teams around the world 🌍
          </StickyNote>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#F0EFF5', borderTop: '1.5px solid #E0E0E8', padding: '20px 40px', display: 'flex', alignItems: 'center', gap: 20 }}>
        <div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 18, color: '#111' }}>
            You've reached the <span style={{ color: accent }}>end</span><br />of the <span style={{ color: accent }}>file</span>.
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#888', marginTop: 4 }}>Thanks for scrolling! 👋</div>
        </div>

        {/* Illustration placeholder */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 160, height: 80, background: '#fff', border: '1.5px solid #E0E0E8', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '2px 2px 0 #D8D8E0' }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: '#C8C9D4', textAlign: 'center', lineHeight: 2 }}>Thanks for<br/>stopping by! :)</div>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14, color: '#111' }}>Designed & built by <span style={{ color: accent }}>Akshai</span> ♥</div>
          <div style={{ fontFamily: 'Inter', fontSize: 11, color: '#888', marginTop: 2 }}>Made with care (and a lot of Figma)</div>
          <div style={{ marginTop: 8, background: '#111', color: '#fff', fontFamily: 'JetBrains Mono', fontSize: 9, padding: '4px 10px', borderRadius: 3, display: 'inline-block' }}>© 2025 All rights reserved</div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ContactSection });
