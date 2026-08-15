import type { Metadata } from "next";
import { SectionRule, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "About — Meherwer Ali",
  description: "Software engineering experience, portfolio evidence, and working principles.",
};

const focus = [
  "Distributed software systems",
  "Node.js service platforms",
  "Production cloud & infrastructure",
  "AI integration boundaries",
  "Applied AI product delivery",
  "Pragmatic frontend & UI",
] as const;

const stack = [
  { label: "Backend platforms", values: ["Java 17", "Spring Boot 3", "Spring Cloud", "Hibernate"] },
  { label: "Service platforms", values: ["Node.js", "ExpressJS", "NestJS", "TypeScript", "Python", "FastAPI"] },
  { label: "Data & messaging", values: ["Apache Kafka", "Redis", "PostgreSQL", "MySQL", "MongoDB", "Debezium"] },
  { label: "Cloud & operations", values: ["Kubernetes", "GKE", "Docker", "GCP", "AWS", "Terraform", "OpenTelemetry"] },
  { label: "AI integration", values: ["Vertex AI", "BigQuery", "Structured output", "Cited RAG", "Evaluations", "vLLM"] },
  { label: "Frontend", values: ["React", "Next.js", "AngularJS", "Redux", "Zustand"] },
] as const;

const evidence = [
  {
    date: "2023 — Present",
    title: "Real-time public-safety integration",
    summary: "Résumé-backed, redacted employer architecture case study.",
    bullets: [
      "Designed a Java and Spring Boot integration path using Kafka, replicated MySQL, Redis, Docker, and Kubernetes.",
      "Résumé evidence records 5K+ events per second across 1,000+ field units.",
      "Database synchronization moved from 2–3 minutes to approximately 30 seconds.",
    ],
  },
  {
    date: "2020 — 2021",
    title: "Multi-tenant JVM platform modernization",
    summary: "Résumé-backed, redacted employer architecture case study.",
    bullets: [
      "Moved a single-tenant monolith toward multi-tenant service boundaries.",
      "Reworked scheduled execution for multi-JVM consistency and reduced Tomcat startup time by 50%.",
      "Replaced process-local sockets with Redis messaging and improved notification delivery speed by 40%.",
    ],
  },
  {
    date: "2018 — Present",
    title: "Production platform ownership",
    summary: "AWS delivery, Kubernetes operations, GKE migration, GCP services, IAM, and observability.",
    bullets: [
      "Owned AWS production deployment and DevOps responsibilities early in the career path.",
      "Later led a bare-metal Kubernetes to GKE migration with the GCP team.",
      "Kept storage, compute, IAM, event processing, reporting, and observability inside the engineering boundary.",
    ],
  },
  {
    date: "Current portfolio",
    title: "Reliable AI integration and applied AI",
    summary: "Public clean-room systems that extend the software platform foundation.",
    bullets: [
      "An LLM gateway makes rate, cost, schema, policy, webhook, and trace behavior explicit.",
      "A cited research workflow grounds claims and persists approval decisions.",
      "A deterministic evaluation lab separates quality evidence from hardware-performance claims.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader active="about" />
      <main id="main-content" className="page-main">
        <header className="shell page-intro about-intro">
          <h1>About</h1>
        </header>

        <section className="shell about-layout" aria-labelledby="about-summary-title">
          <div className="about-story">
            <h2 className="sr-only" id="about-summary-title">About Meherwer Ali</h2>
            <p className="about-lead">
              I&apos;m <span>Meherwer Ali</span>, a Senior Software Engineer and Tech Lead. My work spans distributed systems, cloud platforms, reliable AI integrations, frontend delivery, and backend services across Java, Node.js, and TypeScript.
            </p>
            <p>
              I&apos;ve worked across public safety, travel, healthcare, club-management, and e-commerce systems—designing service boundaries, Kafka pipelines, database-change streams, multi-tenant JVM platforms, and cloud operating models.
            </p>
            <p>
              I lead teams the same way I design software—clear ownership, reversible decisions, measurable outcomes, and no hidden complexity passed downstream.
            </p>

            <div className="experience-block">
              <SectionRule>Selected engineering experience</SectionRule>
              <div className="timeline">
                {evidence.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <div className="timeline-heading">
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.summary}</p>
                      </div>
                      <time>{item.date}</time>
                    </div>
                    <ul>
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="philosophy-block">
              <SectionRule>Philosophy</SectionRule>
              <ul className="philosophy-list">
                <li><span>//</span> Design for failure, then prove the recovery path</li>
                <li><span>//</span> Events over hidden coupling</li>
                <li><span>//</span> Measure latency, cost, and quality before claiming improvement</li>
                <li><span>//</span> Own the lifecycle, not just the ticket</li>
              </ul>
            </div>
          </div>

          <aside className="about-sidebar" aria-label="Engineering focus and stack">
            <section>
              <h2><span>/*</span> Focus <span>*/</span></h2>
              <ul className="focus-list">
                {focus.map((item) => <li key={item}><span>→</span>{item}</li>)}
              </ul>
            </section>
            <section>
              <h2><span>/*</span> Stack <span>*/</span></h2>
              <div className="stack-groups">
                {stack.map((group) => (
                  <div className="stack-group" key={group.label}>
                    <h3>{group.label}</h3>
                    <ul className="tag-list">
                      {group.values.map((value) => <li key={value}>{value}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2><span>/*</span> Boundaries <span>*/</span></h2>
              <p className="sidebar-copy">
                Employer case studies use redacted résumé evidence. Company and client identities, proprietary code, private topology, credentials, operational data, and JobsApply material stay out.
              </p>
            </section>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
