import fs from 'node:fs/promises';
const files = [
  'app/winning/hall-of-frame/hero.tsx',
  'app/winning/hall-of-frame/recent-winner.tsx',
  'app/winning/hall-of-frame/categories.tsx'
];
for (const file of files) {
  let text = await fs.readFile(file, 'utf8');
  text = text.replace(/<Image(?!\s+unoptimized)/g, '<Image unoptimized');
  text = text.replace(/group-hover:scale-\[[^\]]+\]/g, '');
  await fs.writeFile(file, text, 'utf8');
  console.log('patched', file);
}

let categories = await fs.readFile('app/winning/hall-of-frame/categories.tsx', 'utf8');
categories = categories.replaceAll('/explore/samokat-grocery-branding.webp', '/explore/opay-september-promo.webp');
await fs.writeFile('app/winning/hall-of-frame/categories.tsx', categories, 'utf8');
console.log('replaced corrupt samokat image');
