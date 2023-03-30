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
