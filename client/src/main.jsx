import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload Google Fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preconnect';
  fontLink.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontLink);
  
  const fontLink2 = document.createElement('link');
  fontLink2.rel = 'preconnect';
  fontLink2.href = 'https://fonts.gstatic.com';
  fontLink2.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink2);
  
  // Preload main CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'preload';
  cssLink.as = 'style';
  cssLink.href = '/src/index.css';
  document.head.appendChild(cssLink);
  cssLink.onload = () => cssLink.rel = 'stylesheet';
};

// Initialize service worker in production
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service Worker registered');
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Execute optimizations
preloadCriticalResources();

// Create root and render app
const container = document.getElementById('root');
const root = createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Register service worker after initial render
if (process.env.NODE_ENV === 'production') {
  window.addEventListener('load', registerServiceWorker);
}
