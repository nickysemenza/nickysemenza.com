function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  const article = document.querySelector('article');

  if (!progressBar || !article) {
    // Hide progress bar on non-article pages
    if (progressBar) progressBar.style.display = 'none';
    return;
  }

  progressBar.style.display = 'block';

  function updateProgress() {
    const articleRect = article!.getBoundingClientRect();
    const articleTop = window.scrollY + articleRect.top;
    const articleHeight = article!.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrolled = window.scrollY - articleTop + windowHeight * 0.3;
    const progress = Math.min(
      Math.max((scrolled / articleHeight) * 100, 0),
      100
    );
    progressBar!.style.width = `${progress}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

initReadingProgress();
document.addEventListener('astro:page-load', initReadingProgress);
