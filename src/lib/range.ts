import invariant from "tiny-invariant";
import { Natural, Positive, verify } from "./spec";

export function* range(start: Natural, stop?: Natural, step?: Natural) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (step === undefined) {
    step = 1;
  }

  verify(Natural, start);
  verify(Natural, stop);
  verify(Positive, step);
  invariant(start <= stop, `start(${start}) must be less than stop(${stop})`);

  for (let i = start; i < stop; i += step) {
    yield i;
  }
}
