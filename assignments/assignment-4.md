1. Implement `chunk`. Chunks an array into smaller arrays of
   a specified size.

```js
chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
```

2. Implement `deepFlatten`. You need recursion. Deep
   flattens an array.

```js
deepFlatten([1, [2], [[3], 4], 5]) // [1, 2, 3, 4, 5]
```

3. Implement `dropWhile`. Removes elements in an array until
   the passed function returns true. Returns the remaining
   elements in the array.

```js
dropWhile([1, 2, 3, 4], n => n >= 3) // [3, 4]
```

4. Implement `groupBy`. Groups the elements of an array
   based on the given function.

```js
groupBy([6.1, 4.2, 6.3], Math.floor) // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length') // {3: ['one', 'two'], 5: ['three']}
```

5. Implement `zip`. Creates an array of elements, grouped
   based on their position in the original arrays.

```js
zip(['a', 'b'], [1, 2], [true, false]) // [['a', 1, true], ['b', 2, false]]
zip(['a'], [1, 2], [true, false]) // [['a', 1, true], [undefined, 2, false]]
```
