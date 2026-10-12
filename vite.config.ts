import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages serves this project under /my-portfolio/.
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
});
