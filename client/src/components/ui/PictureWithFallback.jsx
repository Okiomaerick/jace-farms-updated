import React from 'react';
import PropTypes from 'prop-types';

/**
 * PictureWithFallback - A component that handles image fallbacks gracefully
 * @param {Object} props - Component props
 * @param {string} props.src - The main image source (WebP format recommended)
 * @param {string} props.alt - Alt text for the image
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.fallbackType='webp'] - The type of fallback to use ('webp' or 'avif')
 * @returns {JSX.Element} Picture element with fallback support
 */
const PictureWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackType = 'webp',
  ...props 
}) => {
  // Create fallback source by replacing extension
  const getFallbackSrc = (imgSrc, type) => {
    if (!imgSrc) return '';
    const base = imgSrc.replace(/\.(webp|avif|jpe?g|png|gif)$/i, '');
    
    if (type === 'webp' && !imgSrc.endsWith('.webp')) {
      return `${base}.webp`;
    }
    if (type === 'avif' && !imgSrc.endsWith('.avif')) {
      return `${base}.avif`;
    }
    return imgSrc;
  };

  const fallbackSrc = getFallbackSrc(src, fallbackType);
  const isWebP = src.endsWith('.webp') || fallbackType === 'webp';
  const isAvif = src.endsWith('.avif') || fallbackType === 'avif';

  return (
    <picture>
      {/* Main source */}
      <source srcSet={src} type={`image/${src.split('.').pop()}`} />
      
      {/* Fallback sources */}
      {isWebP && !src.endsWith('.webp') && (
        <source srcSet={fallbackSrc} type="image/webp" />
      )}
      {isAvif && !src.endsWith('.avif') && (
        <source srcSet={fallbackSrc} type="image/avif" />
      )}
      
      {/* Fallback img element */}
      <img 
        src={fallbackSrc || src} 
        alt={alt} 
        className={className}
        loading="lazy"
        {...props} 
      />
    </picture>
  );
};

PictureWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fallbackType: PropTypes.oneOf(['webp', 'avif']),
};

export default PictureWithFallback;
