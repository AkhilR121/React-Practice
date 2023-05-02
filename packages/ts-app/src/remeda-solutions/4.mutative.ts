export const push = <T>(arr: T[], ...items: T[]): T[] => [...arr, ...items];

export const pop = <T>(arr: T[]): T[] => arr.slice(0, -1);

export const unshift = <T>(arr: T[], ...items: T[]): T[] => [...items, ...arr];

export const shift = <T>(arr: T[]): T[] => arr.slice(1);

export const insert = <T>(arr: T[], index: number, ...items: T[]): T[] => [
  ...arr.slice(0, index),
  ...items,
  ...arr.slice(index),
];

export const remove = <T>(arr: T[], index: number, count = 1): T[] => [
  ...arr.slice(0, index),
  ...arr.slice(index + count),
];

export const replace = <T>(arr: T[], index: number, ...items: T[]): T[] => [
  ...arr.slice(0, index),
  ...items,
  ...arr.slice(index + items.length),
];

export const copy = <T>(arr: T[]): T[] => [...arr];
