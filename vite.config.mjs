import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },
  plugins: [
      handlebars(),
      copy({
        targets: [
          { src: './src/server/server.js', dest: './dist' }
        ]
      })
  ],
});