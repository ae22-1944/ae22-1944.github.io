document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;

  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('bi-moon', 'bi-sun');
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      themeIcon.classList.replace('bi-moon', 'bi-sun');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      themeIcon.classList.replace('bi-sun', 'bi-moon');
    }
  });
});
