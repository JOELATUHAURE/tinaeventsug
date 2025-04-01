import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      swiper: 'swiper',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'esbuild', // Enables minification
    sourcemap: false,  // Disables source maps for better performance
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning threshold
  },
});
