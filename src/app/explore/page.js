"use client";

import { useState } from "react";
import FrameworkCard from "../../components/FrameworkCard";
import { frameworks } from "../../lib/frameworks";

const topicFilters = ["All topics", ...new Set(frameworks.flatMap((framework) => framework.tags))];

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All topics");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleFrameworks = frameworks.filter((framework) => {
    const searchableText = [framework.name, framework.category, framework.description, ...framework.tags]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery)
      && (topic === "All topics" || framework.tags.includes(topic));
  });

  return (
    <main className="page-panel explore-page">
      <header className="page-heading">
        <p className="eyebrow muted">Find your next tool</p>
        <h1>Explore frameworks</h1>
        <p>Start with a friendly overview, then follow the topics that catch your interest.</p>
      </header>

      <section className="explore-controls" aria-label="Search frameworks">
        <label className="search-box" htmlFor="framework-search">
          <span aria-hidden="true">⌕</span>
          <input
            id="framework-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search frameworks or topics"
          />
        </label>
        <label className="filter-control" htmlFor="topic-filter">
          <span>Topic</span>
          <select id="topic-filter" value={topic} onChange={(event) => setTopic(event.target.value)}>
            {topicFilters.map((filter) => <option key={filter}>{filter}</option>)}
          </select>
        </label>
      </section>

      <p className="result-count" aria-live="polite">
        {visibleFrameworks.length} {visibleFrameworks.length === 1 ? "framework" : "frameworks"}
      </p>
      {visibleFrameworks.length > 0 ? (
        <div className="framework-grid explore-grid">
          {visibleFrameworks.map((framework) => (
            <FrameworkCard key={framework.slug} framework={framework} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No frameworks match that search. Try another name or topic.</p>
      )}
    </main>
  );
}