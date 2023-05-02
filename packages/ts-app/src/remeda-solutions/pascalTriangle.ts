import * as _ from "remeda";
import { Positive, uint, checked } from "@ti/core";

const product = (start: number, stop: number) =>
  _.reduce(_.range(start, stop), (acc, x) => acc * x, 1);

export const factorial = checked([uint], n => product(1, n + 1));

const ncr = (n: number, r: number) => {
  if (r > n - r) {
    r = n - r;
  }

  return product(n - r + 1, n + 1) / factorial(r);
};

const pascalLine = (line: number) =>
  _.map(_.range(0, line + 1), i => ncr(line, i));

export const pascalTriangle = checked([Positive], n =>
  _.map(_.range(0, n + 1), pascalLine)
);
