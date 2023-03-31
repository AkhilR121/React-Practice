# Assignment - db and set functions

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

2. `orderBy` - returns the ordered array(only one key)

   ```typescript
   function orderBy<T extends object>(
     arr: readonly T[],
     key: keyof T,
     order: "asc" | "desc"
   ): readonly T[];
   ```

3. Implement `groupBy`. Groups the elements of an array based on the given
   function.

   ```js
   groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
   groupBy(["one", "two", "three"], "length"); // {3: ['one', 'two'], 5: ['three']}
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
