// Living standards: poverty, inequality, human development, health and
// schooling, and getting online.

import { POVERTY, HDI } from './data-core.js';
import { lineChart, barChart, hBars } from './charts.js';
import { esc, fmtDecimal } from './format.js';

export function render(main) {
  const poverty = lineChart({
    labels: POVERTY.labels,
    values: POVERTY.values,
    formatValue: (v) => fmtDecimal(v) + '%',
    color: '#bc4632',
  });

  const hdi = barChart({
    labels: HDI.labels,
    values: HDI.values,
    formatValue: (v) => fmtDecimal(v),
    highlight: { 5: '#e39a2d' },
  });

  const cityCountry = hBars({
    rows: [
      { name: 'Towns and cities', value: 6.73 },
      { name: 'Rural areas', value: 11.03 },
      { name: 'Indonesia', value: 8.47 },
    ],
    formatValue: (v) => fmtDecimal(v) + '%',
    max: 12,
  });

  main.innerHTML = `
  <div class="page-head">
    <h2>Living standards</h2>
    <p class="lede">In March 2025 the poverty rate fell to 8.47% — the lowest since the series began — and the Human Development Index reached 75.90. The gaps that remain are between town and country, and between Java and the east.</p>
  </div>

  <div class="grid-2">
    <section class="panel">
      <h3>Poverty rate, each March 2015–2025</h3>
      <p class="panel-sub">Percent of the population below the national poverty line. Poverty rose in the pandemic, then fell for four straight years.</p>
      ${poverty}
      <p class="source-note">${esc(POVERTY.source)}</p>
    </section>
    <section class="panel">
      <h3>Human Development Index, 2020–2025</h3>
      <p class="panel-sub">BPS's index of health, schooling and living standards, out of 100. Indonesia has been in the "high" band since 2016.</p>
      ${hdi}
      <p class="source-note">${esc(HDI.source)}</p>
    </section>
  </div>

  <div class="fact-row">
    <div class="fact"><p class="f-value">23.85 million</p><p class="f-label">People in poverty, March 2025 · BPS</p></div>
    <div class="fact"><p class="f-value">Rp609,160</p><p class="f-label">The poverty line: spending per person per month, March 2025 · BPS</p></div>
    <div class="fact"><p class="f-value">0.85%</p><p class="f-label">In extreme poverty — 2.38 million people, March 2025 · BPS</p></div>
    <div class="fact"><p class="f-value">0.375</p><p class="f-label">Gini ratio of spending, March 2025, down from 0.381 in September 2024 · BPS</p></div>
  </div>

  <div class="grid-2">
    <section class="panel">
      <h3>Town and country</h3>
      <p class="panel-sub">Poverty rate by area, March 2025. Rural poverty is nearly double the urban rate, and the poorest 40% of households account for 18.65% of all spending.</p>
      ${cityCountry}
      <p class="source-note">BPS, Susenas March 2025</p>
    </section>
    <section class="panel">
      <h3>Health, schooling and getting online</h3>
      <table class="data"><tbody>
        <tr><td>Life expectancy at birth</td><td class="num"><strong>74.47 years</strong></td><td>BPS, 2025</td></tr>
        <tr><td>Children stunted (under 5)</td><td class="num"><strong>19.8%</strong></td><td>SSGI, 2024 — down from 21.5% in 2023</td></tr>
        <tr><td>Expected years of schooling</td><td class="num"><strong>13.30 years</strong></td><td>BPS, 2025</td></tr>
        <tr><td>Real spending per person</td><td class="num"><strong>Rp12.80 million a year</strong></td><td>BPS HDI release, 2025</td></tr>
        <tr><td>Adults who can read and write</td><td class="num"><strong>97.5%</strong></td><td>BPS, 2024</td></tr>
        <tr><td>People online</td><td class="num"><strong>221.6 million · 79.5%</strong></td><td>APJII survey, 2024</td></tr>
      </tbody></table>
      <p class="source-note">As listed per row; SSGI is the Ministry of Health's nutrition survey, APJII the internet providers' association survey</p>
    </section>
  </div>

  <div class="callout">
    <h3>What the poverty line means</h3>
    <p>BPS counts a person as poor when their household's spending per person falls below the cost of a basic basket: 2,100 calories of food a day plus essential non-food needs. In March 2025 that line stood at Rp609,160 per person per month — about Rp20,000 a day. It is a deliberately austere line: crossing it means escaping destitution, not reaching comfort, which is why the rate can fall while many households still feel poor.</p>
  </div>`;
}
