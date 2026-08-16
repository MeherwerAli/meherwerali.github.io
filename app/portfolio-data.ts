export type CaseStudy = {
  problem: string;
  architecture: string;
  failure: string;
  security: string;
  evidence: readonly string[];
  demo: string;
  decisions: string;
  limitations: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: readonly string[];
  result: string;
  repository?: string;
  sourceNote?: string;
  caseStudy?: CaseStudy;
};

export const experienceProjects: readonly Project[] = [
  {
    slug: "public-safety-distributed-integration",
    title: "Real-Time Public-Safety Integration",
    category: "Employer architecture case study",
    summary:
      "A two-way distributed data path between field systems and central services, designed for private-network operation and materially lower synchronization delay.",
    stack: ["Java", "Spring Boot", "Apache Kafka", "MySQL", "Redis", "Kubernetes"],
    result: "Résumé evidence: 5K+ events/sec, 1,000+ field units, and sync reduced from 2–3 minutes to ~30 seconds",
    sourceNote: "Employer-owned production source is confidential; this dossier contains only redacted résumé evidence.",
    caseStudy: {
      problem:
        "Field systems and central services needed a dependable two-way data path over constrained private infrastructure, while multi-minute synchronization delay limited the freshness of operational data.",
      architecture:
        "Spring Boot services, Kafka messaging, a replicated MySQL topology, Redis, Docker, and Kubernetes formed the distributed integration path. The public description intentionally omits client-specific schemas and network topology.",
      failure:
        "The résumé establishes distributed processing and synchronization outcomes, but does not disclose the full retry, duplicate-delivery, partition-recovery, or disaster-recovery contracts. Those semantics are not invented here.",
      security:
        "The case study removes client identities, database names, topology, credentials, payloads, and operating procedures. It describes the private-network boundary without exposing its implementation details.",
      evidence: [
        "5K+ events per second across distributed nodes",
        "Supported deployment across 1,000+ field units",
        "Synchronization latency reduced from 2–3 minutes to approximately 30 seconds",
      ],
      demo:
        "No public demo or production source is provided because the system is employer-owned and serves a sensitive operational domain.",
      decisions:
        "The published architecture separates service processing, event transport, replicated persistence, and deployment concerns instead of presenting the system as a single application.",
      limitations:
        "Metrics are résumé-sourced rather than independently reproduced in this public repository. Client-specific security controls, availability targets, and incident data remain confidential.",
    },
  },
  {
    slug: "multi-tenant-jvm-modernization",
    title: "Multi-Tenant JVM Platform Modernization",
    category: "Employer architecture case study",
    summary:
      "A monolith-to-services modernization that introduced multi-tenancy, multi-JVM job consistency, and cross-node real-time messaging.",
    stack: ["Java", "Spring Boot", "Hibernate", "Redis Pub/Sub", "Docker", "Unix"],
    result: "Résumé evidence: 50% lower Tomcat startup time and 40% faster notification delivery",
    sourceNote: "Employer-owned production source is confidential; this dossier contains only redacted résumé evidence.",
    caseStudy: {
      problem:
        "A single-tenant club-management platform had to support multiple tenants and JVMs without allowing scheduled work or real-time notifications to depend on one process.",
      architecture:
        "The platform moved toward service boundaries on Java and Spring. Scheduling code spanning Quartz, TimerTask, and Runnable paths was rewritten for multi-JVM operation, while Redis topic pub/sub replaced the prior socket layer.",
      failure:
        "The public evidence establishes multi-JVM consistency as the design goal, but does not disclose leader election, job deduplication, retry policy, or tenant-isolation tests.",
      security:
        "Tenant records, authorization design, production topology, and customer data are excluded. The dossier discusses only the modernization boundary and measured operational results.",
      evidence: [
        "Monolith and single-tenant model converted toward multi-tenant services",
        "Tomcat startup time reduced by 50%",
        "Notification delivery speed increased by 40% after the Redis messaging change",
      ],
      demo:
        "No public demo or code is available; the public artifact is an architecture summary derived from résumé evidence.",
      decisions:
        "Multi-process work was treated as a distributed-systems concern, and real-time messaging was moved to shared infrastructure rather than kept inside individual JVMs.",
      limitations:
        "The résumé does not publish workload shape, measurement method, tenant count, or comparative infrastructure cost, so those claims are intentionally absent.",
    },
  },
  {
    slug: "b2b-travel-microservices-platform",
    title: "B2B Travel Microservices Platform",
    category: "Employer architecture case study",
    summary:
      "A corporate booking backend spanning air, hotel, and ground inventory with external GDS integration and dynamic search boundaries.",
    stack: ["API Gateway", "PostgreSQL", "Apache Kafka", "Elasticsearch", "Kubernetes", "Docker"],
    result: "Résumé evidence: one service platform for airline, hotel, and ground-transport booking workflows",
    sourceNote: "Employer-owned production source is confidential; this dossier contains only redacted résumé evidence.",
    caseStudy: {
      problem:
        "Corporate travel workflows needed to combine multiple inventory domains and an external airline distribution API behind a coherent backend surface.",
      architecture:
        "The résumé describes microservice decomposition, API gateway and service-discovery patterns, a Sabre GDS REST integration, PostgreSQL, Kafka, Elasticsearch, Kubernetes, and Docker.",
      failure:
        "The public documents do not establish booking compensation, supplier timeout, inventory-staleness, or idempotency behavior, so this dossier does not claim those semantics.",
      security:
        "Supplier credentials, commercial contracts, booking data, customer identities, and internal service topology remain excluded.",
      evidence: [
        "Backend architecture covered airline, hotel, and ground-transport domains",
        "External airline booking integrated through Sabre GDS REST APIs",
        "Dynamic search used a Specification-pattern boundary with ELK observability",
      ],
      demo:
        "No employer source or production demo is published. The case study communicates architecture scope without reproducing proprietary workflows.",
      decisions:
        "External supplier integration, search, discovery, and gateway responsibilities were represented as explicit platform boundaries rather than UI concerns.",
      limitations:
        "Supplier failure metrics, booking volume, infrastructure cost, and implementation details outside the architecture summary are not established by the public evidence.",
    },
  },
  {
    slug: "healthcare-change-data-capture",
    title: "Healthcare Change-Data-Capture Pipeline",
    category: "Employer architecture case study",
    summary:
      "A database-change stream that captured API and direct-query mutations for warehouse-to-retailer data lineage.",
    stack: ["Debezium", "Apache Kafka", "MySQL", "MongoDB", "Docker"],
    result: "Résumé evidence: API and direct-query mutations captured for cross-warehouse data lineage",
    sourceNote: "Employer-owned production source is confidential; this dossier contains only redacted résumé evidence.",
    caseStudy: {
      problem:
        "Warehouse data could change through both application APIs and direct database queries, leaving downstream systems without a single lineage stream.",
      architecture:
        "Debezium captured MySQL mutations, Kafka transported the change stream, and MongoDB received the lineage representation. Database replication supported read optimization.",
      failure:
        "The résumé does not disclose schema-evolution, replay, poison-record, offset-recovery, or reconciliation behavior, so those properties remain unverified.",
      security:
        "Healthcare records, warehouse identifiers, schemas, access controls, and operational data are excluded from the public description.",
      evidence: [
        "Captured mutations originating from APIs and direct queries",
        "Streamed MySQL changes through Debezium and Kafka into MongoDB",
        "Used database replication to separate read demand",
      ],
      demo:
        "No production data or employer code is published. The page documents the system boundary and the limits of the public evidence.",
      decisions:
        "Change capture was placed below the application layer so direct database mutations were visible to the lineage path as well as API-originated changes.",
      limitations:
        "Workload volume, end-to-end lag, recovery targets, infrastructure cost, and application-layer implementation details are not established by the public evidence.",
    },
  },
];

