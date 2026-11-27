// Hand-rolled SVG and HTML charts. Every chart is drawn from the data
// modules at render time, so the figures on the page and in the charts can
// never drift apart.

import { esc, fmtDecimal } from './format.js';

const INK = '#22302a';
const FAINT = '#8a8f83';
const GRID = '#e6dfcd';
export const TEAL = '#0c5a49';
export const AMBER = '#e39a2d';
export const BRICK = '#bc4632';
export const SAGE = '#7fae9c';

// Vertical bar chart with a value label over each bar. Handles negative
// values (a zero line is drawn and negative bars hang below it).
export function barChart({ labels, values, formatValue, highlight = {}, height = 216 }) {
  const width = 660;
  const top = 24;
  const bottom = 26;
  const plotH = height - top - bottom;
  const min = Math.min(0, ...values);
  const max = Math.max(0, ...values);
  const span = max - min || 1;
  const y = (v) => top + ((max - v) / span) * plotH;
  const zeroY = y(0);
  const slot = width / values.length;
  const barW = Math.min(46, slot * 0.62);
  let out = `<svg class="chart" viewBox="0 0 ${width} ${height}" role="img">`;
  out += `<line x1="0" y1="${zeroY}" x2="${width}" y2="${zeroY}" stroke="${FAINT}" stroke-width="1"/>`;
  values.forEach((v, i) => {
    const cx = slot * i + slot / 2;
    const yv = y(v);
    const y0 = v >= 0 ? yv : zeroY;
    const h = Math.max(2, Math.abs(zeroY - yv));
    const fill = highlight[i] || TEAL;
    out += `<rect x="${(cx - barW / 2).toFixed(1)}" y="${y0.toFixed(1)}" width="${barW}" height="${h.toFixed(1)}" rx="2" fill="${fill}"/>`;
    if (v < 0 && h >= 20) {
      // Long negative bar: put the value inside it, near its lower end,
      // clear of the category label beneath the plot.
      out += `<text x="${cx}" y="${(yv - 5).toFixed(1)}" text-anchor="middle" class="chart-value chart-value-in">${esc(formatValue(v))}</text>`;
    } else {
      const labelY = v >= 0 ? yv - 6 : yv + 14;
      out += `<text x="${cx}" y="${labelY.toFixed(1)}" text-anchor="middle" class="chart-value">${esc(formatValue(v))}</text>`;
    }
    out += `<text x="${cx}" y="${height - 8}" text-anchor="middle" class="chart-label">${esc(labels[i])}</text>`;
  });
  return out + '</svg>';
}

// Line chart with a dot and value label at every point.
export function lineChart({ labels, values, formatValue, color = TEAL, height = 216 }) {
  const width = 660;
  const top = 26;
  const bottom = 26;
  const side = 30;
  const plotH = height - top - bottom;
  const plotW = width - side * 2;
  let min = Math.min(...values);
  let max = Math.max(...values);
  const pad = (max - min) * 0.18 || 1;
  min -= pad;
  max += pad;
  const x = (i) => side + (values.length === 1 ? plotW / 2 : (i / (values.length - 1)) * plotW);
  const y = (v) => top + ((max - v) / (max - min)) * plotH;
  const points = values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  let out = `<svg class="chart" viewBox="0 0 ${width} ${height}" role="img">`;
  out += `<line x1="${side}" y1="${y(values[0])}" x2="${width - side}" y2="${y(values[0])}" stroke="${GRID}" stroke-width="1"/>`;
  out += `<polyline points="${points}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;
  values.forEach((v, i) => {
    out += `<circle cx="${x(i)}" cy="${y(v)}" r="3.4" fill="${color}"/>`;
    out += `<text x="${x(i)}" y="${(y(v) - 9).toFixed(1)}" text-anchor="middle" class="chart-value">${esc(formatValue(v))}</text>`;
    out += `<text x="${x(i)}" y="${height - 8}" text-anchor="middle" class="chart-label">${esc(labels[i])}</text>`;
  });
  return out + '</svg>';
}

// Donut chart with a legend; parts are { name, share } in percent.
export function donutChart({ parts, centreLabel }) {
  const colours = [TEAL, AMBER, SAGE, BRICK];
  const r = 74;
  const c = 2 * Math.PI * r;
  let acc = 0;
  let segments = '';
  parts.forEach((p, i) => {
    const frac = p.share / 100;
    const dash = Math.max(0, frac * c - 2);
    segments += `<circle cx="90" cy="90" r="${r}" fill="none" stroke="${colours[i % colours.length]}" stroke-width="27" stroke-dasharray="${dash.toFixed(1)} ${(c - dash).toFixed(1)}" stroke-dashoffset="${(-acc * c).toFixed(1)}" transform="rotate(-90 90 90)"/>`;
    acc += frac;
  });
  const legend = parts
    .map(
      (p, i) =>
        `<li><span class="chip" style="background:${colours[i % colours.length]}"></span>${esc(p.name)} — <strong>${fmtDecimal(p.share, 1)}%</strong></li>`,
    )
    .join('');
  return `<div class="donut-wrap"><svg class="donut" viewBox="0 0 180 180" role="img">${segments}<text x="90" y="86" text-anchor="middle" class="donut-centre">${esc(centreLabel)}</text><text x="90" y="104" text-anchor="middle" class="donut-sub">of GDP</text></svg><ul class="donut-legend">${legend}</ul></div>`;
}

// Horizontal bars as HTML: one row per entry, width proportional to value.
export function hBars({ rows, formatValue, max }) {
  const top = max ?? Math.max(...rows.map((r) => r.value));
  return (
    '<div class="hbars">' +
    rows
      .map((r) => {
        const pct = Math.max(1.5, (r.value / top) * 100);
        return `<div class="hbar-row"><span class="hbar-name">${esc(r.name)}</span><span class="hbar-track"><span class="hbar-fill" style="width:${pct.toFixed(1)}%"></span></span><span class="hbar-value">${esc(formatValue(r.value))}</span></div>`;
      })
      .join('') +
    '</div>'
  );
}

// One stacked horizontal bar showing shares that sum to 100.
export function stackedShare({ parts }) {
  const colours = [TEAL, AMBER, BRICK];
  const segments = parts
    .map(
      (p, i) =>
        `<span class="stack-seg" style="width:${p.share}%;background:${colours[i % colours.length]}">${fmtDecimal(p.share, 1)}%</span>`,
    )
    .join('');
  const legend = parts.map((p, i) => `<li><span class="chip" style="background:${colours[i % colours.length]}"></span>${esc(p.name)}</li>`).join('');
  return `<div class="stack-bar">${segments}</div><ul class="donut-legend stack-legend">${legend}</ul>`;
}
