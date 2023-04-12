/* eslint-disable no-console */
export function arange(start: number, stop: number): number[] {
  const result: number[] = [];
  for (let i = start; i < stop; i += 1) {
    result.push(i);
  }

  return result;
}

export function fizz(): number[] {
  return arange(0, 100)
    .map(x => x + 1)
    .filter(x => x % 2 === 0)
    .slice(0, 3);
}

type Iter = { hasNext(): boolean; next(): number };
export function jrange(start: number, stop: number): Iter {
  let i = start;

  function hasNext(): boolean {
    return i < stop;
  }

  function next() {
    const result = i;
    i += 1;
    return result;
  }

  return { hasNext, next };
}

const x = "foo";

const pt = { [x]: 100 };
console.log(pt);

const one = Symbol("hello");
const other = Symbol("hello");
// one !== other

export const obj1 = { [one]: 100 };
export const obj2 = { [other]: 100 };
// obj1 !== obj2

export function orange(start: number, stop: number): Iterable<number> {
  let i = start;

  function next(): IteratorResult<number> {
    if (i < stop) {
      const result = { value: i, done: false };
      i += 1;
      return result;
    }
    return { value: undefined, done: true };
  }

  const iterator = () => ({ next });

  return { [Symbol.iterator]: iterator };
}

export function* irange(start: number, stop: number): IterableIterator<number> {
  for (let i = start; i < stop; i += 1) {
    yield i;
  }
}

function* map(
  arr: Iterable<number>,
  f: (x: number) => number
): IterableIterator<number> {
  for (const e of arr) {
    yield f(e);
  }
}

function* filter(
  arr: Iterable<number>,
  pred: (x: number) => boolean
): IterableIterator<number> {
  for (const e of arr) {
    if (pred(e)) {
      yield e;
    }
  }
}

function* take(arr: Iterable<number>, n: number): IterableIterator<number> {
  let i = 0;
  for (const e of arr) {
    if (i >= n) {
      break;
    }
    yield e;
    i++;
  }
}

export function foo(arr: number[]): Iterable<number> {
  const mapped = map(arr, x => x + 1);
  const filtered = filter(mapped, x => x % 2 === 0);
  const taken = take(filtered, 3);

  return taken;
}

class From {
  readonly iter: Iterable<number>;

  get value() {
    return this.iter;
  }

  constructor(iter: Iterable<number>) {
    this.iter = iter;
  }

  map(f: (x: number) => number): From {
    return new From(map(this.iter, f));
  }

  filter(pred: (x: number) => boolean): From {
    return new From(filter(this.iter, pred));
  }

  take(n: number): From {
    return new From(take(this.iter, n));
  }
}

export const from = (iter: Iterable<number>): From => new From(iter);

export function bar(arr: number[]): Iterable<number> {
  return from(arr)
    .map(x => x + 1)
    .filter(x => x % 2 === 0)
    .take(3).value;
}

function pipe(arr: any, ...fs: Array<(x: any) => any>): any {
  return fs.reduce((acc, f) => f(acc), arr);
}

function pmap(f: (x: number) => number) {
  return (arr: Iterable<number>): Iterable<number> => map(arr, f);
}

function pfilter(pred: (x: number) => boolean) {
  return (arr: Iterable<number>): Iterable<number> => filter(arr, pred);
}

function ptake(n: number) {
  return (arr: Iterable<number>): Iterable<number> => take(arr, n);
}

export function baz(arr: number[]): Iterable<number> {
  return pipe(
    arr,
    pmap(x => x + 1),
    pfilter(x => x % 2 === 0),
    ptake(3)
  );
}
