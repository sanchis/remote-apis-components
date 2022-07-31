import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [    
    react(),
    federation({
    name: 'remote-api-components',
    filename: 'remoteEntry.js',
    exposes: {
      './network-info': './src/network-info/index.tsx',
    },
  })],
  
  base: '/remote-apis-components/'
})
