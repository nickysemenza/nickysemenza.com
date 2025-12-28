let wrappingElement: Element | null;
let observeHeaderTags: IntersectionObserver;
let allHeaderTags: NodeListOf<Element>;

function updateScrollFades(nav: HTMLElement) {
  const wrapper = nav.closest('.toc-wrapper');
  if (!wrapper) return;

  const fadeTop = wrapper.querySelector('.toc-fade-top');
  const fadeBottom = wrapper.querySelector('.toc-fade-bottom');
  if (!fadeTop || !fadeBottom) return;

  const { scrollTop, scrollHeight, clientHeight } = nav;
  const isScrollable = scrollHeight > clientHeight;
  const atTop = scrollTop <= 5;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 5;

  // Show top fade when scrolled down
  fadeTop.classList.toggle('opacity-100', isScrollable && !atTop);
  fadeTop.classList.toggle('opacity-0', !isScrollable || atTop);

  // Show bottom fade when not at bottom
  fadeBottom.classList.toggle('opacity-100', isScrollable && !atBottom);
  fadeBottom.classList.toggle('opacity-0', !isScrollable || atBottom);
}

function initScrollFades() {
  const tocNav = document.querySelector('.toc-nav') as HTMLElement | null;
  if (!tocNav) return;

  // Initial check
  updateScrollFades(tocNav);

  // Update on scroll
  tocNav.addEventListener('scroll', () => updateScrollFades(tocNav), {
    passive: true,
  });

  // Update on resize (content might become scrollable/non-scrollable)
  window.addEventListener('resize', () => updateScrollFades(tocNav), {
    passive: true,
  });
}

function setCurrent(e: IntersectionObserverEntry[]) {
  const allSectionLinks = document.querySelectorAll('.toc-link');
  e.map((i) => {
    if (i.isIntersecting === true) {
      allSectionLinks.forEach((link) => {
        link.classList.remove('toc-active', 'font-medium');
        link.classList.add('text-stone-500');
      });
      const targetLink = document.querySelector(
        `a[href="#${i.target.id}"].toc-link`
      );

      if (targetLink) {
        targetLink.classList.remove('text-stone-500');
        targetLink.classList.add('toc-active', 'font-medium');
        // Scroll the active link into view within the TOC container
        targetLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
        // Update fade indicators after scroll
        const tocNav = document.querySelector('.toc-nav') as HTMLElement | null;
        if (tocNav) {
          setTimeout(() => updateScrollFades(tocNav), 300);
        }
      }
    }
  });
}

function initTOC() {
  wrappingElement = document.querySelector('.prose');
  if (wrappingElement !== null) {
    allHeaderTags = wrappingElement.querySelectorAll(
      ':scope > h1, :scope > h2, :scope > h3'
    );
  }

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -50% 0px',
    threshold: [1],
  };

  observeHeaderTags = new IntersectionObserver(setCurrent, options);
  if (wrappingElement === null) {
    return;
  }
  allHeaderTags.forEach((tag) => {
    tag.classList.add('scroll-mt-24');
    observeHeaderTags.observe(tag);
  });
}

initTOC();
initScrollFades();
document.addEventListener('astro:after-swap', () => {
  initTOC();
  initScrollFades();
});
