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

export const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
