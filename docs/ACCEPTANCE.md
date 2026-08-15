# Local acceptance report — 2026-08-15

This report separates current local observations from publication and production claims.

| Surface | Current observation | Evidence boundary |
|---|---|---|
| Reliability gateway | 20 core/integration tests passed; 81% full-suite statement coverage; strict typing/linting; PostgreSQL/Redis container path completed an authenticated request | Does not establish failover, external-provider compatibility, capacity, or managed secret encryption |
| Research workbench | 13 backend/Qdrant tests and two UI tests passed; backend, Qdrant, and UI containers healthy; fixed-corpus demo returned a page-two citation and three audit transitions | Does not establish arbitrary-corpus answer quality, external reranker/model availability, or public-sandbox capacity |
| Eval/inference lab | Exactly 50/50 deterministic cases and seven acceptance gates passed; 24 benchmark cells and four vLLM profiles validate structurally | No NVIDIA L4 run, latency, throughput, or GPU-memory conclusion exists |
| Portfolio site | Static production export, three rendered-content/link tests, nine live GitHub links, zero npm advisories, no 390 px overflow, zero browser console errors, Lighthouse accessibility 1.00 | Source is published but the site is not deployed; videos remain gated |

## Attack verdicts

- **Confirmed:** PII was initially classified but still reached the provider adapter. The implementation now redacts before provider dispatch and tests the boundary.
- **Confirmed:** stopword overlap initially caused a false supported answer. Content-token reranking now restores abstention for the unsupported case.
- **Confirmed:** the first UI container bound only to its container hostname. It now binds to `0.0.0.0` and passes its health check.
- **Confirmed:** GitHub automatically started a legacy Pages deployment after the first push to the special user-site repository name. The run was cancelled, the repository Pages build type was changed to `workflow`, and the public URL returned 404 while the local server remained available.
- **Refuted:** representative Mac-only vLLM performance. The benchmark command refuses to emit results without an NVIDIA L4.
- **Refuted:** universal prompt-injection prevention. Every public description limits the claim to layered risk mitigation.
- **Refuted:** treating source publication as release or deployment evidence. The four repositories are published, but no `v0.1.0` tag, GitHub Release, Pages deployment, or hosted runtime has been observed.
- **Unresolved:** recruiter preference for three flagships over twelve smaller repositories. The information architecture mitigates this through a coherent backend-reliability narrative and measurable artifacts.

## Gates still closed

The four source repositories were created under the verified `MeherwerAli` account and their initial `main` branches were pushed on 2026-08-15. Nothing was released, pinned, deployed, posted to LinkedIn, or copied into the private CV source. The NVIDIA L4 session, hosted demos, videos, `v0.1.0` tags, GitHub profile change, pinning, Pages dispatch, and CV integration require later evidence and explicit authorization.
