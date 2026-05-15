import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 85,        // Calidad de PNGs optimizados
      },
      webp: {
        lossless: false,
        quality: 85,        // Calidad del WebP generado
        alphaQuality: 90,
      },
      avif: {
        quality: 75,
      },
    }),
  ],
})