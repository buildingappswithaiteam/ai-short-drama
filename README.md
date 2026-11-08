# AI Short Drama

A minimal directory and blog for GitHub Pages. Jekyll turns Markdown entries into static pages; Bootstrap 5.3 supplies the layout. There is no database, application server, or JavaScript build step.

## Publishing content

Add a drama in `_dramas/slug.md` with this front matter:

```yaml
---
title: Drama title
description: One factual sentence about the drama.
format: Series # or Film
creator: Creator or studio
genre: [Drama, Science fiction]
language: English
release_year: 2026
status: Ongoing
episodes: 8
platform: Official platform name
watch_url: https://official.example/drama
source_url: https://official.example/drama/about
last_checked: 2026-11-08
---

An original synopsis and useful viewing notes go here. Verify facts against the official source. For a standalone film, set `format: Film` and omit `episodes` and `status` if they do not apply.
```

Only add `review`, `review_author`, and `review_date` if someone has actually watched and written an original editorial review. Do not add ratings or review markup to unreviewed listings. The site has no public review submission system.

Add blog articles in `_posts/YYYY-MM-DD-slug.md`:

```yaml
---
title: Article title
description: A clear summary for readers and search results.
author: Author name
---

Article text goes here.
```

The homepage, directory, blog, sitemap, feed, and SEO metadata update automatically when content is published. Edit on GitHub and commit to the publishing branch to trigger a Pages build.

The empty preview is marked `noindex` automatically. That tag disappears when the first drama or blog article is published, so search engines are invited to index the site when it has substantive content.

## Local preview

With Ruby and Bundler installed, run `bundle install` and `bundle exec jekyll serve`. GitHub Pages builds the same Jekyll files without a local installation.

## Site settings

`_config.yml` contains the public URL and metadata. GitHub Pages and Hostinger DNS are configured for `ai-short-drama.com`. The site uses the `jekyll-seo-tag`, `jekyll-sitemap`, and `jekyll-feed` plugins supported by GitHub Pages.
