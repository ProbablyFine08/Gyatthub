const navbar = [
  {label: "Lessons", href: "/lessons.js"},
]

const navItems = [
  { label: "Home", active: true, icon: "⌂" },
  { label: "Explore Frameworks", active: false, icon: "◎" },
  { label: "AI Tutor", active: false, icon: "✦" },
  { label: "Saved Lessons", active: false, icon: "☆" },
];

const frameworkCards = [
  {
    name: "Next.js",
    description: "Build full-stack apps with server components and routing.",
    progress: "72% ready",
    accent: "indigo",
  },
  {
    name: "React",
    description: "Master reusable components and state-driven UI.",
    progress: "84% ready",
    accent: "lavender",
  },
  {
    name: "Tailwind CSS",
    description: "Style modern interfaces rapidly with utility classes.",
    progress: "61% ready",
    accent: "sky",
  },
];

const activityItems = [
  { title: "Completed: Routing basics", time: "2 hours ago", tone: "good" },
  { title: "Saved: Next.js app structure cheat sheet", time: "Yesterday", tone: "neutral" },
  { title: "AI Tutor suggested: React state practice set", time: "2 days ago", tone: "focus" },
];

function SidebarLink({ label, icon, active }) {
  return (
    <button type="button" className={`sidebar-link ${active ? "active" : ""}`}>
      <span aria-hidden="true" className="sidebar-icon">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

function FrameworkCard({ name, description, progress, accent }) {
  return (
    <article className={`framework-card accent-${accent}`}>
      <div className="card-topline">
        <span className="card-badge">{name}</span>
        <span className="mini-pill">{progress}</span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button type="button" className="card-action">
        Continue lesson
      </button>
    </article>
  );
}

function ActivityItem({ title, time, tone }) {
  return (
    <li className="activity-item">
      <span className={`status-dot ${tone}`} aria-hidden="true" />
      <div>
        <p>{title}</p>
        <time>{time}</time>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar" aria-label="Sidebar navigation">
        <div className="brand-row">
          <div className="brand-mark">F</div>
          <div>
            <p className="eyebrow">AI learning</p>
            <h1>Framework Buddy</h1>
          </div>
        </div>

        <nav className="nav-list" aria-label="Main navigation">
          {navItems.map((item) => (
            <SidebarLink
              key={item.label}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </nav>

        <div className="local-ai-panel" aria-live="polite">
          <div className="local-ai-header">
            <span className="label">Local AI Mode</span>
            <span className="status-chip disconnected">
              <span className="status-ring" aria-hidden="true" />
              Offline
            </span>
          </div>
          <p>No local model is currently connected, so AI guidance stays preview-only.</p>
        </div>
      </aside>

      <section className="main-panel" aria-label="Framework Buddy dashboard">
        <header className="topbar">
          <label className="search-box" htmlFor="dashboard-search">
            <span aria-hidden="true">⌕</span>
            <input
              id="dashboard-search"
              type="search"
              placeholder="Search lessons, topics, or frameworks"
              aria-label="Search lessons, topics, or frameworks"
            />
          </label>
          <button type="button" className="profile-button" aria-label="Open profile">
            AM
          </button>
        </header>

        <div className="welcome-row">
          <div>
            <p className="eyebrow muted">Welcome back</p>
            <h2>Build your next frontend skill.</h2>
          </div>
          <button type="button" className="primary-button">
            Start learning
          </button>
        </div>

        <section className="metric-strip" aria-label="Progress summary">
          <div className="metric-box">
            <span className="metric-label">Lessons this week</span>
            <strong>12</strong>
          </div>
          <div className="metric-box">
            <span className="metric-label">AI suggestions</span>
            <strong>7</strong>
          </div>
          <div className="metric-box">
            <span className="metric-label">Saved guides</span>
            <strong>18</strong>
          </div>
        </section>

        <section aria-labelledby="frameworks-heading">
          <div className="section-heading">
            <h3 id="frameworks-heading">Explore Frameworks</h3>
            <a href="#" aria-label="View all frameworks">
              View all
            </a>
          </div>

          <div className="framework-grid">
            {frameworkCards.map((framework) => (
              <FrameworkCard key={framework.name} {...framework} />
            ))}
          </div>
        </section>

        <section className="activity-panel" aria-labelledby="activity-heading">
          <div className="section-heading">
            <h3 id="activity-heading">Recent Activity</h3>
            <a href="#" aria-label="View recent activity">
              See all
            </a>
          </div>

          <ul className="activity-list">
            {activityItems.map((item) => (
              <ActivityItem key={item.title} {...item} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}