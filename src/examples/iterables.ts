export function* map(
  arr: Iterable<number>,
  f: (x: number) => number
): IterableIterator<number> {
  for (const e of arr) {
    yield f(e);
  }
}

export function* filter(
  arr: Iterable<number>,
  pred: (x: number) => boolean
): IterableIterator<number> {
  for (const e of arr) {
    if (pred(e)) {
      yield e;
    }
  }
}

export function* take(
  arr: Iterable<number>,
  n: number
): IterableIterator<number> {
  let i = 0;
  for (const e of arr) {
    if (i >= n) {
      break;
    }
    yield e;
    i++;
  }
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

export function foo(arr: number[]): Iterable<number> {
  const mapped = map(arr, x => x + 1);
  const filtered = filter(mapped, x => x % 2 === 0);
  const taken = take(filtered, 3);

  return taken;
}

export function bar(arr: number[]): Iterable<number> {
  return from(arr)
    .map(x => x + 1)
    .filter(x => x % 2 === 0)
    .take(3).value;
}
