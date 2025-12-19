// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time";
import rehypeExternalLinks from "rehype-external-links";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nickysemenza.com",
  integrations: [mdx(), sitemap(), icon()],
  image: {
    // Use Sharp for image processing with optimized settings
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Allow processing large images without hitting pixel limits
        limitInputPixels: false,
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ["noopener"], target: "_blank" }],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});