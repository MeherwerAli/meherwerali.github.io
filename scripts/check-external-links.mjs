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
];

const failures = [];
for (const link of links) {
  try {
    const response = await fetch(link, { method: "HEAD", redirect: "follow" });
    if (!response.ok) failures.push(`${link}: ${response.status}`);
    else console.log(`OK ${response.status} ${link}`);
  } catch (error) {
    failures.push(`${link}: ${error instanceof Error ? error.message : String(error)}`);
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
