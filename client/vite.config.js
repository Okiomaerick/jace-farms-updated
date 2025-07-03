import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// Only run image optimization in production
const optimizeImages = () => {
  if (process.env.NODE_ENV === 'production') {
    return ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80, lossless: false, effort: 6 },
      avif: { quality: 70, lossless: false, effort: 6 },
      includePublic: true,
      logStats: true,
      silent: false,
    });
  }
  return null;
};

// Plugin to copy .redirects file
const copyRedirects = () => ({
  name: 'copy-redirects',
  writeBundle() {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const source = resolve(__dirname, 'public/.redirects');
    const dest = resolve(__dirname, 'dist/.redirects');
    try {
      const content = readFileSync(source, 'utf8');
      writeFileSync(dest, content, 'utf8');
      console.log('Copied .redirects to dist/');
    } catch (err) {
      console.error('Error copying .redirects:', err);
    }
  },
});

export default defineConfig(({ mode }) => ({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  publicDir: 'public',
  
  plugins: [
    copyRedirects(),
    optimizeImages(),
    react({
      // Enable Fast Refresh
      fastRefresh: true,
      // Enable React strict mode
      jsxRuntime: 'automatic',
      // Enable Babel for modern JSX transform
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', {
            runtime: 'automatic',
            importSource: 'react'
          }]
        ]
      }
    }),
    mode === 'analyze' && visualizer({
      open: true,
      filename: 'bundle-analyzer.html',
      gzipSize: true,
      brotliSize: true
    })
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './node_modules')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    preserveSymlinks: true
  },
  
  // Server configuration
  server: {
    port: 3001,
    open: true,
    strictPort: true,
    host: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3001
    },
    watch: {
      usePolling: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    fs: {
      strict: true,
      allow: ['..']
    }
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: mode !== 'production',
    minify: mode === 'production' ? 'terser' : false,
    assetsInlineLimit: 0,
    
    rollupOptions: {
      output: {
        // Don't hash the .redirects file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === '.redirects') return '[name][extname]';
          return 'assets/[name]-[hash][extname]';
        },
        
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('@headlessui') || id.includes('@heroicons')) {
              return 'ui';
            }
            return 'vendor-other';
          }
          return null;
        },
        
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    },
    
    // Terser options for production
    terserOptions: mode === 'production' ? {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    } : {}
  }
}));
