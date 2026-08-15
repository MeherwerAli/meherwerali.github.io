import type { Metadata } from "next";
import {
  aiProjects,
  experienceProjects,
  infrastructureProjects,
  integrationProjects,
  publicBackendProjects,
  supportingProjects,
} from "../portfolio-data";
import { ProjectCard } from "../project-card";
import { SectionRule, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Work — Meherwer Ali",
  description: "Distributed systems, cloud infrastructure, reliable AI, frontend, and backend engineering case studies.",
};

const workGroups = [
  {
    title: "Software & distributed systems",
    description: "Distributed and service-oriented systems across Java, Spring, Node.js, and public engineering references.",
    projects: [...experienceProjects, ...publicBackendProjects],
  },
  {
    title: "Production infrastructure",
    description: "Kubernetes, GKE, GCP, AWS, Docker, IAM, deployment, and platform operations.",
    projects: infrastructureProjects,
  },
  {
    title: "AI integration & applied AI",
    description: "AI appears as a bounded stage or product capability built on explicit backend contracts.",
    projects: [...integrationProjects, ...aiProjects],
  },
  {
    title: "Supporting engineering projects",
    description: "Smaller public references for network automation, typed document pipelines, and engineering knowledge.",
    projects: supportingProjects,
  },
] as const;

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader active="work" />
      <main id="main-content" className="page-main">
        <header className="shell page-intro">
          <h1>Work</h1>
          <p>
            Software systems across distributed architecture, Java and Spring Boot, Node.js, event-driven platforms, cloud infrastructure, frontend delivery, and reliable AI integration.
          </p>
        </header>
        <div className="shell projects-section">
          {workGroups.map((group) => {
            const titleId = `${group.title.replaceAll(" ", "-").replaceAll("&", "and").toLowerCase()}-title`;
            return (
              <section className="project-group" aria-labelledby={titleId} key={group.title}>
                <SectionRule>{group.title}</SectionRule>
                <h2 className="sr-only" id={titleId}>{group.title}</h2>
                <p className="project-group-intro">{group.description}</p>
                <div className="project-list">
                  {group.projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
