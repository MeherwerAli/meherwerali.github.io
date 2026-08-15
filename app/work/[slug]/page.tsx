import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { flagshipProjects } from "../../portfolio-data";
import { SectionRule, SiteFooter, SiteHeader } from "../../site-chrome";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return flagshipProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = flagshipProjects.find((candidate) => candidate.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Meherwer Ali`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = flagshipProjects.find((candidate) => candidate.slug === slug);
  if (!project) notFound();

  const details = [
    ["Problem", project.caseStudy.problem],
    ["Architecture", project.caseStudy.architecture],
    ["Failure semantics", project.caseStudy.failure],
    ["Security boundary", project.caseStudy.security],
    ["Demo", project.caseStudy.demo],
    ["Decisions", project.caseStudy.decisions],
    ["Known limitations", project.caseStudy.limitations],
  ] as const;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader active="work" />
      <main id="main-content" className="page-main case-study-page">
        <header className="shell case-study-intro">
          <a className="back-link" href="/work/">← All work</a>
          <p className="code-label">/* {project.category} */</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </header>

        <section className="shell case-study-body" aria-labelledby="case-study-title">
          <SectionRule>Architecture dossier</SectionRule>
          <h2 className="sr-only" id="case-study-title">Architecture dossier</h2>
          <div className="case-study-grid">
            {details.map(([label, copy]) => (
              <article key={label}>
                <h2><span>#</span> {label}</h2>
                <p>{copy}</p>
              </article>
            ))}
            <article>
              <h2><span>#</span> Benchmark / eval evidence</h2>
              <ul className="evidence-list">
                {project.caseStudy.evidence.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
          {project.repository ? (
            <a className="repository-link" href={project.repository} target="_blank" rel="noreferrer">
              View source repository <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <p className="source-note"><span>//</span> {project.sourceNote}</p>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
