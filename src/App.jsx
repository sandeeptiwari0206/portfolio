import { useState, useEffect, useRef } from "react";

// ─── Utility: useInView ───────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}


// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const GitHubIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const AWSIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.504.336a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.671 0-1.205-.192-1.596-.576-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.224a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.815-.416.304-.096.623-.136.95-.136.168 0 .343.008.511.032.176.024.336.056.487.088.144.04.28.08.408.127.127.048.224.096.295.144a.617.617 0 01.208.183.4.4 0 01.056.216v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.376.383-.376.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.329.375.703.375 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" fill="#FF9900" />
    <path d="M21.616 16.712c-2.585 1.91-6.337 2.925-9.570 2.925-4.526 0-8.607-1.674-11.690-4.461-.242-.216-.025-.512.265-.344 3.329 1.938 7.447 3.104 11.694 3.104 2.869 0 6.022-.594 8.926-1.826.438-.19.806.287.375.602z" fill="#FF9900" />
    <path d="M22.703 15.473c-.33-.424-2.184-.2-3.015-.1-.254.031-.292-.19-.064-.35 1.475-1.037 3.896-.738 4.178-.39.282.35-.073 2.774-1.46 3.932-.213.177-.416.083-.322-.152.312-.778 1.013-2.518.683-2.94z" fill="#FF9900" />
  </svg>
);

const PleskIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect width="24" height="24" rx="6" fill="#52BBD9" />
    <path d="M6 7h5.5C13.433 7 15 8.567 15 10.5S13.433 14 11.5 14H8.5v3H6V7zm2.5 5h2.8c1.1 0 1.7-.7 1.7-1.5S12.4 9 11.3 9H8.5v3z" fill="white" />
  </svg>
);

const EmailIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const LocationIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const skills = [
  {
    category: "Cloud Platforms",
    icon: "☁️",
    color: "from-sky-400 to-blue-600",
    items: ["AWS EC2 / S3 / VPC", "AWS ECS / Lambda", "GCP Compute Engine", "GKE / Cloud Functions"],
  },
  {
    category: "DevOps & CI/CD",
    icon: "⚙️",
    color: "from-violet-400 to-purple-600",
    items: ["Jenkins", "GitHub Actions", "GitOps", "CI/CD Automation"],
  },
  {
    category: "Containers & Orchestration",
    icon: "🐳",
    color: "from-cyan-400 to-teal-600",
    items: ["Docker", "AWS ECS", "Google Kubernetes Engine", "Container Registries"],
  },
  {
    category: "Infrastructure as Code",
    icon: "📐",
    color: "from-emerald-400 to-green-600",
    items: ["AWS CloudFormation", "Ansible", "YAML", "Shell Scripting"],
  },
  {
    category: "Monitoring & Observability",
    icon: "📊",
    color: "from-amber-400 to-orange-500",
    items: ["Prometheus + Grafana", "Datadog / New Relic", "ELK Stack", "CloudWatch"],
  },
  {
    category: "Networking & Security",
    icon: "🔐",
    color: "from-rose-400 to-pink-600",
    items: ["IAM Least-Privilege", "SSL/TLS Management", "Nginx / Apache", "Firewall Rules"],
  },
];

