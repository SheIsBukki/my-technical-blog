// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  // loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    updatedDated: z.date().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      pubDate: z.date(),
      updatedDated: z.date().optional(),
      description: z.string().optional(),
      author: z.string().optional(),
      featuredImage: z.object({
        url: image(),
        alt: z.string(),
      }),
      liveUrl: z.string(),
      sourceCode: z.string(),
      stack: z.array(z.string()),
      images: z
        .array(
          z.object({
            url: image(),
            alt: z.string(),
          }),
        )
        .optional(),
      videos: z
        .array(
          z.object({
            url: z.string(),
            alt: z.string(),
          }),
        )
        .optional(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog, portfolio };
