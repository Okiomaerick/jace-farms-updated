import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMG_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const SRC_DIR = path.join(__dirname, '../src/assets/images');
const DEST_DIR = path.join(SRC_DIR, 'webp');

async function convertToWebP() {
  try {
    // Create webp directory if it doesn't exist
    await fs.mkdir(DEST_DIR, { recursive: true });

    // Read all files in the source directory
    const files = await fs.readdir(SRC_DIR);
    
    // Filter for image files
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return IMG_EXTENSIONS.includes(ext);
    });

    console.log(`Found ${imageFiles.length} images to convert...`);

    // Process each image
    for (const file of imageFiles) {
      const filePath = path.join(SRC_DIR, file);
      const fileName = path.basename(file, path.extname(file));
      const outputFile = path.join(DEST_DIR, `${fileName}.webp`);
      
      try {
        // Convert to WebP with quality optimization
        await sharp(filePath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputFile);
        
        console.log(`Converted: ${file} -> ${path.basename(outputFile)}`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error.message);
      }
    }

    console.log('\nConversion complete!');
    console.log(`WebP images saved to: ${DEST_DIR}`);
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

// Run the conversion
convertToWebP().catch(console.error);
