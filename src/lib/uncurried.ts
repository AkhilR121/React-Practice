import { each } from "./collectors";
import {
  concat,
  every,
  filter,
  flatMap,
  groupBy,
  map,
  orderBy,
  reduce,
  skip,
  skipWhile,
  some,
  takeWhile,
} from "./iter";
import { mapGroupBy } from "./map";
import { omit, pick } from "./obj";
import { pipe } from "./pipe";
import { find, findIndex, includes } from "./search";

export function uncurry<Args extends any[], Src, R>(
  f: (...args: Args) => (src: Src) => R
) {
  return (src: Src, ...args: Args): R => pipe(src, f(...args));
}

export const imap = uncurry(map);
export const ifilter = uncurry(filter);
export const ireduce = uncurry(reduce);
export const ievery = uncurry(every);
export const isome = uncurry(some);
export const itakeWhile = uncurry(takeWhile);
export const iskipWhile = uncurry(skipWhile);
export const iskip = uncurry(skip);
export const iorderBy = uncurry(orderBy);
export const igroupBy = uncurry(groupBy);
export const iconcat = uncurry(concat);
export const iflatMap = uncurry(flatMap);

export const ieach = uncurry(each);

export const iincludes = uncurry(includes);
export const ifind = uncurry(find);
export const ifindIndex = uncurry(findIndex);

export const ipick = uncurry(pick);
export const iomit = uncurry(omit);

export const imapGroupBy = uncurry(mapGroupBy);
