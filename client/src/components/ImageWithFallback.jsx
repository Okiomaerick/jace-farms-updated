import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt = '',
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isWebPSupported, setIsWebPSupported] = useState(true);

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = () => {
      const elem = document.createElement('canvas');
      if (elem.getContext && elem.getContext('2d')) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };

    setIsWebPSupported(checkWebPSupport());
  }, []);

  const handleError = () => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  // If WebP is not supported and we have a fallback, use the fallback
  const finalSrc = (!isWebPSupported && fallbackSrc) ? fallbackSrc : imgSrc;

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );
};

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
};

export default ImageWithFallback;
