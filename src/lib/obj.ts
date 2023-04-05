export function pick<T extends object, K extends keyof T>(keys: readonly K[]) {
  return (obj: T): Pick<T, K> => {
    const result = {} as Pick<T, K>;
    for (const key of keys) {
      result[key] = obj[key];
    }

    return result;
  };
}

export function omit<T extends object, K extends keyof T>(keys: K[]) {
  return (obj: T): Omit<T, K> => {
    const result: any = {};
    for (const key of Object.keys(obj)) {
      const k = key as K;
      if (!keys.includes(k)) {
        result[k] = obj[k];
      }
    }

    return result;
  };
}

export function merge<T1, T2>(obj2: T2) {
  return (obj: T1): T1 & T2 => {
    return { ...obj, ...obj2 };
  };
}
