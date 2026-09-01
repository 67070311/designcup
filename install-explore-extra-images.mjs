import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "public", "explore");
await fs.mkdir(outDir, { recursive: true });

const readB64 = async (name) => (await fs.readFile(path.join(root, name), "utf8")).trim();

const source48 = Buffer.from(await readB64("explore-rectangle-48.b64"), "base64");
await sharp(source48).webp({ quality: 72 }).toFile(path.join(outDir, "waste-management-app.webp"));

const source49 = Buffer.from(await readB64("explore-rectangle-49-small.b64"), "base64");
await fs.writeFile(path.join(outDir, "maths-with-fun.webp"), source49);

const source50 = Buffer.from(
  (await readB64("explore-rectangle-50-a.b64")) + (await readB64("explore-rectangle-50-b.b64")),
  "base64",
);
await fs.writeFile(path.join(outDir, "theme-park-app.webp"), source50);

for (const name of ["waste-management-app.webp", "maths-with-fun.webp", "theme-park-app.webp"]) {
  const file = path.join(outDir, name);
  const metadata = await sharp(file).metadata();
  console.log(`${name}: ${metadata.width}x${metadata.height}`);
}
