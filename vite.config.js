import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://s3bucket.schneidestaging.in', // Target server
        changeOrigin: true,
        // Keep the '/api' part of the path
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
});
