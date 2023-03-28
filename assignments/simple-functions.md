# Simple functions

1. Write a program to print pascal triangle.

2. Write a function to generate fibonacci sequence.

3. Write a program to compute `x` to the power of `y`. Assume `y` to be an int.

4. Write a program to check if `n` is a perfect number. Example of a perfect
   number is 28. Sum of all of it's factors excluding itself is 28.

5. Write a function to compare two collections(iterable) for equality.

6. Implement `maxBy`. Returns the maximum value of a collection(iterable), after mapping
   each element to a value using the provided function.

```js
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // { n: 8}
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"); // { n: 8 }
```

7. Write a function `isSorted` to check if the passed in array is sorted.

8. Write a function to compute sum of all primes between `start` and `stop`.
