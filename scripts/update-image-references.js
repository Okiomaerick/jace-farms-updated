const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// File extensions to process
const SOURCE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html'];

// New image paths mapping
const IMAGE_MAPPING = {
  // Hero images
  'about-hero': 'images/heroes/about-hero',
  'clients-hero': 'images/heroes/clients-hero',
  'default-hero': 'images/heroes/default-hero',
  'products-hero': 'images/heroes/products-hero',
  'services-hero': 'images/heroes/services-hero',
  
  // Product images
  'one-month-old-chicks1': 'images/products/one-month-old-chicks1',
  'one-month-old-chicks2': 'images/products/one-month-old-chicks2', 
  'one-month-old-chicks3': 'images/products/one-month-old-chicks3',
  'one-month-old-chicks': 'images/products/one-month-old-chicks',
  'poultry-feed': 'images/products/poultry-feed',
  'hero': 'images/products/hero',
  
  // Brand assets
  'logo': 'images/brand/logo'
};

// Directories to search for files
const SEARCH_DIRS = ['client/src'];

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function updateFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  let updated = false;
  
  // Update import/require statements
  for (const [oldName, newPath] of Object.entries(IMAGE_MAPPING)) {
    // Update .jpg/.jpeg/.png imports
    const importPattern = `(import|require)\\s*(?:\\(\\s*['"]|\\([^)]*?['"]|\\s+from\\s+['"])([^'"]*\\/)?(${oldName})\\.(jpg|jpeg|png|webp)['"]\\s*\\)?`;
    const importRegex = new RegExp(importPattern, 'g');
    
    content = content.replace(importRegex, (match, imp, pathPrefix = '', name, ext) => {
      updated = true;
      return `${imp}('${pathPrefix}${newPath}.${ext}')`;
    });
    
    // Update src attributes in HTML/JSX
    const srcPattern = `(src|href)=['"]([^'"]*\/)?(${oldName})\.(jpg|jpeg|png|webp)['"]`;
    const srcRegex = new RegExp(srcPattern, 'g');
    
    content = content.replace(srcRegex, (match, attr, pathPrefix = '', name, ext) => {
      updated = true;
      return `${attr}="${pathPrefix}${newPath}.${ext}"`;
    });
    
    // Update CSS url() references
    const urlPattern = `url\(['"]?([^'"\)]*\/)?(${oldName})\.(jpg|jpeg|png|webp)['"]?\)`;
    const urlRegex = new RegExp(urlPattern, 'g');
    
    content = content.replace(urlRegex, (match, pathPrefix = '', name, ext) => {
      updated = true;
      return `url('${pathPrefix}${newPath}.${ext}')`;
    });
  }
  
  // Add WebP fallbacks where needed
  const imgTagRegex = /<img([^>]*)src=['"]([^'"]+\.(jpg|jpeg|png))['"]([^>]*)>/g;
  
  content = content.replace(imgTagRegex, async (match, before, src, ext, after) => {
    if (src.includes('webp')) return match;
    
    const basePath = src.replace(/\.[^/.]+$/, '');
    const webpPath = `${basePath}.webp`;
    
    // Check if WebP version exists
    const publicPath = path.join('client/public', webpPath);
    const srcPath = path.join('client/src', webpPath);
    
    if (await fileExists(publicPath) || await fileExists(srcPath)) {
      updated = true;
      return `
        <picture>
          <source srcset="${webpPath}" type="image/webp">
          <source srcset="${src}" type="image/${ext === 'jpg' ? 'jpeg' : ext}">
          <img${before}src="${src}"${after}>
        </picture>`.replace(/\n\s*/g, ' ');
    }
    return match;
  });
  
  if (updated) {
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
    return true;
  }
  
  return false;
}

async function main() {
  console.log('🔍 Searching for files to update...');
  
  // Find all relevant files
  const files = await glob(SEARCH_DIRS.map(dir => 
    `${dir}/**/*.{${SOURCE_EXTENSIONS.map(ext => ext.slice(1)).join(',')}}`
  ), {
    ignore: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**'
    ]
  });
  
  console.log(`📂 Found ${files.length} files to check`);
  
  // Process each file
  let updatedCount = 0;
  for (const file of files) {
    if (await updateFile(file)) {
      updatedCount++;
    }
  }
  
  console.log(`\n✅ Updated ${updatedCount} files with new image references`);
  console.log('\nNext steps:');
  console.log('1. Test the application to ensure all images load correctly');
  console.log('2. Check the console for any 404 errors');
  console.log('3. Run the build process to verify everything works in production');
}

main().catch(console.error);
