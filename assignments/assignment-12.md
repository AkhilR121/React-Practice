# Assignment 12: generator functions

1. `length` - returns the length of an Iterable

```typescript
function length<T>(arr: Iterable<T>): number;
```

2. `take` - returns the first n elements of an Iterable

```typescript
function take<T>(arr: Iterable<T>, n: number): T[];
```

3. `drop` - returns the elements of an Iterable after the first n elements

```typescript
function drop<T>(arr: Iterable<T>, n: number): T[];
```

4. `slice` - returns the elements of an Iterable between the start and end
   indices

```typescript
function slice<T>(arr: Iterable<T>, start: number, end: number): T[];
```

5. `equals` - returns true if two Iterables are equal

```typescript
function equals<T>(arr1: Iterable<T>, arr2: Iterable<T>): boolean;
```

6. `flatMap` - maps a function over an Iterable and flattens the result

```typescript
function flatMap<T, U>(arr: Iterable<T>, fn: (elem: T) => Iterable<U>): U[];
```

7. `chain` - chains multiple Iterables together

```typescript
function chain<T>(...arrs: Iterable<T>[]): Iterable<T>;
```

8. `maxBy` - returns the maximum element of an Iterable using a function

```typescript
function maxBy<T, U>(arr: Iterable<T>, fn: (elem: T) => U): T;
```
