import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";
import slugify from "slugify";

export const prerender = true;
const blogs = await getCollection("blog");
const projects = await getCollection("portfolio");
const pages = Object.fromEntries([
  ...blogs.map(({ id, data }) => [
    id,
    // encodeURIComponent(slugify(data.title).toLowerCase()),
    { data, slug: encodeURIComponent(slugify(data.title).toLowerCase()) },
  ]),
  ...projects.map(({ id, data }) => [
    id,
    // encodeURIComponent(slugify(data.title).toLowerCase()),
    { data, slug: encodeURIComponent(slugify(data.title).toLowerCase()) },
  ]),
]);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages,

  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: (_path: string, { data }: (typeof pages)[string]) => ({
    title: data.title,
    description: data.description ? data.description : "",
    fonts: ["./public/fonts/Syne/Syne-VariableFont_wght.woff2"],
    font: {
      title: {
        size: 44,
        lineHeight: 1.3,
        families: ["Syne"],
        weight: "Bold",
      },
      description: {
        size: 30,
        lineHeight: 1.6,
        color: [115, 115, 115],
        families: ["Syne"],
        weight: "Normal",
      },
    },
    bgImage: { path: "./src/assets/hero-background.svg", fit: "contain" },
    padding: 80,
    logo: {
      // path: "./src/assets/bukola.png",
      path: "./src/assets/bukolasAvatar.jpg",
      size: [50, 60],
    },
    quality: 100,
    // There are a bunch more options you can use here!
  }),
});
