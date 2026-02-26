import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',           // <-- Vite project root (frontend/)
  build: {
    outDir: 'dist',    // output folder
  }
});