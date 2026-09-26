---
title: "An Inside Look: Building a Static Blog with Astro from Start to Finish"
pubDate: 2025-06-10
description: "Discover how I built a static blog with Astro, exploring features like markdown support, search functionality, dynamic OG images, and more."
author: "Bukola Ogunleye"
image:
  url: ""
  alt: ""
tags: ["astro", "blogging"]
---

## [Introduction to Astro](#introduction-to-astro)

Astro is a server-first JavaScript web framework for building content-driven websites. It's a static site generator that aims to reduce writing client-side JavaScript. Hence, sites built with Astro are relatively faster than those built with many JavaScript frameworks such as Next.js and Nuxt.js. One of its interesting features is that it is framework-agnostic—meaning Astro is compatible with pretty much any JavaScript framework.

### [So, Why Astro?](#so-why-astro)

I stumbled on Astro about three weeks ago and after scanning the [website](https://astro.build), I decided to do the little blog tutorial in the docs. I realised that Astro had a familiar experience if you have some Vue.js or JSX knowledge. The docs are quite comprehensive and will give you expected results. I'm eyeing 🌚 Next.js docs as I write this by the way... The main attraction for me was the seamless built-in markdown support. I would build this blog with either Vue.js, Next.js or Nuxt.js anyway, but it would have taken me more time to decide on it. But Astro felt welcoming so here we are!

## [My Process For Building a Static Blog With Astro](#my-process-for-building-a-static-blog-with-astro)

I ran `pnpm create astro@latest` and went with the minimal setup because I generally prefer to scaffold new projects on a clean slate.

```zsh
pnpm install
pnpm astro add tailwind
pnpm add --save-dev --save-exact prettier prettier-plugin-astro
pnpm install -D prettier-plugin-tailwindcss
```

I got to coding. I simply followed the tutorial approach and used the content collection. My content collection is still pretty basic at this point, and I doubt that I would need to add more things because this is a simple blog.

### [Content Collection](#content-collection)

```ts
//content.config.ts

import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
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

export const collections = { blog };
```

This line tells the content collection where your blog markdown files are assuming you named your markdown files directory **blog**.

```ts
loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" });
```

The `z` represents **Zod**, the typescript-first validation library that allows the defining of type-safe schemas and parsing data. Astro bundles Zod into its `astro:content` so we don't need to explicitly install Zod.

### [Installed Packages](#installed-packages)

This is what my **package.json** file looks like at the time of writing this;

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "postbuild": "pagefind --site dist",
    "preview": "astro preview",
    "astro": "astro",
    "prettier": "exec prettier . --write"
  },
  "dependencies": {
    "@astrojs/rss": "^4.0.11",
    "@tailwindcss/vite": "^4.1.7",
    "astro": "^5.8.0",
    "astro-icon": "^1.1.5",
    "astro-og-canvas": "^0.7.0",
    "astro-pagefind": "^1.8.3",
    "canvaskit-wasm": "^0.40.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "mdast-util-to-string": "^4.0.0",
    "reading-time": "^1.5.0",
    "remark-toc": "^9.0.0",
    "slugify": "^1.6.6",
    "tailwind-merge": "^3.3.0",
    "tailwindcss": "^4.1.7"
  },
  "devDependencies": {
    "@iconify-json/mdi": "^1.2.3",
    "@iconify-json/tabler": "^1.2.18",
    "pagefind": "^1.3.0",
    "prettier": "3.5.3",
    "prettier-plugin-astro": "0.14.1",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tw-animate-css": "^1.3.2"
  }
}
```

I had to add this `"prettier": "exec prettier . --write"` because I use Sublime Text and for some reason, prettier isn't formatting on save for this Astro project specifically. I also didn't want to spend time trying to resolve it.

#### [Astro Icon](#astro-icon)

For Icons, I used the third-party astro icon because it supports Iconfiy out of the box, and I'm familiar with Iconify and Tabler icons. For React and Next.js, my go-to icon libraries are React Icons and Lucide React. For Vue and Nuxt.js, Iconify and tabler.

```zsh
pnpm astro add astro-icon
pnpm i -D @iconify-json/tabler
pnpm i -D @iconify-json/mdi // material design icons
```

I also installed material design icons because it has a few icons I would rather use instead of what Tabler has for some of the icons I wanted.

Building this blog made me realise that the `select` and `option` elements don't work smoothly with icons and SVGs. I also tried Font Awesome for this but decided to give up on it since it wasn't important. I might one day find a good workaround for using icons with my theme select element.

#### [Pagination](#pagination)

Pagination was easy to set up following the [docs](https://docs.astro.build/en/guides/routing/#pagination) on astro.build.

#### [Search Functionality With Pagefind](#search-functionality-with-pagefind)

At this point, my search functionality is pretty basic. I haven't designed it to look as sleek as I would like it to, but it works. I used [Pagefind](https://pagefind.app).

```zsh
pnpm i astro-pagefind
```

I chose Pagefind because it is a framework-agnostic static search library and because it consumes little bandwidth compared to search tools like Algolia. If you're building a simple project, you don't need high-intensive tools.

> Pagefind can run a full-text search on a 10,000 page site with a total network payload under 300kB, including the Pagefind library itself. For most sites, this will be closer to 100kB.
>
> -- <cite>Pagefind</cite>

Now, if you look at my package.json `scripts` above, you will see that I have this command script in the scripts:

```zsh
"postbuild": "pagefind --site dist",
```

Pagefind relies on the built static files of your website. I added the postbuild script so that Pagefind can run after the site has been built using the default Astro build output—dist. It is also important that you put Pagefind as the last integration in the integrations in your Astro config so that all integrations run before it does.

#### [Reading Time with a Remark Plugin](#reading-time-with-a-remark-plugin)

I implemented reading time using a remark plugin, and installed these two helper packages as written in the Astro [docs](https://docs.astro.build/en/recipes/reading-time/#recipe):

- reading-time
- mdast-util-to-string

```zsh
pnpm add reading-time mdast-util-to-string
```

#### [Table of Contents With remark-toc](#table-of-contents-with-remark-toc)

Remark also has a plugin for auto-generating a table of contents called _remark-toc_. So, I installed it.

```zsh
pnpm install remark-toc
```

However, I ended up using my custom code inspired by [Noah's article](https://noahflk.com/blog/astro-table-of-contents).

Unlike Noah's approach where he mapped through all the posts to extract the headings, I extracted the headings from each post's rendered content.

```ts
// Noah's approach

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");

  const headings = await Promise.all(
    posts.map(async (post) => {
      const data = await render(post);
      return data.headings;
    }),
  );

  return posts.map((post, index) => ({
    params: {
      //...
    },
    props: { post, headings: headings[index] },
  }));
}) satisfies GetStaticPaths;
```

I think it's not Big O efficient to map through posts twice if I can extract the headings from each post. So, you will see that I don't have the defined `headings` variable in my case.

```ts
// My approach

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");

  return posts.map((post) => ({
    params: {
      slug: `${slugify(post.data.title.toLowerCase())}`,
      id: post.id,
    },
    props: { post, headings: post?.rendered?.metadata?.headings },
  }));
}) satisfies GetStaticPaths;
```

To limit the headings in the table of contents to h1 - h3 to implement a max depth, I also used Noah's approach. This will show only headings 1 - 3 in my table of contents.

```ts
const filteredHeadings = frontmatter.headings.filter(
  (heading: MarkdownHeading) => heading.depth <= 3,
);
```

#### [Dynamic OG Image With Astro-OG-Canvas](#dynamic-og-image-with-astro-og-canvas)

My goal was to create dynamic open graph images for each article using the article's title and description if there is one, with a simple background and a logo. As you can see, I am a pnpm girlie, so I had to install `canvaskit-wasm` but you don't need it if you're using npm. You can explore the package's [README](https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas) to see how to use it.

```zsh
pnpm i astro-og-canvas
pnpm i canvaskit-wasm
```

I struggled a bit with implementing the og images. I wanted to use the blog title slug for the og route slug rather than the default post ID automatically generated by Astro. It didn't work.

Astro automatically generates post IDs for each .md file defined in the folder you point the content collection to using the file name. So, if you name a markdown file **blogpost-1.md**, the file (aka the blogpost) automatically gets an ID of `blogpost-1`. Now, you could use this naming system for your markdown files so that the naming follows a chronological order but use the blog title to create a slug for each post, which is what I did. Anyway, I tried to use the blog slug, but it didn't work, so I figured that the astro-og-canvas setup requires the post ID, not the slug.

I also realised that generating dynamic open graph images requires defined fonts. System fonts won't work.

You can confirm that your website has open graph images with this [site](https://ogstudio.app/tools/open-graph-image-checker)

#### [RSS Feed WIth Astrojs/rss]()

Setting up the RSS feed is pretty easy following the [docs](https://docs.astro.build/en/recipes/rss/) or the [tutorial](https://docs.astro.build/en/tutorial/5-astro-api/4/).

```zsh
pnpm add @astrojs/rss
```

You can validate your RSS feed using sites like [this feed validator site](https://validator.w3.org/feed/).

### [DOM Manipulation](#dom-manipulation)

Although Astro is tryng to reduce client-side JavaScript, I wrote a few client-side logic for DOM manipulation.

#### [Slot](#slot)

I wrapped the slot in an `<article class='blog-slot'>` element so that I could easily access the slot and its children.

```astro
<script>
  const blogSlot = document.querySelector(".blog-slot") as HTMLElement;

  // ANCHOR TAG
  const slotAnchors = [...blogSlot.querySelectorAll("a")];
  slotAnchors.map((anchor) => {
    if (!anchor.href.toString().includes("production URL")) {
      // You can use the development URL to test in development but remember to replace it with your production URL before deploying
      anchor.target = "_blank";
      anchor.classList.add("external-link");
    }
  });

  // INLINE CODE
  const slotInlineCode = [...blogSlot.querySelectorAll("code")];
  slotInlineCode.map((code) => {
    if (code.parentElement?.tagName !== "PRE") {
      code.classList.add("inline-code");
    }
  });

  // CODE BLOCK
  const slotCodeBlocks = Array.from(blogSlot.querySelectorAll("pre"));

  const copyButtonHtml = `<span aria-role='copy'>svg</span>`; // I put an actual svg here

  for (let codeBlock of slotCodeBlocks) {
    let codeBlockWrapper = document.createElement("div");
    codeBlockWrapper.classList.add("code-block-wrapper");

    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-code-button");
    copyButton.setAttribute("role", "copy-code");
    copyButton.setAttribute("title", "Copy code");
    copyButton.setAttribute("type", "button");

    copyButton.innerHTML = copyButtonHtml;

    codeBlock.setAttribute("tabindex", "0");
    codeBlock.appendChild(copyButton);

    codeBlock.parentElement?.insertBefore(codeBlockWrapper, codeBlock);
    codeBlockWrapper.appendChild(codeBlock);

    copyButton.addEventListener("click", async () => {
      await copyCode(codeBlock, copyButton);
    });
  }

  async function copyCode(
    codeSnippet: HTMLElement,
    buttonElement: HTMLButtonElement,
  ) {
    let code = codeSnippet.querySelector("code");
    if (!code?.innerText) {
      return;
    }

    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    buttonElement.innerText = "Copied";
    setTimeout(() => (buttonElement.innerHTML = copyButtonHtml), 800);
  }
