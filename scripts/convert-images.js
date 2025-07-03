const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
  // Directories to process
  sourceDirs: [
    'client/public/images',
    'client/src/assets/images'
  ],
  // File extensions to convert
  extensions: ['.jpg', '.jpeg', '.png'],
  // WebP quality (1-100)
  quality: 80,
  // Whether to keep original files
  keepOriginals: true
};

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (CONFIG.extensions.some(ext => entry.name.toLowerCase().endsWith(ext))) {
      yield fullPath;
    }
  }
}

async function convertToWebP(filePath) {
  try {
    const parsed = path.parse(filePath);
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
    
    // Skip if WebP already exists
    try {
      await fs.access(webpPath);
      console.log(`Skipping (exists): ${webpPath}`);
      return { converted: false, original: filePath, webp: webpPath };
    } catch {
      // File doesn't exist, proceed with conversion
    }

    await sharp(filePath)
      .webp({ quality: CONFIG.quality })
      .toFile(webpPath);
    
    console.log(`Converted: ${filePath} -> ${webpPath}`);
    return { converted: true, original: filePath, webp: webpPath };
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
    return { converted: false, error };
  }
}

async function main() {
  console.log('Starting image conversion to WebP...');
  
  for (const dir of CONFIG.sourceDirs) {
    try {
      console.log(`\nProcessing directory: ${dir}`);
      for await (const filePath of walk(dir)) {
        await convertToWebP(filePath);
      }
    } catch (error) {
      console.error(`Error processing directory ${dir}:`, error);
    }
  }
  
  console.log('\nImage conversion complete!');
}

main().catch(console.error);
