import { initNavigation } from './features/navigation.js';
import { initTheme } from './features/theme.js';
import { initProjects } from './features/projects.js';
import { initContactForm } from './features/contact.js';

initTheme();
initNavigation();
initProjects();
initContactForm();
document.querySelector('#year').textContent = new Date().getFullYear();
