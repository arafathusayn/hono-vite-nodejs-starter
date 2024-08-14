import devServer from "@hono/vite-dev-server";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    devServer({
      entry: "src/index.ts",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Index",
      fileName: "index",
    },
    sourcemap: true,
    ssr: true,
  },
});
