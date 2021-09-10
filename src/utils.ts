export function remToPx(rem: number): number {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export const isTouchScreen = ('ontouchstart' in window) ||
  (navigator.maxTouchPoints > 0) ||
  // @ts-ignore
  (navigator.msMaxTouchPoints > 0)
