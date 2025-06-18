import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()];
  if (mode === "development") {
    plugins.push(screenGraphPlugin());
  }
  return {
    plugins: plugins.filter(Boolean), // Ensure no false values
    publicDir: "./public",
    base: "./",
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  };
});
