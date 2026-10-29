import { projects } from '../data/projects.js';
import { createProjectCard } from '../components/project-card.js';
import { element } from '../utils/dom.js';
export function filterProjects(items, category) {
  return items.filter(project => category === 'All' || project.category === category);
}
export function initProjects() {
  const grid = document.querySelector('#project-grid');
  const filters = document.querySelector('#filters');
  const count = document.querySelector('#count');
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  function render(category) {
    const visible = filterProjects(projects, category);
    grid.replaceChildren(...visible.map(createProjectCard));
    count.textContent = `${visible.length} project${visible.length === 1 ? '' : 's'} shown`;
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
  }
  filters.replaceChildren(...categories.map(category => {
    const button = element('button', { className: 'filter', text: category === 'All' ? 'All work' : category, attributes: { type: 'button', 'data-category': category, 'aria-pressed': 'false' } });
    button.addEventListener('click', () => render(category));
    return button;
  }));
  render('All');
}
