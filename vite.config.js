import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'), // Ponto de entrada da lib
      name: 'LoginLib',
      fileName: 'login-lib',
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Não inclui o React no arquivo final
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});