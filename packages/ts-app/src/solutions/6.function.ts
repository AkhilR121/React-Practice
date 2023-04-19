type AnyFn = (...args: any[]) => any;

export function partial(fn: AnyFn, ...args: any[]): AnyFn {
  return (...rest) => fn(...args, ...rest);
}

export function once<Fn extends AnyFn>(fn: Fn) {
  let called = false;
  let result: ReturnType<Fn>;

  return (...args: Parameters<Fn>): ReturnType<Fn> => {
    if (called) return result;

    called = true;
    result = fn(...args);

    return result;
  };
}

export function memoize<Fn extends AnyFn>(fn: Fn) {
  const cache = new Map();

  return (...args: Parameters<Fn>): ReturnType<Fn> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

type Fn = (...args: any[]) => any;
export function pipe<T>(src: T, ...fns: Fn[]): any {
  return fns.reduce((acc, fn) => fn(acc), src);
}
