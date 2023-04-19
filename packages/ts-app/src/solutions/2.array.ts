import { every, filter, map, pipe, range, toArray } from "@ti/core";
import invariant from "tiny-invariant";

export const arrayEqual = <T>(fst: readonly T[], snd: readonly T[]) =>
  fst.length !== snd.length &&
  pipe(
    range(fst.length),
    every(i => fst[i] === snd[i])
  );

export const compact = (arr: any[]): any[] =>
  pipe(
    arr,
    filter(x => !!x),
    toArray
  );

export function chunks<T>(size: number) {
  return (arr: readonly T[]): Iterable<T[]> => {
    invariant(size > 0, "size must be > 0");

    return pipe(
      range(0, arr.length, size),
      map(i => arr.slice(i, i + size))
    );
  };
}

export const isSorted = <T>(arr: T[]) =>
  arr.every((e, i) => i < 1 || arr[i - 1] <= e);

export function uniqueSorted<T>(arr: Iterable<T>): T[] {
  const result: T[] = [];
  for (const e of arr) {
    if (result.at(-1) !== e) {
      result.push(e);
    }
  }

  return result;
}

export function pairs<T>(arr: readonly T[]): IterableIterator<readonly [T, T]> {
  return pipe(
    range(arr.length - 1),
    map(i => [arr[i], arr[i + 1]] as const)
  );
}

export function mergeSorted<T>(fst: readonly T[], snd: readonly T[]): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;

  while (i < fst.length && j < snd.length) {
    result.push(fst[i] < snd[j] ? fst[i++] : snd[j++]);
  }

  while (i < fst.length) {
    result.push(fst[i++]);
  }

  while (j < snd.length) {
    result.push(snd[j++]);
  }

  return result;
}

type DeepFlattenArgs<T> = ReadonlyArray<T | DeepFlattenArgs<T>>;

export function deepFlatten<T>(arr: DeepFlattenArgs<T>): T[] {
  const isArray = (x: unknown): x is DeepFlattenArgs<any> => Array.isArray(x);

  const result: T[] = [];
  for (const e of arr) {
    const flattened = isArray(e) ? deepFlatten(e) : [e];
    result.push(...flattened);
  }

  return result;
}

export function skipWhile<T>(arr: readonly T[], f: (v: T) => boolean): T[] {
  for (let i = 0; i < arr.length; i += 1) {
    if (!f(arr[i])) {
      return arr.slice(i);
    }
  }

  return [];
}
