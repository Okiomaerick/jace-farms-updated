import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourcePath = join(__dirname, '../public/images/products.jpg/contact-hero.png');
const outputPath = join(__dirname, '../public/images/heroes/contact-hero.webp');

async function convertImage() {
  try {
    // Ensure output directory exists
    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    // Convert image to WebP
    await sharp(sourcePath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`Successfully converted ${sourcePath} to ${outputPath}`);
  } catch (error) {
    console.error('Error converting image:', error);
    process.exit(1);
  }
}

convertImage();
