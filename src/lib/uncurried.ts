import { ieach } from "./collectors";
import {
  iconcat,
  ievery,
  ifilter,
  iflatMap,
  igroupBy,
  imap,
  iorderBy,
  ireduce,
  iskip,
  iskipWhile,
  isome,
  itakeWhile,
} from "./iter";
import { imapGroupBy } from "./map";
import { iomit, ipick } from "./obj";
import { pipe } from "./pipe";
import { ifind, ifindIndex, iincludes } from "./search";

export function uncurry<Args extends any[], Src, R>(
  f: (...args: Args) => (src: Src) => R
) {
  return (src: Src, ...args: Args): R => pipe(src, f(...args));
}

export function p<Args extends any[], Src, R>(
  f: (src: Src, ...args: Args) => R,
  ...args: Args
) {
  return (src: Src): R => f(src, ...args);
}

export function curry<Args extends any[], Src, R>(
  f: (src: Src, ...args: Args) => R
) {
  return (...args: Args) =>
    (src: Src): R =>
      f(src, ...args);
}

export const map = curry(imap);
export const filter = curry(ifilter);
export const reduce = curry(ireduce);
export const every = curry(ievery);
export const some = curry(isome);
export const takeWhile = curry(itakeWhile);
export const skipWhile = curry(iskipWhile);
export const skip = curry(iskip);
export const orderBy = curry(iorderBy);
export const groupBy = curry(igroupBy);
export const concat = curry(iconcat);
export const flatMap = curry(iflatMap);

export const each = curry(ieach);

export const includes = curry(iincludes);
export const find = curry(ifind);
export const findIndex = curry(ifindIndex);

export const pick = curry(ipick);
export const omit = curry(iomit);

export const mapGroupBy = curry(imapGroupBy);
