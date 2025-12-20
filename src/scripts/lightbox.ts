import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

let lightbox: ReturnType<typeof GLightbox> | null = null;

function initLightbox() {
  // Destroy previous instance if it exists
  if (lightbox) {
    lightbox.destroy();
  }

  // Initialize GLightbox
  lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: false,
    closeOnOutsideClick: true,
  });
}

initLightbox();
document.addEventListener('astro:page-load', initLightbox);
