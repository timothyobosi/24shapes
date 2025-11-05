import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react(),
      // Visualize bundle size (only in production)
      mode === 'production' && visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ].filter(Boolean),
    
    // Base public path when served in production
    base: '/', // Change this if deploying to a subdirectory
    
    // Build configuration
    build: {
      outDir: 'dist',
      sourcemap: true, // Enable source maps for production (optional)
      minify: 'terser', // Minify with terser
      cssMinify: true, // Minify CSS
      chunkSizeWarningLimit: 1000, // Increase chunk size warning limit (in kbs)
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor and app code
            react: ['react', 'react-dom', 'react-router-dom'],
            vendor: ['framer-motion', 'lucide-react'],
          },
        },
      },
    },
    
    // Development server configuration
    server: {
      port: 3000,
      open: true,
    },
    
    // Resolve aliases for cleaner imports
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  };
});
