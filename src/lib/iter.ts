export function map<T, U>(f: (x: T) => U) {
  return function* (arr: Iterable<T>): IterableIterator<U> {
    for (const e of arr) {
      yield f(e);
    }
  };
}

export function filter<T>(pred: (v: T) => boolean) {
  return function* (arr: Iterable<T>): IterableIterator<T> {
    for (const e of arr) {
      if (pred(e)) {
        yield e;
      }
    }
  };
}

export function reduce<T, U>(f: (acc: U, x: T) => U, init: U) {
  return function (arr: Iterable<T>): U {
    let result = init;
    for (const e of arr) {
      result = f(result, e);
    }

    return result;
  };
}

export function every<T>(f: (v: T) => boolean) {
  return (arr: Iterable<T>): boolean => {
    for (const e of arr) {
      if (!f(e)) {
        return false;
      }
    }

    return true;
  };
}

export function some<T>(f: (v: T) => boolean) {
  return (arr: Iterable<T>): boolean => {
    for (const e of arr) {
      if (f(e)) {
        return true;
      }
    }

    return false;
  };
}

export function takeWhile<T>(f: (x: T) => boolean) {
  return function* (arr: Iterable<T>): IterableIterator<T> {
    for (const e of arr) {
      if (!f(e)) {
        break;
      }

      yield e;
    }
  };
}

export function skipWhile<T>(f: (x: T) => boolean) {
  return function* (arr: Iterable<T>): IterableIterator<T> {
    let skip = true;
    for (const e of arr) {
      if (skip && f(e)) {
        continue;
      }

      skip = false;
      yield e;
    }
  };
}

export function take<T>(n: number) {
  return function* (arr: Iterable<T>): IterableIterator<T> {
    let i = 0;
    for (const e of arr) {
      if (i >= n) {
        break;
      }

      i += 1;
      yield e;
    }
  };
}

export function skip<T>(n: number) {
  return function* (arr: Iterable<T>): IterableIterator<T> {
    let i = 0;
    for (const e of arr) {
      if (i >= n) {
        yield e;
      }

      i += 1;
    }
  };
}

function defaultCmp<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

export function orderBy<T, U>(
  f: (x: T) => U,
  cmp: (a: U, b: U) => number = defaultCmp
) {
  return function (arr: Iterable<T>): T[] {
    return [...arr].sort((a, b) => cmp(f(a), f(b)));
  };
}

export function groupBy<T, U>(f: (x: T) => U) {
  return function (arr: Iterable<T>): Map<U, T[]> {
    const result = new Map<U, T[]>();
    for (const e of arr) {
      const key = f(e);
      const group = result.get(key) || [];
      group.push(e);
      result.set(key, group);
    }

    return result;
  };
}

export function concat<T>(...arrs: Array<Iterable<T>>) {
  return function* (first: Iterable<T>): IterableIterator<T> {
    yield* first;
    for (const arr of arrs) {
      yield* arr;
    }
  };
}

export function iterator<T>(arr: Iterable<T>): Iterator<T> {
  return arr[Symbol.iterator]();
}

export function toIterable<T>(list: Iterator<T>): Iterable<T> {
  return { [Symbol.iterator]: () => list };
}

export const of = Array.of;

export function flatMap<T, U>(f: (x: T) => Iterable<U>) {
  return function* (arr: Iterable<T>): IterableIterator<U> {
    for (const e of arr) {
      yield* f(e);
    }
  };
}
