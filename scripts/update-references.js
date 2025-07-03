const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// File extensions to process
const SOURCE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html'];
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

// Directories to search for files
const SEARCH_DIRS = [
  'client/src',
  'client/public'
];

// Skip these directories
const IGNORE_DIRS = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/.next/**',
  '**/public/**'
];

async function findImageReferences(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const references = [];
  
  // Match various import/require patterns for image files
  const importRegex = /(?:import|require)\s*(?:\(?['"`](.*?\.(?:jpg|png))['"`]\)?)/g;
  
  // Match src attributes in JSX/HTML
  const srcRegex = /(?:src|href)=['"`]([^'"`]+\.(?:jpg|jpeg|png))['"`]/g;
  
  // Match CSS url() patterns
  const urlRegex = /url\(['"]?([^)'"]+\.(?:jpg|jpeg|png))['"]?\)/g;
  
  let match;
  
  // Check import/require statements
  while ((match = importRegex.exec(content)) !== null) {
    const imgPath = match[1];
    if (IMAGE_EXTENSIONS.some(ext => imgPath.endsWith(ext))) {
      references.push({
        type: 'import',
        original: match[0],
        path: imgPath,
        start: match.index,
        end: match.index + match[0].length
      });
    }
  }
  
  // Check src/href attributes
  while ((match = srcRegex.exec(content)) !== null) {
    const imgPath = match[1];
    if (IMAGE_EXTENSIONS.some(ext => imgPath.endsWith(ext))) {
      references.push({
        type: 'attribute',
        original: match[0],
        path: imgPath,
        start: match.index,
        end: match.index + match[0].length
      });
    }
  }
  
  // Check CSS url() patterns
  while ((match = urlRegex.exec(content)) !== null) {
    const imgPath = match[1];
    if (IMAGE_EXTENSIONS.some(ext => imgPath.endsWith(ext))) {
      references.push({
        type: 'url',
        original: match[0],
        path: imgPath,
        start: match.index,
        end: match.index + match[0].length
      });
    }
  }
  
  return {
    filePath,
    references
  };
}

function updateReference(original, imgPath, fileContent) {
  const parsedPath = path.parse(imgPath);
  const webpPath = `${parsedPath.dir}/${parsedPath.name}.webp`;
  
  // Handle different reference types
  if (original.startsWith('import') || original.startsWith('require')) {
    // Update import/require statements
    return original.replace(imgPath, webpPath);
  } else if (original.startsWith('src=') || original.startsWith('href=')) {
    // Update src/href attributes
    return original.replace(imgPath, webpPath);
  } else if (original.startsWith('url(')) {
    // Update CSS url()
    return original.replace(imgPath, webpPath);
  }
  
  return original;
}

async function updateFileReferences(filePath) {
  const result = await findImageReferences(filePath);
  if (result.references.length === 0) {
    return { updated: false, filePath, updatedRefs: [] };
  }
  
  let content = await fs.readFile(filePath, 'utf-8');
  let updated = false;
  
  // Process references in reverse order to preserve positions
  for (const ref of [...result.references].reverse()) {
    const updatedRef = updateReference(ref.original, ref.path, content);
    if (updatedRef !== ref.original) {
      content = content.slice(0, ref.start) + updatedRef + content.slice(ref.end);
      updated = true;
    }
  }
  
  if (updated) {
    await fs.writeFile(filePath, content, 'utf-8');
    const updatedRefs = result.references.map(ref => ref.path);
    console.log(`Updated ${result.references.length} references in ${filePath}:`);
    updatedRefs.forEach(ref => console.log(`  - ${ref} → ${ref.replace(/\.(jpg|png)$/i, '.webp')}`));
    return { updated, filePath, updatedRefs };
  }
  
  return { updated: false, filePath, updatedRefs: [] };
}

async function main() {
  console.log('Searching for image references...');
  
  // Find all relevant files
  const files = [];
  for (const dir of SEARCH_DIRS) {
    const dirFiles = await glob(`${dir}/**/*.{${SOURCE_EXTENSIONS.join(',')}}`, {
      ignore: IGNORE_DIRS,
      nodir: true
    });
    files.push(...dirFiles);
  }
  
  console.log(`Found ${files.length} files to process`);
  
  // Process each file
  let updatedCount = 0;
  let totalRefsUpdated = 0;
  const updatedFiles = [];
  
  for (const file of files) {
    const result = await updateFileReferences(file);
    if (result.updated) {
      updatedCount++;
      totalRefsUpdated += result.updatedRefs.length;
      updatedFiles.push({
        file: result.filePath,
        updates: result.updatedRefs
      });
    }
  }
  
  // Print summary
  console.log('\n=== Update Summary ===');
  console.log(`• ${updatedCount} files updated`);
  console.log(`• ${totalRefsUpdated} image references converted to WebP`);
  
  if (updatedCount > 0) {
    console.log('\nUpdated files:');
    updatedFiles.forEach(({file, updates}) => {
      console.log(`\n${file}:`);
      updates.forEach(update => {
        console.log(`  - ${update} → ${update.replace(/\.(jpg|png)$/i, '.webp')}`);
      });
    });
  }
}

main().catch(console.error);
