const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);

// Directories to scan for images
const IMAGE_DIRS = [
  path.join(__dirname, '../client/public/images'),
  path.join(__dirname, '../client/src/assets/images')
];

// Image extensions to check
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

// Keep these original files (don't delete them)
const KEEP_ORIGINALS = [
  // Add any specific files to keep here
  // Example: 'logo.png'
];

async function findImageFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively search subdirectories
      files.push(...(await findImageFiles(fullPath)));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

async function hasWebpVersion(imagePath) {
  const parsed = path.parse(imagePath);
  const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
  
  try {
    await stat(webpPath);
    return true;
  } catch (err) {
    return false;
  }
}

async function cleanupImages() {
  console.log('Starting image cleanup...');
  
  for (const dir of IMAGE_DIRS) {
    try {
      // Check if directory exists
      await stat(dir);
    } catch (err) {
      console.warn(`Directory does not exist: ${dir}`);
      continue;
    }
    
    console.log(`\nScanning directory: ${dir}`);
    const imageFiles = await findImageFiles(dir);
    let deletedCount = 0;
    let skippedCount = 0;
    
    for (const file of imageFiles) {
      const fileName = path.basename(file);
      
      // Skip files in the keep list
      if (KEEP_ORIGINALS.includes(fileName)) {
        console.log(`Keeping original: ${file}`);
        skippedCount++;
        continue;
      }
      
      // Check if WebP version exists
      if (await hasWebpVersion(file)) {
        try {
          await unlink(file);
          console.log(`Deleted: ${file}`);
          deletedCount++;
        } catch (err) {
          console.error(`Error deleting ${file}:`, err.message);
        }
      } else {
        console.log(`No WebP version found, keeping: ${file}`);
        skippedCount++;
      }
    }
    
    console.log(`\nResults for ${dir}:`);
    console.log(`- ${deletedCount} original images deleted`);
    console.log(`- ${skippedCount} original images kept`);
  }
  
  console.log('\nCleanup complete!');
}

// Run the cleanup
cleanupImages().catch(console.error);
