// Tokens.jsx — Design tokens as JS constants
const Tokens = {
  colors: {
    accent: '#0066FF',
    accentHover: '#0052CC',
    accentMuted: 'rgba(0,102,255,0.12)',
    alt1: '#FF3B00',
    alt2: '#00CC66',
    alt3: '#9933FF',
    alt4: '#FF9900',
    surface: '#FFFFFF',
    surface2: '#F5F5F0',
    surface3: '#EBEBEB',
    surfaceInvert: '#0A0A0A',
    textPrimary: '#0A0A0A',
    textSecondary: '#555555',
    textMuted: '#999999',
    textInvert: '#FFFFFF',
    border: '#0A0A0A',
    borderLight: '#DDDDDD',
    stickyYellow: '#FFE566',
    stickyPink: '#FFB3C1',
    stickyBlue: '#B3D9FF',
    stickyGreen: '#B3FFD9',
    success: '#00CC66',
    warning: '#FF9900',
    error: '#FF3B00',
  },
  fonts: {
    sans: "'Space Grotesk', 'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'IBM Plex Mono', monospace",
  },
  shadow: {
    xs: '2px 2px 0px #0A0A0A',
    sm: '4px 4px 0px #0A0A0A',
    md: '6px 6px 0px #0A0A0A',
    lg: '8px 8px 0px #0A0A0A',
    xl: '12px 12px 0px #0A0A0A',
    hover: '10px 10px 0px #0A0A0A',
    selection: '0 0 0 3px rgba(0,102,255,0.25)',
  },
  ease: {
    primary: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    snappy: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

Object.assign(window, { Tokens });
