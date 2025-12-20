const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const menuIcon = btn?.querySelector('.menu-icon');
const closeIcon = btn?.querySelector('.close-icon');

function closeMenu() {
  menu?.classList.add('hidden');
  menuIcon?.classList.remove('hidden');
  closeIcon?.classList.add('hidden');
  btn?.setAttribute('aria-expanded', 'false');
}

btn?.addEventListener('click', () => {
  const isHidden = menu?.classList.toggle('hidden');
  menuIcon?.classList.toggle('hidden');
  closeIcon?.classList.toggle('hidden');
  btn?.setAttribute('aria-expanded', String(!isHidden));
});

// Close menu on navigation (header persists but menu should close)
document.addEventListener('astro:before-swap', closeMenu);
