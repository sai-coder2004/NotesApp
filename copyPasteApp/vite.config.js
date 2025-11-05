import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // ensure vite uses project root
  build: {
    outDir: 'dist', // where production files go
  },
})