</script>
```

## [Todo: Continued Improvement](#todo-continued-improvement)

- CMS

I am exploring the idea of setting up a free CMS for the blog. I'm leaning strongly towards git-based CMSs, particularly Decap CMS. I'm considering Decap CMS because it looks like it adds an admin route to the production URL, which has an editor.

- Analytics

I'm also considering the idea of tracking performance. I'm familiar with Umami, so I might use that unless there's a better alternative.

- Optimisation

I will also optimise for screen readers. Currently Safari mobile skips the table of contents and headings when reading the blog posts. It also ignores the publication details—published date, reading time, and author's name.

## [Conclusion](#conclusion)

**What next?**

As I mentioned above, I will continue to improve the blog. I'm big on using semantic elements for accessibility reasons. So, I'm sure that there are some elements I can replace with more semantic ones. Similarly, I'm sure that I will find some JavaScript logic I can write to be more performant. I discovered one as I was writing this article, I initially mapped through the posts twice as I mentioned [here](#table-of-contents-with-remark-toc) before changing my approach.

This article is actually why I haven't experimented with different git-based CMSs I'm considering because I want to publish one article manually first.

**My Astro Verdict**

Astro docs are some of the most comprehensive docs I've read, no wonder its rapid adoption compared to some other relatively new JavaScript frameworks.

**Finally!**

If you want more comprehensive code-rich articles on front-end development, stay tuned!
