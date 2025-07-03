const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
  sourceDir: 'client/public/images/products.jpg',
  targetDir: 'client/public/images/products',
  // WebP quality (1-100)
  quality: 80
};

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function processImages() {
  try {
    // Ensure target directory exists
    await ensureDir(CONFIG.targetDir);
    
    // Read all files from source directory
    const files = await fs.readdir(CONFIG.sourceDir);
    const imageFiles = files.filter(file => 
      ['.jpg', '.jpeg', '.png'].some(ext => file.toLowerCase().endsWith(ext))
    );

    if (imageFiles.length === 0) {
      console.log('No image files found in source directory');
      return;
    }

    console.log(`Found ${imageFiles.length} images to process`);

    // Process each image
    for (const file of imageFiles) {
      const sourcePath = path.join(CONFIG.sourceDir, file);
      const targetBase = path.join(CONFIG.targetDir, path.basename(file, path.extname(file)));
      const targetJpg = `${targetBase}${path.extname(file)}`;
      const targetWebp = `${targetBase}.webp`;

      try {
        // Copy original JPG
        await fs.copyFile(sourcePath, targetJpg);
        console.log(`Copied: ${sourcePath} -> ${targetJpg}`);

        // Convert to WebP
        await sharp(sourcePath)
          .webp({ quality: CONFIG.quality })
          .toFile(targetWebp);
        
        console.log(`Converted to WebP: ${targetWebp}`);

      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }

    console.log('\nAll images processed successfully!');
    console.log(`Original JPGs saved to: ${CONFIG.targetDir}`);
    console.log(`WebP versions saved to: ${CONFIG.targetDir}`);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run the script
processImages();
