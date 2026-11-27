// National series for Indonesia, compiled from published releases.
// Every figure carries its publisher and reference period; the Sources page
// lists each series again with the basis it was measured on.

// Headline indicators for the overview KPI band.
export const HEADLINES = [
  { label: 'Population', value: '284.4 million', note: 'Mid-2025 estimate', source: 'BPS, 2025' },
  { label: 'Gross domestic product', value: 'Rp22,139 trillion', note: '2024 at current prices · US$1.40 trillion (World Bank)', source: 'BPS, 2025' },
  { label: 'Real GDP growth', value: '5.03%', note: '2024, year on year', source: 'BPS, 2025' },
  { label: 'Poverty rate', value: '8.47%', note: 'March 2025 — the lowest in the series', source: 'BPS, 2025' },
  { label: 'Life expectancy at birth', value: '74.5 years', note: '2025', source: 'BPS, 2025' },
  { label: 'Human Development Index', value: '75.90', note: '2025 — high category', source: 'BPS, 2025' },
];

// Latest published readings, shown as a releases strip on the overview.
export const LATEST_READINGS = [
  { name: 'Poverty rate', value: '8.47%', when: 'March 2025', source: 'BPS' },
  { name: 'Open unemployment', value: '4.76%', when: 'February 2025', source: 'BPS' },
  { name: 'Inflation, year on year', value: '1.57%', when: 'December 2024', source: 'BPS' },
  { name: 'Human Development Index', value: '75.90', when: '2025', source: 'BPS' },
  { name: 'Trade surplus, goods', value: 'US$31.0 billion', when: '2024', source: 'BPS' },
  { name: 'Population growth', value: '1.08% a year', when: '2020–2025', source: 'BPS SUPAS 2025' },
];

// Real GDP growth, percent year on year (BPS national accounts).
export const GDP_GROWTH = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  values: [4.88, 5.03, 5.07, 5.17, 5.02, -2.07, 3.70, 5.31, 5.05, 5.03],
  source: 'BPS national accounts, 2025 release',
};

// GDP in current US dollars, billions (World Bank, World Development Indicators).
export const GDP_USD = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  values: [860.9, 931.9, 1015.6, 1042.3, 1119.1, 1059.1, 1186.5, 1319.1, 1371.2, 1406.3],
  source: 'World Bank, World Development Indicators',
};

// GDP per capita in current US dollars (World Bank, World Development Indicators).
export const GDP_PER_CAPITA_USD = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  values: [3332, 3563, 3838, 3894, 4135, 3872, 4293, 4726, 4860, 4933],
  source: 'World Bank, World Development Indicators',
};

// Value added by broad sector, percent of GDP, 2024 (World Bank).
export const SECTORS_BROAD = [
  { name: 'Services', share: 45.7 },
  { name: 'Industry (incl. manufacturing & mining)', share: 41.1 },
  { name: 'Agriculture, forestry & fishing', share: 13.2 },
];

// Largest industries by share of GDP, percent, third quarter 2025 (BPS).
export const INDUSTRIES = [
  { name: 'Manufacturing', share: 19.15 },
  { name: 'Agriculture, forestry & fishing', share: 14.35 },
  { name: 'Wholesale & retail trade', share: 13.19 },
  { name: 'Construction', share: 9.82 },
  { name: 'Mining & quarrying', share: 8.51 },
  { name: 'Transport & storage', share: 6.10 },
  { name: 'Information & communication', share: 4.40 },
  { name: 'Financial services', share: 3.93 },
  { name: 'Education services', share: 2.74 },
  { name: 'Accommodation & food service', share: 2.68 },
  { name: 'Public administration', share: 2.58 },
  { name: 'Real estate', share: 2.28 },
  { name: 'Other services', share: 2.07 },
];

// Merchandise trade, billions of US dollars, 2024 (BPS).
export const TRADE = {
  exports: 264.7,
  imports: 233.7,
  surplus: 31.0,
  source: 'BPS foreign trade statistics, 2024',
  mainExports: 'Coal, palm oil, iron and steel, nickel products, garments and footwear',
  mainImports: 'Machinery, fuel, plastics, electrical equipment and cereals',
};

// Consumer price inflation, December year on year, percent (BPS).
export const INFLATION = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  values: [3.35, 3.02, 3.61, 3.13, 2.72, 1.68, 1.87, 5.51, 2.61, 1.57],
  source: 'BPS consumer price statistics',
};

// Population by census and intercensal survey, millions (BPS).
export const CENSUS = [
  { year: '1971', kind: 'Census', value: 119.2 },
  { year: '1980', kind: 'Census', value: 147.5 },
  { year: '1990', kind: 'Census', value: 179.4 },
  { year: '2000', kind: 'Census', value: 206.3 },
  { year: '2010', kind: 'Census', value: 237.6 },
  { year: '2015', kind: 'SUPAS', value: 255.2 },
  { year: '2020', kind: 'Census', value: 270.2 },
  { year: '2025', kind: 'SUPAS', value: 284.7 },
];

// Age structure, percent of population, 2024 (World Bank).
export const AGE_STRUCTURE = [
  { name: 'Aged 0–14', share: 24.6 },
  { name: 'Aged 15–64', share: 68.1 },
  { name: 'Aged 65 and over', share: 7.3 },
];

// Poverty rate each March, percent of population (BPS, Susenas).
export const POVERTY = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  values: [11.22, 10.86, 10.64, 9.82, 9.41, 9.78, 10.14, 9.54, 9.36, 9.03, 8.47],
  source: 'BPS, National Socio-Economic Survey (Susenas), March rounds',
};

// Open unemployment rate each February, percent of the labour force (BPS, Sakernas).
export const UNEMPLOYMENT = {
  labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  values: [5.01, 4.99, 6.26, 5.83, 5.45, 4.82, 4.76],
  source: 'BPS, National Labour Force Survey (Sakernas), February rounds',
};

// Human Development Index (BPS). 2020–2025.
export const HDI = {
  labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
  values: [72.81, 73.16, 73.77, 74.39, 75.02, 75.90],
  source: 'BPS, Human Development Index release',
};

// Indonesia at a glance: static reference facts with their sources.
export const AT_A_GLANCE = [
  { item: 'Land area', value: '1,890,180 km²', source: 'BPS provincial areas, 2025' },
  { item: 'Islands', value: 'More than 17,000', source: 'BPS / Geospatial Information Agency' },
  { item: 'Provinces', value: '38', source: 'Ministry of Home Affairs, 2025' },
  { item: 'Capital and largest city', value: 'Jakarta', source: '—' },
  { item: 'Population density', value: '150 people per km²', source: 'BPS mid-2025 estimate' },
  { item: 'Share living in towns and cities', value: '58.8%', source: 'World Bank, 2024' },
  { item: 'Fertility rate', value: '2.1 children per woman', source: 'World Bank, 2023' },
  { item: 'Currency', value: 'Rupiah (Rp)', source: 'Bank Indonesia' },
  { item: 'Official language', value: 'Indonesian (Bahasa Indonesia)', source: 'Constitution of 1945' },
  { item: 'Living local languages', value: 'More than 700', source: 'Language Development Agency' },
  { item: 'Ethnic groups', value: 'More than 1,300', source: 'BPS, 2010 Census classification' },
  { item: 'Time zones', value: '3 (WIB, WITA, WIT)', source: 'Presidential Decree 41/1987' },
];
