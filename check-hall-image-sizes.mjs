import fs from 'node:fs/promises';
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
  try { const s = await fs.stat(file); console.log(file, Math.round(s.size/1024)+'KB'); }
  catch { console.log(file, 'MISSING'); }
}
