1. Programming with pure functions

2. A referentially transparent expression is an expression that can be replaced with its value without changing the behavior of the program

3. factorial function is not a pure function because it has a side effect of logging to the console.

4. Structural typing is a type system that determines compatibility based on the structure of types rather than their names. An example of a structurally typed language is TypeScript.

5.

```typescript
     function some<T>(x: readonly T[], f: (x: T) => boolean): boolean //or every
     function reduce<T, U>(x: readonly T[], f: (x: U, y: T) => U): U
     function map<T, U(x: readonly T[], f: (x: T) => U): U[]
     function pick<T extends object, K extends keyof T>(x: T, k: K): T[K]
```

6.

```typescript
function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K>;
function deepFlatten<T>(arr: T[]): T[];
function chain<T>(...iters: Iterable<T>[]): IterableIterator<T>;
function merge<T extends object, U extends object>(first: T, second: U): T & U;
function join<
  T extends object,
  U extends object,
  K extends keyof T,
  Y extends keyof U
>(
  primaryTable: T[],
  foreignTable: U[],
  primaryKey: K,
  foreignKey: Y
): (T & U)[];
function slice<T>(arr: T[]): (start: number, stop: number) => T[];
```

7. The imperative shell and functional core is a design pattern that separates the imperative shell from the functional core. The imperative shell is the code that is responsible for the side effects of the program, such as reading from the console or writing to a file. The functional core is the code that is responsible for the logic of the program, such as calculating the factorial of a number. This allows a good separation of concerns and makes it easier to test the functional core.

8. Using readonly for arrays and objects helps prevent accidental mutations, ensuring that the data remains consistent throughout the application.

9. Invariants are statements that must always be true at certain points in a program's execution and are used to ensure the correctness of a program. They protect you from programmer errors and assumptions. They can be used to check values that the type system cannot.

10.

```typescript
const PersonSchema = z.object({
  name: z.string(),
  age: z.number(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  phoneNumbers: z.array(z.string()),
});
```

11.

```typescript
const merge = (obj1, obj2) => ({ ...obj1, ...obj2 });
const insert = (arr, index, value) => [
  ...arr.slice(0, index),
  value,
  ...arr.slice(index),
];
const set = (obj, key, value) => ({ ...obj, [key]: value });
const sum = arr => arr.reduce((acc, val) => acc + val, 0);
const shalloClone = arr => [...ar]; // or arr.slice()
```

12.

```typescript
function rename(obj, keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    result[keys[key] || key] = obj[key];
  }
  return result;
}
```
