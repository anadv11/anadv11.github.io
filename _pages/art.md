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

<!-- Collage Modal - Always available -->
<div id="collageModal" class="collage-modal">
  <div class="collage-modal-content">
    <span class="collage-close" onclick="closeCollageModal()">&times;</span>
    
    <!-- Navigation arrows -->
    <div class="collage-nav collage-nav-prev" onclick="navigateCollage(-1)">
      <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div class="collage-nav collage-nav-next" onclick="navigateCollage(1)">
      <i class="fa-solid fa-chevron-right"></i>
    </div>
    
    <!-- Image container -->
    <div class="collage-image-container">
      <img class="collage-modal-image" id="collageModalImage" alt="Collage Image">
    </div>
    
    <!-- Info panel -->
    <div class="collage-info-panel">
      <h3 id="collageModalTitle"></h3>
      <p id="collageModalDescription"></p>
      <div class="collage-meta">
        <span id="collageModalMedium"></span>
        <span id="collageModalYear"></span>
      </div>
      <div class="collage-counter">
        <span id="collageCounter"></span>
      </div>
    </div>
  </div>
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

/* Art thumbnail styles */
.art-image-container {
  position: relative;
  overflow: hidden;
}

.art-thumbnail {
  transition: transform 0.3s ease;
}

.art-thumbnail:hover {
  transform: scale(1.05);
}

/* Collage Modal Styles */
.collage-modal {
  display: none;
  position: fixed !important;
  z-index: 99999 !important;
  left: 0 !important;
  top: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background-color: rgba(0, 0, 0, 0.95) !important;
  backdrop-filter: blur(10px) !important;
}

.collage-modal-content {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  padding: 20px !important;
  box-sizing: border-box !important;
  padding-top: 120px !important;
}

.collage-close {
  position: absolute !important;
  top: 30px !important;
  right: 40px !important;
  color: white !important;
  font-size: 60px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  z-index: 100000 !important;
  line-height: 1 !important;
  background-color: rgba(0, 0, 0, 0.7) !important;
  width: 70px !important;
  height: 70px !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: all 0.3s ease !important;
}

.collage-close:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  transform: scale(1.1) !important;
}

.collage-image-container {
  flex: 1 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  max-width: 90vw !important;
  max-height: 70vh !important;
  margin-top: -20px !important;
}

.collage-modal-image {
  max-width: 100% !important;
  max-height: 100% !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
  border-radius: 8px !important;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8) !important;
}

.collage-info-panel {
  background-color: rgba(0, 0, 0, 0.8) !important;
  color: white !important;
  padding: 20px 30px !important;
  border-radius: 15px !important;
  margin-top: 20px !important;
  text-align: center !important;
  max-width: 600px !important;
}

.collage-info-panel h3 {
  margin: 0 0 10px 0 !important;
  font-size: 1.8rem !important;
  font-weight: 600 !important;
}

.collage-info-panel p {
  margin: 0 0 15px 0 !important;
  font-size: 1.1rem !important;
  line-height: 1.5 !important;
}

.collage-meta {
  display: flex !important;
  justify-content: center !important;
  gap: 20px !important;
  margin-bottom: 15px !important;
}

.collage-meta span {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  padding: 8px 16px !important;
  border-radius: 20px !important;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
}

.collage-counter {
  font-size: 0.9rem !important;
  opacity: 0.9 !important;
  color: white !important;
}

/* Navigation arrows */
.collage-nav {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  color: white !important;
  font-size: 40px !important;
  cursor: pointer !important;
  background-color: rgba(0, 0, 0, 0.7) !important;
  width: 60px !important;
  height: 60px !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transition: all 0.3s ease !important;
  z-index: 100000 !important;
}

.collage-nav:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  transform: translateY(-50%) scale(1.1) !important;
}

.collage-nav-prev {
  left: 30px !important;
}