export const infrastructureProjects: readonly Project[] = [
  {
    slug: "gke-platform-migration",
    title: "Bare-Metal Kubernetes to GKE Migration",
    category: "Production infrastructure case study",
    summary:
      "A production platform migration from hand-operated Kubernetes infrastructure to GKE, with GCP service, IAM, and observability responsibilities made explicit.",
    stack: ["GKE", "Kubernetes", "GCP", "IAM", "Cloud Storage", "BigQuery"],
    result: "Résumé evidence: production workloads moved from bare-metal Kubernetes to GKE with the GCP team",
    sourceNote: "Employer-owned infrastructure and runbooks are confidential; this dossier contains only redacted résumé evidence.",
    caseStudy: {
      problem:
        "A production data platform running on bare-metal Kubernetes needed a managed cloud operating model without losing its data, messaging, or reporting responsibilities.",
      architecture:
        "The migration moved workloads to GKE and integrated Cloud Storage, Compute Engine, Workstations, IAM, BigQuery, and Vertex AI responsibilities within GCP.",
      failure:
        "The résumé does not publish cutover, rollback, backup, multi-zone, or recovery-time evidence. This page therefore describes migration ownership without claiming zero downtime or disaster-recovery guarantees.",
      security:
        "IAM responsibilities are acknowledged, while account structure, policies, identities, network controls, and deployment manifests remain confidential.",
      evidence: [
        "Migration led jointly with the GCP team",
        "Workloads moved from bare-metal Kubernetes to GKE",
        "Operational scope included Cloud Storage, Compute Engine, Workstations, and IAM",
      ],
      demo:
        "No cloud account, deployment manifest, or live environment is exposed. The migration is presented as an experience case study, not a reproducible public deployment.",
      decisions:
        "Managed orchestration was adopted while keeping identity, storage, compute, development-workstation, reporting, and model-integration responsibilities visible.",
      limitations:
        "Cost, availability, deployment duration, rollback, and post-migration incident rates are not established by the supplied documents.",
    },
  },
];

