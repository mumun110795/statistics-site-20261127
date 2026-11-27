// The 38 provinces: mid-2025 population estimates, land area and density.
// Source: BPS mid-2025 population estimates and provincial land areas, as
// published in the BPS provincial tables (population in persons, area in
// km², density in persons per km²).

export const PROVINCES = [
  { name: 'Aceh', capital: 'Banda Aceh', group: 'Sumatra', pop: 5626000, area: 56835, density: 99 },
  { name: 'North Sumatra', capital: 'Medan', group: 'Sumatra', pop: 15785800, area: 72438, density: 218 },
  { name: 'West Sumatra', capital: 'Padang', group: 'Sumatra', pop: 5914300, area: 42108, density: 140 },
  { name: 'Riau', capital: 'Pekanbaru', group: 'Sumatra', pop: 6811200, area: 89901, density: 76 },
  { name: 'Jambi', capital: 'Jambi', group: 'Sumatra', pop: 3768500, area: 49023, density: 77 },
  { name: 'South Sumatra', capital: 'Palembang', group: 'Sumatra', pop: 8928500, area: 86772, density: 103 },
  { name: 'Bengkulu', capital: 'Bengkulu', group: 'Sumatra', pop: 2138000, area: 20122, density: 106 },
  { name: 'Lampung', capital: 'Bandar Lampung', group: 'Sumatra', pop: 9522900, area: 33571, density: 284 },
  { name: 'Bangka Belitung Islands', capital: 'Pangkal Pinang', group: 'Sumatra', pop: 1550800, area: 16690, density: 93 },
  { name: 'Riau Islands', capital: 'Tanjung Pinang', group: 'Sumatra', pop: 2213500, area: 8170, density: 268 },
  { name: 'Jakarta', capital: 'Jakarta', group: 'Java', pop: 10678000, area: 662, density: 16155 },
  { name: 'West Java', capital: 'Bandung', group: 'Java', pop: 50759000, area: 37053, density: 1370 },
  { name: 'Central Java', capital: 'Semarang', group: 'Java', pop: 38233900, area: 34347, density: 1113 },
  { name: 'Yogyakarta', capital: 'Yogyakarta', group: 'Java', pop: 3781500, area: 3170, density: 1193 },
  { name: 'East Java', capital: 'Surabaya', group: 'Java', pop: 42089300, area: 48056, density: 876 },
  { name: 'Banten', capital: 'Serang', group: 'Java', pop: 12537400, area: 9356, density: 1341 },
  { name: 'Bali', capital: 'Denpasar', group: 'Nusa Tenggara', pop: 4461300, area: 5583, density: 798 },
  { name: 'West Nusa Tenggara', capital: 'Mataram', group: 'Nusa Tenggara', pop: 5731100, area: 19632, density: 291 },
  { name: 'East Nusa Tenggara', capital: 'Kupang', group: 'Nusa Tenggara', pop: 5742600, area: 46378, density: 124 },
  { name: 'West Kalimantan', capital: 'Pontianak', group: 'Kalimantan', pop: 5766000, area: 147018, density: 39 },
  { name: 'Central Kalimantan', capital: 'Palangka Raya', group: 'Kalimantan', pop: 2845000, area: 153430, density: 19 },
  { name: 'South Kalimantan', capital: 'Banjarbaru', group: 'Kalimantan', pop: 4323300, area: 37125, density: 116 },
  { name: 'East Kalimantan', capital: 'Samarinda', group: 'Kalimantan', pop: 4267600, area: 126952, density: 34 },
  { name: 'North Kalimantan', capital: 'Tanjung Selor', group: 'Kalimantan', pop: 749400, area: 69901, density: 11 },
  { name: 'North Sulawesi', capital: 'Manado', group: 'Sulawesi', pop: 2721400, area: 14488, density: 188 },
  { name: 'Central Sulawesi', capital: 'Palu', group: 'Sulawesi', pop: 3156100, area: 61497, density: 51 },
  { name: 'South Sulawesi', capital: 'Makassar', group: 'Sulawesi', pop: 9563100, area: 45324, density: 211 },
  { name: 'Southeast Sulawesi', capital: 'Kendari', group: 'Sulawesi', pop: 2836700, area: 36139, density: 78 },
  { name: 'Gorontalo', capital: 'Gorontalo', group: 'Sulawesi', pop: 1242200, area: 12025, density: 103 },
  { name: 'West Sulawesi', capital: 'Mamuju', group: 'Sulawesi', pop: 1525300, area: 16591, density: 92 },
  { name: 'Maluku', capital: 'Ambon', group: 'Maluku', pop: 1970600, area: 46134, density: 43 },
  { name: 'North Maluku', capital: 'Sofifi', group: 'Maluku', pop: 1373800, area: 31466, density: 42 },
  { name: 'Papua', capital: 'Jayapura', group: 'Papua', pop: 1073600, area: 81383, density: 13 },
  { name: 'West Papua', capital: 'Manokwari', group: 'Papua', pop: 587600, area: 60309, density: 10 },
  { name: 'South Papua', capital: 'Merauke', group: 'Papua', pop: 549700, area: 117859, density: 5 },
  { name: 'Central Papua', capital: 'Nabire', group: 'Papua', pop: 1492300, area: 61080, density: 24 },
  { name: 'Highland Papua', capital: 'Jayawijaya', group: 'Papua', pop: 1484900, area: 52509, density: 29 },
  { name: 'Southwest Papua', capital: 'Sorong', group: 'Papua', pop: 636400, area: 39103, density: 16 },
];

// Population by island group, mid-2025 (BPS estimates, persons).
export const ISLAND_GROUPS = [
  { name: 'Java', pop: 158079100 },
  { name: 'Sumatra', pop: 62259500 },
  { name: 'Sulawesi', pop: 21044800 },
  { name: 'Kalimantan', pop: 17951300 },
  { name: 'Nusa Tenggara', pop: 15935000 },
  { name: 'Papua', pop: 5824500 },
  { name: 'Maluku', pop: 3344200 },
];

export const NATIONAL_POPULATION_MID2025 = 284438800;
export const PROVINCE_SOURCE = 'BPS mid-2025 population estimates; land areas from BPS provincial tables';