.collage-nav-next {
  right: 30px !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .collage-modal-content {
    padding: 15px !important;
    padding-top: 100px !important;
  }
  
  .collage-image-container {
    margin-top: -15px !important;
  }
  
  .collage-close {
    top: 20px !important;
    right: 20px !important;
    font-size: 50px !important;
    width: 60px !important;
    height: 60px !important;
  }
  
  .collage-nav {
    width: 50px !important;
    height: 50px !important;
    font-size: 30px !important;
  }
  
  .collage-nav-prev {
    left: 20px !important;
  }
  
  .collage-nav-next {
    right: 20px !important;
  }
  
  .collage-info-panel {
    padding: 15px 20px !important;
    margin-top: 15px !important;
  }
  
  .collage-info-panel h3 {
    font-size: 1.5rem !important;
  }
  
  .collage-info-panel p {
    font-size: 1rem !important;
  }
  
  .collage-meta {
    flex-direction: column !important;
    gap: 10px !important;
  }
}
</style>

<script>
// Initialize collage modal functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Art page DOM loaded, initializing collage functionality...');
  
  // Store collage data globally
  window.collageData = [];
  window.currentCollageIndex = 0;
  
  // Collect all collage items
  const collageItems = document.querySelectorAll('.art-thumbnail');
  console.log('Found collage items:', collageItems.length);
  
  collageItems.forEach((item, index) => {
    try {
      const card = item.closest('.card');
      if (!card) {
        console.warn('Could not find card for item:', index);
        return;
      }
      
      const title = card.querySelector('.card-title');
      const description = card.querySelector('.card-text');
      const mediumElement = card.querySelector('.art-medium .icon');
      const yearElement = card.querySelector('.art-year .icon');
      
      if (!title || !description) {
        console.warn('Missing title or description for item:', index);
        return;
      }
      
      const titleText = title.textContent || '';
      const descriptionText = description.textContent || '';
      const mediumText = mediumElement ? mediumElement.textContent.trim() : '';
      const yearText = yearElement ? yearElement.textContent.trim() : '';
      const imgSrc = item.src || '';
      
      console.log('Processing collage item:', {
        index,
        title: titleText,
        description: descriptionText,
        medium: mediumText,
        year: yearText,
        img: imgSrc
      });
      
      window.collageData.push({
        img: imgSrc,
        title: titleText,
        description: descriptionText,
        medium: mediumText,
        year: yearText
      });
    } catch (error) {
      console.error('Error processing collage item:', index, error);
    }
  });
  
  console.log('Collage data initialized:', window.collageData);
  
  // Check if modal elements exist
  const modal = document.getElementById('collageModal');
  const modalImg = document.getElementById('collageModalImage');
  const modalTitle = document.getElementById('collageModalTitle');
  const modalDescription = document.getElementById('collageModalDescription');
  
  if (!modal) console.error('Collage modal not found!');
  if (!modalImg) console.error('Collage modal image not found!');
  if (!modalTitle) console.error('Collage modal title not found!');
  if (!modalDescription) console.error('Collage modal description not found!');
  
  if (modal && modalImg && modalTitle && modalDescription) {
    console.log('All modal elements found successfully');
  }
});

