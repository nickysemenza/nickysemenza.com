// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import rehypeExternalLinks from "rehype-external-links";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://nickysemenza.com",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  experimental: {
    responsiveImages: true,
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ["noopener"], target: "_blank" }],
    ],
  },
});