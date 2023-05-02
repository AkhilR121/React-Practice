import * as _ from "remeda";

export function set<T extends object, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  return { ...obj, [key]: value };
}

export function pick<T extends object, K extends keyof T>(
  object: T,
  ...keys: K[]
): Pick<T, K> {
  return _.pipe(
    object,
    Object.entries,
    _.filter(([key]) => keys.includes(key as K)),
    Object.fromEntries
  ) as Pick<T, K>;
}

export function deepGet(obj: any, path: string[]): any {
  if (obj === undefined) {
    return undefined;
  }

  if (path.length === 0) {
    return obj;
  }

  const [key, ...rest] = path;
  return deepGet(obj[key], rest);
}

export function invert(object: Record<string, any>): Record<string, any> {
  return _.pipe(
    object,
    Object.entries,
    _.map(([key, value]) => [value, key]),
    Object.fromEntries
  );
}

export function mergeWith<T extends object, U extends object, V>(
  fst: T,
  snd: U,
  fn: (x: T[keyof T], y: U[keyof U]) => V
): Record<keyof T | keyof U, V | T[keyof T] | U[keyof U]> {
  const result: any = {};
  for (const [key, value] of Object.entries(fst)) {
    result[key] = Object.hasOwn(snd, key)
      ? fn((fst as any)[key], (snd as any)[key])
      : value;
  }

  for (const [key, value] of Object.entries(snd)) {
    if (!Object.hasOwn(result, key)) {
      result[key] = value;
    }
  }

  return result;
}
