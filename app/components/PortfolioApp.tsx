"use client";

import { useEffect, useState } from "react";
import {
  ACCENT_COLORS,
  SECTION_LABELS,
  experiences,
  skillsData,
  skillCategories,
  projects,
  blogPosts,
  blogTags,
  tagColors,
  socialLinks,
} from "../lib/content";
import {
  FrameLabel,
  SizeLabel,
  SectionBadge,
  PanelCard,
  StickyNote,
  CursorLabels,
  HRuler,
  VRuler,
  GridBackground,
  LeftSidebar,
  TopBar,
  BottomBar,
  SkillCard,
  ProjectCard,
  BlogCard,
} from "./ui";
import type { ProjectItem, BlogPost } from "../lib/content";

const SECTIONS_COUNT = SECTION_LABELS.length;

export default function PortfolioApp() {
  const [section, setSection] = useState(0);
  const [accent, setAccent] = useState(ACCENT_COLORS[0].color);
  const [snap, setSnap] = useState(true);
  const [caseStudy, setCaseStudy] = useState<ProjectItem | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      )
        return;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        goTo(Math.min(section + 1, SECTIONS_COUNT - 1));
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        goTo(Math.max(section - 1, 0));
      }
      if (event.key === "Escape" && caseStudy) {
        setCaseStudy(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [section, caseStudy]);

  const goTo = (index: number) => {
    if (index === section || transitioning) return;
    setTransitioning(true);
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        setSection(index);
        setTransitioning(false);
      }, 180);
    });
  };

  const openCaseStudy = (project: ProjectItem) => {
    setCaseStudy(project);
  };

  const closeCaseStudy = () => setCaseStudy(null);

  const renderSection = () => {
    switch (section) {
      case 0:
        return <HeroSection accent={accent} onNav={goTo} />;
      case 1:
        return <ExperienceSection accent={accent} />;
      case 2:
        return <SkillsSection accent={accent} />;
      case 3:
        return <ProjectsSection accent={accent} onOpenCase={openCaseStudy} />;
      case 4:
        return <WritingSection accent={accent} />;
      case 5:
        return <ContactSection accent={accent} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "var(--surface-2)",
      }}
    >
      <CursorLabels accent={accent} />
      <LeftSidebar section={section} />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <TopBar section={section} onNav={goTo} accent={accent} />
        <div
          style={{
            position: "relative",
            flex: 1,
            display: "flex",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 22,
              right: 0,
              zIndex: 50,
            }}
          >
            <HRuler />
          </div>
          <div
            style={{
              position: "absolute",
              top: 22,
              left: 0,
              bottom: 0,
              zIndex: 50,
            }}
          >
            <VRuler />
          </div>
          <div
            style={{
              position: "absolute",
              top: 22,
              left: 22,
              right: 0,
              bottom: 0,
              overflow: "hidden",
            }}
          >
            <GridBackground snap={snap} />
            <div
              key={section}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 10,
                animation: transitioning
                  ? "none"
                  : "fadeSlideIn 0.28s cubic-bezier(0.2,0.8,0.2,1) both",
              }}
            >
              {renderSection()}
            </div>
          </div>
        </div>
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
      <SectionNavDots section={section} accent={accent} onNav={goTo} />
      {caseStudy && (
        <CaseStudyModal
          project={caseStudy}
          accent={accent}
          onClose={closeCaseStudy}
          onNav={setCaseStudy}
        />
      )}
    </div>
  );
}

function SectionNavDots({
  section,
  accent,
  onNav,
}: {
  section: number;
  accent: string;
  onNav: (index: number) => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        right: 18,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 300,
      }}
    >
      {SECTION_LABELS.map((name, index) => (
        <button
          key={name}
          type="button"
          onClick={() => onNav(index)}
          style={{
            width: section === index ? 10 : 8,
            height: section === index ? 10 : 8,
            borderRadius: "50%",
            background: section === index ? accent : "#C8C9D4",
            border: section === index ? `2px solid ${accent}40` : "none",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        />
      ))}
    </div>
  );
}

