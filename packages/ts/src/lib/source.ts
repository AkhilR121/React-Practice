import invariant from "tiny-invariant";

import { Positive, WholeNumber, verify } from "./spec";

export function* range(
  start: WholeNumber,
  stop?: WholeNumber,
  step?: WholeNumber
): IterableIterator<number> {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (step === undefined) {
    step = 1;
  }

  verify(WholeNumber, start);
  verify(WholeNumber, stop);
  verify(Positive, step);
  invariant(start <= stop, `start(${start}) must be less than stop(${stop})`);

  for (let i = start; i < stop; i += step) {
    yield i;
  }
}

export function* repeat<T>(n: number, x: T): IterableIterator<T> {
  invariant(n >= 0, "n must be >= 0");

  for (let i = 0; i < n; i += 1) {
    yield x;
  }
}

export function* repeatedly<T>(n: number, f: () => T): IterableIterator<T> {
  invariant(n >= 0, "n must be >= 0");
  for (let i = 0; i < n; i += 1) {
    yield f();
  }
}

export function* enumerate<T>(
  iter: Iterable<T>
): IterableIterator<readonly [T, number]> {
  let i = 0;
  for (const e of iter) {
    yield [e, i] as const;
    i += 1;
  }
}

export function* reverse<T>(arr: readonly T[]): IterableIterator<T> {
  for (let i = arr.length - 1; i >= 0; i--) {
    yield arr[i];
  }
}
