import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      build: {
        target: 'esnext',
        cssCodeSplit: true,
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            privacy: path.resolve(__dirname, 'privacy.html'),
            'politica-de-privacidade': path.resolve(__dirname, 'politica-de-privacidade.html'),
          },
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
              icons: ['lucide-react'],
            },
          },
        },
        chunkSizeWarningLimit: 600,
      },

      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
