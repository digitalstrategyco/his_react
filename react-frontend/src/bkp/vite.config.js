import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
     rollupOptions: {
      output: {
        entryFileNames: `react-app.js`,
        assetFileNames: `react-app.css`,
      },
    },
  },
//  server: {
//     proxy: {
//       "/api": {
//         target: "https://platform.hospitalintel.com",
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
})
