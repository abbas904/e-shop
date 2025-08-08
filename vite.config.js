import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-slick') || id.includes('slick-carousel')) return 'vendor-slick'
            if (id.includes('react-toastify')) return 'vendor-toastify'
            if (id.includes('framer-motion')) return 'vendor-motion'
            return 'vendor'
          }
        }
      }
    }
  }
})
