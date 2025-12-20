function initReveal() {
  const reveals = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-scale'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay =
            getComputedStyle(entry.target).getPropertyValue('--reveal-delay') ||
            '0ms';
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

initReveal();
document.addEventListener('astro:page-load', initReveal);
