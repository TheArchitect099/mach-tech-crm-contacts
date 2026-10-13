import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Required for GitHub Pages: https://TheArchitect099.github.io/mach-tech-crm-contacts/
  base: '/mach-tech-crm-contacts/',
  plugins: [react(), tailwindcss()],
})