const experiences = [
  {
    role: "Cloud Engineer",
    company: "Raptbot Technologies",
    location: "Jaipur, India",
    period: "Sep 2025 – Present",
    color: "from-blue-500 to-cyan-400",
    achievements: [
      "Managed multi-account AWS infrastructure with proactive monitoring, reducing incident response time by 35%",
      "Built centralized monitoring dashboards using Grafana, Datadog, and New Relic",
      "Monitored EC2, ALB, and RDS production workloads maintaining 99.9% high availability",
      "Implemented IAM least-privilege access policies, strengthening cloud security posture",
      "Centralized logs using ELK Stack enabling faster troubleshooting of production issues",
    ],
  },
  {
    role: "Cloud Solution Engineer",
    company: "OVI Hosting Pvt. Ltd.",
    location: "Remote",
    period: "Apr 2024 – May 2025",
    color: "from-violet-500 to-purple-400",
    achievements: [
      "Managed Linux-based VPS and dedicated servers with Shell scripting automation",
      "Installed and maintained WHM/cPanel, Plesk, and CWP hosting control panels",
      "Deployed LAMP stack hosting infrastructure ensuring high availability for web apps",
      "Implemented email integrations with Postfix, Zoho Mail, Google Workspace & M365",
      "Designed automated backup and disaster recovery strategies using Acronis Cyber Protect",
    ],
  },
  {
    role: "Cloud Solution Engineer",
    company: "ZNet Technologies",
    location: "Jaipur, India",
    period: "Sep 2021 – Mar 2024",
    color: "from-emerald-500 to-teal-400",
    achievements: [
      "Provisioned cloud infrastructure across AWS and Alibaba Cloud for enterprise clients",
      "Administered Linux servers (Ubuntu, CentOS) including security patching and monitoring",
      "Managed Nginx, Apache, MySQL, and hosting control panels for consistent availability",
      "Automated routine tasks using Bash scripting, reducing manual operations by 40%",
    ],
  },
];

const projects = [
  {
    title: "MERN App — GitHub Actions + EC2",
    desc: "Full-stack MERN application with a complete CI/CD pipeline using GitHub Actions. Automatically builds, tests, and deploys to an AWS EC2 instance via SSH on every push to main.",
    tags: ["MERN", "GitHub Actions", "AWS EC2", "Docker", "Nginx", "CI/CD"],
    icon: "🚀",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-400/30",
    href: "https://github.com/sandeeptiwari0206/mernapp-githubaction-ec2",
  },
  {
    title: "MERN App — GitHub Actions + ECS",
    desc: "Containerised MERN stack deployed to AWS ECS (Elastic Container Service) via GitHub Actions pipeline. Docker images pushed to ECR, ECS service updated automatically on each release.",
    tags: ["MERN", "AWS ECS", "ECR", "GitHub Actions", "Docker", "CI/CD"],
    icon: "🐳",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-400/30",
    href: "https://github.com/sandeeptiwari0206/mernapp-githubaction-ecs",
  },
  {
    title: "MERN App — ECS + SonarQube",
    desc: "Production-grade MERN deployment on AWS ECS with integrated SonarQube code quality gate in the GitHub Actions pipeline — enforcing security and coverage standards before any release.",
    tags: ["MERN", "AWS ECS", "SonarQube", "GitHub Actions", "Docker", "DevSecOps"],
    icon: "🔍",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-400/30",
    href: "https://github.com/sandeeptiwari0206/mernapp-githubaction-ecs-sonar",
  },
  {
    title: "GMM Product Recommendation System",
    desc: "Machine learning product recommendation engine using Gaussian Mixture Models (GMM) to cluster users by behaviour and deliver personalised product suggestions at scale.",
    tags: ["Python", "Machine Learning", "GMM", "Scikit-learn", "Pandas", "Data Science"],
    icon: "🤖",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-400/30",
    href: "https://github.com/sandeeptiwari0206/GMM-product-Recommendation-System",
  },
  {
    title: "Python App — IaC (CloudFormation)",
    desc: "Python web application provisioned end-to-end using AWS Infrastructure as Code — CloudFormation templates define VPC, EC2, security groups, and auto-scaling for a fully reproducible environment.",
    tags: ["Python", "AWS CloudFormation", "IaC", "EC2", "VPC", "Automation"],
    icon: "🏗️",
    color: "from-rose-500/20 to-pink-500/20",
    border: "border-rose-400/30",
    href: "https://github.com/sandeeptiwari0206/python-app-iac",
  },
  {
    title: "Python App — IaC (Pulumi)",
    desc: "Same Python application infrastructure defined with Pulumi — using real Python code instead of YAML to provision cloud resources, enabling type-safe, testable infrastructure with full programming constructs.",
    tags: ["Python", "Pulumi", "IaC", "AWS", "Cloud Automation"],
    icon: "⚡",
    color: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-400/30",
    href: "https://github.com/sandeeptiwari0206/python-app-iac-pulumi",
  },
];

