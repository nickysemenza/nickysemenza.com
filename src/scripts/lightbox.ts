import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

let lightbox: ReturnType<typeof GLightbox> | null = null;

function initLightbox() {
  // Destroy previous instance if it exists
  if (lightbox) {
    lightbox.destroy();
  }

  // Fix hrefs for markdown images (rehype runs before Astro's image optimization)
  // Copy the optimized img src to the parent anchor's href
  document
    .querySelectorAll('a.glightbox[data-gallery="markdown"] > img')
    .forEach((img) => {
      const anchor = img.parentElement as HTMLAnchorElement;
      const imgSrc = (img as HTMLImageElement).src;
      if (anchor && imgSrc) {
        anchor.href = imgSrc;
      }
    });

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
