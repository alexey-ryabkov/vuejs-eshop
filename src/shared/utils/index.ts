export { default as cn } from "./cn";
export * from "./errorsHandling";

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

export function castArray<T = unknown>(item: T) {
  if (Array.isArray(item)) return item;
  if (
    item &&
    typeof item === "object" &&
    "length" in item &&
    typeof item.length === "number"
  ) {
    return Array.from(item as ArrayLike<T>);
  }
  return [item];
}

export function toNumber(value: unknown): number | null {
  if (typeof value === "number") return value;

  if (typeof value === "string") {
    const n = Number(value.trim());
    return Number.isFinite(n) ? n : null;
  }

  if (typeof value === "boolean") return value ? 1 : 0;

  return null;
}
