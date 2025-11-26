export function processMalformedDate(val: string) {
  const parts = val.split(/[-\/\. ]+/);
  if (parts.length !== 3) return val;

  const [py, pa, pb] = parts.map((p) => Number(p));
  if ([py, pa, pb].some((n) => Number.isNaN(n))) return val;

  const fallback = tryMakeDate(py, pa, pb) || tryMakeDate(py, pb, pa);
  if (fallback) return fallback;

  return val;
}
function tryMakeDate(y: number, m: number, d: number): Date | null {
  const date = new Date(y, m - 1, d);
  if (Number.isNaN(date.getTime())) return null;
  const yy = date.getFullYear();
  if (yy < 1900 || yy > 3000) return null;
  return date;
}
