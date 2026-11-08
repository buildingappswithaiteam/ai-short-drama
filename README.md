# AI Short Drama

A minimal directory and blog for GitHub Pages. Jekyll turns Markdown entries into static pages; Bootstrap 5.3 supplies the layout. There is no database, application server, or JavaScript build step.

## Publishing content

Add a series in `_series/slug.md` with this front matter:

```yaml
---
title: Series title
description: One factual sentence about the series.
creator: Creator or studio
genre: [Drama, Science fiction]
language: English
release_year: 2026
status: Ongoing
episodes: 8
platform: Official platform name
watch_url: https://official.example/series
source_url: https://official.example/series/about
last_checked: 2026-11-08
---

An original synopsis and useful viewing notes go here. Verify facts against the official source.
```

Only add `review`, `review_author`, and `review_date` if someone has actually watched and written an original review. Do not add ratings or review markup to unreviewed listings.

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

## Local preview

With Ruby and Bundler installed, run `bundle install` and `bundle exec jekyll serve`. GitHub Pages builds the same Jekyll files without a local installation.

## Site settings

`_config.yml` contains the public URL and metadata. The production domain is set to `https://ai-short-drama.com`; configure the custom domain in GitHub Pages settings and update DNS before launch. The site uses the `jekyll-seo-tag`, `jekyll-sitemap`, and `jekyll-feed` plugins supported by GitHub Pages.
