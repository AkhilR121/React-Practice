# Assignment 13: db and set functions

Implement the following functions(similar to a database) in typescript

1. `innerJoin` - returns the inner join of two arrays

```typescript
function join<Table1 extends object, Table2 extends object>(
  primary: readonly Table1[],
  foreign: readonly Table2[],
  primaryKey: keyof Table1,
  foreignKey: keyof Table2
): readonly (Table1 & Table2)[];
```

2. `leftJoin` - returns the left join of two arrays

```typescript
function leftJoin<Table1 extends object, Table2 extends object>(
  primary: readonly Table1[],
  foreign: readonly Table2[],
  primaryKey: keyof Table1,
  foreignKey: keyof Table2
): readonly (Table1 & Table2)[];
```

3. `orderBy` - returns the ordered array(only one key)

```typescript
function orderBy<T extends object>(
  arr: readonly T[],
  key: keyof T,
  order: "asc" | "desc"
): readonly T[];
```

4. `difference` - returns the difference of two arrays

```typescript
function difference<T extends object>(
  arr1: readonly T[],
  arr2: readonly T[],
  key: keyof T
): readonly T[];
```

5. `union` - returns the union of two arrays

```typescript
function union<T extends object>(
  arr1: readonly T[],
  arr2: readonly T[],
  key: keyof T
): readonly T[];
```

6. `intersection` - returns the intersection of two arrays

```typescript
function intersection<T extends object>(
  arr1: readonly T[],
  arr2: readonly T[],
  key: keyof T
): readonly T[];
```
