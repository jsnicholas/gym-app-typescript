import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // give us an absolute path for anything in src folder with @
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
