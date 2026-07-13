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
node generation-tools/generate-index.js
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
node generation-tools/generate-photos.js
```

That command creates `photos.html` from the album folders.

## Writing math diary entries

Math diary entries live in `math-diary/` as Markdown files. Files that start with `_`, such as `_template.md`, are ignored by the generator.

```md
---
title: "Week of July 4, 2026"
date: 2026-07-04
excerpt: "A short summary of the week's mathematical work."
---

Write the entry here. Inline math like $G \curvearrowright X$ works, as do display equations:

$$
\begin{aligned}
H^n(G; M) &\cong \operatorname{Ext}^n_{\mathbb{Z}G}(\mathbb{Z}, M).
\end{aligned}
$$
```

After adding or editing diary entries, rebuild the section:

```sh
node generation-tools/generate-math-diary.js
```

That command creates `math-diary.html` and one static HTML page per entry. Diary pages load MathJax's full TeX bundle for LaTeX-style math rendering.
