function initTimeline() {
  const tooltip = document.getElementById('timeline-tooltip');
  if (!tooltip) return;

  const titleEl = tooltip.querySelector('[data-tooltip-title]');
  const datesEl = tooltip.querySelector('[data-tooltip-dates]');
  const descEl = tooltip.querySelector('[data-tooltip-description]');
  const categoryEl = tooltip.querySelector('[data-tooltip-category]');
  const colorEl = tooltip.querySelector('[data-tooltip-color]') as HTMLElement;

  if (!titleEl || !datesEl || !categoryEl || !colorEl) return;

  const bars = document.querySelectorAll('.project-strip');

  bars.forEach((bar) => {
    bar.addEventListener('mouseenter', (e) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      // Update tooltip content
      titleEl.textContent = target.dataset.title || '';
      datesEl.textContent = target.dataset.dates || '';
      categoryEl.textContent = target.dataset.category || '';
      if (descEl) {
        descEl.textContent = target.dataset.description || '';
        (descEl as HTMLElement).style.display = target.dataset.description
          ? 'block'
          : 'none';
      }
      colorEl.style.backgroundColor =
        getComputedStyle(target).backgroundColor;

      // Position tooltip to the right of the bar, with fallback to left
      const tooltipWidth = 200; // approximate max width
      const spaceRight = window.innerWidth - rect.right;
      const spaceLeft = rect.left;

      let left: number;
      if (spaceRight > tooltipWidth + 16) {
        left = rect.right + 8;
      } else if (spaceLeft > tooltipWidth + 16) {
        left = rect.left - tooltipWidth - 8;
      } else {
        left = Math.max(8, rect.right + 8);
      }

      // Ensure tooltip stays in viewport vertically
      const top = Math.min(
        Math.max(8, rect.top),
        window.innerHeight - 150
      );

      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
      tooltip.classList.remove('hidden');
    });

    bar.addEventListener('mouseleave', () => {
      tooltip.classList.add('hidden');
    });
  });
}

initTimeline();
document.addEventListener('astro:page-load', initTimeline);
