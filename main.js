// Section 506: Multi-Instance & Responsive Carousel

const initCarousels = () => {
  const containers = document.querySelectorAll('.carousel-container');
  
  containers.forEach(container => {
    const track = container.querySelector('.carousel-track');
    const trackContainer = container.querySelector('.carousel-track-container');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    
    if (!track || !prevBtn || !nextBtn) return;

    // Desktop logic only (buttons)
    nextBtn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        trackContainer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
      } else {
        const cardWidth = track.querySelector('.product-card').offsetWidth + 32;
        trackContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    });

    prevBtn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        trackContainer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
      } else {
        const cardWidth = track.querySelector('.product-card').offsetWidth + 32;
        trackContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    });
  });
};

// Scroll Reveal
const reveal = () => {
  const reveals = document.querySelectorAll('.animate-up');
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', reveal);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initCarousels();
  reveal();
});

console.log('SECTION506: Mobile-First System Ready');
