import path from "node:path";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const sandboxRoot = path.dirname(fileURLToPath(import.meta.url));
const libraryRoot = path.resolve(sandboxRoot, "../react");

export default defineConfig(({ mode }) => ({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: {
    dedupe: [
      "react", 
      "react-dom"
    ],
    extensions: [
      ".mjs", 
      ".js", 
      ".mts", 
      ".ts", 
      ".jsx", 
      ".tsx", 
      ".json", 
      ".d.ts"
    ],
    alias: mode === "package"
      ? []
      : [{
          find: /^@orangesix\/react\/(.+)$/,
          replacement: `${path.resolve(libraryRoot, "src")}/$1`,
        }],
  },
  server: {
    fs: { allow: [sandboxRoot, libraryRoot] },
  },
}));
