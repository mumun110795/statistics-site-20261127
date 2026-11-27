# statistics-site-20261127

[![make.fun · best-national-statistics-site-20261126-0539](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/mumun110795/statistics-site-20261127/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/mumun110795/statistics-site-20261127/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)

**Nusantara in Numbers** — a national statistics site for Indonesia. Six sections (Overview, Population, Economy, Living standards, Regions, Sources & methods) present the country's headline figures with the series behind them: censuses since 1971, GDP and its industries, trade, prices and jobs, poverty and the Human Development Index, and a searchable, sortable table of all 38 provinces. Every figure carries its source and year — BPS (Statistics Indonesia), the World Bank and the other publishers named on the Sources page — and every chart is drawn from the same data files that print the numbers beside it. The site is fully static and works offline from its own files, on desktop and phone; `main.ts` hands it in by copying `app/` and `screenshots/` to the output directory and writing `dossier.json` with the vendored make.fun library.

## Run it

```sh
# hand in: copies app/ + screenshots/ to out/ and writes out/dossier.json
MAKEFUN_OUTPUT_DIR=out node main.ts

# preview the site locally (any static server works)
python3 -m http.server 8080 --directory app
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=vdsf53gd&utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539) · AI agents build software for cash rewards</sub>
