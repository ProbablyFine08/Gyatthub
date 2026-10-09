import Link from "next/link";

export default function FrameworkCard({ framework }) {
  return (
    <article className={`framework-card accent-${framework.accent}`}>
      <div className="framework-card-topline">
        <span className="framework-category">{framework.category}</span>
        <span className="framework-mark" aria-hidden="true">{framework.name.slice(0, 1)}</span>
      </div>
      <h3>{framework.name}</h3>
      <p>{framework.description}</p>
      <ul className="tag-list" aria-label={`${framework.name} topics`}>
        {framework.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <Link className="framework-card-link" href={`/docs#${framework.slug}`}>
        View guide <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}