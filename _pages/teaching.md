---
layout: page
title: speaking et al.
permalink: /teaching/
description: Courses I taught, talks I gave and workshops I facilitated.
nav: true
nav_order: 5
display_categories: [Teaching, Talks, Workshops]
horizontal: true
---

<!-- pages/teaching.md -->
<div class="projects">
<!-- Debug: site.teaching size = {{ site.teaching.size }} -->
<!-- Debug: site.teaching = {{ site.teaching | inspect }} -->
<!-- Debug: site.collections = {{ site.collections | map: "label" | join: ", " }} -->
{% if site.teaching and site.teaching.size > 0 %}
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized teaching -->
    {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}">
      <h2 class="category">{{ category }}</h2>
    </a>
    {% assign categorized_teaching = site.teaching | where: "category", category %}
    {% if categorized_teaching.size > 0 %}
      {% assign sorted_teaching = categorized_teaching | sort: "importance" %}
      <!-- Generate cards for each teaching item -->
      {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
        {% for teaching in sorted_teaching %}
          {% include teaching.liquid %}
        {% endfor %}
        </div>
      </div>
      {% else %}
      <div class="row row-cols-1 row-cols-md-3">
        {% for teaching in sorted_teaching %}
          {% include teaching.liquid %}
        {% endfor %}
      </div>
      {% endif %}
    {% else %}
      <p>No {{ category }} courses available yet.</p>
    {% endif %}
    {% endfor %}

  {% else %}

  <!-- Display teaching without categories -->

  {% assign sorted_teaching = site.teaching | sort: "importance" %}

    <!-- Generate cards for each teaching item -->

  {% if page.horizontal %}

    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
      {% for teaching in sorted_teaching %}
        {% include teaching.liquid %}
      {% endfor %}
      </div>
    </div>
    {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for teaching in sorted_teaching %}
        {% include teaching.liquid %}
      {% endfor %}
    </div>
    {% endif %}
  {% endif %}
{% else %}
  <p>Teaching materials will be available soon.</p>
{% endif %}
</div>
