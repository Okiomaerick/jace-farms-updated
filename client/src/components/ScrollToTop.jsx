import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const { pathname, hash, key } = useLocation();

  // Handle scroll to top on route change
  useEffect(() => {
    // Only run this effect when pathname changes, not when hash changes
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    
    // Scroll window to top
    window.scrollTo(0, 0);
    
    // For browsers that might need extra help
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  // Handle hash links (anchor links)
  useEffect(() => {
    if (hash) {
      // Use setTimeout to ensure the DOM is updated
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          // Calculate the position to scroll to
          const headerOffset = 100; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          // Smooth scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Focus the element for better accessibility
          element.setAttribute('tabindex', '-1');
          element.focus({ preventScroll: true });
        }
      }, 0);
      
      return () => clearTimeout(timer);
    }
  }, [hash, key]);

  // Add smooth scrolling for all internal links
  useEffect(() => {
    const handleClick = (e) => {
      // Only handle internal links
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href === '#' || href === '') return;
      
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        e.preventDefault();
        
        // Update URL without causing a page reload
        window.history.pushState({}, '', href);
        
        // Scroll to the element
        const headerOffset = 100; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Focus the element for better accessibility
        element.setAttribute('tabindex', '-1');
        element.focus({ preventScroll: true });
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return children || null;
};

export default ScrollToTop;
