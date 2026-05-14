import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5170,
    // Allow the next free port when 5170 is taken (e.g. root `pnpm dev` already started home).
    strictPort: false,
  },
  preview: {
    port: 4170,
  },
});
