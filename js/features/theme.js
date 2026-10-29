import { readPreference, savePreference } from '../utils/storage.js';

export function initTheme() {
  const button = document.querySelector('#theme');

  function applyTheme(value) {
    const dark = value === 'dark';
    document.body.classList.toggle('dark', dark);
    button.setAttribute('aria-pressed', String(dark));
    button.querySelector('span').textContent = dark ? 'Light mode' : 'Dark mode';
  }

  applyTheme(readPreference('portfolio-theme', 'light'));
  button.addEventListener('click', () => {
    const value = document.body.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(value);
    savePreference('portfolio-theme', value);
  });
}
