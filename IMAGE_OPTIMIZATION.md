# Image Optimization Guide

This document outlines the image optimization strategy implemented in the Jace Farms project.

## Image Structure

All images are organized in the following structure:

```
client/
├── public/
│   └── images/
│       ├── heroes/       # Hero section images (WebP + original formats)
│       └── products/     # Product images (WebP + original formats)
└── src/
    └── assets/
        └── images/       # Component-specific images (WebP + original formats)
```

## Image Optimization Strategy

1. **Formats**
   - WebP is the primary format for all images
   - Original JPG/PNG formats are kept as fallbacks
   - AVIF format is generated for modern browsers

2. **Implementation**
   - All images use the `<picture>` element with WebP fallback to JPG/PNG
   - Lazy loading is enabled for all images
   - Images are optimized during the production build

3. **Optimization Settings**
   - WebP: 80% quality, efficient encoding
   - AVIF: 70% quality, efficient encoding
   - JPG/PNG: 80% quality

## Using Images in Components

1. **For static images in components**:
   ```jsx
   import { PictureWithFallback } from '../utils/imageUtils';
   
   // In your component
   <PictureWithFallback
     basePath="/images/heroes/hero-image"
     alt="Hero image"
     className="w-full h-64 object-cover"
   />
   ```

2. **For dynamic images in data objects**:
   ```jsx
   import { createImageWithFallback } from '../utils/imageUtils';
   
   const product = {
     name: 'Product Name',
     image: createImageWithFallback('/images/products/product-1')
   };
   
   // In your component
   <PictureWithFallback
     basePath={product.image.webp.replace('.webp', '')}
     alt={product.name}
     className="w-full h-48 object-cover"
   />
   ```

## Build Process

1. **Development**:
   - Images are served as-is for faster builds
   - WebP fallback is still available

2. **Production**:
   - Images are optimized during build
   - WebP and AVIF versions are generated
   - Original images are kept as fallbacks

## Cleaning Up Unused Images

To remove unused original images after verifying WebP versions:

```bash
node scripts/cleanup-images.js
```

## Best Practices

1. Always use the `PictureWithFallback` component for images
2. Provide meaningful alt text for accessibility
3. Use appropriate image dimensions to avoid layout shifts
4. Optimize images before adding them to the project
5. Run the cleanup script before deploying to production

## Troubleshooting

1. **Missing Images**:
   - Check if the WebP version exists
   - Verify the path is correct
   - Check the browser's network tab for 404 errors

2. **Build Issues**:
   - Ensure all image paths are correct
   - Check for case sensitivity in file names
   - Verify file permissions

## Performance Impact

- WebP images are typically 25-35% smaller than JPG/PNG
- Lazy loading improves initial page load time
- Proper image sizing reduces layout shifts
