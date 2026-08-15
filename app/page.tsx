import { featuredProjects } from "./portfolio-data";
import { ProjectCard } from "./project-card";
import { SectionRule, SiteFooter, SiteHeader } from "./site-chrome";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader active="home" />
      <main id="main-content">
        <section className="home-hero grid-background">
          <div className="shell hero-inner">
            <p className="code-label">/* Senior Software Engineer &amp; Tech Lead */</p>
            <h1 className="hero-title">
              <span>Hi, I&apos;m Meherwer Ali.</span>
              <span className="hero-title-muted">I build software systems<br className="desktop-break" /> that scale<i className="cursor" aria-hidden="true" /></span>
            </h1>
            <p className="hero-summary">
              Senior software engineer and tech lead building distributed systems, cloud platforms, reliable AI integrations, and modern web products across Java, Node.js, and TypeScript.
            </p>
            <a className="primary-button" href="/work/">View Work <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="shell featured-section" aria-labelledby="featured-title">
          <SectionRule>Featured Work</SectionRule>
          <h2 className="sr-only" id="featured-title">Featured work</h2>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard project={project} compact key={project.slug} />
            ))}
          </div>
          <a className="view-all-link" href="/work/"><span>//</span> View all projects <i aria-hidden="true">→</i></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
