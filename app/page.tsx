const flagships = [
  {
    index: "01",
    slug: "gateway",
    repository: "https://github.com/MeherwerAli/llm-reliability-gateway",
    title: "LLM Reliability Gateway",
    role: "Model boundary / primary flagship",
    summary:
      "An OpenAI-compatible FastAPI boundary that makes cost, validation, policy, rate, trace, and delivery behavior explicit.",
    problem:
      "Direct model calls hide spend until after generation, blur retry ownership, and turn malformed output or provider latency into downstream incidents.",
    architecture:
      "FastAPI and Pydantic contracts wrap deterministic or OpenAI-compatible providers. Redis token buckets, budget reservations, OpenTelemetry, Prometheus, Tempo, Grafana, and a Docker Compose topology define the operating boundary.",
    failure:
      "Idempotency conflicts are rejected; reservations reconcile to actual usage; schema output gets no more than two repair attempts; webhook retries terminate in a dead-letter state.",
    security:
      "Bearer keys, HMAC timestamps, replay detection, SSRF checks, PII redaction, hashed validation metadata, and policy events reduce risk without claiming universal prompt-injection prevention.",
    evidence: ["20 core + integration tests", "81% full-suite coverage", "PostgreSQL + Redis path verified"],
    demo: "Deterministic local provider path verified. Source is published; a tagged release and recorded demo remain evidence gates.",
    decisions: "Provider abstraction isolates vendor behavior; projected cost is reserved before work; raw failed model output is not persisted by default.",
    limitations: "The distributed path is locally verified, but database/Redis failover, external-provider compatibility, production load, and managed encryption for webhook secrets remain unverified.",
  },
  {
    index: "02",
    slug: "workbench",
    repository: "https://github.com/MeherwerAli/cited-research-workbench",
    title: "Cited Research Workbench",
    role: "Vertical AI product",
    summary:
      "A bounded PDF research product with page-grounded claims, approval gates, resumable run events, and a visible audit trail.",
    problem:
      "Research assistants often blur source provenance, follow instructions embedded in documents, or trigger expensive and external actions without durable approval.",
    architecture:
      "A FastAPI backend preserves document, page, chunk, and source hashes. Dense and sparse Qdrant queries feed reciprocal-rank fusion and reranking; a Next.js interface consumes persisted run events.",
    failure:
      "Malformed, encrypted, image-only, oversized, and over-page-limit PDFs fail explicitly. Unsupported questions abstain; reranker and connection state are visible rather than hidden.",
    security:
      "Document instructions are treated as untrusted evidence. Costly, network, and export actions require persisted approval; every transition includes actor, time, detail hash, and trace ID.",
    evidence: ["13 backend + Qdrant tests", "2 UI state tests + production build", "Zero high-severity npm audit findings"],
    demo: "The deterministic fixed-corpus path is local and its source is published. A public sandbox and recorded vLLM path require later deployment and GPU gates.",
    decisions: "OCR stays out of the four-week scope; uploads stop at 25 MB and 200 pages; optimistic UI is limited to reversible local state.",
    limitations: "The default unit path stays deterministic; Qdrant is locally integration-tested, while the external reranker and gateway-backed model path remain pre-release environment checks.",
  },
  {
    index: "03",
    slug: "eval",
    repository: "https://github.com/MeherwerAli/llm-eval-inference-lab",
    title: "LLM Eval & Inference Lab",
    role: "Quality and performance evidence",
    summary:
      "A versioned regression harness and a raw-evidence-first protocol for comparing local inference configurations.",
    problem:
      "Anecdotes cannot establish retrieval quality, citation coverage, policy behavior, or the performance effect of quantization and prefix caching.",
    architecture:
      "Exactly fifty synthetic/public cases run offline in CI and emit JSON, Markdown, and SVG evidence. A separate L4-only matrix covers FP16/AWQ, cache on/off, concurrency, and prompt length.",
    failure:
      "Invalid dataset counts and critical regressions fail the process. Benchmark execution refuses to claim numbers when the required NVIDIA L4 is absent.",
    security:
      "The dataset contains no employer or private JobsApply material. Policy cases assert zero unauthorized gated actions and describe mitigation rather than immunity.",
    evidence: ["50/50 deterministic cases", "7/7 acceptance gates", "24-cell bounded benchmark plan"],
    demo: "Reports are generated locally. The timed L4 run is intentionally unexecuted until spend and session approval are granted.",
    decisions: "Functional evaluation and hardware benchmarking remain separate evidence classes; raw repetitions must accompany every performance conclusion.",
    limitations: "No GPU latency, throughput, or memory result exists yet. Apple Silicon smoke behavior is not presented as representative vLLM performance.",
  },
] as const;

