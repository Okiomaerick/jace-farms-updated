#!/bin/bash
# migrate-images.sh

# Exit on error
set -e

echo "🚀 Starting image reorganization..."

# Create necessary directories if they don't exist
mkdir -p client/public/images/heroes
mkdir -p client/public/images/products
mkdir -p client/src/assets/images/heroes
mkdir -p client/src/assets/images/products

# Function to safely move and verify files
safe_move() {
    local src=$1
    local dest=$2
    
    if [ -f "$src" ]; then
        echo "Moving $src to $dest"
        mkdir -p "$(dirname "$dest")"
        mv "$src" "$dest"
    fi
}

# Move hero images
echo "\n📂 Moving hero images..."
for img in about-hero clients-hero default-hero products-hero services-hero; do
    # Move from public
    safe_move "client/public/images/$img.jpg" "client/public/images/heroes/$img.jpg"
    safe_move "client/public/images/$img.webp" "client/public/images/heroes/$img.webp"
    
    # Move from src/assets
    safe_move "client/src/assets/images/$img.jpg" "client/src/assets/images/heroes/$img.jpg"
    safe_move "client/src/assets/images/$img.webp" "client/src/assets/images/heroes/$img.webp"
    
    # Handle webp subdirectory
    safe_move "client/src/assets/images/webp/$img.webp" "client/src/assets/images/heroes/$img.webp"
done

# Move product images
echo "\n📦 Moving product images..."
for img in one-month-old-chicks{1,2,3,} poultry-feed hero; do
    # Move from public
    safe_move "client/public/images/$img.jpg" "client/public/images/products/$img.jpg"
    safe_move "client/public/images/$img.webp" "client/public/images/products/$img.webp"
    
    # Move from src/assets if they exist
    safe_move "client/src/assets/images/$img.jpg" "client/src/assets/images/products/$img.jpg"
    safe_move "client/src/assets/images/$img.webp" "client/src/assets/images/products/$img.webp"
done

# Handle logo separately (keep in root images directory)
echo "\n🏷️  Handling logo..."
mkdir -p client/public/images/brand
safe_move "client/public/images/logo.png" "client/public/images/brand/logo.png"
safe_move "client/public/images/logo.webp" "client/public/images/brand/logo.webp"

# Clean up empty directories
echo "\n🧹 Cleaning up empty directories..."
find client/public/images -type d -empty -delete
find client/src/assets/images -type d -empty -delete

# Remove old webp directory if empty
rmdir client/src/assets/images/webp 2>/dev/null || true

echo "\n✅ Image reorganization complete!"
echo "\nNext steps:"
echo "1. Update image references in the codebase"
echo "2. Test all pages to ensure images load correctly"
echo "3. Remove any unused original images"

exit 0
