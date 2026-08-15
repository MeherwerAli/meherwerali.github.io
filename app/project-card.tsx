import type { Project } from "./portfolio-data";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const href = project.caseStudy ? `/work/${project.slug}/` : project.repository;
  const external = !project.caseStudy;

  return (
    <a
      className={`project-card${compact ? " project-card-compact" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className="project-title-row">
        <div>
          <span className="project-category">{project.category}</span>
          <h2>{project.title}</h2>
        </div>
        <span className="project-arrow" aria-hidden="true">→</span>
      </div>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.stack.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="project-result"><span>//</span> {project.result}</div>
    </a>
  );
}
