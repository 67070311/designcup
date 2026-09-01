import fs from 'node:fs/promises';
import sharp from 'sharp';

const b64 = (await fs.readFile('explore-samokat.b64', 'utf8')).trim();
const input = Buffer.from(b64, 'base64');
await sharp(input)
  .resize(1200, null, { kernel: sharp.kernel.lanczos3 })
  .sharpen({ sigma: 1.15, m1: 1, m2: 2 })
  .webp({ quality: 100, effort: 6, smartSubsample: true })
  .toFile('public/explore/samokat-grocery-branding.webp.tmp.webp');
await fs.rename('public/explore/samokat-grocery-branding.webp.tmp.webp', 'public/explore/samokat-grocery-branding.webp');
const stat = await fs.stat('public/explore/samokat-grocery-branding.webp');
console.log('samokat', Math.round(stat.size/1024) + 'KB');
