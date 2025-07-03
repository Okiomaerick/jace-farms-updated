/**
 * Helper function to create image objects with WebP fallback
 * @param {string} basePath - Base path without extension
 * @returns {Object} Object with webp and jpg paths
 */
export const createImageWithFallback = (basePath) => {
  // Remove any existing extension
  const cleanPath = basePath.replace(/\.(jpg|jpeg|png|webp)$/, '');
  return {
    webp: `${cleanPath}.webp`,
    jpg: `${cleanPath}.jpg`,
    toString() {
      return this.webp; // Default to webp
    }
  };
};

/**
 * Helper function to create a picture element with WebP fallback
 * @param {string} basePath - Base path without extension
 * @param {string} alt - Alt text for the image
 * @param {Object} props - Additional props for the img element
 * @returns {JSX.Element} Picture element with WebP fallback
 */
export const PictureWithFallback = ({ basePath, alt, ...props }) => {
  const cleanPath = basePath.replace(/\.(jpg|jpeg|png|webp)$/, '');
  const webpPath = `${cleanPath}.webp`;
  const jpgPath = `${cleanPath}.jpg`;
  
  return (
    <picture>
      <source srcSet={webpPath} type="image/webp" />
      <source srcSet={jpgPath} type="image/jpeg" />
      <img 
        src={jpgPath} 
        alt={alt} 
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/placeholder-product.jpg';
        }}
        {...props}
      />
    </picture>
  );
};
