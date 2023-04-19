import {
  Positive,
  checked,
  every,
  filter,
  map,
  mul,
  p,
  pipe,
  range,
  reduce,
  repeat,
  sum,
  uint,
} from "@ti/core";
import { z } from "zod";

export const isPerfect = checked(
  [Positive],
  n =>
    n ===
    pipe(
      range(1, n),
      filter(i => n % i === 0),
      sum
    )
);

export const factorial = checked([uint], n =>
  pipe(range(1, n + 1), reduce(mul, 1))
);

const ncr = (n: number, r: number) =>
  factorial(n) / (factorial(r) * factorial(n - r));

const pascalLine = (line: number) =>
  pipe(
    range(line + 1),
    map(i => ncr(line, i))
  );

export const pascalTriangle = checked([Positive], n =>
  pipe(range(n + 1), map(pascalLine))
);

export const isPrime = checked(
  [],
  n =>
    n >= 2 &&
    pipe(
      range(2, n),
      every(i => n % i !== 0)
    )
);

export const sumOfPrimes = checked([Positive], n =>
  pipe(range(n), filter(isPrime), sum)
);

export const power = checked([z.number(), uint], (x, n) =>
  pipe(n, p(repeat, x), reduce(mul, 1))
);
