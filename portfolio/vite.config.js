import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Automatically open the app in the browser on start
  },
  build: {
    outDir: 'build', // Output directory for the production build
    sourcemap: false, // Optional: Disable source maps in production
    minify: 'esbuild', // Minify the build files for production
  },
  base: '/', // Optional: set this to a relative path if deploying to a sub-path
});
