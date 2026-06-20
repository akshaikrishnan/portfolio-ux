"use client";

import { useState } from "react";
import type {
  AccentOption,
  ExperienceItem,
  SkillItem,
  ProjectItem,
  BlogPost,
} from "../lib/content";

export function SectionBadge({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "JetBrains Mono",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "#444",
        marginBottom: 12,
      }}
    >
      <span
        style={{ width: 8, height: 8, borderRadius: "50%", background: accent }}
      />
      <span>{label}</span>
    </div>
  );
}

export function PanelCard({
  title,
  children,
  style,
}: {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1.5px solid #E0E0E8",
        borderRadius: 10,
        padding: 16,
        boxShadow: "2px 2px 0 rgba(0,0,0,0.05)",
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "JetBrains Mono",
          fontSize: 10,
          color: "#888",
          marginBottom: 12,
          letterSpacing: "0.08em",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

export function StickyNote({
  color,
  rotate = 0,
  pinned,
  taped,
  style,
  children,
}: {
  color: string;
  rotate?: number;
  pinned?: boolean;
  taped?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "relative",
        background: color,
        padding: 14,
        borderRadius: 12,
        border: "1.5px solid rgba(0,0,0,0.12)",
        boxShadow: "4px 4px 0 rgba(0,0,0,0.1)",
        transform: `rotate(${rotate}deg)`,
        width: 180,
        ...style,
      }}
    >
      {taped && (
        <div
          style={{
            position: "absolute",
            top: 6,
            left: 24,
            width: 40,
            height: 10,
            borderRadius: 4,
            background: "#F2F2F2",
            transform: "rotate(-3deg)",
          }}
        />
      )}
      {pinned && (
        <div
          style={{
            position: "absolute",
            top: -10,
            left: 14,
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#444",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        />
      )}
      <div
        style={{
          fontFamily: "Inter",
          fontSize: 11,
          color: "#444",
          lineHeight: 1.5,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function FrameLabel({
  label,
  accent,
}: {
  label: string;
  accent: string;
}) {
  return (
    <div
      style={{
        fontFamily: "JetBrains Mono",
        fontSize: 11,
        color: "#555",
        marginBottom: 18,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          borderRadius: 6,
          background: accent,
          color: "#fff",
          fontWeight: 700,
        }}
      >
        {label.split(" ")[1]}
      </span>
      <span>{label}</span>
    </div>
  );
}

export function SizeLabel({
  w,
  h,
  accent,
}: {
  w: string;
  h: string;
  accent: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "JetBrains Mono",
        fontSize: 11,
        color: "#666",
        background: "#fff",
        border: "1px solid #E0E0E8",
        borderRadius: 6,
        padding: "6px 10px",
        boxShadow: "2px 2px 0 rgba(0,0,0,0.05)",
      }}
    >
      <span style={{ color: accent }}>⌘</span>
      <span>
        {w} × {h}
      </span>
    </div>
  );
}

export function CursorLabels({ accent }: { accent: string }) {
  const labels = [
    { label: "Designer", top: 120, left: 190, bg: "#0B69FF" },
    { label: "Client", top: 260, left: 520, bg: "#8C5CFF" },
    { label: "You", top: 560, left: 120, bg: "#FF3B7D" },
    { label: "Reader", top: 560, left: 900, bg: "#8FCC14" },
  ];
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 100,
      }}
    >
      {labels.map((item) => (
        <div
          key={item.label}
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            background: item.bg,
            color: "#fff",
            borderRadius: 999,
            padding: "8px 14px",
            fontFamily: "JetBrains Mono",
            fontSize: 10,
            fontWeight: 700,
            boxShadow: "6px 6px 0 rgba(0,0,0,0.15)",
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export function HRuler() {
  const ticks = Array.from({ length: 35 }, (_, i) => i - 15).map((step) => ({
    value: step * 100,
    left: step * 20 + 300,
  }));
  return (
    <div
      style={{
        height: 22,
        background: "#ECEDF0",
        borderBottom: "1px solid #D4D5DC",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 300,
          top: 0,
          width: 2,
          height: "100%",
          background: "#5B6CF9",
        }}
      />
      {ticks.map((tick) => (
        <div
          key={tick.value}
          style={{
            position: "absolute",
            left: tick.left,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 2,
              transform: "translateX(-50%)",
              fontFamily: "JetBrains Mono",
              fontSize: 9,
              color: tick.value === 0 ? "#5B6CF9" : "#aaa",
            }}
          >
            {tick.value}
          </span>
          <div
            style={{
              width: 1,
              height: tick.value % 200 === 0 ? 10 : 6,
              background: "#ccc",
              marginTop: "auto",
            }}
          />
        </div>
      ))}
      {Array.from({ length: 90 }).map((_, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: index * 20 + 20,
            bottom: 0,
            width: 1,
            height: 4,
            background: "#ddd",
          }}
        />
      ))}
    </div>
  );
}

export function VRuler() {
  const ticks = Array.from({ length: 25 }, (_, i) => i - 5).map(
    (item) => item * 40 + 80,
  );
  return (
    <div
      style={{
        width: 22,
        background: "#ECEDF0",
        borderRight: "1px solid #D4D5DC",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {ticks.map((top) => (
        <div
          key={top}
          style={{
            position: "absolute",
            top,
            left: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 2,
              transform: "rotate(-90deg) translateX(-50%)",
              transformOrigin: "left center",
              fontFamily: "JetBrains Mono",
              fontSize: 8,
              color: top === 80 ? "#5B6CF9" : "#aaa",
              whiteSpace: "nowrap",
            }}
          >
            {top - 80}
          </span>
          <div
            style={{
              position: "absolute",
              right: 0,
              width: top % 80 === 0 ? 10 : 6,
              height: 1,
              background: "#ccc",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function GridBackground({ snap }: { snap: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#ECEDF0",
        backgroundImage: `radial-gradient(circle, ${snap ? "#B8B9C4" : "#C8C9D4"} 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        zIndex: 0,
      }}
    />
  );
}

export function LeftSidebar({ section }: { section: number }) {
  const [active, setActive] = useState("move");
  const tools = [
    { id: "move", label: "move" },
    { id: "frame", label: "frame" },
    { id: "component", label: "component" },
    { id: "pen", label: "pen" },
    { id: "text", label: "text" },
    { id: "hand", label: "hand" },
    { id: "comment", label: "comment" },
    { id: "code", label: "code" },
  ];
  return (
    <div
      style={{
        width: 60,
        background: "#1E1E1E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12px 0",
        gap: 8,
        borderRight: "1px solid #2c2c2c",
        zIndex: 200,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
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
      {tools.map((tool) => (
        <button
          key={tool.id}
          type="button"
          onClick={() => setActive(tool.id)}
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            border: "none",
            background: active === tool.id ? "#3a3a3a" : "transparent",
            color: active === tool.id ? "#fff" : "#888",
            fontSize: 11,
            cursor: "pointer",
          }}
        >
          {tool.label}
        </button>
      ))}
      <div
        style={{
          marginTop: "auto",
          marginBottom: 12,
          width: 36,
          height: 36,
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
    </div>
  );
}

export function TopBar({
  section,
  onNav,
  accent,
}: {
  section: number;
  onNav: (index: number) => void;
  accent: string;
}) {
  const isHero = section === 0;
  return (
    <div
      style={{
        height: 48,
        background: "#1E1E1E",
        borderBottom: "1px solid #2c2c2c",
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        gap: 12,
        flexShrink: 0,
        zIndex: 150,
      }}
    >
      {isHero ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#2a2a2a",
              borderRadius: 8,
              padding: "8px 12px",
            }}
          >
            <span style={{ color: "#ddd", fontSize: 12 }}>Portfolio 2025</span>
            <span style={{ color: "#666", fontSize: 10 }}>▾</span>
          </div>
          <div style={{ color: "#aaa", fontSize: 12 }}>Drafts / Portfolio</div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
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
                padding: "10px 16px",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Share
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "#2a2a2a",
                borderRadius: 10,
                padding: "8px 10px",
                color: "#ccc",
              }}
            >
              ▶ ▾
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "#2a2a2a",
                borderRadius: 10,
                padding: "8px 10px",
                color: "#ccc",
              }}
            >
              100% ▾
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => onNav(Math.max(section - 1, 0))}
            style={{
              color: "#ccc",
              background: "transparent",
              border: "1px solid #3a3a3a",
              borderRadius: 10,
              padding: "8px 14px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 10,
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
              onClick={() => onNav(5)}
              style={{
                background: accent,
                border: "none",
                borderRadius: 10,
                padding: "10px 16px",
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Let's talk ↗
            </button>
            <button
              type="button"
              style={{
                background: "transparent",
                border: "1px solid #3a3a3a",
                borderRadius: 10,
                padding: "8px 12px",
                color: "#aaa",
              }}
            >
              ↓
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export function BottomBar({
  section,
  accent,
  onAccentChange,
  snapToGrid,
  onSnapChange,
  totalSections,
  onNav,
}: {
  section: number;
  accent: string;
  onAccentChange: (hex: string) => void;
  snapToGrid: boolean;
  onSnapChange: (value: boolean) => void;
  totalSections: number;
  onNav: (index: number) => void;
}) {
  return (
    <div
      style={{
        height: 48,
        background: "#1E1E1E",
        borderTop: "1px solid #2c2c2c",
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        gap: 12,
        flexShrink: 0,
        zIndex: 150,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#2a2a2a",
          borderRadius: 10,
          padding: "8px 12px",
        }}
      >
        <span style={{ color: "#aaa" }}>Figma</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#2a2a2a",
          borderRadius: 10,
          padding: "8px 12px",
        }}
      >
        <span style={{ color: "#888" }}>⊡</span>
        <span style={{ color: "#888" }}>⊞</span>
      </div>
      {section === 0 ? (
        <>
          <div
            style={{
              marginLeft: 30,
              flex: 1,
              color: "#888",
              fontFamily: "JetBrains Mono",
              fontSize: 11,
            }}
          >
            💜 Thanks for stopping by! | Press / to see easter eggs
          </div>
          <button
            type="button"
            onClick={() => onNav(1)}
            style={{
              background: accent,
              border: "none",
              borderRadius: 10,
              padding: "10px 16px",
              color: "#fff",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Play ▶
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "#2a2a2a",
              borderRadius: 10,
              padding: "8px 12px",
              color: "#ccc",
            }}
          >
            1 / {totalSections} ☰
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                color: "#888",
                fontFamily: "JetBrains Mono",
                fontSize: 11,
              }}
            >
              Accent Color:
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              {ACCENT_COLORS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onAccentChange(option.color)}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    border:
                      accent === option.color
                        ? "2px solid #fff"
                        : "2px solid #555",
                    background: option.color,
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  color: "#888",
                  fontFamily: "JetBrains Mono",
                  fontSize: 11,
                }}
              >
                Snap to grid
              </span>
              <button
                type="button"
                onClick={() => onSnapChange(!snapToGrid)}
                style={{
                  width: 34,
                  height: 18,
                  borderRadius: 999,
                  background: snapToGrid ? accent : "#444",
                  border: "none",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: snapToGrid ? 16 : 4,
                    top: 2,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#fff",
                    transition: "left 0.2s",
                  }}
                />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "#2a2a2a",
                borderRadius: 10,
                padding: "8px 12px",
                color: "#ccc",
              }}
            >
              {section + 1} / {totalSections}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const ACCENT_COLORS: AccentOption[] = [
  { id: "blue", color: "#5B6CF9", label: "Blue" },
  { id: "purple", color: "#9747FF", label: "Purple" },
  { id: "pink", color: "#FF2D78", label: "Pink" },
  { id: "orange", color: "#FF6B35", label: "Orange" },
  { id: "lime", color: "#8FCC14", label: "Lime" },
  { id: "black", color: "#111111", label: "Black" },
];

export function SkillCard({
  skill,
  accent,
  selected,
  onSelect,
  view,
  index,
}: {
  skill: SkillItem;
  accent: string;
  selected: boolean;
  onSelect: () => void;
  view: "grid" | "list";
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const selectedBorder = selected ? accent : hovered ? "#C8C9D4" : "#E0E0E8";
  const levelColors = {
    EXPERT: ["#D4E8FF", "#0A5C9E"],
    ADVANCED: ["#D4F0E0", "#1A6B3C"],
    INTERMEDIATE: ["#FFF3D4", "#8B5E00"],
  } as const;
  const [bg, text] = levelColors[skill.level];

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: view === "grid" ? "100%" : "100%",
        padding: view === "list" ? "12px 14px" : "18px 16px",
        background: "#fff",
        border: `1.5px solid ${selectedBorder}`,
        borderRadius: 14,
        textAlign: "left",
        cursor: "pointer",
        boxShadow: selected
          ? `3px 3px 0 ${accent}20`
          : hovered
            ? "2px 2px 0 #D0D0D8"
            : "2px 2px 0 #E8E8EE",
        transition: "all 0.18s ease",
        transform: hovered ? "translateY(-1px)" : "none",
        display: "block",
        animation: `fadeSlideIn 0.35s ease ${index * 0.05}s both`,
        position: "relative",
      }}
    >
      {selected && (
        <div
          style={{
            position: "absolute",
            inset: -4,
            border: `2px solid ${accent}`,
            borderRadius: 16,
            pointerEvents: "none",
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          marginBottom: 12,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 16,
              fontWeight: 700,
              color: "#111",
              marginBottom: 6,
            }}
          >
            {skill.name}
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 12,
              color: "#666",
              lineHeight: 1.5,
            }}
          >
            {skill.desc}
          </div>
        </div>
        <span
          style={{
            background: bg,
            color: text,
            fontFamily: "JetBrains Mono",
            fontSize: 10,
            fontWeight: 700,
            padding: "4px 8px",
            borderRadius: 999,
          }}
        >
          {skill.level}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: i < skill.dots ? accent : "#E0E0E8",
              }}
            />
          ))}
        </div>
        <div
          style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: "#888" }}
        >
          {skill.years}
        </div>
      </div>
    </button>
  );
}

export function ProjectCard({
  project,
  accent,
  onOpen,
  view,
  index,
}: {
  project: ProjectItem;
  accent: string;
  onOpen: () => void;
  view: "grid" | "list";
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const borderColor = hovered ? accent : "#E0E0E8";
  const shadow = hovered ? `3px 3px 0 ${accent}30` : "2px 2px 0 #E0E0E8";

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        border: `1.5px solid ${borderColor}`,
        borderRadius: 16,
        background: "#fff",
        boxShadow: shadow,
        overflow: "hidden",
        cursor: "pointer",
        textAlign: "left",
        padding: 0,
        display: "block",
        animation: `fadeSlideIn 0.35s ease ${index * 0.06}s both`,
        transition: "all 0.18s ease",
      }}
    >
      <div
        style={{
          height: 140,
          background: project.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #F0F0F4",
        }}
      >
        <div
          style={{
            width: "78%",
            height: 82,
            borderRadius: 14,
            background: project.dark ? "#252540" : "#fff",
            border: project.dark
              ? "1px solid rgba(255,255,255,0.14)"
              : "1px solid rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: project.dark ? "#aaa" : "#999",
            fontFamily: "JetBrains Mono",
            fontSize: 10,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Preview card
        </div>
      </div>
      <div style={{ padding: "16px 18px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 15,
              fontWeight: 700,
              color: "#111",
            }}
          >
            {project.title}
          </div>
          <span
            style={{
              background: project.tagColor,
              color: project.tagText,
              fontFamily: "JetBrains Mono",
              fontSize: 9,
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: 999,
            }}
          >
            {project.tag}
          </span>
        </div>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: 12,
            color: "#666",
            lineHeight: 1.6,
            marginBottom: 12,
          }}
        >
          {project.desc}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "JetBrains Mono",
            fontSize: 10,
            color: "#888",
          }}
        >
          <span>{project.role}</span>
          <span>↗</span>
        </div>
      </div>
    </button>
  );
}

export function BlogCard({
  post,
  accent,
  selected,
  onSelect,
  index,
}: {
  post: BlogPost;
  accent: string;
  selected: boolean;
  onSelect: () => void;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const active = selected || hovered;
  const borderColor = selected ? accent : active ? accent + "60" : "#E0E0E8";
  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        border: `1.5px solid ${borderColor}`,
        borderRadius: 16,
        background: "#fff",
        boxShadow: active ? `3px 3px 0 ${accent}20` : "2px 2px 0 #E0E0E8",
        overflow: "hidden",
        cursor: "pointer",
        padding: 0,
        textAlign: "left",
        display: "block",
        transform: active ? "translateY(-1px)" : "none",
        animation: `fadeSlideIn 0.35s ease ${index * 0.06}s both`,
        position: "relative",
      }}
    >
      {selected && (
        <div
          style={{
            position: "absolute",
            inset: -4,
            border: `2px solid ${accent}`,
            borderRadius: 18,
            pointerEvents: "none",
          }}
        />
      )}
      <div
        style={{
          height: 90,
          background: `linear-gradient(135deg, ${accent}20 0%, ${accent}40 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ color: "#777", fontFamily: "JetBrains Mono", fontSize: 9 }}
        >
          Cover art placeholder
        </div>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div
          style={{
            fontFamily: "JetBrains Mono",
            fontSize: 11,
            color: "#bbb",
            marginBottom: 6,
          }}
        >
          {post.id}
        </div>
        <div
          style={{
            fontFamily: "Space Grotesk",
            fontSize: 15,
            fontWeight: 700,
            color: "#111",
            marginBottom: 8,
          }}
        >
          {post.title}
        </div>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: 12,
            color: "#666",
            lineHeight: 1.6,
            marginBottom: 10,
          }}
        >
          {post.excerpt}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 12,
          }}
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "#F0F0F4",
                color: "#555",
                fontFamily: "JetBrains Mono",
                fontSize: 9,
                fontWeight: 700,
                padding: "2px 7px",
                borderRadius: 999,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "JetBrains Mono",
            fontSize: 10,
            color: "#aaa",
          }}
        >
          <span>📅 {post.date}</span>
          <span>⏱ {post.read}</span>
        </div>
      </div>
    </button>
  );
}
