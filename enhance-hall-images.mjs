import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const files = [
  'public/winning/hall-of-frame/car-rental-winner.webp',
  'public/explore/designjoy-studio.webp',
  'public/explore/night-owl-shopping-app.webp',
  'public/explore/blue-map-mobile-ui.webp',
  'public/explore/overcooked-game-site.webp',
  'public/explore/perfect-learning-education.webp',
  'public/explore/newlife-social-app.webp',
  'public/explore/nike-football-landing.webp',
  'public/explore/samokat-grocery-branding.webp',
  'public/explore/pickleball-community-site.webp',
  'public/explore/kids-coding-platform.webp',
  'public/explore/language-learning-app.webp',
  'public/explore/kids-math-game.webp',
  'public/explore/habit-tracker-app.webp',
  'public/explore/kids-toy-shopping-app.webp',
  'public/explore/walking-rewards-app.webp',
  'public/explore/daily-checkin-modal.webp',
  'public/explore/opay-september-promo.webp',
  'public/explore/focus-task-app.webp'
];

for (const file of files) {
  try {
    const input = await fs.readFile(file);
    const meta = await sharp(input).metadata();
    if (!meta.width || !meta.height) continue;

    const isPortrait = meta.height > meta.width * 1.25;
    const targetWidth = isPortrait ? 1200 : 1600;
    const targetHeight = Math.round((meta.height / meta.width) * targetWidth);
    const tmp = `${file}.tmp.webp`;

    await sharp(input)
      .resize(targetWidth, targetHeight, { kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 1.15, m1: 1, m2: 2 })
      .webp({ quality: 100, effort: 6, smartSubsample: true })
      .toFile(tmp);

    await fs.rename(tmp, file);
    const stat = await fs.stat(file);
    console.log(`${path.basename(file)} ${meta.width}x${meta.height} -> ${targetWidth}x${targetHeight} ${Math.round(stat.size / 1024)}KB`);
  } catch (error) {
    console.error(`failed ${file}`, error.message);
  }
}
