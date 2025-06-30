import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');
const IMG_DIR = path.join(SRC_DIR, 'assets/images');
const WEBP_DIR = path.join(IMG_DIR, 'webp');

// File extensions to process
const FILE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

async function updateImageImports() {
  try {
    // Get all source files
    const files = await glob(`${SRC_DIR}/**/*.{js,jsx,ts,tsx}`, {
      ignore: ['**/node_modules/**', '**/dist/**', '**/build/**']
    });

    console.log(`Found ${files.length} files to process...`);

    let updatedFiles = 0;

    // Process each file
    for (const filePath of files) {
      try {
        let content = await fs.readFile(filePath, 'utf8');
        let updated = false;

        // Find all image imports and requires
        const importRegex = /(?:import\s+(?:.*?\s+from\s+)?|require\()['"]([^'"\n]+\.(?:jpg|jpeg|png))['"][^)]*\)?/g;
        let match;

        while ((match = importRegex.exec(content)) !== null) {
          const originalPath = match[1];
          
          // Skip if already WebP or external URL
          if (originalPath.endsWith('.webp') || 
              originalPath.startsWith('http') || 
              !['.jpg', '.jpeg', '.png'].some(ext => originalPath.endsWith(ext))) {
            continue;
          }

          // Create new WebP path
          const dirName = path.dirname(originalPath);
          const baseName = path.basename(originalPath, path.extname(originalPath));
          const newPath = path.join(dirName, 'webp', `${baseName}.webp`).replace(/\\/g, '/');
          
          // Replace in content
          content = content.replace(
            new RegExp(`(['"])${originalPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(['"])`, 'g'),
            `$1${newPath}$2`
          );
          
          updated = true;
        }

        // Find all img src attributes
        const srcRegex = /<img[^>]*src=["']([^"']+\.(?:jpg|jpeg|png))[^>]*>/gi;
        content = content.replace(srcRegex, (match, src) => {
          // Skip if already WebP or external URL
          if (src.endsWith('.webp') || src.startsWith('http') || src.startsWith('data:')) {
            return match;
          }
          
          // Create new WebP path
          const dirName = path.dirname(src);
          const baseName = path.basename(src, path.extname(src));
          const newSrc = path.join(dirName, 'webp', `${baseName}.webp`).replace(/\\/g, '/');
          
          // Add loading="lazy" if not present
          let updatedTag = match.replace(
            new RegExp(`(src=["'])${src.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(["'])`),
            `$1${newSrc}$2`
          );
          
          if (!updatedTag.includes('loading=')) {
            updatedTag = updatedTag.replace('<img', '<img loading="lazy"');
          }
          
          updated = true;
          return updatedTag;
        });

        // Write updated content back to file
        if (updated) {
          await fs.writeFile(filePath, content, 'utf8');
          console.log(`Updated: ${path.relative(process.cwd(), filePath)}`);
          updatedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }

    console.log(`\nUpdated ${updatedFiles} files with WebP image references.`);
  } catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
  }
}

// Run the update
updateImageImports().catch(console.error);