function openCollageModal(imageSrc, imageTitle, imageDescription, imageMedium, imageYear) {
  console.log('Opening collage modal with:', {
    imageSrc,
    imageTitle,
    imageDescription,
    imageMedium,
    imageYear
  });
  
  const modal = document.getElementById('collageModal');
  const modalImg = document.getElementById('collageModalImage');
  const modalTitle = document.getElementById('collageModalTitle');
  const modalDescription = document.getElementById('collageModalDescription');
  const modalMedium = document.getElementById('collageModalMedium');
  const modalYear = document.getElementById('collageModalYear');
  const modalCounter = document.getElementById('collageCounter');
  
  if (!modal || !modalImg || !modalTitle || !modalDescription) {
    console.error('Required modal elements not found:', {
      modal: !!modal,
      modalImg: !!modalImg,
      modalTitle: !!modalTitle,
      modalDescription: !!modalDescription
    });
    return;
  }
  
  // Find the index of the current item
  const currentIndex = window.collageData.findIndex(item => item.img === imageSrc);
  if (currentIndex !== -1) {
    window.currentCollageIndex = currentIndex;
    console.log('Found item at index:', currentIndex);
  } else {
    console.warn('Item not found in collage data, using current index:', window.currentCollageIndex);
  }
  
  // Set the content
  modalImg.src = imageSrc;
  modalTitle.innerHTML = imageTitle;
  modalDescription.innerHTML = imageDescription;
  modalMedium.innerHTML = imageMedium;
  modalYear.innerHTML = imageYear;
  modalCounter.innerHTML = `${window.currentCollageIndex + 1} / ${window.collageData.length}`;
  
  // Show the modal
  modal.style.display = "block";
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
  
  // Update navigation visibility
  updateNavigationVisibility();
  
  console.log('Modal opened successfully for:', imageTitle, 'at index:', window.currentCollageIndex);
}

function closeCollageModal() {
  console.log('Closing collage modal');
  const modal = document.getElementById('collageModal');
  if (modal) {
    modal.style.display = "none";
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    
    console.log('Modal closed successfully');
  } else {
    console.error('Modal not found when trying to close');
  }
}

function navigateCollage(direction) {
  if (window.collageData.length === 0) {
    console.warn('No collage data available for navigation');
    return;
  }
  
  console.log('Navigating collage:', direction, 'from index:', window.currentCollageIndex);
  
  window.currentCollageIndex += direction;
  
  // Handle wrap-around
  if (window.currentCollageIndex < 0) {
    window.currentCollageIndex = window.collageData.length - 1;
  } else if (window.currentCollageIndex >= window.collageData.length) {
    window.currentCollageIndex = 0;
  }
  
  const currentItem = window.collageData[window.currentCollageIndex];
  console.log('Navigated to item:', currentItem);
  
  // Update modal content
  const modalImg = document.getElementById('collageModalImage');
  const modalTitle = document.getElementById('collageModalTitle');
  const modalDescription = document.getElementById('collageModalDescription');
  const modalMedium = document.getElementById('collageModalMedium');
  const modalYear = document.getElementById('collageModalYear');
  const modalCounter = document.getElementById('collageCounter');
  
  if (modalImg && modalTitle && modalDescription) {
    modalImg.src = currentItem.img;
    modalTitle.innerHTML = currentItem.title;
    modalDescription.innerHTML = currentItem.description;
    modalMedium.innerHTML = currentItem.medium;
    modalYear.innerHTML = currentItem.year;
    modalCounter.innerHTML = `${window.currentCollageIndex + 1} / ${window.collageData.length}`;
    
    console.log('Navigation completed to:', currentItem.title, 'at index:', window.currentCollageIndex);
  } else {
    console.error('Failed to update modal content during navigation');
  }
}

function updateNavigationVisibility() {
  const prevNav = document.querySelector('.collage-nav-prev');
  const nextNav = document.querySelector('.collage-nav-next');
  
  if (window.collageData.length <= 1) {
    if (prevNav) prevNav.style.display = 'none';
    if (nextNav) nextNav.style.display = 'none';
    console.log('Navigation hidden - only one item');
  } else {
    if (prevNav) prevNav.style.display = 'flex';
    if (nextNav) nextNav.style.display = 'flex';
    console.log('Navigation shown - multiple items');
  }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeCollageModal();
  } else if (event.key === 'ArrowLeft') {
    navigateCollage(-1);
  } else if (event.key === 'ArrowRight') {
    navigateCollage(1);
  }
});

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('collageModal');
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeCollageModal();
      }
    });
    console.log('Modal click-outside handler attached');
  } else {
    console.error('Modal not found for click-outside handler');
  }
});

// Make functions globally available
window.openCollageModal = openCollageModal;
window.closeCollageModal = closeCollageModal;
window.navigateCollage = navigateCollage;

console.log('Collage modal functions made globally available');
</script>
