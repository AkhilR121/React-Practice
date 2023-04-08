import invariant from "tiny-invariant";
import { reduce } from "./iter";
import { plus } from "./operators";
import { pipe } from "./pipe";

// Don't use this function, if you don't know how generators work.
export function each<T>(f: (x: T) => void) {
  return (arr: Iterable<T>): void => {
    for (const e of arr) {
      f(e);
    }
  };
}

export const sum = (arr: Iterable<number>): number =>
  pipe(arr, reduce(plus, 0));

export const toIterable = <T>(arr: Iterator<T>): Iterable<T> => ({
  [Symbol.iterator]() {
    return arr;
  },
});

export const snoc = <T>(arr: Iterable<T>): [T, Iterable<T>] => {
  const iter = arr[Symbol.iterator]();
  const first = iter.next();
  invariant(!first.done, "snoc: empty array");

  return [first.value, toIterable(iter)];
};

export const max = (arr: Iterable<number>): number => {
  const [first, rest] = snoc(arr);

  return pipe(rest, reduce(Math.max, first));
};

export const min = (arr: Iterable<number>): number => {
  const [first, rest] = snoc(arr);
  invariant(first, "min: empty array");

  return pipe(rest, reduce(Math.min, first));
};

export const toArray = <T>(arr: Iterable<T>): T[] => [...arr];

export const toSet = <T>(arr: Iterable<T>): Set<T> => new Set(arr);

export const toMap = <K, V>(arr: Iterable<[K, V]>): Map<K, V> => new Map(arr);

export const count = <T>(arr: Iterable<T>): number =>
  pipe(
    arr,
    reduce(acc => acc + 1, 0)
  );