function HeroSection({
  accent,
  onNav,
}: {
  accent: string;
  onNav: (index: number) => void;
}) {
  const [panel, setPanel] = useState<"inspect" | "design">("inspect");
  const [heroAccent, setHeroAccent] = useState(accent);

  useEffect(() => {
    setHeroAccent(accent);
  }, [accent]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "auto",
        padding: "42px 56px 60px",
      }}
    >
      <FrameLabel label="Frame 01" accent={accent} />
      <div style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>
        <div style={{ width: "640px", minWidth: 0 }}>
          <div
            style={{
              position: "relative",
              background: "#fff",
              border: "1.5px solid #E0E0E8",
              borderRadius: 14,
              padding: "36px 40px 44px",
              boxShadow: "4px 4px 0 #D0D0DC",
            }}
          >
            <h1
              style={{
                fontFamily: "Space Grotesk",
                fontSize: 68,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.06em",
                color: "#111",
                marginBottom: 28,
              }}
            >
              I design
              <br />
              interfaces
              <br />
              <span
                style={{
                  background: heroAccent,
                  padding: "0 8px",
                  borderRadius: 4,
                }}
              >
                people
              </span>{" "}
              love<span style={{ color: heroAccent }}>.</span>
            </h1>
            <p
              style={{
                fontFamily: "Inter",
                color: "#555",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 470,
                marginBottom: 30,
              }}
            >
              Hey! I’m Akshai, a UI designer who loves turning complex problems
              into clean, intuitive and impactful designs.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => onNav(3)}
                style={{
                  padding: "14px 24px",
                  borderRadius: 10,
                  border: "none",
                  background: heroAccent,
                  color: "#fff",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: `3px 3px 0 ${heroAccent}88`,
                }}
              >
                View my work ↗
              </button>
              <button
                type="button"
                onClick={() => onNav(5)}
                style={{
                  padding: "14px 24px",
                  borderRadius: 10,
                  border: "1.5px solid #111",
                  background: "#fff",
                  color: "#111",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "3px 3px 0 #111",
                }}
              >
                Let’s talk ○
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 238,
            background: "#fff",
            border: "1.5px solid #E0E0E8",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "3px 3px 0 #D0D0DC",
          }}
        >
          <div style={{ display: "flex", borderBottom: "1px solid #eee" }}>
            {["Design", "Inspect"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() =>
                  setPanel(tab.toLowerCase() as "design" | "inspect")
                }
                style={{
                  flex: 1,
                  padding: "12px 10px",
                  border: "none",
                  background: panel === tab.toLowerCase() ? "#fff" : "#F8F8FC",
                  color: panel === tab.toLowerCase() ? "#111" : "#888",
                  fontWeight: 700,
                  cursor: "pointer",
                  borderBottom:
                    panel === tab.toLowerCase()
                      ? `2px solid ${accent}`
                      : "2px solid transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div style={{ padding: 16 }}>
            {panel === "inspect" ? (
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                  lineHeight: 1.6,
                  color: "#444",
                }}
              >
                <div
                  style={{
                    background: "#1E1E1E",
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 14,
                    color: "#ccc",
                  }}
                >
                  <div style={{ color: "#7EC8A4" }}>
                    &lt;<span style={{ color: "#6CBDE8" }}>div</span>{" "}
                    <span style={{ color: "#C8A86C" }}>class</span>=
                    <span style={{ color: "#C87C6C" }}>'hero-heading'</span>&gt;
                  </div>
                  <div style={{ paddingLeft: 16 }}>I design interfaces</div>
                  <div style={{ paddingLeft: 16 }}>
                    &lt;<span style={{ color: "#6CBDE8" }}>span</span>&gt;
                    <span style={{ color: "#CCC" }}>people</span>&lt;/
                    <span style={{ color: "#6CBDE8" }}>span</span>&gt;
                    <span style={{ color: "#CCC" }}> love</span>
                  </div>
                  <div style={{ color: "#7EC8A4" }}>
                    &lt;/<span style={{ color: "#6CBDE8" }}>div</span>&gt;
                  </div>
                </div>
                <div>
                  <div style={{ color: "#888", marginBottom: 8 }}>
                    Accent Color:
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {ACCENT_COLORS.slice(0, 5).map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setHeroAccent(item.color)}
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: item.color,
                          border:
                            heroAccent === item.color
                              ? "2px solid #fff"
                              : "2px solid transparent",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                  color: "#444",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 12,
                    fontSize: 10,
                    borderBottom: "1px solid #eee",
                    paddingBottom: 10,
                  }}
                >
                  {["⊞", "↑", "↓", "→", "←", "⊡", "—", "|"].map((glyph) => (
                    <span key={glyph} style={{ color: "#888" }}>
                      {glyph}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {["X", "120", "Y", "96", "W", "600", "H", "420"].map(
                    (cell) => (
                      <div
                        key={cell}
                        style={{
                          background: "#F5F5F8",
                          borderRadius: 6,
                          padding: "8px 6px",
                          fontSize: 10,
                          color: "#555",
                          textAlign: "center",
                        }}
                      >
                        {cell}
                      </div>
                    ),
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    style={{ accentColor: accent }}
                  />
                  <span style={{ color: "#555" }}>Clip content</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 260,
          top: 190,
          transform: "rotate(6deg)",
          background: "#fff",
          border: "1.5px solid #DDD",
          borderRadius: 14,
          padding: 18,
          boxShadow: "4px 4px 0 #D0D0D8",
          maxWidth: 210,
        }}
      >
        <div
          style={{
            fontFamily: "Space Grotesk",
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 6,
          }}
        >
          UI Designer
        </div>
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 11,
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          Crafting{" "}
          <span style={{ color: accent, fontStyle: "italic" }}>delightful</span>{" "}
          digital experiences
        </div>
        <button
          type="button"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "none",
            background: "transparent",
            fontSize: 14,
            color: "#999",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          left: 82,
          top: 348,
          fontFamily: "JetBrains Mono",
          fontSize: 11,
          color: "#888",
          lineHeight: 1.4,
        }}
      >
        Auto layout
        <br />
        makes life
        <br />
        easier
      </div>
      <div style={{ marginTop: 26, marginLeft: 4 }}>
        <SizeLabel w="600" h="420" accent={accent} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: 56,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: "#888" }}
        >
          Accent Color:
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {ACCENT_COLORS.map((item) => (
            <button
              key={item.id}
              type="button"
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: item.color,
                border:
                  heroAccent === item.color
                    ? "2.5px solid #333"
                    : "2px solid #ccc",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", right: 72, bottom: 90 }}>
        <StickyNote color="#E8E3FF" rotate={3} taped>
          "Design is not just what it looks like — it's how it works."
        </StickyNote>
      </div>
    </div>
  );
}

function ExperienceSection({ accent }: { accent: string }) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number[]>([0]);
  const experience = experiences[active];

  const toggle = (index: number) => {
    setActive(index);
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        overflow: "hidden",
        padding: "36px 40px",
        gap: 28,
      }}
    >
      <div
        style={{
          width: 240,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div>
          <SectionBadge label="Section 02" accent={accent} />
          <h2
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 52,
              fontWeight: 700,
              marginBottom: 12,
              lineHeight: 1,
            }}
          >
            Experience
          </h2>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: 13,
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            A timeline of places I've worked, problems I've solved, and impact
            I've made.
          </p>
        </div>
        <PanelCard title="LAYERS">
          {experiences.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => toggle(index)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 8px",
                borderRadius: 8,
                background: active === index ? `${accent}15` : "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: active === index ? accent : "#ccc",
                }}
              />
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: 12,
                  color: active === index ? "#111" : "#666",
                  fontWeight: active === index ? 700 : 500,
                }}
              >
                Experience {item.id}
              </span>
            </button>
          ))}
        </PanelCard>
        <StickyNote color="#C8F135" rotate={-1} taped>
          Every role shaped how I design today. :)
        </StickyNote>
      </div>
      <div
        style={{
          width: 240,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 60,
        }}
      >
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 10,
            color: "#aaa",
            marginBottom: 10,
          }}
        >
          scroll to explore ↓
        </div>
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            border: `3px solid ${accent}`,
            background: "#fff",
          }}
        />
        <div
          style={{
            width: 2,
            flex: 1,
            background: "#ddd",
            minHeight: 40,
            margin: "12px 0",
          }}
        />
        <div
          style={{
            width: 220,
            background: "#C8F135",
            borderRadius: 14,
            padding: 20,
            boxShadow: "4px 4px 0 rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 14,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.1)",
              color: "#333",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
          >
            ×
          </div>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            {experience.company}
          </div>
          <div
            style={{
              background: "#111",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 8,
              padding: "6px 10px",
              fontFamily: "Space Grotesk",
              fontSize: 12,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            {experience.title}
          </div>
          <div
            style={{
              borderTop: "1px dashed rgba(0,0,0,0.18)",
              paddingTop: 14,
              display: "grid",
              gap: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                fontFamily: "JetBrains Mono",
                fontSize: 11,
              }}
            >
              <span>📅</span>
              {experience.period}
            </div>
            {experience.location && (
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                }}
              >
                <span>📍</span>
                {experience.location}
              </div>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#00000010",
                    color: "#333",
                    fontSize: 10,
                    fontFamily: "JetBrains Mono",
                    padding: "4px 8px",
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: 12,
              fontFamily: "JetBrains Mono",
              fontSize: 22,
              color: "rgba(0,0,0,0.35)",
              textAlign: "right",
            }}
          >
            ~~~
          </div>
        </div>
        <div
          style={{
            marginTop: 12,
            fontFamily: "JetBrains Mono",
            fontSize: 10,
            color: "#aaa",
            textAlign: "center",
            maxWidth: 180,
          }}
        >
          This card sticks while you scroll
        </div>
      </div>
      <div
        style={{
          flex: 1,
          overflow: "auto",
          paddingRight: 8,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {experiences.map((item, index) => {
          const expandedItem = expanded.includes(index);
          return (
            <div
              key={item.id}
              style={{
                position: "relative",
                marginBottom: 16,
                display: "flex",
                animation: "fadeSlideIn 0.4s ease both",
                animationDelay: `${index * 0.06}s`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: -36,
                  top: 22,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: `2px solid ${active === index ? accent : "#ccc"}`,
                    background: active === index ? accent : "#fff",
                    transition: "all 0.2s",
                  }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  style={{
                    width: "100%",
                    background: "#fff",
                    borderRadius: 16,
                    padding: 20,
                    textAlign: "left",
                    cursor: "pointer",
                    boxShadow:
                      active === index
                        ? `3px 3px 0 ${accent}25`
                        : "2px 2px 0 #D8D8E0",
                    border: `1.5px solid ${active === index ? accent : "#E0E0E8"}`,
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 18,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: 42,
                          minWidth: 42,
                          height: 42,
                          borderRadius: 12,
                          background:
                            active === index ? `${accent}15` : "#F5F5F8",
                          display: "grid",
                          placeItems: "center",
                          fontFamily: "JetBrains Mono",
                          fontWeight: 700,
                          fontSize: 14,
                          color: active === index ? accent : "#888",
                        }}
                      >
                        {item.id}
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "Space Grotesk",
                            fontSize: 20,
                            fontWeight: 700,
                            color: "#111",
                          }}
                        >
                          {item.title}
                        </div>
                        <div
                          style={{
                            fontFamily: "Inter",
                            fontSize: 12,
                            color: "#888",
                            marginTop: 4,
                          }}
                        >
                          {item.company}
                        </div>
                        <div
                          style={{
                            fontFamily: "JetBrains Mono",
                            fontSize: 10,
                            color: "#aaa",
                            marginTop: 6,
                          }}
                        >
                          {item.period}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      {item.status && (
                        <span
                          style={{
                            background: "#D4F5D4",
                            color: "#2E7D32",
                            fontFamily: "JetBrains Mono",
                            fontSize: 10,
                            fontWeight: 700,
                            padding: "4px 10px",
                            borderRadius: 999,
                          }}
                        >
                          {item.status}
                        </span>
                      )}
                      <div
                        style={{
                          width: 26,
                          height: 26,
                          borderRadius: "50%",
                          border: "1.5px solid #ddd",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 16,
                          color: "#aaa",
                        }}
                      >
                        {expandedItem ? "−" : "+"}
                      </div>
                    </div>
                  </div>
                </button>
                {expandedItem && (
                  <div
                    style={{
                      marginTop: 12,
                      padding: "18px 20px",
                      background: "#FAFAFA",
                      borderRadius: 14,
                      border: "1px solid #E8E8F0",
                      animation: "fadeSlideIn 0.25s ease both",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontSize: 13,
                        color: "#555",
                        lineHeight: 1.7,
                        marginBottom: item.metrics.length ? 16 : 0,
                      }}
                    >
                      {item.bullets[0]}
                    </p>
                    {item.bullets.length > 1 && (
                      <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
                        {item.bullets.slice(1).map((bullet) => (
                          <li
                            key={bullet}
                            style={{
                              fontFamily: "Inter",
                              fontSize: 12,
                              color: "#666",
                              lineHeight: 1.7,
                              marginBottom: 6,
                            }}
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.metrics.length > 0 && (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                          gap: 12,
                        }}
                      >
                        {item.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            style={{
                              background: "#fff",
                              border: "1px solid #EBEBF2",
                              borderRadius: 12,
                              padding: 14,
                            }}
                          >
                            <div
                              style={{
                                fontFamily: "Space Grotesk",
                                fontSize: 22,
                                fontWeight: 700,
                                color: "#111",
                              }}
                            >
                              {metric.val}
                            </div>
                            <div
                              style={{
                                fontFamily: "Inter",
                                fontSize: 10,
                                color: "#888",
                                marginTop: 4,
                              }}
                            >
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SkillsSection({ accent }: { accent: string }) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof skillCategories)[number]>("All Skills");
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
  const [view, setView] = useState<"grid" | "list">("grid");
  const filtered =
    activeCategory === "All Skills"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      <div
        style={{
          width: 220,
          flexShrink: 0,
          padding: "36px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          borderRight: "1px solid #E0E0E8",
          background: "#FAFAFA",
        }}
      >
        <div>
          <SectionBadge label="Section 04" accent={accent} />
          <h2
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 44,
              fontWeight: 700,
              color: "#111",
              lineHeight: 1,
              marginBottom: 10,
            }}
          >
            Skills<span style={{ color: accent }}>.</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: 12,
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            The tools, technologies and craft I use to turn ideas into
            meaningful experiences.
          </p>
        </div>
        <PanelCard title="ASSETS">
          {skillCategories.map((category) => {
            const count =
              category === "All Skills"
                ? skillsData.length
                : skillsData.filter((skill) => skill.category === category)
                    .length;
            if (!count) return null;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 8px",
                  borderRadius: 8,
                  background:
                    activeCategory === category ? `${accent}15` : "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: activeCategory === category ? "#111" : "#666",
                  fontFamily: "Inter",
                  fontSize: 12,
                  marginBottom: 6,
                }}
              >
                <span>{category}</span>
                <span
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 10,
                    color: "#aaa",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </PanelCard>
        <StickyNote color="#E8E3FF" rotate={2} pinned>
          ⭐ These are my
          <br />
          superpowers
        </StickyNote>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "36px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 11,
              color: "#888",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ color: accent }}>✦</span> Canvas / Skills Library
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                display: "flex",
                background: "#fff",
                border: "1px solid #E0E0E8",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => setView("grid")}
                style={{
                  border: "none",
                  background: view === "grid" ? accent : "transparent",
                  color: view === "grid" ? "#fff" : "#666",
                  padding: "10px 16px",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                ⊞ Grid
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                style={{
                  border: "none",
                  background: view === "list" ? accent : "transparent",
                  color: view === "list" ? "#fff" : "#666",
                  padding: "10px 16px",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                ☰ List
              </button>
            </div>
            <select
              value="Most Used"
              style={{
                border: "1px solid #E0E0E8",
                borderRadius: 10,
                padding: "10px 12px",
                fontSize: 11,
                fontFamily: "Inter",
                color: "#555",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              <option>Most Used</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>
        <div
          style={{
            border: "1.5px dashed #C8C9D4",
            borderRadius: 16,
            padding: 20,
            background: "rgba(255,255,255,0.85)",
          }}
        >
          <div
            style={{
              display: view === "grid" ? "grid" : "flex",
              gridTemplateColumns:
                view === "grid" ? "repeat(4, minmax(0, 1fr))" : "none",
              gap: 14,
              flexDirection: view === "list" ? "column" : "row",
            }}
          >
            {filtered.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                accent={accent}
                selected={selectedSkill.id === skill.id}
                onSelect={() => setSelectedSkill(skill)}
                view={view}
                index={index}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: 24,
            background: "#111",
            borderRadius: 14,
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 18,
          }}
        >
          {[
            {
              icon: "⊞",
              title: "Design Systems",
              subtitle:
                "Scalable systems that bring consistency and speed to teams.",
            },
            {
              icon: "⊙",
              title: "Interaction Design",
              subtitle:
                "Creating intuitive, delightful interactions that solve real user problems.",
            },
            {
              icon: "👤",
              title: "User Research",
              subtitle:
                "Understanding users deeply to design experiences that truly matter.",
            },
            {
              icon: "♿",
              title: "Accessibility",
              subtitle:
                "Building inclusive products that are usable by everyone.",
            },
          ].map((item) => (
            <div key={item.title} style={{ color: "#fff" }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{item.icon}</div>
              <div
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 14,
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontSize: 11,
                  color: "#ddd",
                  lineHeight: 1.6,
                }}
              >
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: 240,
          flexShrink: 0,
          borderLeft: "1px solid #E0E0E8",
          background: "#fff",
          padding: 18,
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            {selectedSkill.name}
          </div>
          <button
            type="button"
            onClick={() => setSelectedSkill(skillsData[0])}
            style={{
              border: "none",
              background: "transparent",
              color: "#aaa",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            ×
          </button>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 10,
              color: "#aaa",
              marginBottom: 6,
            }}
          >
            Level
          </div>
          <span
            style={{
              background:
                selectedSkill.level === "EXPERT"
                  ? "#D4E8FF"
                  : selectedSkill.level === "ADVANCED"
                    ? "#D4F0E0"
                    : "#FFF3D4",
              color:
                selectedSkill.level === "EXPERT"
                  ? "#0A5C9E"
                  : selectedSkill.level === "ADVANCED"
                    ? "#1A6B3C"
                    : "#8B5E00",
              fontFamily: "JetBrains Mono",
              fontSize: 10,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            {selectedSkill.level}
          </span>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 10,
              color: "#aaa",
              marginBottom: 6,
            }}
          >
            Years of experience
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 12, color: "#333" }}>
            {selectedSkill.years}
          </div>
        </div>
        <div style={{ marginBottom: 14 }}>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 10,
              color: "#aaa",
              marginBottom: 6,
            }}
          >
            I use it for
          </div>
          {selectedSkill.usedFor.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: accent,
                  display: "inline-block",
                }}
              />
              <span
                style={{ fontFamily: "Inter", fontSize: 11, color: "#444" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        {selectedSkill.featured.length > 0 && (
          <div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 10,
                color: "#aaa",
                marginBottom: 10,
              }}
            >
              Featured in
            </div>
            {selectedSkill.featured.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#F8F8FC",
                  border: "1px solid #EEEEF4",
                  borderRadius: 10,
                  padding: "10px 12px",
                  marginBottom: 8,
                  fontFamily: "Inter",
                  fontSize: 11,
                  color: "#444",
                }}
              >
                <span>{item}</span>
                <span style={{ color: accent }}>↗</span>
              </div>
            ))}
            <button
              type="button"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 10,
                border: `1px solid ${accent}`,
                background: "transparent",
                color: accent,
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              View projects using this ↗
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectsSection({
  accent,
  onOpenCase,
}: {
  accent: string;
  onOpenCase: (project: ProjectItem) => void;
}) {
  const [filter, setFilter] = useState<
    "All" | "Product" | "Web" | "Mobile" | "Branding"
  >("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [hovered, setHovered] = useState<string | null>(null);
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tag === filter.toUpperCase());

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      <div
        style={{
          width: 220,
          flexShrink: 0,
          padding: "36px 20px 20px",
          borderRight: "1px solid #E0E0E8",
          background: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div>
          <SectionBadge label="Section 03" accent={accent} />
          <h2
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#111",
            }}
          >
            Projects <span style={{ color: accent }}>/</span>
            <br />
            Case Studies
          </h2>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: 11,
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            A selection of projects where strategy, design and technology come
            together.
          </p>
        </div>
        <PanelCard title="LAYERS">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onOpenCase(project)}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 8px",
                borderRadius: 8,
                background:
                  hovered === project.id ? `${accent}10` : "transparent",
                border: "none",
                cursor: "pointer",
                color: "#666",
                fontFamily: "Inter",
                fontSize: 12,
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: hovered === project.id ? accent : "#ccc",
                }}
              />
              <span>Project {project.id}</span>
            </button>
          ))}
        </PanelCard>
        <StickyNote color="#C8F135" rotate={3} pinned>
          Click any card to see the full case study →
        </StickyNote>
      </div>
      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "36px 32px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 24,
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 11,
                color: "#888",
              }}
            >
              Filter by:
            </span>
            {(["All", "Product", "Web", "Mobile", "Branding"] as const).map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: `1.5px solid ${filter === option ? accent : "#E0E0E8"}`,
                    background: filter === option ? accent : "#fff",
                    color: filter === option ? "#fff" : "#666",
                    cursor: "pointer",
                    fontFamily: "Inter",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {option}
                </button>
              ),
            )}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                background: "#fff",
                border: "1px solid #E0E0E8",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => setView("grid")}
                style={{
                  width: 42,
                  height: 38,
                  border: "none",
                  background: view === "grid" ? accent : "transparent",
                  color: view === "grid" ? "#fff" : "#888",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                ⊞
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                style={{
                  width: 42,
                  height: 38,
                  border: "none",
                  background: view === "list" ? accent : "transparent",
                  color: view === "list" ? "#fff" : "#888",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
        <StickyNote
          color="#E8E3FF"
          rotate={-3}
          pinned
          style={{ position: "absolute", top: 60, right: 110, width: 196 }}
        >
          Each project is a problem I was excited to solve :)
        </StickyNote>
        <div
          style={{
            display: view === "grid" ? "grid" : "flex",
            gridTemplateColumns:
              view === "grid" ? "repeat(3, minmax(0, 1fr))" : "none",
            gap: 18,
            flexDirection: "column",
            marginTop: 24,
          }}
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              accent={accent}
              onOpen={() => onOpenCase(project)}
              view={view}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseStudyModal({
  project,
  accent,
  onClose,
  onNav,
}: {
  project: ProjectItem;
  accent: string;
  onClose: () => void;
  onNav: (project: ProjectItem) => void;
}) {
  const [tab, setTab] = useState<
    "Overview" | "Problem" | "Solution" | "Process" | "Impact"
  >("Overview");
  const currentIndex = projects.findIndex((item) => item.id === project.id);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "#ECEDF0",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        animation: "frameExpand 0.35s cubic-bezier(0.2,0.8,0.2,1) both",
      }}
    >
      <div
        style={{
          height: 54,
          background: "#1E1E1E",
          borderBottom: "1px solid #2c2c2c",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          gap: 12,
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            color: "#ccc",
            background: "transparent",
            border: "1px solid #3a3a3a",
            borderRadius: 10,
            padding: "9px 14px",
            cursor: "pointer",
          }}
        >
          ← Back to projects
        </button>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#5B6CF9",
              display: "grid",
              placeItems: "center",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <button
            type="button"
            style={{
              background: accent,
              border: "none",
              borderRadius: 10,
              color: "#fff",
              padding: "10px 16px",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Let’s talk ↗
          </button>
          <button
            type="button"
            style={{
              background: "transparent",
              border: "1px solid #3a3a3a",
              borderRadius: 10,
              color: "#aaa",
              padding: "10px 14px",
              cursor: "pointer",
            }}
          >
            ↓
          </button>
        </div>
      </div>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{ flex: 1, overflow: "auto", padding: "32px 40px" }}>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 11,
              color: accent,
              marginBottom: 10,
              fontWeight: 700,
            }}
          >
            Frame {project.num} / Selected
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              background: "#fff",
              border: `1.5px solid ${accent}20`,
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: `4px 4px 0 ${accent}20`,
            }}
          >
            <div style={{ flex: 1, padding: "28px 32px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    background: `${accent}15`,
                    borderRadius: 14,
                    padding: "10px 14px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "JetBrains Mono",
                      fontSize: 30,
                      fontWeight: 700,
                      color: accent,
                    }}
                  >
                    {project.num}
                  </div>
                </div>
                <div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: project.tagColor,
                      color: project.tagText,
                      borderRadius: 999,
                      fontFamily: "JetBrains Mono",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "4px 10px",
                      marginBottom: 8,
                    }}
                  >
                    {project.tag}
                  </span>
                  <h2
                    style={{
                      fontFamily: "Space Grotesk",
                      fontSize: 30,
                      fontWeight: 700,
                      color: "#111",
                      lineHeight: 1.08,
                      marginBottom: 14,
                    }}
                  >
                    {project.title}
                  </h2>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}
              >
                {project.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 20,
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                  color: "#444",
                }}
              >
                <div>
                  <span style={{ color: "#888" }}>Role</span>
                  <div>{project.role}</div>
                </div>
                <div>
                  <span style={{ color: "#888" }}>Year</span>
                  <div>{project.year}</div>
                </div>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: accent,
                    fontFamily: "Inter",
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  Visit live site ↗
                </a>
              </div>
            </div>
            <div
              style={{
                width: 300,
                background: project.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 26,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 150,
                  background: project.dark ? "#252540" : "#fff",
                  borderRadius: 20,
                  border: "1px solid rgba(0,0,0,0.08)",
                  display: "grid",
                  placeItems: "center",
                  color: project.dark ? "#999" : "#AAA",
                  fontFamily: "JetBrains Mono",
                  fontSize: 10,
                  lineHeight: 1.5,
                }}
              >
                Dashboard preview
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 24,
              marginBottom: 24,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {(
              ["Overview", "Problem", "Solution", "Process", "Impact"] as const
            ).map((sectionTab) => (
              <button
                key={sectionTab}
                type="button"
                onClick={() => setTab(sectionTab)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: `1.5px solid ${tab === sectionTab ? accent : "#E0E0E8"}`,
                  background: tab === sectionTab ? accent : "#fff",
                  color: tab === sectionTab ? "#fff" : "#666",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {sectionTab}
              </button>
            ))}
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #E0E0E8",
                borderRadius: 18,
                padding: 24,
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: 13,
                  color: "#555",
                  lineHeight: 1.8,
                  marginBottom: 18,
                }}
              >
                {project.overview}
              </p>
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 10,
                  color: accent,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                MY RESPONSIBILITIES
              </div>
              {project.responsibilities.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: accent,
                    }}
                  />
                  <span
                    style={{ fontFamily: "Inter", fontSize: 12, color: "#444" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  background: "#fff",
                  border: "1.5px solid #E0E0E8",
                  borderRadius: 18,
                  padding: 22,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: "JetBrains Mono",
                    fontSize: 10,
                    color: "#aaa",
                    marginBottom: 12,
                  }}
                >
                  THE PROCESS
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {project.process.map((step) => (
                    <div
                      key={step.title}
                      style={{ minWidth: 0, flex: 1, textAlign: "center" }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          margin: "0 auto 10px",
                          borderRadius: 14,
                          background: `${accent}15`,
                          display: "grid",
                          placeItems: "center",
                          fontSize: 18,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter",
                          fontWeight: 700,
                          fontSize: 12,
                          color: "#333",
                        }}
                      >
                        {step.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter",
                          fontSize: 10,
                          color: "#888",
                          marginTop: 4,
                        }}
                      >
                        {step.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    style={{
                      background: "#fff",
                      border: "1.5px solid #E0E0E8",
                      borderRadius: 18,
                      padding: 16,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "Space Grotesk",
                        fontSize: 22,
                        fontWeight: 700,
                        color: accent,
                      }}
                    >
                      {metric.val}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter",
                        fontSize: 10,
                        color: "#888",
                        marginTop: 6,
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: `${accent}10`,
                  border: `1px solid ${accent}30`,
                  borderRadius: 18,
                  padding: 18,
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter",
                    fontSize: 12,
                    color: "#555",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  {project.quote}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: 18,
                  flexWrap: "wrap",
                }}
              >
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      background: "#F0F0F4",
                      borderRadius: 999,
                      padding: "6px 10px",
                      fontFamily: "JetBrains Mono",
                      fontSize: 10,
                      color: "#555",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 100,
            background: "#1E1E1E",
            borderTop: "1px solid #2c2c2c",
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            gap: 10,
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginRight: 10,
            }}
          >
            <button
              type="button"
              onClick={() =>
                currentIndex > 0 && onNav(projects[currentIndex - 1])
              }
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                border: "1px solid #3a3a3a",
                background: "#2a2a2a",
                color: "#888",
                cursor: currentIndex > 0 ? "pointer" : "not-allowed",
              }}
            >
              ←
            </button>
            <span
              style={{
                color: "#888",
                fontFamily: "JetBrains Mono",
                fontSize: 11,
              }}
            >
              {project.num} / {projects.length}
            </span>
          </div>
          {projects.map((projectItem) => (
            <button
              key={projectItem.id}
              type="button"
              onClick={() => onNav(projectItem)}
              style={{
                minWidth: 100,
                height: 72,
                borderRadius: 14,
                border: `2px solid ${projectItem.id === project.id ? accent : "#3a3a3a"}`,
                background: projectItem.bg,
                color: "#111",
                padding: 12,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                {projectItem.num}
              </span>
              <span
                style={{
                  fontFamily: "Inter",
                  fontSize: 11,
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {projectItem.title}
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={() =>
              currentIndex < projects.length - 1 &&
              onNav(projects[currentIndex + 1])
            }
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              border: "1px solid #3a3a3a",
              background: "#2a2a2a",
              color: "#888",
              cursor:
                currentIndex < projects.length - 1 ? "pointer" : "not-allowed",
            }}
          >
            →
          </button>
        </div>
      </div>
      <div
        style={{
          width: 240,
          flexShrink: 0,
          borderLeft: "1px solid #E0E0E8",
          background: "#fff",
          padding: 18,
          overflow: "auto",
        }}
      >
        <StickyNote color="#EDE8FF" rotate={2} taped>
          Detail matters.
          <br />
          Clarity wins.
        </StickyNote>
        <div
          style={{
            background: "#F8F8FC",
            border: "1px solid #EEEEF4",
            borderRadius: 18,
            padding: 16,
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 10,
              color: "#aaa",
              marginBottom: 10,
            }}
          >
            ON THIS PAGE
          </div>
          {(
            ["Overview", "Problem", "Solution", "Process", "Impact"] as const
          ).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 14,
                border: "none",
                background: tab === item ? "#fff" : "transparent",
                color: tab === item ? "#111" : "#888",
                fontFamily: "Inter",
                fontSize: 12,
                textAlign: "left",
                cursor: "pointer",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: tab === item ? accent : "#ddd",
                }}
              />
              <span>{item}</span>
            </button>
          ))}
          <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
            <button
              type="button"
              onClick={() =>
                currentIndex > 0 && onNav(projects[currentIndex - 1])
              }
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: 12,
                border: `1px solid ${currentIndex === 0 ? "#E0E0E8" : "#888"}`,
                background: currentIndex === 0 ? "#F8F8FC" : "#fff",
                color: currentIndex === 0 ? "#ccc" : "#555",
                cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              }}
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() =>
                currentIndex < projects.length - 1 &&
                onNav(projects[currentIndex + 1])
              }
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: 12,
                border: `1px solid ${currentIndex === projects.length - 1 ? "#E0E0E8" : "#888"}`,
                background:
                  currentIndex === projects.length - 1 ? "#F8F8FC" : "#fff",
                color: currentIndex === projects.length - 1 ? "#ccc" : "#555",
                cursor:
                  currentIndex === projects.length - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              ↓
            </button>
          </div>
          <div
            style={{
              marginTop: 10,
              fontFamily: "JetBrains Mono",
              fontSize: 9,
              color: "#aaa",
              lineHeight: 1.5,
            }}
          >
            Quick nav between sections
          </div>
        </div>
      </div>
    </div>
  );
}

