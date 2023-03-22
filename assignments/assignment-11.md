# Assignment 11: object functions

Implement the following mutative object functions in typescript

1. `set` - sets a value at a given key

```typescript
function set<T extends object, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K],
): T
```

2. `pick` - picks the key-value pairs corresponding to the given keys from an
   object

```typescript
function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Pick<T, K>
```

3. `omit` - omits the key-value pairs corresponding to the given keys from an
   object

```typescript
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K>
```

4. `merge` - merges two objects

```typescript
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U
```

5.  `pluck` - returns an array of values corresponding to the given keys

```typescript
function pluck<T extends object, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): T[K][]
```

6. `mergeWith` - merges two objects using a function

```typescript
export function mergeWith<T extends object>(
  fst: T,
  snd: any,
  fn: (x: any, y: any) => any,
): Record<keyof T, number>
```

7. `deepClone` - deep clones an object

```typescript
function deepClone<T extends object>(obj: T): T
```
