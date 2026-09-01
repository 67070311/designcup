import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const sourceRoots = [path.join(root, "app")];
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".md", ".json"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertPngs() {
  const files = await walk(publicDir);
  const pngs = files.filter((file) => path.extname(file).toLowerCase() === ".png");

  for (const pngPath of pngs) {
    const webpPath = pngPath.slice(0, -4) + ".webp";
    await sharp(pngPath).webp({ quality: 90 }).toFile(webpPath);
    await fs.unlink(pngPath);
    console.log(`${path.relative(root, pngPath)} -> ${path.relative(root, webpPath)}`);
  }

  return pngs.length;
}

async function updateReferences() {
  let changedFiles = 0;

  for (const sourceRoot of sourceRoots) {
    const files = await walk(sourceRoot);

    for (const file of files) {
      if (!sourceExtensions.has(path.extname(file).toLowerCase())) continue;

      const before = await fs.readFile(file, "utf8");
      const after = before.replace(/\.png(?=["'`)])/gi, ".webp");

      if (before !== after) {
        await fs.writeFile(file, after, "utf8");
        changedFiles += 1;
        console.log(`updated references: ${path.relative(root, file)}`);
      }
    }
  }

  return changedFiles;
}

const converted = await convertPngs();
const updated = await updateReferences();
console.log(`Converted ${converted} PNG files and updated ${updated} source files.`);
