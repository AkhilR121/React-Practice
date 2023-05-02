import * as _ from "remeda";
import invariant from "tiny-invariant";

export const arrayEqual = <T>(fst: readonly T[], snd: readonly T[]) =>
  fst.length === snd.length &&
  _.pipe(
    _.range(0, fst.length),
    _.find(i => fst[i] !== snd[i])
  ) === undefined;

export const compact = (arr: any[]) => _.filter(arr, x => !!x);

export function chunks<T>(arr: readonly T[], size: number) {
  invariant(size > 0, "size must be > 0");

  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

export const isSorted = <T>(arr: T[]) =>
  _.find.indexed(arr, (e, i) => i > 0 && e < arr[i - 1]) === undefined;

export function uniqueSorted<T>(arr: Iterable<T>): T[] {
  const result: T[] = [];
  for (const e of arr) {
    if (result.at(-1) !== e) {
      result.push(e);
    }
  }

  return result;
}

export const pairs = <T>(arr: readonly T[]) =>
  _.pipe(
    _.range(0, arr.length - 1),
    _.map(i => [arr[i], arr[i + 1]] as const)
  );

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
