import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000, // Specify your desired port
  },
  resolve: {
    alias: {
      "gsap-trial/ScrollSmoother": "/node_modules/gsap-trial/ScrollSmoother.js",
    },
  },
  build: {
    rollupOptions: {
      external: [], // Ensures all dependencies are bundled
    },
  },
  preview: {
    allowedHosts: ["portfolio-website-2-wock.onrender.com"], // Allow preview on Render
  },
});

