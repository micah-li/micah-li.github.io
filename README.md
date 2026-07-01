# micah-li.github.io

Personal website built with plain HTML, CSS, and JavaScript.

## Writing blog posts

Blog posts live in `posts/` as Markdown files. Each post should start with front matter:

```md
---
title: "Winter 2024 Arizona Trip"
date: 2025-01-02
tags: [travel, sedona, grand-canyon]
excerpt: "Optional short summary for the blog index."
---

Write the post here.
```

After adding or editing a post, rebuild the blog:

```sh
node generate-index.js
```

That command creates:

- `blog-posts.html`, the static blog index
- `blog/<slug>.html`, one static HTML page per Markdown post
- `posts/posts.json`, a small metadata index
- `blog.html`, a redirect for old `blog.html?post=<slug>` links

The blog generator is dependency-free, so there is no package install step.

## Updating photos

Photo albums live in `photos/`. Each folder becomes one album on the local photos page:

```text
photos/
  arizona/
    arizona-1.jpg
    arizona-2.jpg
```

After adding, removing, or renaming photo files, rebuild the gallery:

```sh
node generate-photos.js
```

That command creates `photos.html` from the album folders.
