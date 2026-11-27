// Economy: output with a working chart switcher, the industry structure,
// merchandise trade, prices and jobs.

import { GDP_GROWTH, GDP_USD, GDP_PER_CAPITA_USD, INDUSTRIES, TRADE, INFLATION, UNEMPLOYMENT } from './data-core.js';
import { barChart, lineChart, hBars } from './charts.js';
import { esc, fmtDecimal } from './format.js';

const SERIES = {
  growth: { title: 'Real GDP growth', sub: 'Percent a year, BPS national accounts. The pandemic year is the only contraction in the series.', data: GDP_GROWTH, format: (v) => fmtDecimal(v) + '%', highlight: { 5: '#bc4632' } },
  gdp: { title: 'GDP in current US dollars', sub: 'Billions of US dollars, World Bank. The rupiah\u2019s swings move this series as much as real growth does.', data: GDP_USD, format: (v) => fmtDecimal(v, 0) },
  percapita: { title: 'GDP per person in current US dollars', sub: 'US dollars per person, World Bank. On a purchasing-power basis the 2024 figure is US$16,515.', data: GDP_PER_CAPITA_USD, format: (v) => fmtDecimal(v, 0) },
};

export function render(main) {
  const industries = hBars({
    rows: INDUSTRIES.map((s) => ({ name: s.name, value: s.share })),
    formatValue: (v) => fmtDecimal(v) + '%',
  });

  const inflation = lineChart({
    labels: INFLATION.labels,
    values: INFLATION.values,
    formatValue: (v) => fmtDecimal(v) + '%',
    color: '#bc4632',
    height: 190,
  });

  const jobs = lineChart({
    labels: UNEMPLOYMENT.labels,
    values: UNEMPLOYMENT.values,
    formatValue: (v) => fmtDecimal(v) + '%',
    color: '#0c5a49',
    height: 190,
  });

  main.innerHTML = `
  <div class="page-head">
    <h2>Economy</h2>
    <p class="lede">Indonesia produced Rp22,139 trillion of output in 2024 — US$1.40 trillion, sixteenth in the world — and grew 5.03%. Manufacturing is the largest single industry, and the country has run a merchandise trade surplus every year since 2020.</p>
  </div>

  <section class="panel">
    <h3 id="series-title"></h3>
    <p class="panel-sub" id="series-sub"></p>
    <div class="controls" role="group" aria-label="Choose a series">
      <div class="btn-group" id="series-buttons">
        <button type="button" data-series="growth" class="active">GDP growth %</button>
        <button type="button" data-series="gdp">GDP, US$ billions</button>
        <button type="button" data-series="percapita">GDP per person, US$</button>
      </div>
    </div>
    <div id="series-chart"></div>
    <p class="source-note" id="series-source"></p>
  </section>

  <div class="grid-2">
    <section class="panel">
      <h3>The industries behind the output</h3>
      <p class="panel-sub">Share of GDP by industry, third quarter 2025. Five industries — manufacturing, farming, trade, construction and mining — produce about two-thirds of GDP.</p>
      ${industries}
      <p class="source-note">BPS national accounts, Q3 2025 release</p>
    </section>
    <section class="panel">
      <h3>Trade with the world, 2024</h3>
      <div class="fact-row" style="grid-template-columns:repeat(3,1fr);margin-top:8px">
        <div class="fact"><p class="f-value">US$264.7bn</p><p class="f-label">Exports of goods</p></div>
        <div class="fact"><p class="f-value">US$233.7bn</p><p class="f-label">Imports of goods</p></div>
        <div class="fact"><p class="f-value">US$31.0bn</p><p class="f-label">Surplus</p></div>
      </div>
      <p><strong>Main exports:</strong> ${esc(TRADE.mainExports)}.</p>
      <p><strong>Main imports:</strong> ${esc(TRADE.mainImports)}.</p>
      <p>China is the largest partner on both sides of the ledger, taking about a quarter of exports and supplying about three in ten imports.</p>
      <p class="source-note">${esc(TRADE.source)}</p>
    </section>
  </div>

  <div class="grid-2">
    <section class="panel">
      <h3>Prices: inflation, 2015–2024</h3>
      <p class="panel-sub">December year-on-year inflation, percent. The 2022 spike followed subsidised fuel price rises; 2024 closed at 1.57%, the lowest in the series.</p>
      ${inflation}
      <p class="source-note">${esc(INFLATION.source)}</p>
    </section>
    <section class="panel">
      <h3>Jobs: open unemployment, 2019–2025</h3>
      <p class="panel-sub">Percent of the labour force each February. February 2025's 4.76% is the lowest February reading in three decades — but 59.4% of workers are in informal work.</p>
      ${jobs}
      <p class="source-note">${esc(UNEMPLOYMENT.source)}</p>
    </section>
  </div>`;

  const chartBox = main.querySelector('#series-chart');
  const title = main.querySelector('#series-title');
  const sub = main.querySelector('#series-sub');
  const source = main.querySelector('#series-source');
  const buttons = main.querySelectorAll('#series-buttons button');

  function showSeries(key) {
    const s = SERIES[key];
    title.textContent = s.title;
    sub.textContent = s.sub;
    source.textContent = s.data.source;
    chartBox.innerHTML = barChart({ labels: s.data.labels, values: s.data.values, formatValue: s.format, highlight: s.highlight || {} });
    buttons.forEach((b) => b.classList.toggle('active', b.dataset.series === key));
  }
  buttons.forEach((b) => b.addEventListener('click', () => showSeries(b.dataset.series)));
  showSeries('growth');
}
