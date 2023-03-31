1. Write a function to compare two arrays for equality.

   ```typescript
   arrayEqual(first: number[], second: number[]): boolean
   ```

2. Implement `compact`. Removes falsy values from an array.

   ```typescript
   compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
   // [ 1, 2, 3, 'a', 's', 34 ]
   ```

3. Implement `chunk`. Chunks an array into smaller arrays of a specified size.

   ```typescript
   chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
   ```

4. Write a function to generate fibonacci sequence.

   ```typescript
   fibonacci(n: number): IterableIterator<number>
   ```

5. Write a function `isSorted` to check if the passed in array is sorted in ascending order.

   ```typescript
   isSortedAscending(arr: ReadonlyArray<number|string>[]): boolean
   ```

6. Write a function to remove duplicates from a sorted array.

   ```typescript
   removeDuplicates(sorted: number[]): number[]
   ```

7. Implement `deepFlatten`. You need recursion. Deep flattens an array.

   ```typescript
   deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]
   ```

8. Write a function `mergeSorted` with the method signature of
   `int[] merge(int[] sorted, int[] sorted2)` which merges two sorted arrays
   `sorted` and `sorted2` and returns the sorted array but in descending order.
   Time complexity of `O(n)` and space complexity of `O(n)`.

   ```typescript
   assert(mergeSorted([1, 3, 5], [2, 4]) == [5, 4, 3, 2, 1]);
   ```

9. Write a function `pairs` with the signature of `int[][] pairs(int[] arr)`,
   which returns an array of two element array containing adjacent values.

   ```typescript
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
