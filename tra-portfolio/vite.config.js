import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Serve docs/ folder as static at /docs route (for PDFs)
  publicDir: "public",
  server: {
    fs: {
      // Allow serving files outside root
      allow: [".."],
    },
  },
});

