interface LightboxImage {
  src: string;
  description: string;
}

let images: LightboxImage[] = [];
let currentIndex = 0;

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById(
  'lightbox-image'
) as HTMLImageElement;
const lightboxLoader = document.getElementById('lightbox-loader');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxCounter = document.getElementById('lightbox-counter');
const closeBtn = document.getElementById('lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');

function showImage(index: number) {
  if (!lightbox || !lightboxImage || !lightboxLoader) return;

  currentIndex = index;
  const img = images[index];

  // Show loader, hide image
  lightboxLoader.classList.remove('hidden');
  lightboxImage.classList.add('opacity-0');

  // Preload image
  const preload = new Image();
  preload.onload = () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.description || 'Gallery image';
    lightboxLoader?.classList.add('hidden');
    lightboxImage.classList.remove('opacity-0');
  };
  preload.src = img.src;

  // Update caption
  if (lightboxDescription) {
    lightboxDescription.textContent = img.description || '';
  }
  if (lightboxCounter) {
    lightboxCounter.textContent = `${index + 1} / ${images.length}`;
  }

  // Update navigation visibility
  if (prevBtn) {
    prevBtn.style.visibility = index > 0 ? 'visible' : 'hidden';
  }
  if (nextBtn) {
    nextBtn.style.visibility = index < images.length - 1 ? 'visible' : 'hidden';
  }
}

function openLightbox(imgs: LightboxImage[], startIndex: number) {
  images = imgs;
  currentIndex = startIndex;

  if (lightbox) {
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    showImage(startIndex);

    // Preload adjacent images
    if (startIndex > 0) {
      new Image().src = imgs[startIndex - 1].src;
    }
    if (startIndex < imgs.length - 1) {
      new Image().src = imgs[startIndex + 1].src;
    }
  }
}

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function showPrev() {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
    // Preload next prev
    if (currentIndex > 1) {
      new Image().src = images[currentIndex - 2].src;
    }
  }
}

function showNext() {
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
    // Preload next next
    if (currentIndex < images.length - 2) {
      new Image().src = images[currentIndex + 2].src;
    }
  }
}

// Event listeners
window.addEventListener('openLightbox', ((event: CustomEvent) => {
  const { images: imgs, startIndex } = event.detail;
  openLightbox(imgs, startIndex);
}) as EventListener);

closeBtn?.addEventListener('click', closeLightbox);
prevBtn?.addEventListener('click', showPrev);
nextBtn?.addEventListener('click', showNext);

// Click outside to close
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (lightbox?.classList.contains('hidden')) return;

  switch (e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowLeft':
      showPrev();
      break;
    case 'ArrowRight':
      showNext();
      break;
  }
});

// Touch swipe support
let touchStartX = 0;
let touchEndX = 0;

lightbox?.addEventListener(
  'touchstart',
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true }
);

lightbox?.addEventListener(
  'touchend',
  (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        showNext();
      } else {
        showPrev();
      }
    }
  },
  { passive: true }
);
