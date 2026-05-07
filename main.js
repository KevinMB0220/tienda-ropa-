// Grid layout doesn't require JS carousel logic.




// Parallax effect on Hero Image
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(card);
});

// Navbar change on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.padding = '1rem 5%';
    nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
  } else {
    nav.style.padding = '1.5rem 5%';
    nav.style.boxShadow = 'none';
  }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

console.log('URBAN DROP: Style initialized.');

