import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'; //i installed tailwind css vite version

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),//add tailwindcss in plugin baby
    react(),
  ],
})
