import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';

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
    react({
      jsxImportSource: 'react',
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
      'react': resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
      'react-router-dom': resolve(__dirname, 'node_modules/react-router-dom')
    },
    extensions: ['.js', '.jsx', '.json', '.mjs']
  },

  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: mode !== 'production',
    minify: mode === 'production' ? 'terser' : false,
    
    // Ensure _redirects is copied as-is without processing
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
