import { defineConfig } from "vitest/config";
import path from "node:path";

// Standalone config so tests don't load the Lovable/nitro vite plugins.
export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
  test: { environment: "node", include: ["src/**/*.test.ts"] },
});
