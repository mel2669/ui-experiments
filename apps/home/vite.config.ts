import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5170,
    strictPort: false,
  },
  preview: {
    port: 4170,
  },
});
