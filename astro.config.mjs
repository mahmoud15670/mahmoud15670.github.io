// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://mahmoud15670.github.io/mahmoud15670.github.io/",
  base: "/mahmoud15670.github.io/",
});
