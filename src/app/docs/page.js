const sections = [
  { id: "getting-started", label: "Getting started" },
  { id: "ask-a-question", label: "Ask a question" },
  { id: "explore-frameworks", label: "Explore frameworks" },
  { id: "local-ai", label: "Local AI status" },
  { id: "built-with", label: "About this project" },
];

export const metadata = {
  title: "Documentation | Framework Buddy",
  description: "A guide to using Framework Buddy.",
};

export default function DocsPage() {
  return (
    <main className="docs-page">
      <header className="docs-header">
        <div>
          <span className="docs-product">Framework Buddy</span>
          <span className="docs-divider" aria-hidden="true">/</span>
          <span>Documentation</span>
        </div>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Next.js Docs <span aria-hidden="true">↗</span></a>
      </header>

      <div className="docs-layout">
        <nav className="docs-sidebar" aria-label="Documentation sections">
          <p className="docs-nav-heading">Framework Buddy</p>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>{section.label}</a>
          ))}
        </nav>

        <article className="docs-article">
          <div className="docs-breadcrumb"><span>Framework Buddy</span><span aria-hidden="true">/</span><span>Guide</span></div>
          <h1>Framework Buddy Guide</h1>
          <p className="docs-lead">A quick guide to finding your way around Framework Buddy and getting started with framework learning.</p>

          <section id="getting-started" className="docs-section">
            <h2>Getting started</h2>
            <p>Framework Buddy is a learning companion for people getting started with frontend frameworks. Use the main navigation to move between the AI chat home, this guide, and the framework directory.</p>
            <ol>
              <li>Choose a framework from Home or Explore Frameworks.</li>
              <li>Browse its topic tags to find a concept you want to learn.</li>
              <li>Try a sample question or write your own prompt on Home.</li>
            </ol>
          </section>

          <section id="ask-a-question" className="docs-section">
            <h2>Ask a question</h2>
            <p>On Home, select an example prompt to place it in the composer, or type a question about Next.js, React, Tailwind CSS, and related concepts. Submit a non-empty prompt to see it appear in the conversation.</p>
            <div className="docs-callout"><strong>Current limitation</strong><p>Framework Buddy does not provide AI responses yet. It displays submitted messages, but does not send them to an AI service.</p></div>
          </section>

          <section id="explore-frameworks" className="docs-section">
            <h2>Explore frameworks</h2>
            <p>Search the framework directory by name, description, or topic. Use the topic filter to narrow the list, then open a guide from a framework card for related learning information.</p>
            <div className="docs-framework-links">
              <a id="nextjs" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Next.js <span>Official documentation ↗</span></a>
              <a id="react" href="https://react.dev/learn" target="_blank" rel="noreferrer">React <span>Official documentation ↗</span></a>
              <a id="tailwind-css" href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">Tailwind CSS <span>Official documentation ↗</span></a>
            </div>
          </section>

          <section id="local-ai" className="docs-section">
            <h2>Local AI status</h2>
            <p>The sidebar shows <strong>Not Connected</strong> until a local AI model is actually connected. The status is informational; no model connection is currently established.</p>
          </section>

          <section id="built-with" className="docs-section">
            <h2>About this project</h2>
            <p>GitHub Copilot and Claude were used as development tools to help create the Framework Buddy web app. They are not connected to the app's chat experience.</p>
          </section>
        </article>

        <aside className="docs-toc" aria-label="On this page">
          <p>On this page</p>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>{section.label}</a>
          ))}
        </aside>
      </div>
    </main>
  );
}