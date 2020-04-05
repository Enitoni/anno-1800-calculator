export const clamp = (n: number, min: number, max = Infinity) =>
  Math.min(max, Math.max(min, n))
