const toggleBtn = document.querySelector('.header_toogle');
const nav = document.querySelector('.header_nav');
const navLinks = document.querySelectorAll('.header_nav a');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('header_nav--active');
  const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', !isExpanded);
});

// Close menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('header_nav--active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
});