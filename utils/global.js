import { initializeImageCycle } from './utils/changeLinkImage.js';

// Reinitialize image cycling for specific sections
document.addEventListener('htmx:afterSwap', (event) => {
  if (event.target.matches('.grid-layout3')) {
    initializeImageCycle('a', event.target, 'image-left'); // For dev.html
  } else if (event.target.matches('.grid-layout4')) {
    initializeImageCycle('a', event.target, 'image-os'); // For opensource.html
  }
});

// Optional: Reinitialize on scroll
window.addEventListener('scroll', () => {
  const devSection = document.querySelector('.grid-layout3');
  const osSection = document.querySelector('.grid-layout4');

  const devInView = devSection && devSection.getBoundingClientRect().top < window.innerHeight && devSection.getBoundingClientRect().bottom > 0;
  const osInView = osSection && osSection.getBoundingClientRect().top < window.innerHeight && osSection.getBoundingClientRect().bottom > 0;

  if (devInView) {
    initializeImageCycle('a', devSection, 'image-left');
  }

  if (osInView) {
    initializeImageCycle('a', osSection, 'image-os');
  }
});
