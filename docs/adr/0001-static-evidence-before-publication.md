# ADR 0001: Export static evidence before publication

- Status: accepted
- Date: 2026-08-15

## Decision

Build the portfolio as a static TypeScript export with no forms, accounts, analytics, cookies, or runtime secrets. Keep GitHub Pages deployment behind a manual workflow dispatch and show unreleased or undeployed artifacts as explicit gates instead of implying they exist.

## Consequences

The public surface has a small security and reliability boundary, and local link/accessibility checks can validate the exact deploy artifact. Dynamic analytics and contact capture are intentionally absent. Repository creation, releases, pinning, and deployment remain separately authorized actions.
