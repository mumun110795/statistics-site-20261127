// Overview: the front page. Headline indicators, the two signature charts,
// where people live, the at-a-glance table and doors into every section.

import { HEADLINES, LATEST_READINGS, GDP_GROWTH, SECTORS_BROAD, AT_A_GLANCE } from './data-core.js';
import { ISLAND_GROUPS, NATIONAL_POPULATION_MID2025 } from './data-provinces.js';
import { barChart, donutChart, hBars } from './charts.js';
import { esc, fmtCompactPersons, fmtDecimal, fmtShare } from './format.js';

export function render(main) {
  const kpis = HEADLINES.map(
    (h) => `<article class="kpi"><p class="kpi-label">${esc(h.label)}</p><p class="kpi-value">${esc(h.value)}</p><p class="kpi-note">${esc(h.note)}</p><p class="kpi-source">${esc(h.source)}</p></article>`,
  ).join('');

  const growth = barChart({
    labels: GDP_GROWTH.labels,
    values: GDP_GROWTH.values,
    formatValue: (v) => fmtDecimal(v) + '%',
    highlight: { 5: '#bc4632' },
  });

  const islands = hBars({
    rows: ISLAND_GROUPS.map((g) => ({ name: g.name, value: g.pop })),
    formatValue: (v) => fmtCompactPersons(v) + ' · ' + fmtShare(v, NATIONAL_POPULATION_MID2025),
  });

  const glance = AT_A_GLANCE.map(
    (r) => `<tr><td>${esc(r.item)}</td><td class="num"><strong>${esc(r.value)}</strong></td><td>${esc(r.source)}</td></tr>`,
  ).join('');

  const releases = LATEST_READINGS.map(
    (r) => `<div class="release"><p class="r-name">${esc(r.name)}</p><p class="r-value">${esc(r.value)}</p><p class="r-when">${esc(r.when)} · ${esc(r.source)}</p></div>`,
  ).join('');

  main.innerHTML = `
  <div class="page-head">
    <h2>Indonesia at a glance</h2>
    <p class="lede">The fourth most populous country on earth, the world's sixteenth largest economy, and an archipelago of more than 17,000 islands — measured. Start with the headline figures, then follow any section for the series behind them.</p>
  </div>

  <section class="kpi-band" aria-label="Headline indicators">${kpis}</section>

  <div class="grid-6040">
    <section class="panel">
      <h3>Real GDP growth, 2015–2024</h3>
      <p class="panel-sub">Percent a year. The 2020 bar is the pandemic contraction; growth has run between 3.7% and 5.3% since.</p>
      ${growth}
      <p class="source-note">${esc(GDP_GROWTH.source)}</p>
    </section>
    <section class="panel">
      <h3>What the economy is made of</h3>
      <p class="panel-sub">Value added by broad sector, 2024. Services are now the largest part of output; one worker in seven still farms.</p>
      ${donutChart({ parts: SECTORS_BROAD, centreLabel: '2024' })}
      <p class="source-note">World Bank, World Development Indicators, 2024</p>
    </section>
  </div>

  <div class="grid-2">
    <section class="panel">
      <h3>Where Indonesians live</h3>
      <p class="panel-sub">Population by island group, mid-2025. Java alone holds 55.6% of the country on 7.0% of its land.</p>
      ${islands}
      <p class="source-note">BPS mid-2025 population estimates</p>
    </section>
    <section class="panel">
      <h3>The country in facts</h3>
      <p class="panel-sub">Reference facts a visitor usually comes for, each with its publisher.</p>
      <table class="data"><tbody>${glance}</tbody></table>
    </section>
  </div>

  <h3 class="serif" style="font-size:21px;margin:4px 0 10px;color:var(--teal-dark)">Explore the sections</h3>
  <div class="section-cards">
    <a class="section-card" href="#/population"><h3>Population</h3><p class="card-figure">284.7 million</p><p>Counted in the 2025 intercensal survey. Censuses since 1971, the age structure, and the provinces where growth is fastest.</p></a>
    <a class="section-card" href="#/economy"><h3>Economy</h3><p class="card-figure">5.03% growth</p><p>Output in 2024, the industries behind it, US$264.7 billion of exports, prices and the February jobs reading.</p></a>
    <a class="section-card" href="#/people"><h3>Living standards</h3><p class="card-figure">8.47% in poverty</p><p>Poverty and inequality, the Human Development Index, health, schooling and getting online.</p></a>
    <a class="section-card" href="#/regions"><h3>Regions</h3><p class="card-figure">38 provinces</p><p>Every province's people, land and density in one sortable table — from West Java's 50.76 million to South Papua's 5 people per km².</p></a>
    <a class="section-card" href="#/sources"><h3>Sources &amp; methods</h3><p class="card-figure">Every figure cited</p><p>Which release each number comes from, how it is measured, and why two honest publishers can print slightly different figures.</p></a>
  </div>

  <h3 class="serif" style="font-size:21px;margin:20px 0 10px;color:var(--teal-dark)">Latest published readings</h3>
  <div class="releases">${releases}</div>`;
}
