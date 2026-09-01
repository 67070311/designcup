import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "public", "winning", "hall-of-frame", "covers");
await fs.mkdir(outDir, { recursive: true });

const files = [
  ["hall-food-delivery-card.b64", "food-delivery.webp"],
  ["hall-cover-education.b64", "education-platform.webp"],
  ["hall-cover-commerce.b64", "mobile-commerce.webp"],
  ["hall-cover-social.b64", "social-connection.webp"],
  ["hall-cover-tennis.b64", "tennis-action.webp"],
];

for (const [source, name] of files) {
  const b64 = (await fs.readFile(path.join(root, source), "utf8")).trim();
  const data = Buffer.from(b64, "base64");
  await fs.writeFile(path.join(outDir, name), data);
  console.log(`${name}: ${Math.round(data.length / 1024)}KB`);
}
