// Sources & methods: the provenance table for every series on the site and
// plain-language notes on how the figures are measured.

import { esc } from './format.js';

const SERIES = [
  { name: 'Population totals and provincial estimates', pub: 'BPS', period: 'Mid-2025 estimates; SUPAS 2025', basis: 'Census every ten years (last 2020), intercensal survey at the midpoint, annual estimates from vital registration' },
  { name: 'Population by census, 1971–2020', pub: 'BPS', period: 'Census years', basis: 'Full enumeration of everyone present on census night' },
  { name: 'Age structure, urban share, fertility', pub: 'World Bank', period: '2023–2024', basis: 'World Development Indicators, from UN population estimates' },
  { name: 'GDP, growth and industry shares', pub: 'BPS', period: '2024; Q3 2025 for industry shares', basis: 'National accounts, production and expenditure approaches reconciled' },
  { name: 'GDP and GDP per capita in US dollars', pub: 'World Bank', period: '2015–2024', basis: 'World Development Indicators, converted at market exchange rates' },
  { name: 'Merchandise trade', pub: 'BPS', period: '2024', basis: 'Customs records of goods exports and imports, FOB/CIF' },
  { name: 'Inflation', pub: 'BPS', period: 'December, year on year', basis: 'Consumer price index across 150 cities' },
  { name: 'Poverty and Gini ratio', pub: 'BPS', period: 'March rounds of Susenas', basis: 'Household spending survey against a basic-needs poverty line' },
  { name: 'Unemployment and informal work', pub: 'BPS', period: 'February rounds of Sakernas', basis: 'Labour force survey; employed means at least one hour of work in the reference week' },
  { name: 'Human Development Index and components', pub: 'BPS', period: '2020–2025', basis: 'Life expectancy, expected and mean schooling, and adjusted real spending per person' },
  { name: 'Child stunting', pub: 'Ministry of Health (SSGI)', period: '2023–2024', basis: 'National nutrition survey measuring children under five' },
  { name: 'Internet users', pub: 'APJII', period: '2024', basis: 'Industry association survey of users aged 13 and over' },
];

export function render(main) {
  const rows = SERIES.map(
    (s) => `<tr><td><strong>${esc(s.name)}</strong></td><td>${esc(s.pub)}</td><td>${esc(s.period)}</td><td>${esc(s.basis)}</td></tr>`,
  ).join('');

  main.innerHTML = `
  <div class="page-head">
    <h2>Sources &amp; methods</h2>
    <p class="lede">Nothing on this site is estimated by its editors. Every figure is reproduced from a published release, and this page names the release, the period it covers and the instrument that measured it — so any number here can be checked at its source.</p>
  </div>

  <section class="panel">
    <h3>Where each series comes from</h3>
    <table class="data">
      <thead><tr><th>Series</th><th>Publisher</th><th>Reference period</th><th>How it is measured</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </section>

  <div class="grid-2">
    <section class="panel">
      <h3>Why two publishers differ</h3>
      <p>BPS puts Indonesia's 2024 population at 281.6 million in its mid-year estimate series, while the World Bank prints 283.5 million for the same year. Neither is wrong: the Bank republishes United Nations estimates built on a different revision of the same censuses, and its GDP per capita (US$4,925 for 2024) likewise differs slightly from BPS's rupiah figure converted at the average rate (US$4,960). Where both exist, this site prints the BPS figure first and names the Bank's as such.</p>
      <p>Figures are rounded for display — populations to two decimals of a million in charts, money to one decimal of a billion — but the underlying tables keep the published precision.</p>
    </section>
    <section class="panel">
      <h3>Reading the poverty and jobs numbers</h3>
      <p><strong>Poverty</strong> is measured on spending, not income: a household is poor when spending per person falls below Rp609,160 a month (March 2025), the costed price of 2,100 calories a day plus essential non-food needs. <strong>Unemployment</strong> counts anyone who did no work at all in the survey week and was available for work — which is why the rate looks low while 59.4% of workers are informal: a street vendor working two hours a week is employed in the statistics, however precarious the living.</p>
      <p>Both definitions are the international standard, and both are printed with their figures wherever this site uses them.</p>
    </section>
  </div>

  <div class="callout">
    <h3>About this site</h3>
    <p>Nusantara in Numbers is an independent reference compiled for readers who want Indonesia's headline statistics without opening forty separate releases. It is not affiliated with BPS — Statistics Indonesia, whose name appears only as the publisher of the figures cited. Corrections are welcome: if a figure here disagrees with its cited release, the release is right.</p>
  </div>`;
}
