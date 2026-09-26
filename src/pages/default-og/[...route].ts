import { OGImageRoute } from "astro-og-canvas";

export const prerender = true;

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages: {
    home: {
      title: "Bukola's Technical Blog",
      description:
        "Front-end engineer, technical writer, and product manager. This is my digital garden.",
    },
    about: {
      title: "About Page | Bukola's Technical Blog",
      description:
        "Front-end engineer, technical writer, and product manager. This is my digital garden.",
    },
    posts: {
      title: "Blog Page | Bukola's Technical Blog",
      description: "Here lies all blogposts written by Bukola Ogunleye.",
    },
    tags: {
      title: "Tag Page | Bukola's Technical Blog",
      description:
        "Here lies all the tags and categories of the blogposts written by Bukola Ogunleye.",
    },
    projects: {
      title: "Project Page | Bukola's Portfolio",
      description: "Here are selected projects I built",
    },
  },

  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description ? page.description : "",
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
    // bgImage: { path: "./src/assets/bukola.png", fit: "contain" }, //
    bgImage: { path: "./src/assets/hero-background.svg", fit: "contain" }, // I will find a better png image to use here, svg for og image is meh
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
