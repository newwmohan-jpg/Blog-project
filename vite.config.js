import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
})


// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Map 'primary' to your brand's specific color hex code
        primary: '#3b82f6', 
      },
    },
  },
}
