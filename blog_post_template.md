---
layout: post
title: "<% await tp.system.prompt("Post title") %>"
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
description: "<% await tp.system.prompt("Brief description of the post") %>"
tags: [<% await tp.system.prompt("Tags (comma-separated, e.g., formatting, charts, images)") %>]
categories: [<% await tp.system.prompt("Categories (comma-separated, e.g., sample-posts, tutorials, research)") %>]
thumbnail: "<% await tp.system.prompt("Thumbnail image path (e.g., assets/img/9.jpg)") %>"
author: "<% await tp.system.prompt("Author name") %>"
last_modified_at: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
toc: <% await tp.system.suggester(["true", "false"], ["true", "false"]) %>
toc_label: "<% await tp.system.prompt("Table of contents label (e.g., Contents)") %>"
toc_icon: "<% await tp.system.prompt("TOC icon (e.g., list, bookmark)") %>"
related_posts: <% await tp.system.suggester(["true", "false"], ["true", "false"]) %>
giscus_comments: <% await tp.system.suggester(["true", "false"], ["true", "false"]) %>
disqus_comments: <% await tp.system.suggester(["true", "false"], ["true", "false"]) %>
newsletter: <% await tp.system.suggester(["true", "false"], ["true", "false"]) %>
---

## Introduction

<% await tp.system.prompt("Write a brief introduction to your post") %>

## Main Content

<% await tp.system.prompt("Write the main content of your post") %>

## Code Examples

<% await tp.system.prompt("Add any code examples or technical content") %>

## Images and Media

<% await tp.system.prompt("Add image galleries, charts, or other media content") %>

## Conclusion

<% await tp.system.prompt("Write a conclusion for your post") %>

## Additional Resources

<% await tp.system.prompt("List any additional resources, links, or references") %>

---

## Post Metadata

- **Created**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
- **Last Modified**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
- **Reading Time**: <% await tp.system.prompt("Estimated reading time (e.g., 5 min read)") %>
- **Word Count**: <% await tp.system.prompt("Approximate word count") %>
- **Difficulty Level**: <% await tp.system.suggester(["Beginner", "Intermediate", "Advanced"], ["Beginner", "Intermediate", "Advanced"]) %>

## Optional Features

<!-- Uncomment and configure the features you need -->

<!-- 
### Image Gallery Support
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true

### Chart Support
chart:
  plotly: true
  chartjs: true
  vega-lite: true

### Jupyter Notebook Support
jupyter_notebook: true
notebook_path: "assets/jupyter/your-notebook.ipynb"

### Custom CSS Classes
classes: "wide, dark"

### Social Media Preview
og_image: "assets/img/og-image.jpg"
twitter_image: "assets/img/twitter-image.jpg"

### SEO
keywords: "keyword1, keyword2, keyword3"
canonical_url: "https://yoursite.com/your-post"

### Publication Status
published: true
draft: false
featured: true

### Reading Progress
reading_progress: true

### Newsletter Signup
newsletter_signup: true
newsletter_text: "Subscribe to get updates on new posts"

### Related Posts Configuration
related_posts:
  max_posts: 3
  include_categories: true
  include_tags: true
-->
