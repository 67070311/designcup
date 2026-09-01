import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const candidates = [
  '/mnt/data/cba68a44-337f-4094-8ca6-511f33a8379f.png',
  '/mnt/data/967b78b7-f0d3-4e5f-9b32-9096b87cb9ed.png',
];

const source = candidates.find((p) => fss.existsSync(p));
if (!source) {
  console.log('UPLOAD_NOT_FOUND');
  process.exit(2);
}

const outDir = path.join(process.cwd(), 'public', 'winning', 'hall-of-frame');
await fs.mkdir(outDir, { recursive: true });
const out = path.join(outDir, 'purple-car-rental-winner.webp');
await sharp(source).webp({ quality: 94, effort: 6 }).toFile(out);
const meta = await sharp(out).metadata();
const stat = await fs.stat(out);
console.log(`SOURCE=${source}`);
console.log(`OUTPUT=${out}`);
console.log(`SIZE=${meta.width}x${meta.height} ${Math.round(stat.size/1024)}KB`);
