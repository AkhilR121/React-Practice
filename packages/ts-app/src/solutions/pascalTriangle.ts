import { Positive, uint, checked, imap, ireduce, mul, range } from "@ti/core";

const product = (start: number, stop: number) =>
  ireduce(range(start, stop), mul, 1);

export const factorial = checked([uint], n => product(1, n + 1));

const ncr = (n: number, r: number) => {
  if (r > n - r) {
    r = n - r;
  }

  return product(n - r + 1, n + 1) / factorial(r);
};

const pascalLine = (line: number) => imap(range(line + 1), i => ncr(line, i));

export const pascalTriangle = checked([Positive], n =>
  imap(range(n + 1), pascalLine)
);
