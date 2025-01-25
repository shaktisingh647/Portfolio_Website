// filepath: /c:/Users/PRIYA SINGH/OneDrive/Desktop/Portfolio_web/Portfolio-Website/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000, // You can specify any port you prefer
  },
  build: {
    rollupOptions: {
      external: ['gsap-trial/ScrollSmoother']
    }
  }
});
