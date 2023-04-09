import invariant from "tiny-invariant";

export function iterator<T>(arr: Iterable<T>): Iterator<T> {
  return arr[Symbol.iterator]();
}

export function toIterable<T>(list: Iterator<T>): Iterable<T> {
  return { [Symbol.iterator]: () => list };
}

export const snoc = <T>(arr: Iterable<T>): [T, Iterable<T>] => {
  const iter = arr[Symbol.iterator]();
  const first = iter.next();
  invariant(!first.done, "snoc: empty array");

  return [first.value, toIterable(iter)];
};

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

export function* flatten<T>(
  arr: Iterable<Iterable<T>> | Iterable<readonly T[]>
): IterableIterator<T> {
  for (const e of arr) {
    yield* e;
  }
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

type Order = "asc" | "desc";

export function cmp<T, K extends keyof T>(key: K, order: Order) {
  return (a: T, b: T): number => {
    const x = a[key];
    const y = b[key];

    if (x < y) return order === "asc" ? -1 : 1;
    if (x > y) return order === "asc" ? 1 : -1;
    return 0;
  };
}

export function orderBy<T, K extends keyof T>(key: K, order: Order = "asc") {
  return (arr: Iterable<T>): T[] => {
    return [...arr].sort(cmp<T, K>(key, order));
  };
}

export function groupBy<T, K extends string | number>(f: (x: T) => K) {
  return (arr: Iterable<T>): Record<K, T[]> => {
    const result: any = {};

    for (const v of arr) {
      const k = f(v);
      const values = result[k];
      if (!values) {
        result[k] = [v];
      } else {
        values.push(v);
      }
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

export function flatMap<T, U>(f: (x: T) => Iterable<U>) {
  return function* (arr: Iterable<T>): IterableIterator<U> {
    for (const e of arr) {
      yield* f(e);
    }
  };
}

export function slice<T>(start: number, stop?: number) {
  return function* (iter: Iterable<T>): IterableIterator<T> {
    invariant(start >= 0, "start must be >= 0");

    let i = 0;
    for (const e of iter) {
      if (stop !== undefined && i >= stop) {
        break;
      }
      if (i >= start) {
        yield e;
      }

      i += 1;
    }
  };
}
