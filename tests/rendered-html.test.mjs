import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("exports the portfolio narrative and all case-study dimensions", () => {
  assert.match(html, /Reliable systems/);
  assert.match(html, /Measurable/);
  assert.match(html, /LLM Reliability Gateway/);
  assert.match(html, /Cited Research Workbench/);
  assert.match(html, /LLM Eval &amp; Inference Lab/);
  for (const label of [
    "Problem",
    "Architecture",
    "Failure semantics",
    "Security boundary",
    "Benchmark / eval evidence",
    "Demo",
    "Decisions",
    "Known limitations",
  ]) {
    assert.match(html, new RegExp(label.replace("/", "\\/")));
  }
});

test("exports accessible structure and site-specific social metadata", () => {
  assert.match(html, /<html lang="en"/);
  assert.match(html, /<main/);
  assert.match(html, /<nav aria-label="Primary navigation"/);
  assert.match(html, /aria-labelledby="systems-title"/);
  assert.match(html, /property="og:image" content="https:\/\/meherwerali.github.io\/og.png"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
});

test("all fragment links resolve and external links use HTTPS", () => {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (href.startsWith("#")) assert.ok(ids.has(href.slice(1)), `missing target for ${href}`);
    else if (href.startsWith("/")) assert.ok(href.length > 1, "root-relative asset path is empty");
    else assert.equal(new URL(href).protocol, "https:", `non-HTTPS external link: ${href}`);
  }
  for (const repository of [
    "llm-reliability-gateway",
    "cited-research-workbench",
    "llm-eval-inference-lab",
  ]) {
    assert.ok(hrefs.includes(`https://github.com/MeherwerAli/${repository}`));
  }
});
