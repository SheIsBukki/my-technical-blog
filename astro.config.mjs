// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import remarkToc from "remark-toc";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    icon({
      include: { mdi: ["*"] },
    }),
    pagefind(), // This should always be placed last integration so that all integrations run before it does
  ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      [remarkToc, { heading: "toc", maxDepth: 3 }],
      // remarkPlugins: [ [remarkToc, { heading: "contents"} ] ],
    ],
    shikiConfig: {
      themes: {
        light: "github-light-high-contrast",
        dark: "tokyo-night",
      },
    },
  },
});
