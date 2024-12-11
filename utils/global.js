import { initializeImageCycle } from './changeLinkImage.js';

// Reinitialize image cycling after HTMX swaps
document.addEventListener('htmx:afterSwap', (event) => {
  console.log('HTMX swap detected:', event.target);

  if (event.target.matches('.grid-layout3')) {
    initializeImageCycle('a', event.target, 'image-left'); // For dev.html
  } else if (event.target.matches('.grid-layout4')) {
    initializeImageCycle('a', event.target, 'image-os'); // For opensource.html
  }
});
