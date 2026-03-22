document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  const currentPage = path.split('/').pop();

  const navLinks = document.querySelectorAll('nav a.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');

    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});
