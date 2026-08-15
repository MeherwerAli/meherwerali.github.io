import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputUrl = new URL("../out/", import.meta.url);
const routeFiles = new Map([
  ["/", "index.html"],
  ["/work/", "work/index.html"],
  ["/about/", "about/index.html"],
  ["/contact/", "contact/index.html"],
  ["/work/public-safety-distributed-integration/", "work/public-safety-distributed-integration/index.html"],
  ["/work/multi-tenant-jvm-modernization/", "work/multi-tenant-jvm-modernization/index.html"],
  ["/work/b2b-travel-microservices-platform/", "work/b2b-travel-microservices-platform/index.html"],
  ["/work/healthcare-change-data-capture/", "work/healthcare-change-data-capture/index.html"],
  ["/work/gke-platform-migration/", "work/gke-platform-migration/index.html"],
  ["/work/ai-data-integration-platform/", "work/ai-data-integration-platform/index.html"],
  ["/work/llm-reliability-gateway/", "work/llm-reliability-gateway/index.html"],
  ["/work/cited-research-workbench/", "work/cited-research-workbench/index.html"],
  ["/work/llm-eval-inference-lab/", "work/llm-eval-inference-lab/index.html"],
]);

const pages = new Map(
  await Promise.all(
    [...routeFiles].map(async ([route, file]) => [route, await readFile(new URL(file, outputUrl), "utf8")]),
  ),
);
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("exports the four screenshot-aligned portfolio routes", () => {
  assert.match(pages.get("/"), /Hi, I(?:&#x27;|')m Meherwer Ali/);
  assert.match(pages.get("/"), /Featured Work/);
  assert.match(pages.get("/work/"), />Work</);
  assert.match(pages.get("/about/"), />About</);
  assert.match(pages.get("/contact/"), />Contact</);
});

test("every primary page has the shared navigation, active state, and compact footer", () => {
  const primaryRoutes = ["/", "/work/", "/about/", "/contact/"];
  for (const route of primaryRoutes) {
    const html = pages.get(route);
    assert.match(html, /<html lang="en"/);
    assert.match(html, /<main/);
    assert.match(html, /<nav aria-label="Primary navigation"/);
    assert.match(html, /&lt;meherwer/);
    assert.match(html, /© 2026 Meherwer Ali/);
    for (const href of primaryRoutes) assert.match(html, new RegExp(`href="${href.replaceAll("/", "\\/")}"`));
    assert.match(html, /aria-current="page"/);
  }
});

test("project index leads with backend experience and preserves public portfolio repositories", () => {
  const html = pages.get("/work/");
  for (const title of [
    "Real-Time Public-Safety Integration",
    "Multi-Tenant JVM Platform Modernization",
    "B2B Travel Microservices Platform",
    "Healthcare Change-Data-Capture Pipeline",
    "Bare-Metal Kubernetes to GKE Migration",
    "AI Data Integration Platform",
    "LLM Reliability Gateway",
    "Cited Research Workbench",
    "LLM Eval &amp; Inference Lab",
    "Spring Cloud Platform Lab",
    "Kafka Consumer Reference",
    "Responsible Web Crawler",
    "Document Portfolio Generator",
    "Engineering Knowledge Vault",
  ]) {
    assert.ok(html.includes(title), `missing project title: ${title}`);
  }
  for (const slug of [
    "public-safety-distributed-integration",
    "multi-tenant-jvm-modernization",
    "b2b-travel-microservices-platform",
    "healthcare-change-data-capture",
    "gke-platform-migration",
    "ai-data-integration-platform",
    "llm-reliability-gateway",
    "cited-research-workbench",
    "llm-eval-inference-lab",
  ]) {
    assert.match(html, new RegExp(`href="/work/${slug}/"`));
  }
});

test("flagship pages retain every architecture dossier dimension", () => {
  for (const route of [
    "/work/public-safety-distributed-integration/",
    "/work/multi-tenant-jvm-modernization/",
    "/work/b2b-travel-microservices-platform/",
    "/work/healthcare-change-data-capture/",
    "/work/gke-platform-migration/",
    "/work/ai-data-integration-platform/",
    "/work/llm-reliability-gateway/",
    "/work/cited-research-workbench/",
    "/work/llm-eval-inference-lab/",
  ]) {
    const html = pages.get(route);
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
  }
});

test("all fragment and internal route links resolve in the static export", async () => {
  for (const [route, html] of pages) {
    const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
    const hrefs = [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)].map((match) => match[1]);
    for (const href of hrefs) {
      if (href.startsWith("#")) {
        assert.ok(ids.has(href.slice(1)), `${route} is missing target for ${href}`);
      } else if (href.startsWith("/")) {
        const file = routeFiles.get(href);
        assert.ok(file, `${route} links to an untracked internal route: ${href}`);
        await access(new URL(file, outputUrl));
      } else if (href.startsWith("mailto:")) {
        assert.equal(href, "mailto:meherwer.09@gmail.com");
      } else {
        assert.equal(new URL(href).protocol, "https:", `non-HTTPS external link on ${route}: ${href}`);
      }
    }
  }
});

test("contact page includes email, LinkedIn, Medium, GitHub, and a no-storage mail form", () => {
  const html = pages.get("/contact/");
  for (const href of [
    "mailto:meherwer.09@gmail.com",
    "https://www.linkedin.com/in/meherwer-ali",
    "https://medium.com/@meherwer_ali",
    "https://github.com/MeherwerAli",
  ]) {
    assert.match(html, new RegExp(`href="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
  }
  assert.match(html, /action="mailto:meherwer\.09@gmail\.com"/);
  assert.match(html, /No message data is stored by this site/);
  const controls = [...html.matchAll(/<(?:input|textarea)\b[^>]*>/g)].map((match) => match[0]);
  for (const name of ["name", "email", "message"]) {
    const control = controls.find((candidate) => candidate.includes(`name="${name}"`));
    assert.ok(control, `missing ${name} form control`);
    assert.match(control, /\srequired(?:="")?/);
  }
});

test("the official Medium mark is shared by the footer and contact card", async () => {
  const primaryRoutes = ["/", "/work/", "/about/", "/contact/"];
  for (const route of primaryRoutes) {
    assert.match(pages.get(route), /src="\/medium-icon-white\.svg"/);
  }

  const contact = pages.get("/contact/");
  assert.equal((contact.match(/src="\/medium-icon-white\.svg"/g) ?? []).length, 2);
  assert.doesNotMatch(contact, /<span class="contact-icon"[^>]*>M<\/span>/);
  assert.doesNotMatch([...pages.values()].join("\n"), /M4 7\.5 8\.3 18/);
  await access(new URL("../public/medium-icon-white.svg", import.meta.url));
});

test("social metadata is site-specific and screenshot-only private details were not copied", () => {
  const allHtml = [...pages.values()].join("\n");
  assert.match(pages.get("/"), /property="og:image" content="https:\/\/meherwerali\.github\.io\/og\.png"/);
  assert.doesNotMatch(allHtml, /codex-preview|react-loading-skeleton|Starter Project/);
  assert.doesNotMatch(allHtml, /\(\+971\)|Zenith Gulf|AirRetailer|MEDZnMORE|Sibisoft|Nucleus Solutions|Sharjah Police|Dubai Police|WantedDB|SourceDB/);
});

test("positioning matches the CV title without erasing technical evidence", () => {
  const home = pages.get("/");
  const work = pages.get("/work/");
  const about = pages.get("/about/");
  assert.match(home, /Senior Software Engineer &amp; Tech Lead/);
  assert.match(home, /Java, Node\.js, and TypeScript/);
  assert.doesNotMatch(home, /Java &amp; Backend Tech Lead|Senior backend engineer|Java and Spring Boot systems first/i);
  assert.ok(home.indexOf("Real-Time Public-Safety Integration") < home.indexOf("Bare-Metal Kubernetes to GKE Migration"));
  assert.ok(work.indexOf("Software &amp; distributed systems") < work.indexOf("Production infrastructure"));
  assert.ok(work.indexOf("Production infrastructure") < work.indexOf("AI integration &amp; applied AI"));
  assert.match(about, /Senior Software Engineer and Tech Lead/);
  assert.match(about, /distributed systems, cloud platforms, reliable AI integrations, frontend delivery, and backend services across Java, Node\.js, and TypeScript/);
});

test("responsive and reduced-motion fallbacks remain in the stylesheet", () => {
  const tabletRules = css.slice(css.indexOf("@media (max-width: 780px)"), css.indexOf("@media (max-width: 480px)"));
  const phoneRules = css.slice(css.indexOf("@media (max-width: 480px)"), css.indexOf("@media (prefers-reduced-motion: reduce)"));
  assert.match(tabletRules, /\.featured-grid,[\s\S]*grid-template-columns: 1fr/);
  assert.match(tabletRules, /\.contact-layout,[\s\S]*grid-template-columns: 1fr/);
  assert.match(tabletRules, /\.about-layout[\s\S]*grid-template-columns: 1fr/);
  assert.match(phoneRules, /\.nav-links[\s\S]*font-size: 0\.66rem/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});
