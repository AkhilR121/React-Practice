export const partial =
  (fn: any, ...args: any[]) =>
  (...rest: any[]) =>
    fn(...[...rest, ...args])
