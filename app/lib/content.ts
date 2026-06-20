export type AccentOption = {
  id: string;
  color: string;
  label: string;
};

export const ACCENT_COLORS: AccentOption[] = [
  { id: "blue", color: "#5B6CF9", label: "Blue" },
  { id: "purple", color: "#9747FF", label: "Purple" },
  { id: "pink", color: "#FF2D78", label: "Pink" },
  { id: "orange", color: "#FF6B35", label: "Orange" },
  { id: "lime", color: "#8FCC14", label: "Lime" },
  { id: "black", color: "#111111", label: "Black" },
];

export const SECTION_LABELS = [
  "Hero",
  "Experience",
  "Skills",
  "Projects",
  "Writing",
  "Contact",
] as const;

export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  tags: string[];
  status?: string;
  bullets: string[];
  metrics: { icon: string; val: string; label: string }[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "01",
    title: "Senior UI Designer",
    company: "Linear",
    period: "Mar 2023 → Present",
    location: "San Francisco, CA",
    tags: ["Design Systems", "Product"],
    status: "CURRENT",
    bullets: [
      "Leading product design for core features used by millions of teams worldwide.",
      "Built and scaled the design system, improved UX consistency and shipped 20+ major features.",
    ],
    metrics: [
      { icon: "📈", val: "20+", label: "Major features shipped" },
      { icon: "👥", val: "3M+", label: "Users impacted" },
      { icon: "↑", val: "28%", label: "Increase in activation" },
    ],
  },
  {
    id: "02",
    title: "UI Designer",
    company: "Webflow",
    period: "Aug 2021 – Feb 2023",
    tags: ["Product", "Web"],
    bullets: [
      "Redesigned dashboard experience",
      "Improved design system adoption",
      "Collaborated with engineering team",
    ],
    metrics: [],
  },
  {
    id: "03",
    title: "Product Designer",
    company: "Tally",
    period: "Jan 2020 – Jul 2021",
    tags: ["Product"],
    bullets: [
      "Designed user flows and wireframes",
      "Conducted user research",
      "Shipped landing page redesign",
    ],
    metrics: [],
  },
  {
    id: "04",
    title: "Junior Designer",
    company: "Crazy Egg",
    period: "Jun 2019 – Dec 2019",
    tags: ["Web"],
    bullets: [
      "Created marketing assets",
      "Assisted in UI improvements",
      "Learned and iterated fast",
    ],
    metrics: [],
  },
];

export type SkillItem = {
  id: string;
  name: string;
  level: "EXPERT" | "ADVANCED" | "INTERMEDIATE";
  years: string;
  color: string;
  desc: string;
  category: string;
  usedFor: string[];
  featured: string[];
  dots: number;
};

export const skillsData: SkillItem[] = [
  {
    id: "figma",
    name: "Figma",
    level: "EXPERT",
    years: "4+ yrs",
    color: "#FF7262",
    desc: "Design systems, auto layout, components, variants, variables.",
    category: "Design",
    usedFor: [
      "Design Systems",
      "Wireframing",
      "Prototyping",
      "Components",
      "Auto Layout",
      "Variables",
    ],
    featured: ["Analytics Dashboard", "FinPay App"],
    dots: 5,
  },
  {
    id: "framer",
    name: "Framer",
    level: "EXPERT",
    years: "3+ yrs",
    color: "#0055FF",
    desc: "Interactive prototypes, animations, and production websites.",
    category: "Design",
    usedFor: ["Prototyping", "Animations", "Production Sites"],
    featured: ["Studio Website"],
    dots: 5,
  },
  {
    id: "react",
    name: "React",
    level: "ADVANCED",
    years: "3+ yrs",
    color: "#61DAFB",
    desc: "Building reusable components and scalable interfaces.",
    category: "Frontend",
    usedFor: ["Components", "State Management", "Hooks"],
    featured: ["Analytics Dashboard"],
    dots: 4,
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: "ADVANCED",
    years: "2+ yrs",
    color: "#3178C6",
    desc: "Type-safe development and better developer experience.",
    category: "Frontend",
    usedFor: ["Type Safety", "DX Improvement"],
    featured: [],
    dots: 4,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    level: "ADVANCED",
    years: "3+ yrs",
    color: "#06B6D4",
    desc: "Utility-first styling for rapid, responsive UI development.",
    category: "Frontend",
    usedFor: ["Styling", "Responsive Design"],
    featured: ["Studio Website"],
    dots: 4,
  },
  {
    id: "nextjs",
    name: "Next.js",
    level: "ADVANCED",
    years: "2+ yrs",
    color: "#000000",
    desc: "Server components, routing, and web performance.",
    category: "Frontend",
    usedFor: ["SSR", "Routing", "Performance"],
    featured: [],
    dots: 3,
  },
  {
    id: "adobexd",
    name: "Adobe XD",
    level: "INTERMEDIATE",
    years: "3+ yrs",
    color: "#FF2BC2",
    desc: "Wireframing, prototyping and user experience exploration.",
    category: "Design",
    usedFor: ["Wireframing", "Prototyping"],
    featured: [],
    dots: 3,
  },
  {
    id: "illustrator",
    name: "Illustrator",
    level: "INTERMEDIATE",
    years: "4+ yrs",
    color: "#FF9A00",
    desc: "Vector graphics, illustrations and branding assets.",
    category: "Design",
    usedFor: ["Illustrations", "Branding"],
    featured: ["Vanta Brand Identity"],
    dots: 3,
  },
];

