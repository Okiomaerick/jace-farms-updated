import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    copyPublicDir: true,
    rollupOptions: {
      output: {
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
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]'
      }
    },
    // Ensure _redirects is copied to the root of the build output
    assetsInlineLimit: 0,
  plugins: [
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
    historyApiFallback: {
      disableDotRule: true,
      verbose: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    strictPort: true,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@headlessui/react',
      '@heroicons/react/24/outline'
    ],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
      target: 'es2020',
    }
  },
  build: {
    outDir: '../dist/client',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: mode !== 'production',
    minify: mode === 'production' ? 'terser' : false,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    rollupOptions: {
      output: {
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
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]'
      }
    }
  },
  },
  preview: {
    port: 3000,
    strictPort: true,
    historyApiFallback: {
      disableDotRule: true,
      index: '/index.html'
    }
  },
  esbuild: {
    jsx: 'automatic',
  }
}));
