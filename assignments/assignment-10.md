# Assignment 10: Array functions

Implement the following mutative array functions in typescript

1. `first` - returns the first element of an array

```typescript
function first<T>(arr: readonly T[]): T;
```

2. `last` - returns the last element of an array

```typescript
function last<T>(arr: readonly T[]): T;
```

3. `push` - adds an element to the end of an array

```typescript
function push<T>(arr: readonly T[], elem: T): T[];
```

4. `pop` - removes the last element of an array

```typescript
function pop<T>(arr: readonly T[]): T[];
```

5. `unshift` - adds an element to the beginning of an array

```typescript
function unshift<T>(arr: readonly T[], elem: T): T[];
```

6. `shift` - removes the first element of an array

```typescript
function shift<T>(arr: readonly T[]): T[];
```

7. `insert` - inserts an element at a given index

```typescript
function insert<T>(arr: readonly T[], elem: T, index: number): T[];
```

8. `remove` - removes an element at a given index

```typescript
function remove<T>(arr: readonly T[], index: number): T[];
```

9. `replace` - replaces an element at a given index

```typescript
function replace<T>(arr: readonly T[], elem: T, index: number): T[];
```

10. `copy` - copies an array

```typescript
function copy<T>(arr: readonly T[]): T[];
```
