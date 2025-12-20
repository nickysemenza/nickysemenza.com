let wrappingElement: Element | null;
let observeHeaderTags: IntersectionObserver;
let allHeaderTags: NodeListOf<Element>;

function setCurrent(e: IntersectionObserverEntry[]) {
  const allSectionLinks = document.querySelectorAll('.toc-link');
  e.map((i) => {
    if (i.isIntersecting === true) {
      allSectionLinks.forEach((link) => {
        link.classList.remove('text-copper', 'font-medium');
        link.classList.add('text-stone-500');
      });
      const targetLink = document.querySelector(
        `a[href="#${i.target.id}"].toc-link`
      );

      if (targetLink) {
        targetLink.classList.remove('text-stone-500');
        targetLink.classList.add('text-copper', 'font-medium');
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
document.addEventListener('astro:after-swap', initTOC);
