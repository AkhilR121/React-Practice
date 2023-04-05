import { some } from "./iter";
import { pipe } from "./pipe";

export function includes<T>(value: T) {
  return (arr: Iterable<T>): boolean =>
    pipe(
      arr,
      some(v => v === value)
    );
}

export function find<T>(f: (x: T) => boolean) {
  return (arr: Iterable<T>): T | undefined => {
    for (const e of arr) {
      if (f(e)) {
        return e;
      }
    }

    return undefined;
  };
}

export function findIndex<T>(f: (x: T) => boolean) {
  return (arr: Iterable<T>): number => {
    let i = 0;
    for (const e of arr) {
      if (f(e)) {
        return i;
      }
      i += 1;
    }
    return -1;
  };
}