export const integrationProjects: readonly Project[] = [
  {
    slug: "ai-data-integration-platform",
    title: "AI Data Integration Platform",
    category: "Employer integration case study",
    summary:
      "A high-throughput ingestion and Kafka pipeline that applied NLP processing before indexing operational insights for search and reporting.",
    stack: ["Apache Kafka", "Vertex AI", "BigQuery", "Elasticsearch", "Kubernetes", "Python"],
    result: "Résumé evidence: 10K+ messages processed every two minutes after the NLP stage",
    sourceNote: "Employer-owned production source is confidential; this dossier contains only redacted résumé evidence.",
    caseStudy: {
      problem:
        "Data from multiple operational sources needed to be aggregated, processed by an NLP stage, and made available for search and reporting without collapsing ingestion and model concerns into one service.",
      architecture:
        "Microservices published source data to Kafka, a dedicated subscriber applied NLP and AI processing, and insights were indexed into Elasticsearch and BigQuery. The platform later moved from bare-metal Kubernetes to GKE.",
      failure:
        "The résumé establishes throughput after the NLP stage, but not queue-lag thresholds, poison-message handling, model fallback, replay, or downstream recovery behavior.",
      security:
        "Source systems, model inputs, prompts, data classifications, Keycloak configuration, and operational dashboards remain confidential.",
      evidence: [
        "10K+ messages processed every two minutes after NLP analysis",
        "Kafka separated source ingestion from the dedicated AI subscriber",
        "Elasticsearch and BigQuery served indexed insight and reporting paths",
      ],
      demo:
        "No employer source, model data, or live dashboard is public. The portfolio's clean-room AI projects demonstrate related engineering patterns separately.",
      decisions:
        "AI was integrated as one stage in an observable event pipeline rather than treated as the platform's primary architecture.",
      limitations:
        "Model quality, cost, p95 latency, failure rate, dataset composition, and production incident history are not disclosed in the supplied résumé.",
    },
  },
];

export const publicBackendProjects: readonly Project[] = [
  {
    slug: "spring-cloud-platform-lab",
    title: "Spring Cloud Platform Lab",
    category: "Public distributed-services reference",
    summary:
      "A runnable Java reference platform for service discovery, edge routing, load balancing, circuit-breaker fallbacks, and operational endpoints.",
    stack: ["Java 17", "Spring Boot 3", "Spring Cloud", "Docker"],
    result: "Explicit 400, 404, 409, and 503 behavior with health and Prometheus endpoints",
    repository: "https://github.com/MeherwerAli/spring-cloud-platform-lab",
  },
  {
    slug: "kafka-consumer-reference",
    title: "Kafka Consumer Reference",
    category: "Public Node.js event-processing reference",
    summary:
      "A clean-room TypeScript and Node.js consumer with manual commits, per-partition ordering, bounded messages, schema validation, and dead-letter handling.",
    stack: ["TypeScript", "Node.js 22", "Apache Kafka", "Schema validation"],
    result: "Failure-path tests cover duplicates, invalid input, sink and DLQ failures, and partial batches",
    repository: "https://github.com/MeherwerAli/kafka-consumer-reference",
  },
  {
    slug: "vaultsearch",
    title: "VaultSearch",
    category: "Public search and indexing service",
    summary:
      "A headless, read-only service that projects Obsidian-style Markdown vaults into authenticated full-text search and backlink APIs.",
    stack: ["Java 17", "Spring Boot 3.5", "MySQL", "Elasticsearch", "Kubernetes"],
    result: "Transactional outbox, idempotent indexing, bounded retry, and explicit degraded-state recovery",
    repository: "https://github.com/MeherwerAli/vaultsearch",
  },
  {
    slug: "throttle",
    title: "Throttle",
    category: "Public distributed admission-control library",
    summary:
      "An Express library for exact sliding-window and token-bucket admission control with atomic Redis operations and explicit outage behavior.",
    stack: ["TypeScript", "Node.js 22", "Express", "Redis", "Lua"],
    result: "Fail-closed HTTP 503 by default; opt-in fail-open emits an explicit degraded decision",
    repository: "https://github.com/MeherwerAli/throttle",
  },
];

