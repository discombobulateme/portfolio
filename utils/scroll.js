let currentSection = 0;
let sections = [];
let isScrolling = false;

function updateSections() {
  sections = document.querySelectorAll('.section');
}

function scrollToSection(direction) {
  if (isScrolling) return;

  const total = sections.length;

  if (direction === 'down') {
    if (currentSection >= total - 1) return;
    currentSection++;
  } else {
    if (currentSection <= 0) return;
    currentSection--;
  }

  isScrolling = true;

  sections[currentSection].scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });

  setTimeout(() => {
    isScrolling = false;
  }, 900);
}

function setupScrolling() {
  updateSections();

  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      scrollToSection('down');
    } else {
      scrollToSection('up');
    }
  };

  let touchStartY = 0;

  const handleTouchStart = (event) => {
    touchStartY = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    const delta = touchStartY - event.touches[0].clientY;
    if (delta > 30) {
      scrollToSection('down');
      touchStartY = event.touches[0].clientY;
    } else if (delta < -30) {
      scrollToSection('up');
      touchStartY = event.touches[0].clientY;
    }
  };

  window.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('touchstart', handleTouchStart);
  window.addEventListener('touchmove', handleTouchMove);
}

document.addEventListener('htmx:afterSwap', updateSections);
document.addEventListener('DOMContentLoaded', setupScrolling);
