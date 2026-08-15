const links = [
  "https://github.com/MeherwerAli",
  "https://github.com/MeherwerAli/llm-reliability-gateway",
  "https://github.com/MeherwerAli/cited-research-workbench",
  "https://github.com/MeherwerAli/llm-eval-inference-lab",
  "https://github.com/MeherwerAli/spring-cloud-platform-lab",
  "https://github.com/MeherwerAli/kafka-consumer-reference",
  "https://github.com/MeherwerAli/responsible-web-crawler",
  "https://github.com/MeherwerAli/document-portfolio-generator",
  "https://github.com/MeherwerAli/engineering-knowledge-vault",
  "https://www.linkedin.com/in/meherwer-ali",
  "https://medium.com/@meherwer_ali",
];

const expectedBotBlocks = new Map([
  ["https://medium.com/@meherwer_ali", new Set([403])],
]);

const failures = [];
for (const link of links) {
  try {
    const options = { method: "HEAD", redirect: "follow", headers: { "User-Agent": "Mozilla/5.0 portfolio-link-check" } };
    let response = await fetch(link, options);
    if (response.status === 405) {
      response = await fetch(link, { ...options, method: "GET" });
    }
    if (response.ok) console.log(`OK ${response.status} ${link}`);
    else if (expectedBotBlocks.get(link)?.has(response.status)) {
      console.warn(`WARN ${response.status} ${link} (automated request blocked; verify in a browser)`);
    } else failures.push(`${link}: ${response.status}`);
  } catch (error) {
    failures.push(`${link}: ${error instanceof Error ? error.message : String(error)}`);
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
