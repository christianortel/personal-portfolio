import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // src/server.ts wraps SSR so catastrophic errors render a friendly page.
    tanstackStart({ server: { entry: "server" } }),
    // Build target: Cloudflare Workers (self-hosted deploy via wrangler).
    nitro({ preset: "cloudflare-module" }),
    viteReact(),
  ],
  server: { port: 8080 },
});
