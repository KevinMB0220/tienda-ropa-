// Carousel Logic for Multiple Instances
const initializeCarousel = (container) => {
  const track = container.querySelector('.carousel-track');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  
  if (!track || !prevBtn || !nextBtn) return;

  let currentScroll = 0;

  const updateScroll = () => {
    track.style.transform = `translateX(-${currentScroll}px)`;
  };

  nextBtn.addEventListener('click', () => {
    const cardWidth = track.querySelector('.product-card').offsetWidth + 16; // width + gap
    const maxScroll = track.scrollWidth - container.clientWidth + 32;
    
    if (currentScroll < maxScroll - 10) {
      currentScroll += cardWidth;
      if (currentScroll > maxScroll) currentScroll = maxScroll;
    } else {
      currentScroll = 0;
    }
    updateScroll();
  });

  prevBtn.addEventListener('click', () => {
    const cardWidth = track.querySelector('.product-card').offsetWidth + 16;
    const maxScroll = track.scrollWidth - container.clientWidth + 32;
    
    if (currentScroll > 10) {
      currentScroll -= cardWidth;
      if (currentScroll < 0) currentScroll = 0;
    } else {
      currentScroll = maxScroll;
    }
    updateScroll();
  });

  // Touch Support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) nextBtn.click();
    if (touchEndX - touchStartX > swipeThreshold) prevBtn.click();
  }, { passive: true });
};

// Initialize all carousels on the page
document.querySelectorAll('.carousel-container').forEach(initializeCarousel);

// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// Parallax for Hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
});

console.log('SECTION506: System Ready');
