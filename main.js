// Section 506: Core Logic
const initCarousels = () => {
  const containers = document.querySelectorAll('.carousel-container');
  
  containers.forEach(container => {
    const track = container.querySelector('.carousel-track');
    const trackContainer = container.querySelector('.carousel-track-container');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    
    if (!track || !trackContainer) return;

    const getScrollAmount = () => {
      const card = track.querySelector('.product-card');
      return card ? card.offsetWidth + 32 : 300; // width + gap
    };

    nextBtn?.addEventListener('click', () => {
      trackContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn?.addEventListener('click', () => {
      trackContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    // Hide/Show buttons based on scroll position (optional but adds polish)
    const toggleButtons = () => {
      if (prevBtn) prevBtn.style.opacity = trackContainer.scrollLeft > 10 ? '1' : '0.3';
      if (nextBtn) {
        const isEnd = trackContainer.scrollLeft + trackContainer.clientWidth >= track.scrollWidth - 10;
        nextBtn.style.opacity = isEnd ? '0.3' : '1';
      }
    };

    trackContainer.addEventListener('scroll', toggleButtons);
    window.addEventListener('resize', toggleButtons);
    toggleButtons();
  });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initCarousels();
  
  // Simple Reveal Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-up');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
});

// Parallax Hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImg = document.querySelector('.hero-image');
  if (heroImg) {
    heroImg.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

console.log('SECTION506: Fluid UI Loaded');
