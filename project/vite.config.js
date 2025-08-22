// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  
  // Base URL for production builds
  base: "/", // root of your domain

  define: {
    __APP_ENV__: JSON.stringify(mode),
  },

  build: {
    outDir: "dist",          // matches Render's Publish Directory
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },

  server: {
    port: 5173,
    open: true,
    host: true,
  },
}))
