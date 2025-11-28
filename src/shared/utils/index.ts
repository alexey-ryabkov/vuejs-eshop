export { default as cn } from "./cn";

export async function withMinDuration<T>(
  fn: () => Promise<T>,
  duration: number,
  start = Date.now()
) {
  const result = await fn();
  const elapsed = Date.now() - start;
  if (elapsed < duration) {
    await new Promise((resolve) => setTimeout(resolve, duration - elapsed));
  }
  return result;
}

export function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

export function simpleHash(item: string) {
  let h = 0;
  for (let i = 0; i < item.length; i++) {
    h = (h * 31 + item.charCodeAt(i)) >>> 0;
  }
  return h;
}

export const toBase36 = (num: number) => num.toString(36);

export function capitalizeFirst(item?: string) {
  if (!item) return "";
  return item[0].toUpperCase() + item.slice(1);
}
