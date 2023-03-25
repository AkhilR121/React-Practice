# Assignment 2

1. Write a function to remove duplicates from a sorted array.
2. Implement `all`. Checks if the provided predicate function returns true for
   all elements in a collection.

```js
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

3. Implement `any`. Checks if the provided predicate function returns true for
   at least one element in a collection.

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```

4. Implement `compact`. Removes falsy values from an array.

```js
compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
// [ 1, 2, 3, 'a', 's', 34 ]
```

5. Implement `maxBy`. Returns the maximum value of an array, after mapping each
   element to a value using the provided function.

```js
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"); // 8
```
