import sharp from "sharp";
import fs from "node:fs/promises";

const files = [
  "food-delivery.webp",
  "education-platform.webp",
  "mobile-commerce.webp",
  "social-connection.webp",
  "tennis-action.webp",
];

for (const name of files) {
  const path = `public/winning/hall-of-frame/covers/${name}`;
  try {
    const stat = await fs.stat(path);
    const meta = await sharp(path).metadata();
    console.log(name, `${meta.width}x${meta.height}`, `${Math.round(stat.size / 1024)}KB`, "OK");
  } catch (error) {
    console.log(name, "INVALID", error.message.split("\n")[0]);
  }
}