export const aiProjects: readonly Project[] = [
  {
    slug: "llm-reliability-gateway",
    title: "LLM Reliability Gateway",
    category: "Public AI integration boundary",
    summary:
      "An OpenAI-compatible FastAPI boundary that makes cost, validation, policy, rate, trace, and delivery behavior explicit.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "OpenTelemetry"],
    result: "20 core and integration tests; 81% full-suite coverage; PostgreSQL and Redis path verified locally",
    repository: "https://github.com/MeherwerAli/llm-reliability-gateway",
    caseStudy: {
      problem:
        "Direct model calls hide spend until after generation, blur retry ownership, and turn malformed output or provider latency into downstream incidents.",
      architecture:
        "FastAPI and Pydantic contracts wrap deterministic or OpenAI-compatible providers. Redis token buckets, budget reservations, OpenTelemetry, Prometheus, Tempo, Grafana, and Docker Compose define the operating boundary.",
      failure:
        "Idempotency conflicts are rejected; reservations reconcile to actual usage; schema output gets no more than two repair attempts; webhook retries terminate in a dead-letter state.",
      security:
        "Bearer keys, HMAC timestamps, replay detection, SSRF checks, PII redaction, hashed validation metadata, and policy events reduce risk without claiming universal prompt-injection prevention.",
      evidence: [
        "20 core and integration tests",
        "81% full-suite coverage",
        "PostgreSQL and Redis path verified locally",
      ],
      demo:
        "The deterministic local-provider path is verified. Source is published; a tagged release and recorded demo remain evidence gates.",
      decisions:
        "Provider abstraction isolates vendor behavior; projected cost is reserved before work; raw failed model output is not persisted by default.",
      limitations:
        "Database and Redis failover, external-provider compatibility, production load, and managed encryption for webhook secrets remain unverified.",
    },
  },
  {
    slug: "cited-research-workbench",
    title: "Cited Research Workbench",
    category: "Public applied-AI product",
    summary:
      "A bounded PDF research product with page-grounded claims, approval gates, resumable run events, and a visible audit trail.",
    stack: ["FastAPI", "Next.js", "Qdrant", "Resumable SSE"],
    result: "13 backend and Qdrant tests; 2 UI state tests; production UI build verified locally",
    repository: "https://github.com/MeherwerAli/cited-research-workbench",
    caseStudy: {
      problem:
        "Research assistants often blur source provenance, follow instructions embedded in documents, or trigger expensive and external actions without durable approval.",
      architecture:
        "A FastAPI backend preserves document, page, chunk, and source hashes. Dense and sparse Qdrant queries feed reciprocal-rank fusion and reranking; a Next.js interface consumes persisted run events.",
      failure:
        "Malformed, encrypted, image-only, oversized, and over-page-limit PDFs fail explicitly. Unsupported questions abstain; reranker and connection state are visible rather than hidden.",
      security:
        "Document instructions are treated as untrusted evidence. Costly, network, and export actions require persisted approval; every transition includes actor, time, detail hash, and trace ID.",
      evidence: [
        "13 backend and Qdrant tests",
        "2 UI state tests and a production build",
        "Zero high-severity npm audit findings when measured",
      ],
      demo:
        "The deterministic fixed-corpus path is local and its source is published. A public sandbox and recorded vLLM path require later deployment and GPU gates.",
      decisions:
        "OCR stays out of scope; uploads stop at 25 MB and 200 pages; optimistic UI is limited to reversible local state.",
      limitations:
        "The default unit path stays deterministic; Qdrant is locally integration-tested, while the external reranker and gateway-backed model path remain pre-release checks.",
    },
  },
  {
    slug: "llm-eval-inference-lab",
    title: "LLM Eval & Inference Lab",
    category: "Public quality and performance lab",
    summary:
      "A versioned regression harness and raw-evidence-first protocol for comparing local inference configurations.",
    stack: ["Python", "vLLM", "NVIDIA L4", "GitHub Actions"],
    result: "50 deterministic cases; 7 acceptance gates; 24-cell bounded benchmark plan",
    repository: "https://github.com/MeherwerAli/llm-eval-inference-lab",
    caseStudy: {
      problem:
        "Anecdotes cannot establish retrieval quality, citation coverage, policy behavior, or the performance effect of quantization and prefix caching.",
      architecture:
        "Exactly fifty synthetic or public cases run offline in CI and emit JSON, Markdown, and SVG evidence. A separate L4-only matrix covers FP16 or AWQ, cache on or off, concurrency, and prompt length.",
      failure:
        "Invalid dataset counts and critical regressions fail the process. Benchmark execution refuses to claim numbers when the required NVIDIA L4 is absent.",
      security:
        "The dataset contains no employer or private JobsApply material. Policy cases assert zero unauthorized gated actions and describe mitigation rather than immunity.",
      evidence: [
        "50 out of 50 deterministic cases",
        "7 out of 7 acceptance gates",
        "24-cell bounded benchmark plan",
      ],
      demo:
        "Reports are generated locally. The timed L4 run is intentionally unexecuted until spend and session approval are granted.",
      decisions:
        "Functional evaluation and hardware benchmarking remain separate evidence classes; raw repetitions must accompany every performance conclusion.",
      limitations:
        "No GPU latency, throughput, or memory result exists yet. Apple Silicon smoke behavior is not presented as representative vLLM performance.",
    },
  },
];

