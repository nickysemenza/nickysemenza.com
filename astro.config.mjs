// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import rehypeExternalLinks from "rehype-external-links";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://nickysemenza.com",
  integrations: [mdx(), sitemap(), icon(), playformCompress()],
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