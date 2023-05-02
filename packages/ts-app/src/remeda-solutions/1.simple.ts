import { Positive, uint, checked } from "@ti/core";
import * as _ from "remeda";
import { z } from "zod";

export const isPerfect = checked(
  [Positive],
  n =>
    n ===
    _.pipe(
      _.range(1, n),
      _.filter(i => n % i === 0),
      _.reduce((acc, i) => acc + i, 0)
    )
);

export const factorial = checked([uint], n =>
  _.pipe(
    _.range(1, n + 1),
    _.reduce((acc, i) => acc * i, 1)
  )
);

const ncr = (n: number, r: number) =>
  factorial(n) / (factorial(r) * factorial(n - r));

const pascalLine = (line: number) =>
  _.pipe(
    _.range(0, line + 1),
    _.map(i => ncr(line, i))
  );

export const pascalTriangle = checked([Positive], n =>
  _.pipe(_.range(0, n + 1), _.map(pascalLine))
);

export const isPrime = checked(
  [],
  n =>
    n >= 2 &&
    !_.pipe(
      _.range(2, n),
      _.find(i => n % i === 0)
    )
);

export const sumOfPrimes = checked([Positive], n =>
  _.pipe(
    _.range(0, n),
    _.filter(isPrime),
    _.reduce((acc, i) => acc + i, 0)
  )
);

export const power = checked([z.number(), uint], (x, n) =>
  _.pipe(
    _.range(0, n),
    _.reduce(acc => acc * x, 1)
  )
);
