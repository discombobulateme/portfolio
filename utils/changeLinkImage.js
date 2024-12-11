let cycleImagesInterval;
let isCycling = true;
let currentIndex = 0;

export function changeImage(imageUrl, targetId = 'image-left') {
  const imageElement = document.getElementById(targetId);
  if (imageElement) {
    imageElement.src = imageUrl;
  }
}

export function startImageCycle(selector, context = document, targetId = 'image-left') {
  const links = context.querySelectorAll(selector);
  if (links.length === 0) return;

  cycleImagesInterval = setInterval(() => {
    if (!isCycling) return;

    const link = links[currentIndex];
    const imageUrl = link.getAttribute('onmouseover').match(/'(.*?)'/)[1];
    changeImage(imageUrl, targetId);

    currentIndex = (currentIndex + 1) % links.length;
  }, 2000);
}

export function resumeImageCycle(selector, context = document, targetId = 'image-left') {
  if (!isCycling) {
    isCycling = true;
    startImageCycle(selector, context, targetId);
  }
}

export function stopImageCycle() {
  isCycling = false;
  clearInterval(cycleImagesInterval);
}

export function initializeImageCycle(selector, context = document, targetId = 'image-left') {
  const links = context.querySelectorAll(selector);

  if (cycleImagesInterval) {
    clearInterval(cycleImagesInterval);
  }

  links.forEach((link) => {
    // Add hover effect
    link.addEventListener('mouseover', function () {
      const imageUrl = link.getAttribute('onmouseover').match(/'(.*?)'/)[1];
      changeImage(imageUrl, targetId);
      stopImageCycle();
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
      stopImageCycle();
    });
  });

  startImageCycle(selector, context, targetId);
}
