import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const [rawSlug, name] = process.argv.slice(2);

if (!rawSlug || !name) {
  console.log("Usage: npm run redirect -- <slug> <name>");
  console.log("Example: npm run redirect -- /acme 'Acme Corp'");
  process.exit(1);
}

const slug = rawSlug.replace(/^\//, "");
const source = name.toLowerCase().trim().replace(/[\s_]+/g, "-");

const file = new URL("../vercel.json", import.meta.url);
const config = JSON.parse(readFileSync(file, "utf8"));
config.redirects ??= [];

const existing = config.redirects.find((r) => r.source === `/${slug}`);
if (existing) {
  console.error(`Redirect /${slug} already exists -> ${existing.destination}`);
  process.exit(1);
}

const redirect = {
  source: `/${slug}`,
  destination: `https://gideonchrapko.com/?utm_source=${source}&utm_medium=application&utm_campaign=portfolio`,
  permanent: false,
};

config.redirects.push(redirect);
writeFileSync(file, `${JSON.stringify(config, null, 2)}\n`, "utf8");

console.log(`Added: ${redirect.source} -> ${redirect.destination}`);

execSync(`git add vercel.json && git commit -m "adding ${source} utm" && git push`, {
  stdio: "inherit",
});
