import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { VitePWA } from 'vite-plugin-pwa';
import compression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';

// Image optimization configuration
const imageOptimizerConfig = {
  jpg: { quality: 75 },
  jpeg: { quality: 75 },
  png: { quality: 75 },
  webp: { quality: 70, lossless: false, effort: 5 },
  avif: { quality: 65, lossless: false, effort: 5 },
  includePublic: true,
  logStats: true,
  silent: false,
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
    ViteImageOptimizer(imageOptimizerConfig),
    legacy({
      targets: ['defaults', 'not IE 11'],
      modernPolyfills: true
    }),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Jace Farms',
        short_name: 'JaceFarms',
        description: 'Jace Farms & Consultancy Services',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
    mode === 'analyze' && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),

  // Server configuration
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    host: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
    },
    fs: {
      strict: true,
    },
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: mode !== 'production',
    minify: mode === 'production' ? 'terser' : false,
    cssMinify: mode === 'production',
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          vendor: ['axios', 'clsx', 'tailwind-merge'],
        },
        // Don't hash the .redirects file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === '.redirects') return '[name][extname]';
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
      format: {
        comments: false,
      },
    },
  },
}));
