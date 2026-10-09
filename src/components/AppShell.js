"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/", icon: "⌂" },
  { label: "Documentation", href: "/docs", icon: "▤" },
  { label: "Explore Frameworks", href: "/explore", icon: "◎" },
];

export default function AppShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Framework Buddy sidebar">
        <div className="sidebar-top">
          <Link className="brand-row" href="/">
            <span className="brand-mark" aria-hidden="true">F</span>
            <span>
              <span className="eyebrow">AI learning</span>
              <span className="brand-name">Framework Buddy</span>
            </span>
          </Link>

          <nav className="nav-list" aria-label="Main navigation">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  className={`sidebar-link${active ? " active" : ""}`}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                >
                  <span aria-hidden="true" className="sidebar-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <section className="local-ai-panel" aria-label="Local AI connection status">
          <div className="local-ai-header">
            <span className="label">Local AI</span>
            <span className="status-chip disconnected">
              <span className="status-ring" aria-hidden="true" />
              Not Connected
            </span>
          </div>
          <p>Connect a local model to enable AI responses.</p>
        </section>
      </aside>

      <div className="app-content">{children}</div>
    </div>
  );
}