---
layout: page
title: art
permalink: /art/
description: A collection of my creative work and artistic projects.
nav: true
nav_order: 8
display_categories: [collage, poems, other]
horizontal: false
---



<!-- pages/art.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized art pieces -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category | capitalize }}</h2>
  </a>
  {% assign categorized_art = site.art | where: "category", category %}
  {% if categorized_art and categorized_art.size > 0 %}
    {% assign sorted_art = categorized_art | sort: "importance" %}
    <!-- Generate cards for each art piece -->
    {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for art in sorted_art %}
        {% include art.liquid %}
      {% endfor %}
      </div>
    </div>
    {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for art in sorted_art %}
        {% include art.liquid %}
      {% endfor %}
    </div>
    {% endif %}
  {% else %}
    <p>No art pieces found in category: {{ category }}</p>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display art pieces without categories -->

{% if site.art and site.art.size > 0 %}
  {% assign sorted_art = site.art | sort: "importance" %}

  <!-- Generate cards for each art piece -->

  {% if page.horizontal %}

    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for art in sorted_art %}
        {% include art.liquid %}
      {% endfor %}
      </div>
    </div>
    {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for art in sorted_art %}
        {% include art.liquid %}
      {% endfor %}
    </div>
    {% endif %}
{% else %}
  <p>No art pieces found. Please check if the art collection is properly configured.</p>
{% endif %}
{% endif %}
</div>

<!-- Add some custom styling for the art page -->
<style>
.projects {
  margin-top: 2rem;
}

.category {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
  color: #495057;
}

.card.hoverable {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card.hoverable:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.art-medium, .art-year {
  display: inline-block;
  margin-right: 1rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.art-medium .icon, .art-year .icon {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.debug-info {
  font-family: monospace;
  font-size: 0.9rem;
}
</style>
