// Population: censuses since 1971, growth, age structure, urbanisation and
// the ten largest provinces.

import { CENSUS, AGE_STRUCTURE } from './data-core.js';
import { PROVINCES } from './data-provinces.js';
import { barChart, stackedShare } from './charts.js';
import { esc, fmtDecimal, fmtInt, fmtMillions } from './format.js';

export function render(main) {
  const census = barChart({
    labels: CENSUS.map((c) => c.year),
    values: CENSUS.map((c) => c.value),
    formatValue: (v) => fmtDecimal(v, 1),
    highlight: { 5: '#e39a2d', 7: '#e39a2d' },
  });

  const top10 = [...PROVINCES]
    .sort((a, b) => b.pop - a.pop)
    .slice(0, 10)
    .map(
      (p, i) =>
        `<tr><td class="num">${i + 1}</td><td><strong>${esc(p.name)}</strong></td><td>${esc(p.capital)}</td><td class="num">${fmtInt(p.pop)}</td><td class="num">${fmtMillions(p.pop)}</td></tr>`,
    )
    .join('');

  main.innerHTML = `
  <div class="page-head">
    <h2>Population</h2>
    <p class="lede">Indonesia counted 284.67 million people in the 2025 intercensal survey (SUPAS) — more than double the 119.2 million of the 1971 census, but growing more slowly than at any time in the series: 1.08% a year between 2020 and 2025.</p>
  </div>

  <div class="fact-row">
    <div class="fact"><p class="f-value">1.08% a year</p><p class="f-label">Population growth, 2020–2025 · BPS SUPAS 2025</p></div>
    <div class="fact"><p class="f-value">150 per km²</p><p class="f-label">Average density, mid-2025 · BPS</p></div>
    <div class="fact"><p class="f-value">58.8%</p><p class="f-label">Live in towns and cities, 2024 · World Bank</p></div>
    <div class="fact"><p class="f-value">2.1</p><p class="f-label">Children per woman, 2023 · World Bank</p></div>
  </div>

  <section class="panel">
    <h3>Population by census and intercensal survey, 1971–2025</h3>
    <p class="panel-sub">Millions of people. Amber bars are SUPAS intercensal surveys; the rest are full censuses, held every ten years.</p>
    ${census}
    <p class="source-note">BPS population censuses 1971–2020 and SUPAS 2015 &amp; 2025</p>
  </section>

  <div class="grid-2">
    <section class="panel">
      <h3>A young country, ageing slowly</h3>
      <p class="panel-sub">Age structure, 2024. Roughly two Indonesians in three are of working age; the over-65 share has doubled since 1971 but is still small.</p>
      ${stackedShare({ parts: AGE_STRUCTURE })}
      <p class="source-note">World Bank, World Development Indicators, 2024</p>
    </section>
    <section class="panel">
      <h3>How the count is made</h3>
      <p>BPS counts everyone physically present in Indonesia on census night, citizen or not, then updates the total each year from births, deaths and migration records. A full census runs every ten years (the last in 2020); a large intercensal survey, SUPAS, fills the midpoint — the 2025 round is the source of the current 284.67 million figure.</p>
      <p>Provincial figures on this site are the official mid-2025 estimates built from the same registers.</p>
      <p class="source-note">BPS, SUPAS 2025 (intercensal population survey)</p>
    </section>
  </div>

  <section class="panel">
    <h3>The ten largest provinces</h3>
    <p class="panel-sub">Mid-2025 estimates. The three Javanese giants — West, East and Central Java — hold 131.1 million people between them, 46% of the nation. The full table of 38 is on the <a href="#/regions">Regions page</a>.</p>
    <table class="data">
      <thead><tr><th class="num">#</th><th>Province</th><th>Capital</th><th class="num">Population</th><th class="num">In millions</th></tr></thead>
      <tbody>${top10}</tbody>
    </table>
    <p class="source-note">BPS mid-2025 population estimates</p>
  </section>`;
}
