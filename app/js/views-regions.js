// Regions: every province in one table the visitor can search, filter by
// island group and sort by any column — the controls all do what they say.

import { PROVINCES, ISLAND_GROUPS, NATIONAL_POPULATION_MID2025, PROVINCE_SOURCE } from './data-provinces.js';
import { hBars } from './charts.js';
import { esc, fmtCompactPersons, fmtInt, fmtShare } from './format.js';

const GROUPS = ['All island groups', ...new Set(PROVINCES.map((p) => p.group))];

export function render(main) {
  const islands = hBars({
    rows: ISLAND_GROUPS.map((g) => ({ name: g.name, value: g.pop })),
    formatValue: (v) => fmtCompactPersons(v) + ' · ' + fmtShare(v, NATIONAL_POPULATION_MID2025),
  });

  main.innerHTML = `
  <div class="page-head">
    <h2>Regions: the 38 provinces</h2>
    <p class="lede">One country, two different worlds of density: Jakarta packs 16,155 people into each square kilometre while South Papua has 5. Search the table, filter by island group, or click a column heading to sort.</p>
  </div>

  <div class="fact-row">
    <div class="fact"><p class="f-value">West Java · 50.76m</p><p class="f-label">Most populous province, mid-2025</p></div>
    <div class="fact"><p class="f-value">Jakarta · 16,155/km²</p><p class="f-label">Densest province</p></div>
    <div class="fact"><p class="f-value">Central Kalimantan</p><p class="f-label">Largest by land: 153,430 km²</p></div>
    <div class="fact"><p class="f-value">South Papua · 5/km²</p><p class="f-label">Sparsest province</p></div>
  </div>

  <section class="panel">
    <h3>Every province</h3>
    <div class="controls">
      <label for="prov-search">Search</label>
      <input type="search" id="prov-search" placeholder="Province or capital…" size="24">
      <label for="prov-group">Island group</label>
      <select id="prov-group">${GROUPS.map((g) => `<option>${esc(g)}</option>`).join('')}</select>
      <span id="prov-count" style="font-size:13px;color:var(--muted)"></span>
    </div>
    <table class="data" id="prov-table">
      <thead><tr>
        <th class="sortable" data-key="name">Province ⇅</th>
        <th class="sortable" data-key="capital">Capital ⇅</th>
        <th class="sortable" data-key="group">Island group ⇅</th>
        <th class="num sortable" data-key="pop">Population ⇅</th>
        <th class="num sortable" data-key="area">Land area, km² ⇅</th>
        <th class="num sortable" data-key="density">Density, per km² ⇅</th>
        <th class="num">Share of Indonesia</th>
      </tr></thead>
      <tbody></tbody>
      <tfoot><tr><td colspan="3">Indonesia — 38 provinces</td><td class="num" id="prov-total"></td><td class="num">1,890,180</td><td class="num">150</td><td class="num">100%</td></tr></tfoot>
    </table>
    <p class="source-note">${esc(PROVINCE_SOURCE)}</p>
  </section>

  <section class="panel">
    <h3>Population by island group</h3>
    <p class="panel-sub">Mid-2025. Java, with 55.6% of the people, is the demographic centre of gravity; the six Papuan provinces together hold 2.0%.</p>
    ${islands}
    <p class="source-note">BPS mid-2025 population estimates</p>
  </section>`;

  const tbody = main.querySelector('#prov-table tbody');
  const count = main.querySelector('#prov-count');
  const total = main.querySelector('#prov-total');
  const search = main.querySelector('#prov-search');
  const groupSel = main.querySelector('#prov-group');
  let sortKey = 'pop';
  let sortDir = -1;

  function currentRows() {
    const q = search.value.trim().toLowerCase();
    const g = groupSel.value;
    let rows = PROVINCES.filter(
      (p) =>
        (g === 'All island groups' || p.group === g) &&
        (q === '' || p.name.toLowerCase().includes(q) || p.capital.toLowerCase().includes(q)),
    );
    rows = [...rows].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      return (typeof av === 'string' ? av.localeCompare(bv) : av - bv) * sortDir;
    });
    return rows;
  }

  function draw() {
    const rows = currentRows();
    tbody.innerHTML = rows
      .map(
        (p) =>
          `<tr><td><strong>${esc(p.name)}</strong></td><td>${esc(p.capital)}</td><td>${esc(p.group)}</td><td class="num">${fmtInt(p.pop)}</td><td class="num">${fmtInt(p.area)}</td><td class="num">${fmtInt(p.density)}</td><td class="num">${fmtShare(p.pop, NATIONAL_POPULATION_MID2025)}</td></tr>`,
      )
      .join('');
    count.textContent = `Showing ${rows.length} of 38 provinces`;
    total.textContent = fmtInt(rows.reduce((s, p) => s + p.pop, 0));
  }

  main.querySelectorAll('#prov-table th.sortable').forEach((th) => {
    th.addEventListener('click', () => {
      const key = th.dataset.key;
      if (sortKey === key) sortDir = -sortDir;
      else {
        sortKey = key;
        sortDir = typeof PROVINCES[0][key] === 'string' ? 1 : -1;
      }
      draw();
    });
  });
  search.addEventListener('input', draw);
  groupSel.addEventListener('change', draw);
  draw();
}
