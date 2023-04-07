import invariant from "tiny-invariant";

export function mget<K, V>(map: Map<K, V>, k: K): V {
  const r = map.get(k);
  invariant(r !== null && r !== undefined, "value null or undefined");

  return r;
}

export function mapGroupBy<T, K>(f: (x: T) => K) {
  return (arr: Iterable<T>): Map<K, readonly T[]> => {
    const result = new Map<K, readonly T[]>();

    for (const v of arr) {
      const k = f(v);
      const prev = result.get(k) ?? [];
      result.set(k, [...prev, v]);
    }

    return result;
  };
}
