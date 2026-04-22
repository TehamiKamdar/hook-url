import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0a0a0b",
  bg2: "#111114",
  bg3: "#18181d",
  border: "rgba(255,255,255,0.07)",
  white: "#f4f4f5",
  muted: "#8a8a96",
  blue: "#4a8fff",
  blueDim: "rgba(74,143,255,0.12)",
  blueGlow: "rgba(74,143,255,0.25)",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0a0a0b;
    color: #f4f4f5;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  html { scroll-behavior: smooth; }

  .hookurl-root {
    background: #0a0a0b;
    color: #f4f4f5;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .hookurl-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 999;
    opacity: 0.4;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.8); }
  }

  @keyframes countUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fade-up-0 { animation: fadeUp 0.6s 0s ease both; }
  .fade-up-1 { animation: fadeUp 0.6s 0.1s ease both; }
  .fade-up-2 { animation: fadeUp 0.6s 0.2s ease both; }
  .fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
  .fade-up-4 { animation: fadeUp 0.7s 0.4s ease both; }

  .badge-dot { animation: pulse 2s infinite; }

  .btn-primary {
    background: #4a8fff;
    color: #fff;
    border: none;
    padding: 13px 28px;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
    text-decoration: none;
    display: inline-block;
    white-space: nowrap;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(74,143,255,0.35);
  }

  .btn-ghost {
    background: transparent;
    color: #8a8a96;
    border: 1px solid rgba(255,255,255,0.07);
    padding: 13px 28px;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 400;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  .btn-ghost:hover {
    color: #f4f4f5;
    border-color: rgba(255,255,255,0.2);
  }

  .feature-card {
    background: #0a0a0b;
    padding: 36px 32px;
    transition: background 0.2s;
  }
  .feature-card:hover { background: #111114; }

  .plan {
    background: #111114;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 32px 28px;
    transition: border-color 0.2s, transform 0.2s;
    position: relative;
  }
  .plan:hover {
    border-color: rgba(255,255,255,0.15);
    transform: translateY(-4px);
  }
  .plan.featured {
    border-color: rgba(74,143,255,0.4);
    background: linear-gradient(160deg, rgba(74,143,255,0.05) 0%, #111114 60%);
  }

  .plan-cta {
    margin-top: 28px;
    width: 100%;
    text-align: center;
    display: block;
    padding: 11px;
    border-radius: 9px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
  }
  .plan-cta.outline {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.07);
    color: #8a8a96;
  }
  .plan-cta.outline:hover {
    border-color: rgba(255,255,255,0.2);
    color: #f4f4f5;
  }
  .plan-cta.solid {
    background: #4a8fff;
    border: none;
    color: #fff;
  }
  .plan-cta.solid:hover {
    box-shadow: 0 6px 24px rgba(74,143,255,0.3);
    transform: translateY(-1px);
  }

  .nav-link {
    color: #8a8a96;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 400;
    transition: color 0.2s;
  }
  .nav-link:hover { color: #f4f4f5; }

  .nav-cta {
    background: rgba(74,143,255,0.12);
    border: 1px solid rgba(74,143,255,0.3);
    color: #4a8fff !important;
    padding: 8px 20px;
    border-radius: 8px;
    font-weight: 500 !important;
    transition: background 0.2s, border-color 0.2s !important;
  }
  .nav-cta:hover {
    background: rgba(74,143,255,0.2) !important;
    border-color: rgba(74,143,255,0.5) !important;
  }

  .email-input {
    flex: 1;
    background: #111114;
    border: 1px solid rgba(255,255,255,0.07);
    color: #f4f4f5;
    padding: 13px 18px;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
    min-width: 0;
  }
  .email-input::placeholder { color: #8a8a96; }
  .email-input:focus { border-color: rgba(74,143,255,0.4); }

  .footer-link {
    color: #8a8a96;
    text-decoration: none;
    font-size: 0.825rem;
    transition: color 0.2s;
  }
  .footer-link:hover { color: #f4f4f5; }

  @media (max-width: 768px) {
    .nav-links-desktop { display: none !important; }
    .features-grid { grid-template-columns: 1fr !important; }
    .pricing-grid { grid-template-columns: 1fr !important; }
    .stats-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    .demo-body { grid-template-columns: repeat(2,1fr) !important; }
    .hero-actions { flex-direction: column !important; align-items: center !important; }
    .footer-inner { flex-direction: column !important; gap: 20px !important; text-align: center !important; }
    .footer-links { flex-wrap: wrap !important; justify-content: center !important; }
    .email-form { flex-direction: column !important; }
  }
`;

// ── Icons ──
const LinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a8fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    title: "Click Analytics",
    desc: "Real-time click data with timestamps, locations, and referrer breakdowns — updated live as people engage with your links.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a8fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Device & Geo Tracking",
    desc: "See which devices, OS, and browsers drive clicks. Pinpoint where in the world your audience is coming from.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a8fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Conversion Tracking",
    desc: "Define conversion goals and measure exactly how many clicks turn into actions — sales, signups, or any custom event.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a8fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "Branded Short Links",
    desc: "Use your own domain for short links. Build trust, improve CTR, and keep your brand front and center everywhere.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a8fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "UTM Builder",
    desc: "Auto-generate UTM parameters for every link. Campaign attribution made simple — no manual tagging required.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a8fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/>
        <path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/>
      </svg>
    ),
    title: "Traffic Source Reports",
    desc: "Know exactly which campaigns, channels, and platforms are sending traffic — so you invest where it counts.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "Free forever",
    featured: false,
    cta: "Get started",
    ctaType: "outline",
    features: ["1,000 clicks / month", "50 active links", "Basic click analytics", "Device tracking", "7-day data retention"],
  },
  {
    name: "Pro",
    price: "19",
    period: "per month",
    featured: true,
    badge: "Most Popular",
    cta: "Start Pro",
    ctaType: "solid",
    features: ["100,000 clicks / month", "Unlimited links", "Conversion tracking", "Custom branded domain", "UTM builder", "90-day data retention"],
  },
  {
    name: "Business",
    price: "59",
    period: "per month",
    featured: false,
    cta: "Start Business",
    ctaType: "outline",
    features: ["Unlimited clicks", "Unlimited links", "All Pro features", "Team collaboration", "API access", "1-year data retention"],
  },
];

// ── Animated counter ──
function useCountUp(target, duration = 1200, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return val;
}

function StatBlock({ num, suffix, desc }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(num, 1400, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
        {count}{suffix && <span style={{ color: COLORS.blue }}>{suffix}</span>}
      </div>
      <div style={{ marginTop: 10, color: COLORS.muted, fontSize: "0.875rem", fontWeight: 300 }}>{desc}</div>
    </div>
  );
}

export default function HookURLLanding() {
  const [email, setEmail] = useState("");

  return (
    <>
      <style>{styles}</style>
      <div className="hookurl-root">

        {/* ── NAV ── */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 48px",
          borderBottom: `1px solid ${COLORS.border}`,
          background: "rgba(10,10,11,0.85)",
          backdropFilter: "blur(16px)",
        }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 32, height: 32,
              background: COLORS.blueDim,
              border: "1px solid rgba(74,143,255,0.3)",
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <LinkIcon />
            </div>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: COLORS.white, letterSpacing: "-0.02em" }}>
              HookURL
            </span>
          </a>

          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {["Features", "Pricing", "Docs", "Blog"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            ))}
            <a href="#" className="nav-link nav-cta">Get Started</a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Glow */}
          <div style={{
            position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)",
            width: 600, height: 400,
            background: "radial-gradient(ellipse, rgba(74,143,255,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Badge */}
          <div className="fade-up-0" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: COLORS.blueDim,
            border: "1px solid rgba(74,143,255,0.25)",
            borderRadius: 100, padding: "6px 14px",
            fontSize: "0.78rem", fontWeight: 500, color: COLORS.blue,
            letterSpacing: "0.04em", textTransform: "uppercase",
            marginBottom: 32,
          }}>
            <span className="badge-dot" style={{ width: 6, height: 6, background: COLORS.blue, borderRadius: "50%" }} />
            Link Intelligence Platform
          </div>

          {/* H1 */}
          <h1 className="fade-up-1" style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            maxWidth: 820,
          }}>
            Every Link.<br />Every{" "}
            <span style={{ color: COLORS.blue }}>Click.</span>
            <br />Every Insight.
          </h1>

          <p className="fade-up-2" style={{
            marginTop: 24, fontSize: "1.1rem", color: COLORS.muted,
            maxWidth: 520, fontWeight: 300, lineHeight: 1.7,
          }}>
            HookURL turns your links into a full analytics engine — track conversions, devices, traffic sources, and what's actually driving growth.
          </p>

          <div className="fade-up-3 hero-actions" style={{ marginTop: 40, display: "flex", gap: 12 }}>
            <a href="#" className="btn-primary">Start for free →</a>
            <a href="#features" className="btn-ghost">See features</a>
          </div>

          {/* Demo strip */}
          <div className="fade-up-4" style={{
            marginTop: 64, width: "100%", maxWidth: 760,
            background: COLORS.bg2,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 14, overflow: "hidden",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.03), 0 40px 80px rgba(0,0,0,0.5)",
          }}>
            {/* Browser bar */}
            <div style={{
              background: COLORS.bg3, padding: "10px 16px",
              display: "flex", alignItems: "center", gap: 8,
              borderBottom: `1px solid ${COLORS.border}`,
            }}>
              {[["#ff5f57"], ["#febc2e"], ["#28c840"]].map(([c], i) => (
                <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "inline-block" }} />
              ))}
              <span style={{
                marginLeft: 12, flex: 1,
                background: COLORS.bg, border: `1px solid ${COLORS.border}`,
                borderRadius: 6, padding: "4px 14px",
                fontSize: "0.78rem", color: COLORS.muted,
              }}>hookurl.io/campaign-launch</span>
            </div>
            {/* Stats */}
            <div className="demo-body" style={{
              padding: "24px 28px",
              display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16,
            }}>
              {[
                { val: "24K", label: "Total Clicks" },
                { val: "6.2%", label: "Conversion" },
                { val: "68%", label: "Mobile" },
                { val: "4 src", label: "Top Sources" },
              ].map(({ val, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: COLORS.white }}>
                    {val.replace(/[KM%]|src/g, '')}
                    <span style={{ color: COLORS.blue }}>{val.match(/[KM%]|src/)?.[0] ?? ''}</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: COLORS.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{
          background: COLORS.bg2,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
          padding: "80px 24px",
        }}>
          <div className="stats-grid" style={{
            maxWidth: 900, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48,
          }}>
            <StatBlock num={50} suffix="M+" desc="Links tracked every month" />
            <StatBlock num={99} suffix=".9%" desc="Uptime guaranteed" />
            <StatBlock num={2} suffix="ms" desc="Average redirect speed" />
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section id="features" style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: 64 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.75rem", fontWeight: 500, color: COLORS.blue, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                <span style={{ display: "block", width: 20, height: 1, background: COLORS.blue }} />
                Features
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Not just short links.<br />Full link intelligence.
              </h2>
              <p style={{ color: COLORS.muted, fontSize: "1rem", fontWeight: 300, maxWidth: 440, marginTop: 12, lineHeight: 1.7 }}>
                Everything you need to understand, optimize, and grow — built into every link you create.
              </p>
            </div>

            <div className="features-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(3,1fr)",
              gap: 2, background: COLORS.border,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16, overflow: "hidden",
            }}>
              {features.map((f) => (
                <div key={f.title} className="feature-card">
                  <div style={{
                    width: 44, height: 44, background: COLORS.blueDim,
                    border: "1px solid rgba(74,143,255,0.2)",
                    borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}>
                    {f.icon}
                  </div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "1rem", marginBottom: 10 }}>{f.title}</div>
                  <div style={{ fontSize: "0.875rem", color: COLORS.muted, lineHeight: 1.65, fontWeight: 300 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
            <div style={{ marginBottom: 56 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.75rem", fontWeight: 500, color: COLORS.blue, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                <span style={{ display: "block", width: 20, height: 1, background: COLORS.blue }} />
                Pricing
              </div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Pay for what you need
              </h2>
              <p style={{ color: COLORS.muted, fontSize: "1rem", fontWeight: 300, maxWidth: 440, margin: "12px auto 0", lineHeight: 1.7 }}>
                Start free, scale as you grow. Every plan includes core analytics.
              </p>
            </div>

            <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, textAlign: "left" }}>
              {plans.map((p) => (
                <div key={p.name} className={`plan${p.featured ? " featured" : ""}`}>
                  {p.badge && (
                    <div style={{
                      position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                      background: COLORS.blue, color: "#fff",
                      fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em",
                      textTransform: "uppercase", padding: "4px 14px", borderRadius: 100,
                      whiteSpace: "nowrap",
                    }}>{p.badge}</div>
                  )}
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: 8 }}>{p.name}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, margin: "16px 0 4px" }}>
                    <sup style={{ fontSize: "1rem", fontWeight: 500, verticalAlign: "top", marginTop: 6, display: "inline-block" }}>$</sup>
                    {p.price}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: COLORS.muted, marginBottom: 24 }}>{p.period}</div>
                  <div style={{ height: 1, background: COLORS.border, margin: "20px 0" }} />
                  <ul style={{ listStyle: "none" }}>
                    {p.features.map((f) => (
                      <li key={f} style={{
                        fontSize: "0.86rem", color: COLORS.muted, padding: "7px 0",
                        display: "flex", alignItems: "center", gap: 10, fontWeight: 300,
                      }}>
                        <span style={{
                          flexShrink: 0, width: 16, height: 16, borderRadius: "50%",
                          background: COLORS.blueDim,
                          border: "1px solid rgba(74,143,255,0.3)",
                          display: "inline-flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                            <path d="M4 8l3 3 5-5" stroke="#4a8fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className={`plan-cta ${p.ctaType}`}>{p.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ textAlign: "center", padding: "100px 24px 120px" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.75rem", fontWeight: 500, color: COLORS.blue, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
              <span style={{ display: "block", width: 20, height: 1, background: COLORS.blue }} />
              Get Started
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16 }}>
              Turn every link into intelligence
            </h2>
            <p style={{ color: COLORS.muted, fontSize: "1rem", fontWeight: 300, marginBottom: 36 }}>
              Join thousands of marketers and teams who track, optimize, and grow with HookURL.
            </p>
            <div className="email-form" style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto" }}>
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <a href="#" className="btn-primary">Join waitlist</a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: `1px solid ${COLORS.border}`, padding: "32px 48px" }}>
          <div className="footer-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1rem", color: COLORS.white, letterSpacing: "-0.02em" }}>
              HookURL
            </div>
            <div className="footer-links" style={{ display: "flex", gap: 28 }}>
              {["Features", "Pricing", "Privacy", "Terms", "Contact"].map(l => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </div>
            <div style={{ fontSize: "0.8rem", color: COLORS.muted }}>© 2025 HookURL</div>
          </div>
        </footer>

      </div>
    </>
  );
}
