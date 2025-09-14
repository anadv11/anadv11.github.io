---
layout: page
title: "<% await tp.system.prompt("Title of the artwork") %>"
description: "<% tp.file.title %> - Description of the artwork"
img: "assets/img/art/<% tp.file.title.toLowerCase().replace(/\s+/g, '-') %>.jpg"
thumbnail: "assets/img/art/<% tp.file.title.toLowerCase().replace(/\s+/g, '-') %>_thumb.jpg"
date: <% tp.date.now("YYYY-MM-DD") %>
category: <% await tp.system.suggester(["poems", "paintings", "drawings", "photography", "digital", "sculpture", "mixed-media"], ["poems", "paintings", "drawings", "photography", "digital", "sculpture", "mixed-media"]) %>
medium: <% await tp.system.prompt("Medium used (e.g., Oil on canvas, Digital, Phone notes app)") %>
year: <% tp.date.now("YYYY") %>
importance: <% await tp.system.suggester(["1", "2", "3", "4", "5"], ["1", "2", "3", "4", "5"]) %>
tags: [<% await tp.system.prompt("Tags (comma-separated, e.g., friends, home, nature)") %>]
---

## About this piece

<% await tp.system.prompt("Brief description of the artwork") %>

## Creation process

<% await tp.system.prompt("Describe how this piece was created") %>

## Inspiration

<% await tp.system.prompt("What inspired this work?") %>

## Technical details

- **Dimensions**: <% await tp.system.prompt("Dimensions if applicable") %>
- **Materials**: <% await tp.system.prompt("Materials used") %>
- **Technique**: <% await tp.system.prompt("Technique or method used") %>

## Exhibition history

<% await tp.system.prompt("Where has this been shown or published?") %>

## Notes

<% await tp.system.prompt("Additional notes or thoughts") %>
