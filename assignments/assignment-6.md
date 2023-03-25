# Assignment 6

1. Implement objectFromPairs. Creates an object from the given key-value pairs.

```js
objectFromPairs([
  ["a", 1],
  ["b", 2],
]); // {a: 1, b: 2}
```

2. Implement `objectToPairs`. Creates an array of key-value pair arrays from an
   object.

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```

3. Implement `pluck`. Converts an array of objects into an array of values
   corresponding to the specified key.

```js
const simpsons = [
  { name: "lisa", age: 8 },
  { name: "homer", age: 36 },
  { name: "marge", age: 34 },
  { name: "bart", age: 10 },
];
pluck(simpsons, "age"); // [8, 36, 34, 10]
```

4. Implement `pick`. Picks the key-value pairs corresponding to the given keys
   from an object.

```js
pick({ a: 1, b: "2", c: 3 }, ["a", "c"]); // { 'a': 1, 'c': 3 }
```

5. Implement `omit`. Omits the key-value pairs corresponding to the given keys
   from an object.

```js
omit({ a: 1, b: "2", c: 3 }, ["b"]); // { 'a': 1, 'c': 3 }
```

6. Implement `flip`. Takes a function as an argument, and returns a function
   which takes arguments in the reversed order.

```js
const subtract = (x, y) => x - y;

flip(subtract)(100, 90); // -10
```

7. Implement `once`. Ensures a function is called only once.

```js
const hello = once(() => {
  console.log("hello");
});
hello(); // outputs 'hello'
hello(); // no output
```

8. Implement `deepGet`. Gets the target value in a nested JSON object, based on
   the keys array.

```js
let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ["a", "b", "c"],
    },
  },
};
deepGet(data, ["foo", "foz", index]); // get 3
deepGet(data, ["foo", "bar", "baz", 8, "foz"]); // null
```

9. Implement `merge`. Creates a new object from the combination of two or more
   objects.

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: "foo",
};
merge(object, other);
// { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```

10. Write a function `mergeSorted` with the method signature of
    `int[] merge(int[] sorted, int[] sorted2)` which merges two sorted arrays
    `sorted` and `sorted2` and returns the sorted array but in descending order.
    Time complexity of `O(n)` and space complexity of `O(n)`.

```js
assert(mergeSorted([1, 3, 5], [2, 4]) == [5, 4, 3, 2, 1]);
```

11. Write a function `secondLargest` with the method signature of
    `int secondLargest(int[] arr)` which returns the second largest number in
    the array. DO NOT sort the array. Time complexity must be `O(n)`.

12. Write a function `pairs` with the signature of `int[][] pairs(int[] arr)`,
    which returns an array of two element array containing adjacent values.

```js
assert(
  pairs([1, 2, 3, 4, 5]) ==
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ]
);
```

13. Write a function `isSorted` with the method signature of
    `bool isSorted(int arr[])` to check if the passed in array is sorted.

```js
assert(isSorted([]) == true);
assert(isSorted([1, 3, 2]) == false);
assert(isSorted([1, 2, 3, 5]) == true);
```

14. Write a function to compute sum of all primes less than n. Method signature
    should be `int sumOfPrimes(int[] arr)`.

15. Implement double `LinkedList`. Write a function to reverse that LinkedList.
