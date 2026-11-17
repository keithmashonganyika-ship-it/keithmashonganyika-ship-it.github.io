const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
document.body.setAttribute('data-theme', initialTheme);

const toggleButton = document.querySelector('.theme-toggle');

if (toggleButton) {
  toggleButton.textContent = initialTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
  toggleButton.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    toggleButton.textContent = nextTheme === 'dark' ? '☀️ Light' : '🌙 Dark';
  });
}