const certs = [
  {
    name: "AWS Certified Solutions Architect",
    level: "Associate",
    issuer: "Amazon Web Services",
    icon: "aws",
    accent: "#FF9900",
    bg: "rgba(255,153,0,0.1)",
    border: "rgba(255,153,0,0.25)",
  },
  {
    name: "Plesk Obsidian Professional",
    level: "Certification",
    issuer: "Plesk International",
    icon: "plesk",
    accent: "#52BBD9",
    bg: "rgba(82,187,217,0.1)",
    border: "rgba(82,187,217,0.25)",
  },
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled
          ? (dark ? "rgba(10,10,20,0.92)" : "rgba(255,255,255,0.85)")
          : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}` : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-0.5px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          SANDEEP TIWARI
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="hide-mobile">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: dark ? "#cbd5e1" : "#475569", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif" }}
              onMouseEnter={e => { e.target.style.color = "#3b82f6"; e.target.style.background = dark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.08)"; }}
              onMouseLeave={e => { e.target.style.color = dark ? "#cbd5e1" : "#475569"; e.target.style.background = "none"; }}
            >{l}</button>
          ))}
          <button onClick={() => setDark(!dark)}
            style={{ background: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)", border: "none", cursor: "pointer", padding: "6px 12px", borderRadius: 8, fontSize: 16 }}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: dark ? "#e2e8f0" : "#1e293b" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: dark ? "rgba(10,10,20,0.97)" : "rgba(255,255,255,0.97)", padding: "12px 24px 20px", borderTop: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}` }}>
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ display: "block", width: "100%", background: "none", border: "none", cursor: "pointer", padding: "10px 0", textAlign: "left", fontSize: 15, fontWeight: 500, color: dark ? "#cbd5e1" : "#475569", fontFamily: "'DM Sans', sans-serif" }}>
              {l}
            </button>
          ))}
          <button onClick={() => setDark(!dark)} style={{ marginTop: 8, background: "none", border: "none", cursor: "pointer", fontSize: 20 }}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ dark }) {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "80px 24px 60px" }}>
      {/* Animated gradient blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "10%", left: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)", animation: "blob1 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "30%", right: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)", animation: "blob2 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "30%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)", animation: "blob3 9s ease-in-out infinite" }} />
      </div>

      {/* Grid overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"} 1px, transparent 1px), linear-gradient(90deg, ${dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <div style={{ position: "relative", textAlign: "center", maxWidth: 800 }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: dark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: 100, padding: "6px 18px", marginBottom: 28, animation: "fadeUp 0.6s ease 0.1s both" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite", display: "inline-block" }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#3b82f6", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.5px" }}>Available for Opportunities</span>
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 16, animation: "fadeUp 0.6s ease 0.2s both", color: dark ? "#f1f5f9" : "#0f172a" }}>
          SANDEEP{" "}
          <span style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            TIWARI
          </span>
        </h1>

        {/* Title */}
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: dark ? "#94a3b8" : "#64748b", marginBottom: 20, letterSpacing: "2px", textTransform: "uppercase", animation: "fadeUp 0.6s ease 0.3s both" }}>
          Cloud Engineer & DevOps Engineer
        </div>

        {/* Tagline */}
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 2vw, 1.15rem)", color: dark ? "#64748b" : "#94a3b8", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7, animation: "fadeUp 0.6s ease 0.4s both" }}>
          Building scalable cloud infrastructure & automating systems for enterprise reliability at 99.9% uptime.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.6s ease 0.5s both" }}>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{ padding: "14px 32px", borderRadius: 12, border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", color: "#fff", boxShadow: "0 8px 24px rgba(59,130,246,0.35)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 32px rgba(59,130,246,0.45)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 24px rgba(59,130,246,0.35)"; }}
          >
            View Projects →
          </button>
          <a href="https://drive.google.com/uc?export=download&id=1AGVhWJaaQFuNYQbk-VJylneuvqiVhPyJ" download="Sandeep_Tiwari_Resume.pdf"
            style={{ padding: "14px 32px", borderRadius: 12, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: dark ? "#e2e8f0" : "#1e293b", background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)", border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}`, transition: "all 0.2s", display: "inline-block" }}
            onMouseEnter={e => { e.currentTarget.style.background = dark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.09)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"; }}
          >
            ↓ Download Resume
          </a>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 60, flexWrap: "wrap", animation: "fadeUp 0.6s ease 0.6s both" }}>
          {[["4+", "Years Exp."], ["99.9%", "Uptime"], ["40%", "Ops Reduced"], ["35%", "Faster Response"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: dark ? "#64748b" : "#94a3b8", marginTop: 2, letterSpacing: "0.5px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About({ dark }) {
  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel>About Me</SectionLabel>
        <h2 style={headingStyle(dark)}>Passionate about Cloud & Automation</h2>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 48 }}>
        {[
          { icon: "🚀", title: "Cloud Architecture", body: "Designing and managing multi-account AWS and GCP infrastructures that scale seamlessly, from startup MVPs to enterprise workloads." },
          { icon: "🔧", title: "DevOps Automation", body: "Building CI/CD pipelines with Jenkins and GitHub Actions, reducing deployment time and eliminating manual errors through infrastructure-as-code." },
          { icon: "📊", title: "Observability", body: "Implementing full-stack monitoring with Prometheus, Grafana, Datadog, and ELK to ensure proactive incident response and system reliability." },
          { icon: "🛡️", title: "Security-First", body: "Applying IAM least-privilege policies, SSL/TLS management, and vulnerability scanning to keep cloud environments secure and compliant." },
        ].map((card, i) => (
          <FadeIn key={card.title} delay={i * 0.1}>
            <GlassCard dark={dark}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{card.icon}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: 8, color: dark ? "#f1f5f9" : "#1e293b" }}>{card.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: dark ? "#94a3b8" : "#64748b", lineHeight: 1.7 }}>{card.body}</p>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
function Skills({ dark }) {
  return (
    <section id="skills" style={{ padding: "100px 24px", background: dark ? "rgba(255,255,255,0.02)" : "rgba(248,250,252,0.8)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Technical Skills</SectionLabel>
          <h2 style={headingStyle(dark)}>Tools & Technologies</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 48 }}>
          {skills.map((s, i) => (
            <FadeIn key={s.category} delay={i * 0.08}>
              <div style={{
                background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
                border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                borderRadius: 16, padding: 24,
                backdropFilter: "blur(12px)",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.06)",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = dark ? "0 12px 40px rgba(0,0,0,0.4)" : "0 12px 40px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${s.color.replace("from-", "").replace(" to-", ", ")})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: dark ? "#f1f5f9" : "#1e293b" }}>{s.category}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.items.map(item => (
                    <span key={item} style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 500, padding: "4px 10px", borderRadius: 6, background: dark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.08)", color: dark ? "#93c5fd" : "#2563eb", border: `1px solid ${dark ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0.15)"}` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
function Experience({ dark }) {
  return (
    <section id="experience" style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel>Career</SectionLabel>
        <h2 style={headingStyle(dark)}>Work Experience</h2>
      </FadeIn>
      <div style={{ marginTop: 48, position: "relative" }}>
        {/* Timeline line */}
        <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4)`, borderRadius: 2 }} />

        {experiences.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.15}>
            <div style={{ position: "relative", paddingLeft: 60, marginBottom: 48 }}>
              {/* Dot */}
              <div style={{ position: "absolute", left: 8, top: 8, width: 24, height: 24, borderRadius: "50%", background: `linear-gradient(135deg, ${exp.color.replace("from-", "").replace(" to-", ", ")})`, boxShadow: "0 0 0 4px " + (dark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.9)") }} />

              <div style={{
                background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.95)",
                border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                borderRadius: 16, padding: "24px 28px",
                backdropFilter: "blur(12px)",
                boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.25)" : "0 4px 24px rgba(0,0,0,0.06)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: dark ? "#f1f5f9" : "#1e293b", marginBottom: 2 }}>{exp.role}</h3>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, background: `linear-gradient(135deg, ${exp.color.replace("from-", "").replace(" to-", ", ")})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{exp.company} · {exp.location}</div>
                  </div>
                  <span style={{ fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: dark ? "#64748b" : "#94a3b8", whiteSpace: "nowrap", marginTop: 2 }}>{exp.period}</span>
                </div>
                <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: "none" }}>
                  {exp.achievements.map((a, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "#3b82f6", marginTop: 2, flexShrink: 0 }}>▸</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: dark ? "#94a3b8" : "#64748b", lineHeight: 1.6 }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects({ dark }) {
  return (
    <section id="projects" style={{ padding: "100px 24px", background: dark ? "rgba(255,255,255,0.02)" : "rgba(248,250,252,0.8)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Projects</SectionLabel>
          <h2 style={headingStyle(dark)}>Featured Work</h2>
        </FadeIn>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
          marginTop: 48,
        }} className="projects-grid">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div style={{
                background: dark ? "rgba(255,255,255,0.04)" : "#ffffff",
                border: `1px solid ${dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)"}`,
                borderRadius: 14,
                padding: "20px",
                backdropFilter: "blur(16px)",
                boxShadow: dark ? "0 2px 20px rgba(0,0,0,0.28)" : "0 2px 16px rgba(0,0,0,0.06)",
                transition: "all 0.25s ease",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                height: "100%",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = dark ? "0 14px 36px rgba(0,0,0,0.42)" : "0 14px 32px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = dark ? "0 2px 20px rgba(0,0,0,0.28)" : "0 2px 16px rgba(0,0,0,0.06)"; }}
              >
                {/* Icon + Title */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ fontSize: 24, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{p.icon}</span>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: dark ? "#f1f5f9" : "#1e293b",
                    lineHeight: 1.4,
                    margin: 0,
                  }}>{p.title}</h3>
                </div>

                {/* Description */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12.5,
                  color: dark ? "#94a3b8" : "#64748b",
                  lineHeight: 1.6,
                  margin: 0,
                  flexGrow: 1,
                }}>{p.desc}</p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 10,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      padding: "2px 7px",
                      borderRadius: 4,
                      background: dark ? "rgba(139,92,246,0.13)" : "rgba(139,92,246,0.07)",
                      color: dark ? "#c4b5fd" : "#7c3aed",
                      border: `1px solid ${dark ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.16)"}`,
                      whiteSpace: "nowrap",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a href={p.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    fontSize: 12, fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                    color: dark ? "#3b82f6" : "#2563eb", textDecoration: "none",
                    padding: "6px 13px", borderRadius: 7,
                    background: dark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.07)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    width: "fit-content", transition: "all 0.2s",
                    marginTop: 2,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = dark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.07)"; }}
                >
                  ↗ View on GitHub
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
function Certifications({ dark }) {
  return (
    <section id="certifications" style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel>Credentials</SectionLabel>
        <h2 style={headingStyle(dark)}>Certifications</h2>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 48 }}>
        {certs.map((c, i) => (
          <FadeIn key={c.name} delay={i * 0.15}>
            <div style={{
              background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.95)",
              border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
              borderRadius: 20, padding: 32,
              backdropFilter: "blur(12px)",
              textAlign: "center",
              boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.06)",
              transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ width: 72, height: 72, borderRadius: 16, background: c.bg, border: `1.5px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                {c.icon === "aws" ? <AWSIcon size={44} /> : <PleskIcon size={44} />}
              </div>
              <div style={{ fontSize: 11, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: "1.5px", color: c.accent, textTransform: "uppercase", marginBottom: 8 }}>{c.level}</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.05rem", color: dark ? "#f1f5f9" : "#1e293b", marginBottom: 8 }}>{c.name}</h3>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: dark ? "#64748b" : "#94a3b8" }}>{c.issuer}</div>
              <div style={{ marginTop: 18, width: "100%", height: 3, borderRadius: 2, background: `linear-gradient(90deg, ${c.accent}, ${c.accent}88)` }} />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
// Uses EmailJS (free tier — no backend, no password needed).
// Setup steps:
//   1. Go to https://www.emailjs.com and create a free account
//   2. Add a Gmail service → connect tiwarisandy6@gmail.com → copy the Service ID
//   3. Create an Email Template with variables {{from_name}}, {{from_email}}, {{message}}
//      and set "To Email" = tiwarisandy6@gmail.com → copy Template ID
//   4. Go to Account → API Keys → copy your Public Key
//   5. Replace the three placeholder strings below with your real IDs
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";   // e.g. "abcDEFghiJKL"

function Contact({ dark }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: "tiwarisandy6@gmail.com",
          },
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputStyle = {
    width: "100%", boxSizing: "border-box",
    padding: "12px 16px", borderRadius: 10,
    border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
    background: dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.9)",
    color: dark ? "#f1f5f9" : "#1e293b",
    fontSize: 14, fontFamily: "'DM Sans', sans-serif",
    outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: dark ? "rgba(255,255,255,0.02)" : "rgba(248,250,252,0.8)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 style={headingStyle(dark)}>Let's Work Together</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginTop: 48 }}>
          {/* Info */}
          <FadeIn>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: dark ? "#94a3b8" : "#64748b", lineHeight: 1.8, marginBottom: 32 }}>
                Open to Cloud Engineering and DevOps roles. Let's connect and build reliable, scalable infrastructure together.
              </p>
              {[
                { icon: <EmailIcon size={18} color={dark ? "#93c5fd" : "#3b82f6"} />, label: "Email", val: "tiwarisandy6@gmail.com", href: "mailto:tiwarisandy6@gmail.com" },
                { icon: <PhoneIcon size={18} color={dark ? "#93c5fd" : "#3b82f6"} />, label: "Phone", val: "+91-8233232895", href: "tel:+918233232895" },
                { icon: <GitHubIcon size={18} color={dark ? "#93c5fd" : "#3b82f6"} />, label: "GitHub", val: "github.com/sandeeptiwari0206", href: "https://github.com/sandeeptiwari0206" },
                { icon: <LinkedInIcon size={18} color={dark ? "#93c5fd" : "#3b82f6"} />, label: "LinkedIn", val: "linkedin.com/in/sandeep-tiwari-616a33116", href: "https://www.linkedin.com/in/sandeep-tiwari-616a33116/" },
                { icon: <LocationIcon size={18} color={dark ? "#93c5fd" : "#3b82f6"} />, label: "Location", val: "Jaipur, Rajasthan, India", href: null },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: dark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: dark ? "#64748b" : "#94a3b8", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: dark ? "#93c5fd" : "#2563eb", textDecoration: "none", wordBreak: "break-all" }}>{item.val}</a>
                      : <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: dark ? "#f1f5f9" : "#1e293b" }}>{item.val}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <div style={{ background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.95)", border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`, borderRadius: 20, padding: 28, backdropFilter: "blur(12px)", boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.3)" : "0 4px 24px rgba(0,0,0,0.06)" }}>
              {status === "success" && (
                <div style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 16, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#22c55e", textAlign: "center" }}>
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 10, padding: "12px 16px", marginBottom: 16, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#f87171", textAlign: "center" }}>
                  ⚠️ Failed to send. Please add your EmailJS credentials or email directly.
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input style={inputStyle} placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input style={inputStyle} placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <textarea style={{ ...inputStyle, height: 120, resize: "vertical" }} placeholder="Your Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                <button onClick={handleSubmit} disabled={status === "sending"}
                  style={{ padding: "13px", borderRadius: 10, border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", color: "#fff", boxShadow: "0 8px 24px rgba(59,130,246,0.3)", transition: "all 0.2s", opacity: status === "sending" ? 0.7 : 1 }}
                  onMouseEnter={e => { if (status !== "sending") e.target.style.boxShadow = "0 12px 32px rgba(59,130,246,0.45)"; }}
                  onMouseLeave={e => e.target.style.boxShadow = "0 8px 24px rgba(59,130,246,0.3)"}
                >
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: dark ? "#475569" : "#94a3b8", textAlign: "center", lineHeight: 1.6 }}>
                  Powered by EmailJS · No password required · Setup instructions in code comments
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ dark }) {
  return (
    <footer style={{ padding: "40px 24px", borderTop: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 16, background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          SANDEEP TIWARI
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: dark ? "#475569" : "#94a3b8" }}>
          © 2025 Sandeep Tiwari. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { icon: <GitHubIcon size={18} color={dark ? "#94a3b8" : "#475569"} />, label: "GitHub", href: "https://github.com/sandeeptiwari0206", hoverBg: "rgba(36,41,47,0.15)" },
            { icon: <LinkedInIcon size={18} color={dark ? "#94a3b8" : "#475569"} />, label: "LinkedIn", href: "https://www.linkedin.com/in/sandeep-tiwari-616a33116/", hoverBg: "rgba(10,102,194,0.15)" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ width: 38, height: 38, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = s.hoverBg; e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
              title={s.label}
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 100, padding: "5px 16px", marginBottom: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 12, color: "#3b82f6", letterSpacing: "1px", textTransform: "uppercase" }}>
      {children}
    </div>
  );
}

function GlassCard({ children, dark }) {
  return (
    <div style={{
      background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
      border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
      borderRadius: 16, padding: 24,
      backdropFilter: "blur(12px)",
      boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.25)" : "0 4px 24px rgba(0,0,0,0.06)",
      height: "100%", transition: "transform 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >{children}</div>
  );
}

function headingStyle(dark) {
  return {
    fontFamily: "'Syne', sans-serif", fontWeight: 800,
    fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
    color: dark ? "#f1f5f9" : "#0f172a",
    letterSpacing: "-1px", lineHeight: 1.1,
  };
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          background: ${dark ? "#080c14" : "#f8fafc"};
          color: ${dark ? "#f1f5f9" : "#1e293b"};
          transition: background 0.3s, color 0.3s;
          scroll-behavior: smooth;
          font-family: 'DM Sans', sans-serif;
        }
        @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-20px) scale(1.05)} 66%{transform:translate(-20px,10px) scale(0.95)} }
        @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-25px,15px) scale(1.08)} 66%{transform:translate(20px,-10px) scale(0.92)} }
        @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(15px,25px) scale(0.97)} 66%{transform:translate(-30px,-15px) scale(1.04)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .hide-mobile { display:flex; }
        .show-mobile { display:none; }
        @media(max-width:768px){
          .hide-mobile{display:none!important;}
          .show-mobile{display:block!important;}
        }
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:rgba(99,102,241,0.4);border-radius:3px}
        .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        @media(max-width:1024px){ .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media(max-width:640px){ .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <Navbar dark={dark} setDark={setDark} />
      <main style={{ background: dark ? "#080c14" : "#f8fafc", minHeight: "100vh", transition: "background 0.3s" }}>
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Experience dark={dark} />
        <Projects dark={dark} />
        <Certifications dark={dark} />
        <Contact dark={dark} />
        <Footer dark={dark} />
      </main>
    </>
  );
}