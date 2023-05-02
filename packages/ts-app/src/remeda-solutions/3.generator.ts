import * as R from "remeda";
import invariant from "tiny-invariant";

export function equals<T>(fst: Iterable<T>, snd: Iterable<T>): boolean {
  const fiter = fst[Symbol.iterator]();
  const siter = snd[Symbol.iterator]();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const fnext = fiter.next();
    const snext = siter.next();

    if (fnext.done && snext.done) {
      return true;
    }

    if (fnext.done || snext.done) {
      return false;
    }

    if (fnext.value !== snext.value) {
      return false;
    }
  }
}

export function* concat<T>(...args: Iterable<T>[]): IterableIterator<T> {
  for (const arr of args) {
    yield* arr;
  }
}

export function maxBy<T extends object>(arr: readonly T[], by: keyof T): T {
  invariant(arr.length > 0, "maxBy undefined on an empty array");

  let max = arr[0];
  for (const e of arr) {
    if (e[by] > max[by]) {
      max = e;
    }
  }

  return max;
}

export function* zip<T, U>(
  fst: Iterable<T>,
  snd: Iterable<U>
): IterableIterator<[T, U]> {
  const fiter = fst[Symbol.iterator]();
  const siter = snd[Symbol.iterator]();

  while (true) {
    const fnext = fiter.next();
    const snext = siter.next();

    if (fnext.done || snext.done) {
      return;
    }

    yield [fnext.value, snext.value];
  }
}

export function* fibonacci(n: number): IterableIterator<number> {
  let a = 0;
  let b = 1;

  for (const _ of R.range(0, n)) {
    yield a;
    [a, b] = [b, a + b];
  }
}
