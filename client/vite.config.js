import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Untuk username.github.io gunakan '/'
  // Untuk project site gunakan '/repository-name/'
  base: '/hellodits-portfolio/', // Project site
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})
