# Meherwer Ali — engineering portfolio

Static TypeScript portfolio for the positioning:

> Senior Backend Engineer & Tech Lead | Distributed Systems · Cloud Platforms · Reliable AI Systems

The site leads with three coherent systems, then retains five existing repositories as supporting evidence. Each flagship dossier covers the problem, architecture, failure semantics, security boundary, benchmark/evaluation evidence, demo status, decisions, and known limitations.

## Local verification

```bash
npm ci
npm run verify
npm audit --audit-level=high
npm run check:external
```

`next build` produces a static `out/` directory. Pushes to `main` deploy through the GitHub Pages workflow, which can also be run manually. GitHub Pages must use GitHub Actions as its publishing source.

## Evidence posture

- New flagship metrics describe current local validation only.
- Missing releases, recordings, deployments, and GPU results are shown as pending rather than implied.
- No employer, JobsApply, credential, private configuration, or unpublished CV source is included.
- Generated social card: `public/og.png`; built-in image generation produced a restrained developer-workspace composition with code, architecture, and observability panels.
