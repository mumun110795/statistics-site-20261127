// Router: each section is its own module, loaded on first visit so the
// front page stays light. Routes are hash-based so the whole site works
// from static files with no server configuration.

const ROUTES = {
  overview: { title: 'Nusantara in Numbers — Indonesia at a glance', load: () => import('./views-overview.js') },
  population: { title: 'Population — Nusantara in Numbers', load: () => import('./views-population.js') },
  economy: { title: 'Economy — Nusantara in Numbers', load: () => import('./views-economy.js') },
  people: { title: 'Living standards — Nusantara in Numbers', load: () => import('./views-people.js') },
  regions: { title: 'Regions — Nusantara in Numbers', load: () => import('./views-regions.js') },
  sources: { title: 'Sources & methods — Nusantara in Numbers', load: () => import('./views-sources.js') },
};

const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.mainnav a');

function routeName() {
  const name = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  return Object.hasOwn(ROUTES, name) ? name : 'overview';
}

async function navigate() {
  const name = routeName();
  navLinks.forEach((a) => a.classList.toggle('active', a.dataset.route === name));
  document.title = ROUTES[name].title;
  const mod = await ROUTES[name].load();
  mod.render(app);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', navigate);
navigate();
