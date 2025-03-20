import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/implement-react-in-portfolio-1/",
  plugins: [react()],
})
