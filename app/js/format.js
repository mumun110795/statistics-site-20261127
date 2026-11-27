// Number and text formatting used across every view.

export function fmtInt(n) {
  return Math.round(n).toLocaleString('en-US');
}

export function fmtDecimal(n, places = 2) {
  return n.toLocaleString('en-US', { minimumFractionDigits: places, maximumFractionDigits: places });
}

export function fmtMillions(persons) {
  return fmtDecimal(persons / 1e6, 2) + ' million';
}

export function fmtCompactPersons(persons) {
  if (persons >= 1e6) return fmtDecimal(persons / 1e6, 2) + 'm';
  return fmtInt(persons);
}

export function fmtPct(n, places = 2) {
  return fmtDecimal(n, places) + '%';
}

export function fmtShare(part, whole) {
  return fmtDecimal((part / whole) * 100, 1) + '%';
}

export function esc(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