function WritingSection({ accent }: { accent: string }) {
  const [filter, setFilter] = useState<(typeof blogTags)[number]>("All");
  const [selected, setSelected] = useState<BlogPost>(blogPosts[0]);
  const filtered =
    filter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(filter));

  return (
    <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
      <div
        style={{
          width: 210,
          flexShrink: 0,
          borderRight: "1px solid #E0E0E8",
          background: "#FAFAFA",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "36px 20px 16px" }}>
          <SectionBadge label="Section 05" accent={accent} />
          <h2
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 44,
              fontWeight: 700,
              color: "#111",
              lineHeight: 1,
              marginBottom: 10,
            }}
          >
            Writing<span style={{ color: accent }}>.</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: 11,
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            Thoughts, ideas and lessons from my design journey.
          </p>
        </div>
        <div
          style={{ borderTop: "1px solid #E0E0E8", padding: "10px 20px 12px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 10,
                fontWeight: 700,
                color: "#444",
              }}
            >
              DRAFTS
            </span>
            <span style={{ color: "#888", fontSize: 12 }}>⊞</span>
          </div>
          <div style={{ display: "grid", gap: 8, padding: "0 10px" }}>
            {blogPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setSelected(post)}
                style={{
                  width: "100%",
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  padding: "10px 8px",
                  borderRadius: 10,
                  background:
                    selected.id === post.id ? `${accent}15` : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: post.status === "PUBLISHED" ? accent : "#ddd",
                    marginTop: 6,
                  }}
                />
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontSize: 11,
                      color: selected.id === post.id ? "#111" : "#555",
                      fontWeight: selected.id === post.id ? 700 : 500,
                    }}
                  >
                    {post.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "JetBrains Mono",
                      fontSize: 9,
                      color:
                        post.status === "PUBLISHED" ? "#4CAF50" : "#F59E0B",
                    }}
                  >
                    {post.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "auto", padding: "0 16px 20px" }}>
          <StickyNote color="#C8F135" rotate={-1}>
            More ideas brewing... ☕
          </StickyNote>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "36px 24px 30px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              alignItems: "center",
              color: "#888",
              fontFamily: "JetBrains Mono",
              fontSize: 10,
            }}
          >
            <span>Filter by:</span>
            {blogTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilter(tag)}
                style={{
                  padding: "7px 14px",
                  borderRadius: 999,
                  border: `1.5px solid ${filter === tag ? accent : "#E0E0E8"}`,
                  background: filter === tag ? accent : "#fff",
                  color: filter === tag ? "#fff" : "#666",
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                {tag}
              </button>
            ))}
          </div>
          <div style={{ marginLeft: "auto", position: "relative" }}>
            <StickyNote color="#E8E3FF" rotate={-3} pinned>
              I write to clarify my thinking. :)
            </StickyNote>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            alignItems: "start",
          }}
        >
          {filtered.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              accent={accent}
              selected={selected.id === post.id}
              onSelect={() => setSelected(post)}
              index={index}
            />
          ))}
          <div
            style={{
              background: "#FFFDE7",
              border: "1.5px dashed #E0D060",
              borderRadius: 18,
              padding: 18,
              minHeight: 160,
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 11,
                color: "#888",
                lineHeight: 1.6,
              }}
            >
              Currently writing about something exciting...
            </div>
            <span
              style={{
                display: "inline-flex",
                marginTop: 18,
                background: "#FF6B00",
                color: "#fff",
                borderRadius: 999,
                padding: "6px 10px",
                fontFamily: "JetBrains Mono",
                fontSize: 9,
                fontWeight: 700,
              }}
            >
              IN PROGRESS
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 240,
          flexShrink: 0,
          borderLeft: "1px solid #E0E0E8",
          background: "#fff",
          overflow: "auto",
          animation: "slideInRight 0.25s ease",
        }}
      >
        <div style={{ padding: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 10,
                fontWeight: 700,
                color: "#444",
              }}
            >
              Blog {selected.id}
            </span>
            <button
              type="button"
              onClick={() => setSelected(blogPosts[0])}
              style={{
                border: "none",
                background: "transparent",
                color: "#aaa",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ×
            </button>
          </div>
          <div
            style={{
              width: "100%",
              height: 110,
              background: "linear-gradient(135deg, #E8E3FF 0%, #C8C0FF 100%)",
              borderRadius: 14,
              marginBottom: 14,
              display: "grid",
              placeItems: "center",
              color: "#A890FF",
              fontFamily: "JetBrains Mono",
              fontSize: 9,
              textAlign: "center",
            }}
          >
            Cover image preview
          </div>
          <span
            style={{
              display: "inline-flex",
              background:
                selected.status === "PUBLISHED" ? "#D4F5D4" : "#FFF3D4",
              color: selected.status === "PUBLISHED" ? "#166534" : "#92400E",
              fontFamily: "JetBrains Mono",
              fontSize: 9,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 999,
            }}
          >
            {" "}
            {selected.status}{" "}
          </span>
          <h3
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 16,
              fontWeight: 700,
              marginTop: 10,
              marginBottom: 8,
              color: "#111",
            }}
          >
            {selected.title}
          </h3>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 12,
              fontFamily: "JetBrains Mono",
              fontSize: 9,
              color: "#aaa",
            }}
          >
            <span>📅 {selected.date}</span>
            <span>⏱ {selected.read}</span>
          </div>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: 12,
              color: "#666",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            Design systems are more than components and tokens. They're the
            operating system for consistency, collaboration and velocity.
          </p>
          <div style={{ marginBottom: 14 }}>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 10,
                color: "#888",
                marginBottom: 10,
              }}
            >
              In this article, I cover:
            </div>
            {[
              "What makes a design system scale",
              "Core principles I follow",
              "Pitfalls I’ve learned the hard way",
              "Real examples from my work",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: accent,
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "Inter",
                    fontSize: 11,
                    color: "#555",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            style={{
              width: "100%",
              background: accent,
              border: "none",
              borderRadius: 12,
              color: "#fff",
              padding: "12px",
              fontFamily: "Inter",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              marginBottom: 10,
            }}
          >
            Read full article ↗
          </button>
          <button
            type="button"
            style={{
              width: "100%",
              background: "#fff",
              border: "1.5px solid #E0E0E8",
              borderRadius: 12,
              color: "#555",
              padding: "11px",
              fontFamily: "Inter",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            View all blogs ☰
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactSection({ accent }: { accent: string }) {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setSent(true);
    setTimeout(() => {
      setMessage("");
      setSent(false);
    }, 1200);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "auto",
      }}
    >
      <div
        style={{ flex: 1, display: "flex", gap: 40, padding: "36px 40px 30px" }}
      >
        <div style={{ width: 280, flexShrink: 0 }}>
          <SectionBadge label="Section 06" accent={accent} />
          <h1
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 50,
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#111",
              marginBottom: 16,
            }}
          >
            Let’s work
            <br />
            together<span style={{ color: accent }}>.</span>
          </h1>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: 13,
              color: "#666",
              lineHeight: 1.7,
              marginBottom: 30,
            }}
          >
            Have a project in mind, a question, or just want to say hi? I’d love
            to hear from you.
          </p>
          <div
            style={{
              background: "#fff",
              border: "1.5px dashed #D0D0D8",
              borderRadius: 18,
              padding: 18,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -10,
                left: 20,
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: accent,
                boxShadow: `0 2px 6px ${accent}70`,
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: accent,
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                A
              </div>
              <span
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#111",
                }}
              >
                A little about me
              </span>
            </div>
            {[
              {
                icon: "⊙",
                text: "Product Designer focused on meaningful products and delightful experiences.",
              },
              {
                icon: "📅",
                text: "4+ years of experience across startups and global teams.",
              },
              {
                icon: "⊞",
                text: "Design systems enthusiast and problem solver.",
              },
            ].map((item) => (
              <div
                key={item.text}
                style={{ display: "flex", gap: 10, marginBottom: 12 }}
              >
                <span style={{ color: accent, fontSize: 14 }}>{item.icon}</span>
                <span
                  style={{
                    fontFamily: "Inter",
                    fontSize: 11,
                    color: "#555",
                    lineHeight: 1.6,
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 24,
              fontFamily: "JetBrains Mono",
              fontSize: 11,
              color: "#999",
              lineHeight: 1.6,
            }}
          >
            Let’s create
            <br />
            something awesome!
          </div>
        </div>
        <div style={{ flex: 1, maxWidth: 540 }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: -22,
                left: 0,
                background: focused ? accent : "#555",
                color: "#fff",
                fontFamily: "JetBrains Mono",
                fontSize: 10,
                fontWeight: 700,
                padding: "4px 12px",
                borderRadius: "10px 10px 0 0",
                transition: "background 0.2s",
              }}
            >
              Contact Frame{focused ? " / Active" : ""}
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: 18,
                border: `1.5px solid ${focused ? accent : "#E0E0E8"}`,
                boxShadow: focused
                  ? `4px 4px 0 ${accent}20`
                  : "3px 3px 0 #D8D8E0",
                padding: 28,
                transition: "all 0.2s",
              }}
            >
              {sent ? (
                <div style={{ textAlign: "center", padding: "42px 20px" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  <h3
                    style={{
                      fontFamily: "Space Grotesk",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#111",
                      marginBottom: 10,
                    }}
                  >
                    Message sent!
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      color: "#666",
                      lineHeight: 1.7,
                    }}
                  >
                    I usually reply within a day. Talk soon!
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMessage("");
                      setSent(false);
                    }}
                    style={{
                      marginTop: 20,
                      padding: "12px 22px",
                      borderRadius: 12,
                      border: "none",
                      background: accent,
                      color: "#fff",
                      fontFamily: "Inter",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      marginBottom: 24,
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 14,
                        background: `${accent}15`,
                        display: "grid",
                        placeItems: "center",
                        color: accent,
                        fontSize: 18,
                      }}
                    >
                      ✉
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Space Grotesk",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#111",
                        }}
                      >
                        Send me a message 👋
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter",
                          fontSize: 11,
                          color: "#888",
                        }}
                      >
                        I usually reply within a day.
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 18,
                      padding: "10px 0",
                      borderBottom: "1px solid #F0F0F4",
                    }}
                  >
                    <span
                      style={{
                        width: 30,
                        fontFamily: "JetBrains Mono",
                        fontSize: 11,
                        color: "#888",
                      }}
                    >
                      To
                    </span>
                    <div
                      style={{
                        flex: 1,
                        background: `${accent}10`,
                        border: `1px solid ${accent}30`,
                        borderRadius: 10,
                        padding: "10px 12px",
                        fontFamily: "JetBrains Mono",
                        fontSize: 11,
                        color: accent,
                      }}
                    >
                      akshai.design@gmail.com
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "#4CAF50",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter",
                          fontSize: 10,
                          color: "#888",
                        }}
                      >
                        Available for work
                      </span>
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <div
                      style={{
                        fontFamily: "JetBrains Mono",
                        fontSize: 11,
                        color: "#888",
                        marginBottom: 8,
                      }}
                    >
                      Your message
                    </div>
                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="Say hi, pitch an idea, or just chat about design..."
                      maxLength={500}
                      rows={6}
                      style={{
                        width: "100%",
                        padding: "16px 14px",
                        borderRadius: 16,
                        border: `1.5px solid ${focused ? accent : "#E0E0E8"}`,
                        background: "#FAFAFA",
                        fontFamily: "Inter",
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#333",
                        outline: "none",
                        resize: "vertical",
                      }}
                    />
                    <div
                      style={{
                        marginTop: 6,
                        textAlign: "right",
                        fontFamily: "JetBrains Mono",
                        fontSize: 10,
                        color: "#bbb",
                      }}
                    >
                      {message.length} / 500
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        borderRadius: 12,
                        padding: "10px 14px",
                        border: "1.5px solid #E0E0E8",
                        background: "#fff",
                        color: "#555",
                        fontFamily: "Inter",
                        fontSize: 11,
                        cursor: "pointer",
                      }}
                    >
                      📎 Attach file
                    </button>
                    <span
                      style={{
                        fontFamily: "Inter",
                        fontSize: 10,
                        color: "#bbb",
                      }}
                    >
                      PNG, PDF up to 10MB
                    </span>
                    <button
                      type="button"
                      onClick={handleSend}
                      disabled={!message.trim()}
                      style={{
                        marginLeft: "auto",
                        padding: "12px 22px",
                        borderRadius: 12,
                        border: "none",
                        background: message.trim() ? accent : "#E0E0E8",
                        color: message.trim() ? "#fff" : "#aaa",
                        fontFamily: "Inter",
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: message.trim() ? "pointer" : "default",
                      }}
                    >
                      {message.trim() ? "Send message ↗" : "Send message"}
                    </button>
                  </div>
                </>
              )}
            </div>
            {focused && (
              <div
                style={{
                  position: "absolute",
                  bottom: -18,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: accent,
                  color: "#fff",
                  fontFamily: "JetBrains Mono",
                  fontSize: 10,
                  padding: "4px 10px",
                  borderRadius: 999,
                }}
              >
                560 × 420
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            width: 220,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <StickyNote color="#EDE8FF" rotate={3} taped>
            Looking forward to hearing from you! 😊
          </StickyNote>
          <div>
            <div
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 10,
                color: "#888",
                marginBottom: 10,
              }}
            >
              Other ways to connect
            </div>
            {socialLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 14px",
                  marginBottom: 10,
                  background: "#fff",
                  border: "1.5px solid #E0E0E8",
                  borderRadius: 14,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 12,
                    background: link.color,
                    border: `1px solid ${link.border}`,
                    display: "grid",
                    placeItems: "center",
                    fontFamily: "JetBrains Mono",
                    fontSize: 12,
                    fontWeight: 700,
                    color: link.border,
                  }}
                >
                  {link.icon}
                </span>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#111",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "JetBrains Mono",
                      fontSize: 10,
                      color: "#888",
                    }}
                  >
                    {link.value}
                  </div>
                </div>
                <span style={{ color: "#bbb" }}>↗</span>
              </button>
            ))}
          </div>
          <StickyNote color="#C8F135" rotate={-2} pinned>
            Based in India, working with teams around the world 🌍
          </StickyNote>
        </div>
      </div>
      <div
        style={{
          background: "#F0EFF5",
          borderTop: "1.5px solid #E0E0E8",
          padding: "22px 40px",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 18,
              fontWeight: 700,
              color: "#111",
            }}
          >
            You've reached the <span style={{ color: accent }}>end</span> of the{" "}
            <span style={{ color: accent }}>file</span>.
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 12,
              color: "#888",
              marginTop: 6,
            }}
          >
            Thanks for scrolling! 👋
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 170,
              height: 88,
              background: "#fff",
              borderRadius: 18,
              border: "1.5px solid #E0E0E8",
              boxShadow: "2px 2px 0 #D8D8E0",
              display: "grid",
              placeItems: "center",
              color: "#C8C9D4",
              fontFamily: "JetBrains Mono",
              fontSize: 10,
              textAlign: "center",
            }}
          >
            Thanks for stopping by! :)
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 14,
              fontWeight: 700,
              color: "#111",
            }}
          >
            Designed & built by <span style={{ color: accent }}>Akshai</span> ♥
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 11,
              color: "#888",
              marginTop: 6,
            }}
          >
            Made with care (and a lot of Figma)
          </div>
          <div
            style={{
              marginTop: 10,
              display: "inline-flex",
              background: "#111",
              color: "#fff",
              borderRadius: 999,
              padding: "6px 12px",
              fontFamily: "JetBrains Mono",
              fontSize: 10,
            }}
          >
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
