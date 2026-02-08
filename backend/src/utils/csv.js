function escapeCell(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function toCsv(rows) {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  const lines = [
    headers.map(escapeCell).join(','),
    ...rows.map(r => headers.map(h => escapeCell(r[h])).join(','))
  ];
  return lines.join('\n');
}
