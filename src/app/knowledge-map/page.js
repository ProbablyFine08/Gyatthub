"use client";

import { useEffect, useState } from "react";
import { getLearningState } from "../../lib/metrics/store";
import { frameworks } from "../../lib/frameworks";

export default function KnowledgeMap() {
  const [concepts, setConcepts] = useState({});

  useEffect(() => {
    const state = getLearningState();
    setConcepts(state.knowledgeMap.concepts);
  }, []);

  return (
    <main className="page-panel home-page">
      <div className="home-content">
        <header className="home-heading">
          <p className="eyebrow muted">Your Learning Journey</p>
          <h1>Knowledge Map</h1>
          <p className="home-subtitle">
            A visual representation of the concepts you've explored with Gyatthub.
          </p>
        </header>

        <div className="knowledge-map-container">
          <div className="knowledge-grid">
            {frameworks.map((framework) => (
              <div key={framework.slug} className="framework-cluster">
                <h3 className="cluster-title">{framework.name}</h3>
                <div className="concept-cloud">
                  {framework.tags.map((tag) => {
                    const status = concepts[tag]?.status || "locked";
                    return (
                      <span
                        key={tag}
                        className={`concept-node ${status}`}
                        title={status === "locked" ? "Not yet explored" : `Explored on ${concepts[tag]?.timestamp}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
