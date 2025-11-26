export { default as cn } from "./cn";

export async function withMinDuration<T>(
  fn: () => Promise<T>,
  duration = 300
  // duration: number
) {
  const start = Date.now();
  const result = await fn();
  const elapsed = Date.now() - start;
  if (elapsed < duration) {
    await new Promise((resolve) => setTimeout(resolve, duration - elapsed));
  }
  return result;
}