export const supportingProjects: readonly Project[] = [
  {
    slug: "responsible-web-crawler",
    title: "Responsible Web Crawler",
    category: "Bounded network automation",
    summary:
      "A standard-library Python crawler with visible robots policy, same-origin enforcement, pacing, and deterministic page and depth limits.",
    stack: ["Python 3.11", "robots.txt", "JSON Lines", "SHA-256"],
    result: "Offline HTTP-server tests exercise robots rules, loops, external links, and private paths",
    repository: "https://github.com/MeherwerAli/responsible-web-crawler",
  },
  {
    slug: "document-portfolio-generator",
    title: "Document Portfolio Generator",
    category: "Typed artifact pipeline",
    summary:
      "A validated JSON-to-Markdown, DOCX, and PDF pipeline with deterministic output names and safe URL-scheme checks.",
    stack: ["Python 3.11", "JSON", "DOCX", "PDF"],
    result: "Temporary-directory tests inspect content, DOCX and PDF signatures, naming, format selection, and invalid links",
    repository: "https://github.com/MeherwerAli/document-portfolio-generator",
  },
  {
    slug: "engineering-knowledge-vault",
    title: "Engineering Knowledge Vault",
    category: "Decision and operations system",
    summary:
      "A privacy-safe Obsidian starter for architecture decisions, runbooks, patterns, and evidence-dated technology reviews.",
    stack: ["Markdown", "Obsidian", "Node.js 20", "GitHub Actions"],
    result: "Zero-dependency validation checks metadata, headings, duplicate note names, and broken wikilinks",
    repository: "https://github.com/MeherwerAli/engineering-knowledge-vault",
  },
];

export const projects: readonly Project[] = [
  ...experienceProjects,
  ...publicBackendProjects,
  ...infrastructureProjects,
  ...integrationProjects,
  ...aiProjects,
  ...supportingProjects,
];

export const featuredProjects: readonly Project[] = [
  experienceProjects[0],
  publicBackendProjects[0],
  experienceProjects[2],
  infrastructureProjects[0],
];

export const flagshipProjects = projects.filter(
  (project): project is Project & { caseStudy: CaseStudy } => Boolean(project.caseStudy),
);
