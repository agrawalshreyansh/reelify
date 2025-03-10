


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),react()],
  build: {
    outDir: 'dist', // Default, ensure it's correct
  },
  base: "/", // Prevents broken paths on Vercel
});
