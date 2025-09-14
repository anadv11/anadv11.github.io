---
layout: post
title: "<% await tp.system.prompt("Book title") %>"
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
description: "<% await tp.system.prompt("Brief description of the book and your thoughts") %>"
tags: [<% await tp.system.prompt("Tags (comma-separated, e.g., books, fiction, social-justice)") %>]
categories: [<% await tp.system.prompt("Categories (comma-separated, e.g., book-reviews, recommendations)") %>]
thumbnail: "<% await tp.system.prompt("Book cover image path (e.g., assets/img/book_covers/book_title.jpg)") %>"
author: "<% await tp.system.prompt("Author name") %>"
last_modified_at: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
toc: <% await tp.system.suggester(["true", "false"], ["true", "false"]) %>
toc_label: "Contents"
toc_icon: "book"
related_posts: true
giscus_comments: true
disqus_comments: false
newsletter: false

# Book metadata
book_author: "<% await tp.system.prompt("Book author") %>"
book_published: <% await tp.system.prompt("Publication year") %>
book_pages: <% await tp.system.prompt("Number of pages") %>
book_isbn: "<% await tp.system.prompt("ISBN (optional)") %>"
book_rating: <% await tp.system.suggester(["1", "2", "3", "4", "5"], ["1", "2", "3", "4", "5"]) %>
book_status: <% await tp.system.suggester(["Want to read", "Currently reading", "Finished", "Abandoned"], ["Want to read", "Currently reading", "Finished", "Abandoned"]) %>
book_started: <% await tp.system.prompt("Date started reading (YYYY-MM-DD)") %>
book_finished: <% await tp.system.prompt("Date finished reading (YYYY-MM-DD)") %>
book_genre: "<% await tp.system.prompt("Genre (e.g., Fiction, Non-fiction, Academic)") %>"
book_topics: [<% await tp.system.prompt("Topics/themes (comma-separated, e.g., social-justice, environment, politics)") %>]
---

## Book Cover

![Book cover](<% await tp.system.prompt("Book cover image path") %>)

## Book Details

- **Author**: <% await tp.system.prompt("Book author") %>
- **Published**: <% await tp.system.prompt("Publication year") %>
- **Pages**: <% await tp.system.prompt("Number of pages") %>
- **Genre**: <% await tp.system.prompt("Genre") %>
- **My Rating**: <% await tp.system.suggester(["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"], ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]) %>
- **Status**: <% await tp.system.suggester(["Want to read", "Currently reading", "Finished", "Abandoned"], ["Want to read", "Currently reading", "Finished", "Abandoned"]) %>

## Synopsis

<% await tp.system.prompt("Brief synopsis of the book") %>

## My Review

<% await tp.system.prompt("Your detailed review and thoughts about the book") %>

## Key Themes

<% await tp.system.prompt("What are the main themes and topics explored in this book?") %>

## Why This Book Matters

<% await tp.system.prompt("Why is this book important? How has it influenced your thinking?") %>

## Favorite Quotes

<% await tp.system.prompt("Share some memorable quotes from the book") %>

## Who Should Read This

<% await tp.system.prompt("Who would benefit from reading this book?") %>

## Related Books

<% await tp.system.prompt("What other books does this remind you of or connect to?") %>

## Reading Notes

<% await tp.system.prompt("Any additional notes, thoughts, or connections you made while reading") %>

---

## Book Information

- **Started Reading**: <% await tp.system.prompt("Date started (YYYY-MM-DD)") %>
- **Finished Reading**: <% await tp.system.prompt("Date finished (YYYY-MM-DD)") %>
- **Reading Time**: <% await tp.system.prompt("How long did it take to read?") %>
- **Format**: <% await tp.system.suggester(["Physical book", "E-book", "Audiobook", "PDF"], ["Physical book", "E-book", "Audiobook", "PDF"]) %>
- **Source**: <% await tp.system.prompt("Where did you get this book? (Library, bought, borrowed, etc.)") %>

## Links

- [Goodreads](<% await tp.system.prompt("Goodreads URL (optional)") %>)
- [Purchase Link](<% await tp.system.prompt("Where to buy the book (optional)") %>)
- [Author Website](<% await tp.system.prompt("Author's website (optional)") %>)

---

*Have you read this book? I'd love to hear your thoughts in the comments below!*
