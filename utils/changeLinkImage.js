let intervals = {}; // Store intervals per section
let indices = {}; // Store currentIndex per section
let isCycling = {}; // Store cycling state per section

export function changeImage(imageUrl, targetId) {
  const imageElement = document.getElementById(targetId);
  if (imageElement) {
    imageElement.src = imageUrl;
  }
}

export function startImageCycle(selector, context, targetId) {
  if (!indices[targetId]) indices[targetId] = 0; // Initialize index if not set
  if (!isCycling[targetId]) isCycling[targetId] = true; // Initialize cycling state

  const links = context.querySelectorAll(selector);
  if (links.length === 0) return;

  intervals[targetId] = setInterval(() => {
    if (!isCycling[targetId]) return;

    const link = links[indices[targetId]];
    const imageUrl = link.getAttribute('onmouseover').match(/'(.*?)'/)[1];
    changeImage(imageUrl, targetId);

    indices[targetId] = (indices[targetId] + 1) % links.length; // Move to the next link
  }, 2000);
}

export function stopImageCycle(targetId) {
  isCycling[targetId] = false;
  clearInterval(intervals[targetId]);
}

export function resumeImageCycle(selector, context, targetId) {
  if (!isCycling[targetId]) {
    isCycling[targetId] = true;
    startImageCycle(selector, context, targetId);
  }
}

export function initializeImageCycle(selector, context, targetId) {
  const links = context.querySelectorAll(selector);

  if (intervals[targetId]) {
    clearInterval(intervals[targetId]); // Clear existing interval for this target
  }

  links.forEach((link) => {
    // Add hover effect
    link.addEventListener('mouseover', function () {
      const imageUrl = link.getAttribute('onmouseover').match(/'(.*?)'/)[1];
      changeImage(imageUrl, targetId);
      stopImageCycle(targetId);
    });

    link.addEventListener('mouseout', function () {
      resumeImageCycle(selector, context, targetId);
    });

    // Add touch interaction for mobile
    let touched = false;
    link.addEventListener('touchstart', function (event) {
      event.preventDefault();
      const imageUrl = link.getAttribute('onmouseover').match(/'(.*?)'/)[1];
      changeImage(imageUrl, targetId);

      if (touched) {
        window.location.href = this.href;
      } else {
        touched = true;
        setTimeout(() => {
          touched = false;
        }, 500);
      }
      stopImageCycle(targetId);
    });
  });

  startImageCycle(selector, context, targetId);
}
