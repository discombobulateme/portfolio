let currentSection = 0;
let sections = [];

// Function to update sections and log the current sections
function updateSections() {
  sections = document.querySelectorAll('.section');
  console.log('++++++++++Updated sections++++++++++:', sections); // Log the loaded sections
}

// Throttle function to limit scroll event triggering
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

// Add scroll behavior with throttling
function setupScrolling() {
  updateSections();
  const totalSections = sections.length;
  console.log('++++++++++Total sections++++++++++:', totalSections); // Log total sections

  // Scroll function
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      if (currentSection < totalSections - 1) {
        currentSection++;
      }
    } else {
      // Scrolling up
      if (currentSection > 0) {
        currentSection--;
      }
    }
    console.log(`Scrolling to section ${currentSection}!!!!!!!!!!`);

    // Scroll into view with smooth behavior and ensure snapping to start
    sections[currentSection].scrollIntoView({
      behavior: 'smooth',
      block: 'start',  // Align to the top (ensures proper snapping)
      inline: 'nearest'
    });
  };

  // Apply throttling to the scroll handler
  window.addEventListener('wheel', throttle(handleScroll, 1000));  // 1000ms throttle
}

// Listen for HTMX after the content has been loaded
document.addEventListener('htmx:afterSwap', function (event) {
  console.log('******* HTMX content loaded: ', event); // Log the event
  updateSections();
});

// Initialize scrolling on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupScrolling();
});
