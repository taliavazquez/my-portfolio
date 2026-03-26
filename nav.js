document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  const currentPage = path.split('/').pop();

  const navLinks = document.querySelectorAll('.nav-links a.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    const isHome = (currentPage === 'index.html' || currentPage === '');
    const isActive =
      href === currentPage ||
      (isHome && href === 'index.html');
    if (isActive) link.classList.add('active');
  });
});