export type ProjectItem = {
  id: string;
  num: string;
  title: string;
  tag: string;
  tagColor: string;
  tagText: string;
  desc: string;
  role: string;
  year: string;
  bg: string;
  accent2: string;
  overview: string;
  responsibilities: string[];
  tools: string[];
  process: { icon: string; title: string; sub: string }[];
  metrics: { val: string; label: string }[];
  quote: string;
  dark?: boolean;
};

export const projects: ProjectItem[] = [
  {
    id: "01",
    num: "01",
    title: "Analytics Dashboard",
    tag: "PRODUCT",
    tagColor: "#E8E3FF",
    tagText: "#6B21A8",
    desc: "A data analytics dashboard that helps teams track KPIs and make informed decisions.",
    role: "Lead Designer",
    year: "2023",
    bg: "#EEF0FF",
    accent2: "#5B6CF9",
    overview:
      "Teams struggled to get real-time insights from scattered data. The goal was to design a dashboard that brings everything together and makes data easy to understand and act on.",
    responsibilities: [
      "User research & interviews",
      "Information architecture",
      "UI/UX design & prototyping",
      "Design system & components",
      "Collaboration with engineering",
    ],
    tools: ["Figma", "Notion", "Maze"],
    process: [
      {
        icon: "🔍",
        title: "Research",
        sub: "User interviews and data analysis",
      },
      {
        icon: "⊞",
        title: "Structure",
        sub: "Information architecture and user flows",
      },
      { icon: "✏️", title: "Design", sub: "Wireframes, UI and prototyping" },
      { icon: "✓", title: "Validate", sub: "Usability testing and iteration" },
    ],
    metrics: [
      { val: "20+", label: "Dashboards created" },
      { val: "15%", label: "Faster decision making" },
      { val: "32%", label: "Increase in data usage" },
    ],
    quote:
      "The new dashboard gave us clarity and confidence in every decision we make. — Product Manager, FinPay",
  },
  {
    id: "02",
    num: "02",
    title: "Mindful – Meditation App",
    tag: "MOBILE",
    tagColor: "#D4F5D4",
    tagText: "#166534",
    desc: "A calming meditation app designed to help users build mindful daily habits.",
    role: "UI/UX Designer",
    year: "2022",
    bg: "#E8F5E9",
    accent2: "#4CAF50",
    overview:
      "Helping busy professionals build a sustainable meditation practice through gentle design, smart reminders, and a calm aesthetic that reduces friction to entry.",
    responsibilities: [
      "User journey mapping",
      "Mobile UI design",
      "Onboarding flow",
      "Icon design",
      "Usability testing",
    ],
    tools: ["Figma", "Principle", "UserTesting"],
    process: [
      { icon: "🔍", title: "Research", sub: "User diary studies and surveys" },
      { icon: "🗺️", title: "Journey Map", sub: "User flows and touch points" },
      { icon: "📱", title: "Design", sub: "Mobile UI and interactions" },
      { icon: "✓", title: "Test", sub: "Usability testing with 20 users" },
    ],
    metrics: [
      { val: "4.8★", label: "App store rating" },
      { val: "60K+", label: "Downloads in 3 months" },
      { val: "72%", label: "Day-7 retention rate" },
    ],
    quote: "The most peaceful app I've ever used. — Beta tester",
  },
  {
    id: "03",
    num: "03",
    title: "Studio – Agency Website",
    tag: "WEB",
    tagColor: "#FEF3C7",
    tagText: "#92400E",
    desc: "A modern website for a design agency to showcase work and attract new clients.",
    role: "UI/UX Designer",
    year: "2022",
    bg: "#FFF8E1",
    accent2: "#F59E0B",
    overview:
      "Redesigning the digital presence of a boutique design studio — making their portfolio feel as premium as their work, with strong editorial layout and smooth interactions.",
    responsibilities: [
      "Brand alignment",
      "Web design",
      "Motion design",
      "CMS integration",
      "Performance optimisation",
    ],
    tools: ["Figma", "Framer", "Webflow"],
    process: [
      { icon: "🎨", title: "Brand Audit", sub: "Visual identity review" },
      { icon: "📐", title: "Layout", sub: "Editorial grid system" },
      { icon: "✨", title: "Motion", sub: "Micro-interactions & transitions" },
      { icon: "🚀", title: "Launch", sub: "Framer build & CMS" },
    ],
    metrics: [
      { val: "2.1s", label: "Load time (was 6.8s)" },
      { val: "3×", label: "Increase in enquiries" },
      { val: "95", label: "Lighthouse score" },
    ],
    quote: "Our new site finally feels like us. — Studio Director",
  },
  {
    id: "04",
    num: "04",
    title: "FinPay – Finance App",
    tag: "MOBILE",
    tagColor: "#FFE4E6",
    tagText: "#9F1239",
    desc: "A finance app that simplifies budgeting, tracking and smart payments.",
    role: "UI Designer",
    year: "2021",
    bg: "#1A1A2E",
    accent2: "#818CF8",
    overview:
      "Fintech with a human face — making personal finance feel approachable and empowering for young professionals who want control without complexity.",
    responsibilities: [
      "Competitive analysis",
      "Dark UI design",
      "Data visualisation",
      "Onboarding design",
      "Icon system",
    ],
    tools: ["Figma", "Lottie", "Zeplin"],
    process: [
      { icon: "🔍", title: "Audit", sub: "Competitor teardown" },
      { icon: "🌙", title: "Dark UI", sub: "Colour system for dark mode" },
      { icon: "📊", title: "Data Viz", sub: "Charts and spending insights" },
      { icon: "✓", title: "Polish", sub: "Micro-animations and transitions" },
    ],
    metrics: [
      { val: "40%", label: "Faster expense logging" },
      { val: "88%", label: "User satisfaction score" },
      { val: "2×", label: "Engagement vs old app" },
    ],
    quote: "I actually check my finances now. — Beta user",
    dark: true,
  },
  {
    id: "05",
    num: "05",
    title: "Origin Coffee – E-commerce",
    tag: "WEB",
    tagColor: "#FFF8F0",
    tagText: "#D97706",
    desc: "An e-commerce experience for a specialty coffee brand.",
    role: "UI/UX Designer",
    year: "2021",
    bg: "#FFF8F0",
    accent2: "#D97706",
    overview:
      "Bringing the warmth and craft of a specialty coffee brand online — a shopping experience that feels as considered as the beans themselves.",
    responsibilities: [
      "E-commerce UX",
      "Product photography art direction",
      "Cart & checkout flow",
      "Brand voice integration",
      "Mobile optimisation",
    ],
    tools: ["Figma", "Shopify", "Notion"],
    process: [
      { icon: "☕", title: "Brand Study", sub: "Tone, voice and values" },
      {
        icon: "📸",
        title: "Art Direction",
        sub: "Photography and visual style",
      },
      { icon: "🛒", title: "Commerce", sub: "PDP and checkout design" },
      { icon: "📱", title: "Mobile", sub: "Responsive optimisation" },
    ],
    metrics: [
      { val: "22%", label: "Conversion rate lift" },
      { val: "35%", label: "Average order value up" },
      { val: "4.9★", label: "Customer satisfaction" },
    ],
    quote: "Sales tripled the week we launched the new site. — Founder",
  },
  {
    id: "06",
    num: "06",
    title: "Vanta – Brand Identity",
    tag: "BRANDING",
    tagColor: "#F3E8FF",
    tagText: "#6B21A8",
    desc: "Brand identity and visual system for a modern tech startup.",
    role: "Brand Designer",
    year: "2020",
    bg: "#F5F5F5",
    accent2: "#111111",
    overview:
      'Building a brand from zero — naming, logo, colour system, typography and brand guidelines for a B2B SaaS startup positioning themselves as the "trust layer" for modern businesses.',
    responsibilities: [
      "Naming & positioning",
      "Logo design",
      "Brand system",
      "Typography selection",
      "Brand guidelines",
    ],
    tools: ["Figma", "Illustrator", "Notion"],
    process: [
      { icon: "🎯", title: "Positioning", sub: "Brand strategy workshop" },
      { icon: "✏️", title: "Logomark", sub: "Concept exploration" },
      { icon: "🎨", title: "System", sub: "Color, type, grid" },
      { icon: "📖", title: "Guidelines", sub: "Brand documentation" },
    ],
    metrics: [
      { val: "3", label: "Weeks to final brand" },
      { val: "12", label: "Logo concepts explored" },
      { val: "100+", label: "Pages brand guidelines" },
    ],
    quote: "The brand perfectly captures who we want to be. — CEO",
  },
];

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  read: string;
  status: "PUBLISHED" | "DRAFT";
  featured: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "01",
    title: "Design Systems at Scale",
    excerpt:
      "How I build design systems that actually scale across teams and products.",
    tags: ["Design Systems", "Process"],
    date: "May 12, 2024",
    read: "6 min read",
    status: "PUBLISHED",
    featured: true,
  },
  {
    id: "02",
    title: "Why UI ≠ UX",
    excerpt:
      "Breaking down the common misconceptions and where both intersect.",
    tags: ["UX", "Mindset"],
    date: "Apr 28, 2024",
    read: "4 min read",
    status: "PUBLISHED",
    featured: false,
  },
  {
    id: "03",
    title: "My Product Design Process",
    excerpt: "A step-by-step look at how I take an idea from 0 → 1.",
    tags: ["Process"],
    date: "Apr 10, 2024",
    read: "7 min read",
    status: "PUBLISHED",
    featured: false,
  },
  {
    id: "04",
    title: "Accessibility is a Feature",
    excerpt: "Coming soon...",
    tags: ["Product"],
    date: "Mar 15, 2024",
    read: "5 min read",
    status: "DRAFT",
    featured: false,
  },
  {
    id: "05",
    title: "Lessons from Shipping 10+ Apps",
    excerpt: "Hard-earned lessons about product, users, teams and shipping.",
    tags: ["Product"],
    date: "Mar 5, 2024",
    read: "5 min read",
    status: "PUBLISHED",
    featured: false,
  },
];

export const blogTags = [
  "All",
  "UX",
  "Design Systems",
  "Frontend",
  "Process",
  "Thoughts",
] as const;

export const tagColors: Record<string, [string, string]> = {
  "Design Systems": ["#E8E3FF", "#6B21A8"],
  Process: ["#D4F5D4", "#166534"],
  UX: ["#FEF3C7", "#92400E"],
  Mindset: ["#FFE4E6", "#9F1239"],
  Product: ["#EEF0FF", "#3730A3"],
};

export const socialLinks = [
  {
    icon: "✉",
    label: "Email",
    value: "akshai.design@gmail.com",
    color: "#EEF0FF",
    border: "#5B6CF9",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "/in/akshai-d",
    color: "#E8F4FD",
    border: "#0077B5",
  },
  {
    icon: "𝕏",
    label: "Twitter",
    value: "@akshai_design",
    color: "#F8F9FA",
    border: "#111111",
  },
  {
    icon: "⊙",
    label: "Dribbble",
    value: "/akshai_d",
    color: "#FFF0F5",
    border: "#EA4C89",
  },
];

export const skillCategories = [
  "All Skills",
  "Design",
  "Frontend",
  "Tools",
  "Systems",
] as const;
