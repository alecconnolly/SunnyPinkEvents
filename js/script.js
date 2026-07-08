// Sunny Pink Events - Interactive Features

// Gallery functionality
class ImageGallery {
  constructor(galleryId) {
    this.gallery = document.getElementById(galleryId);
    if (!this.gallery) return;

    this.images = this.gallery.querySelectorAll('.gallery-image img');
    this.currentIndex = 0;
    this.totalImages = this.images.length;

    if (this.totalImages === 0) return;

    this.initializeGallery();
    this.attachEventListeners();
  }

  initializeGallery() {
    // Show first image
    if (this.totalImages > 0) {
      this.images[0].classList.add('active');
      this.updateCounter();
      this.updateDots();
    }

    // Show buttons only if multiple images
    if (this.totalImages <= 1) {
      const controls = this.gallery.querySelector('.gallery-controls');
      if (controls) controls.style.display = 'none';
      const dots = this.gallery.querySelector('.gallery-dots');
      if (dots) dots.style.display = 'none';
    }
  }

  attachEventListeners() {
    const prevBtn = this.gallery.querySelector('.gallery-prev');
    const nextBtn = this.gallery.querySelector('.gallery-next');
    const dots = this.gallery.querySelectorAll('.dot');

    if (prevBtn) prevBtn.addEventListener('click', () => this.previousImage());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextImage());

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToImage(index));
    });
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    this.showImage();
  }

  previousImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalImages) % this.totalImages;
    this.showImage();
  }

  goToImage(index) {
    this.currentIndex = index;
    this.showImage();
  }

  showImage() {
    this.images.forEach((img, index) => {
      img.classList.remove('active');
      if (index === this.currentIndex) {
        img.classList.add('active');
      }
    });

    this.updateCounter();
    this.updateDots();
  }

  updateCounter() {
    const counter = this.gallery.querySelector('.gallery-counter');
    if (counter) {
      counter.textContent = `${this.currentIndex + 1} / ${this.totalImages}`;
    }
  }

  updateDots() {
    const dots = this.gallery.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === this.currentIndex) {
        dot.classList.add('active');
      }
    });
  }
}

// Initialize galleries when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all galleries on the page
  const galleryIds = ['bouncehouse-gallery', 'waterslide-gallery', 'tables-gallery'];

  galleryIds.forEach((id) => {
    new ImageGallery(id);
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
      }
    });
  });

  // Add keyboard navigation for galleries
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      const prevBtn = document.querySelector('.gallery-prev');
      if (prevBtn) prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      const nextBtn = document.querySelector('.gallery-next');
      if (nextBtn) nextBtn.click();
    }
  });
});

// Helper function to open external links
function openLink(url) {
  window.open(url, '_blank');
}

// Mobile menu toggle (optional, for future enhancement)
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}
