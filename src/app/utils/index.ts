export const isMinimal =
  typeof window === 'undefined' ||
  window.innerWidth < 768 ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
