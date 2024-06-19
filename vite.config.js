import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import minifyHtml from 'vite-plugin-minify';

export default defineConfig({
  plugins: [react(), minifyHtml()],
});
