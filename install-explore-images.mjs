import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "public", "explore");
await fs.mkdir(outDir, { recursive: true });

let installed = 0;
for (let i = 1; i <= 6; i += 1) {
  const groupPath = path.join(root, `explore-group-0${i}.json`);
  const raw = await fs.readFile(groupPath, "utf8");
  const group = JSON.parse(raw);
  for (const [name, b64] of Object.entries(group)) {
    await fs.writeFile(path.join(outDir, name), Buffer.from(b64, "base64"));
    installed += 1;
    console.log(`installed ${name}`);
  }
}

const singles = [
  ["explore-samokat.b64", "samokat-grocery-branding.webp"],
  ["explore-kids-coding.b64", "kids-coding-platform.webp"],
];

for (const [source, name] of singles) {
  const b64 = (await fs.readFile(path.join(root, source), "utf8")).trim();
  await fs.writeFile(path.join(outDir, name), Buffer.from(b64, "base64"));
  installed += 1;
  console.log(`installed ${name}`);
}

console.log(`Installed ${installed} explore images.`);
