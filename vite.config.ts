import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@catalog": fileURLToPath(new URL("./catalog", import.meta.url)),
    },
  },
  server: {
    host: "127.0.0.1",
    port: 3000,
    // Vibe's preview proxy sends a non-localhost Host header.
    allowedHosts: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 3000,
    allowedHosts: true,
  },
});
