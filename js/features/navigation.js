export function initNavigation() {
  const menu = document.querySelector('#menu');
  const navigation = document.querySelector('#navigation');
  const mobile = window.matchMedia('(max-width: 760px)');

  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    navigation.hidden = mobile.matches;
  }

  closeMenu();
  mobile.addEventListener('change', closeMenu);
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.hidden = !open;
  });
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.matches && !navigation.hidden) {
      closeMenu();
      menu.focus();
    }
  });
}