const supporting = [
  { name: "Spring Cloud Platform Lab", signal: "Service discovery, gateway, resilience, configuration", href: "https://github.com/MeherwerAli/spring-cloud-platform-lab" },
  { name: "Kafka Consumer Reference", signal: "Offsets, retries, idempotency, delivery semantics", href: "https://github.com/MeherwerAli/kafka-consumer-reference" },
  { name: "Responsible Web Crawler", signal: "Bounded concurrency, crawl policy, operational care", href: "https://github.com/MeherwerAli/responsible-web-crawler" },
  { name: "Document Portfolio Generator", signal: "Typed document generation and reproducible artifacts", href: "https://github.com/MeherwerAli/document-portfolio-generator" },
  { name: "Engineering Knowledge Vault", signal: "Technical decision records and curated operating knowledge", href: "https://github.com/MeherwerAli/engineering-knowledge-vault" },
] as const;

const labels = [
  ["problem", "Problem"],
  ["architecture", "Architecture"],
  ["failure", "Failure semantics"],
  ["security", "Security boundary"],
  ["demo", "Demo"],
  ["decisions", "Decisions"],
  ["limitations", "Known limitations"],
] as const;

export default function Home() {
  return (
    <main>
      <nav aria-label="Primary navigation">
        <a className="mark" href="#top" aria-label="MWA — Meherwer Ali, home">MWA<span>.</span></a>
        <div className="nav-links">
          <a href="#systems">Systems</a>
          <a href="#evidence">Evidence</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Senior Backend Engineer &amp; Tech Lead</p>
        <h1>Reliable systems.<br/><em>Measurable</em> AI.</h1>
        <div className="hero-foot">
          <p>Distributed systems, cloud platforms, and AI products designed around failure—not demos that assume it away.</p>
          <a className="arrow-link" href="#systems">Explore the evidence <span aria-hidden="true">↘</span></a>
        </div>
      </section>

      <section className="systems" id="systems" aria-labelledby="systems-title">
        <header className="section-head">
          <p>Selected systems / 2026</p>
          <h2 id="systems-title">Three flagships.<br/>One operating thesis.</h2>
        </header>
        <div className="project-grid">
          {flagships.map((project) => (
            <a className="project" href={`#${project.slug}`} key={project.slug}>
              <div className="project-number">{project.index}</div>
              <p className="project-role">{project.role}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="proof">{project.evidence.join(" · ")}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="dossiers" aria-label="Architecture dossiers">
        {flagships.map((project) => (
          <article className="dossier" id={project.slug} key={project.slug}>
            <header className="dossier-title">
              <span>{project.index} / Architecture dossier</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </header>
            <div className="dossier-grid">
              {labels.map(([key, label]) => (
                <section className={`detail detail-${key}`} key={key}>
                  <h3>{label}</h3>
                  <p>{project[key]}</p>
                </section>
              ))}
              <section className="detail detail-evidence">
                <h3>Benchmark / eval evidence</h3>
                <ul>{project.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            </div>
            <div className="publication-state" role="status">
              <a href={project.repository} target="_blank" rel="noreferrer">Source repository <span aria-hidden="true">↗</span></a>
              <span>Release · deployment · video remain gated</span>
            </div>
          </article>
        ))}
      </section>

      <section className="evidence" id="evidence" aria-labelledby="evidence-title">
        <header className="section-head light-head">
          <p>Supporting evidence</p>
          <h2 id="evidence-title">Backend depth that predates the AI layer.</h2>
        </header>
        <div className="support-list">
          {supporting.map((project, index) => (
            <a href={project.href} target="_blank" rel="noreferrer" key={project.name}>
              <span className="support-index">0{index + 4}</span>
              <strong>{project.name}</strong>
              <span>{project.signal}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <p className="eyebrow">Engineering posture</p>
        <h2 id="principles-title">Claims stop where<br/>evidence stops.</h2>
        <div>
          <p><span>01</span> Failure behavior is part of the public interface.</p>
          <p><span>02</span> Cost, traces, and approvals are product data.</p>
          <p><span>03</span> Deterministic tests and runtime measurements prove different things.</p>
          <p><span>04</span> Security controls reduce risk; they do not promise immunity.</p>
        </div>
      </section>

      <footer id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Build the system<br/>behind the promise.</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/MeherwerAli" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </main>
  );
}
