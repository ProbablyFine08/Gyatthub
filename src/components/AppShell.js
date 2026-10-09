"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import brandLogo from "./img/favicon.svg";

const navigation = [
  { label: "Home", href: "/", icon: "⌂" },
  { label: "Knowledge Map", href: "/knowledge-map", icon: "⧉" },
  { label: "Documentation", href: "/docs", icon: "▤" },
  { label: "Explore Frameworks", href: "/explore", icon: "◎" },
];

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [isConnected, setIsConnected] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    async function checkConnection() {
      try {
        const response = await fetch("http://localhost:11434/api/tags");
        if (response.ok) setIsConnected(true);
      } catch (e) {
        setIsConnected(false);
      }
    }
    checkConnection();
    const interval = setInterval(checkConnection, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`} aria-label="Gyatthub sidebar">
        <div className="sidebar-top">
          <div className="brand-row">
            <Link className="brand-logo-link" href="/">
              <img id="brand-image" src={brandLogo.src} alt="Gyatthub" />
            </Link>
            {!isCollapsed && <span className="brand-name">Gyatthub</span>}
          </div>

          <button
            className="collapse-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <div className={`burger-icon ${!isCollapsed ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

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
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <section className="local-ai-panel" aria-label="Local AI connection status">
          <div className="local-ai-header">
            {!isCollapsed && <span className="label">Local AI</span>}
            <button
              onClick={() => !isConnected && setShowGuide(true)}
              className={`status-chip ${isConnected ? "" : "disconnected"}`}
              style={{ background: 'none', border: 'none', cursor: isConnected ? 'default' : 'pointer', textAlign: 'center' }}
            >
              <span className={`status-ring ${isConnected ? 'connected' : ''}`} aria-hidden="true" />
              {!isCollapsed && <span>{isConnected ? "Connected" : "Not Connected"}</span>}
            </button>
          </div>
          {!isCollapsed && <p>{isConnected ? "Local model is active and ready." : "Click 'Not Connected' to learn how to set up."}</p>}
        </section>
      </aside>

      <div className="app-content">
        {showGuide && (
          <div className="setup-modal-overlay" onClick={() => setShowGuide(false)}>
            <div className="setup-modal" onClick={(e) => e.stopPropagation()}>
              <h2>🚀 Connect Your Local AI</h2>
              <p>To use Gyatthub, you need to run a local LLM using Ollama.</p>

              <div className="setup-steps">
                <div className="step">
                  <strong>1. Install Ollama</strong>
                  <p>Download and install from <a href="https://ollama.com" target="_blank" rel="noreferrer">ollama.com</a></p>
                </div>
                <div className="step">
                  <strong>2. Download the Model</strong>
                  <p>Run this in your terminal: <code>ollama run phi3</code></p>
                </div>
                <div className="step">
                  <strong>3. Enable Browser Access (CORS)</strong>
                  <p>Run this command to allow the website to talk to Ollama:</p>
                  <code className="command-block">$env:OLLAMA_ORIGINS="*"; ollama serve</code>
                </div>
              </div>

              <button className="primary-button" onClick={() => setShowGuide(false)}>I've done this!</button>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}