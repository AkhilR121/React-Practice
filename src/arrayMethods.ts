type Params<
  T,
  Name extends keyof (readonly T[])
> = (readonly T[])[Name] extends (...args: infer P) => any ? P : never;

type Returns<
  T,
  Name extends keyof (readonly T[])
> = (readonly T[])[Name] extends (...args: any[]) => infer R ? R : never;

export function instanceMethod<T, Name extends keyof (readonly T[])>(
  self: readonly T[],
  name: Name
) {
  return (...args: Params<T, Name>): Returns<T, Name> =>
    Array.prototype[name].call(self, ...args);
}

export function classMethod<Name extends keyof (readonly unknown[])>(
  name: Name
) {
  return <T>(self: readonly T[], ...args: Params<T, Name>): Returns<T, Name> =>
    Array.prototype[name].call(self, ...args);
}

export function pipeMethod<Name extends keyof (readonly unknown[])>(
  name: Name
) {
  return <T>(self: readonly T[]) =>
    (...args: Params<T, Name>): Returns<T, Name> =>
      Array.prototype[name].call(self, ...args);
}
