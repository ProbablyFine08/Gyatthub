"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FrameworkCard from "../components/FrameworkCard";
import { frameworks } from "../lib/frameworks";
import { askAI } from "../lib/ai/ollama";
import { getLearningState, incrementQuestionCount, markMilestone, trackFramework, markConcept } from "../lib/metrics/store";

const examplePrompts = [
  "Explain how Next.js App Router works.",
  "What's the difference between React and Next.js?",
  "Teach me Tailwind CSS from scratch.",
  "How do components and props work?",
];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    setMetrics(getLearningState().metrics);
  }, []);

  async function submitPrompt(event) {
    event.preventDefault();
    const message = prompt.trim();

    if (!message) return;

    setMessages((currentMessages) => [...currentMessages, { role: "user", content: message }]);
    setPrompt("");
    setIsLoading(true);

    try {
      const response = await askAI(message);
      setMessages((currentMessages) => [...currentMessages, { role: "ai", content: response }]);

      // Track Learning Progress
      const newCount = incrementQuestionCount();
      setMetrics(prev => prev ? { ...prev, totalQuestions: newCount } : null);

      // Basic Framework Detection
      frameworks.forEach(f => {
        if (message.toLowerCase().includes(f.name.toLowerCase())) {
          trackFramework(f.slug);
          markConcept(f.name, "introduced");
        }
      });

      // Milestone Detection (Pedagogical Check)
      if (response.includes("Check for Understanding") || response.includes("Does that make sense?")) {
        // Future: Track that a CFU was asked
      }
    } catch (error) {
      setMessages((currentMessages) => [...currentMessages, { role: "ai", content: "Error: Could not connect to local AI. Make sure Ollama is running." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="page-panel home-page">
      <div className="home-content">
        <header className="home-heading">
          <p className="eyebrow muted">Your framework learning companion</p>
          <h1>Learn frameworks.<br />Build with confidence.</h1>
          <p className="home-subtitle">
            Gyatthub helps beginners learn modern programming frameworks with
            clear, practical guidance, one question at a time.
          </p>
        </header>

        <section className="chat-section" aria-label="Ask Gyatthub">
          {messages.length > 0 && (
            <div className="message-list" aria-live="polite" aria-label="Your messages">
              {messages.map((msg, index) => (
                <article className={`message ${msg.role === "user" ? "user-message" : "ai-message"}`} key={index}>
                  <span className="message-avatar" aria-hidden="true">
                    {msg.role === "user" ? "Y" : "B"}
                  </span>
                  <div className="message-content">
                    {msg.role === "ai" ? (
                      <div className="ai-code-block">
                        <p className="ai-text">{msg.content}</p>
                      </div>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                </article>
              ))}
              {isLoading && (
                <article className="ai-message">
                  <span className="message-avatar" aria-hidden="true">B</span>
                  <div className="message-content">
                    <p className="ai-text loading-text">Gyatthub is thinking...</p>
                  </div>
                </article>
              )}
            </div>
          )}

          <form className="prompt-form" onSubmit={submitPrompt}>
            <label className="visually-hidden" htmlFor="prompt-input">Ask a programming question</label>
            <textarea
              id="prompt-input"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  event.currentTarget.form.requestSubmit();
                }
              }}
              placeholder="Ask anything about Next.js, React, Tailwind CSS..."
              rows={2}
            />
            <button className="send-button" type="submit" aria-label="Send prompt" disabled={!prompt.trim()}>
              <span aria-hidden="true">↑</span>
            </button>
          </form>

          {messages.length === 0 && (
            <div className="prompt-examples" aria-label="Example prompts">
              {examplePrompts.map((example) => (
                <button key={example} type="button" onClick={() => setPrompt(example)}>
                  <span aria-hidden="true">↗</span>
                  {example}
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="home-frameworks" aria-labelledby="frameworks-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow muted">Pick a place to begin</p>
              <h2 id="frameworks-heading">Explore frameworks</h2>
            </div>
            <Link href="/explore" className="text-link">Browse all <span aria-hidden="true">→</span></Link>
          </div>
          <div className="framework-grid">
            {frameworks.map((framework) => (
              <FrameworkCard key={framework.slug} framework={framework} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}