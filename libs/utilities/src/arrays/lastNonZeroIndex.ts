/**
 * Returns the index of the last non-zero element in the array.
 * You can optionally specify the index up to which to search.
 *
 * @example
 * lastNonZeroIndex([0, 1, 0, 1, 0, 1]);    // => 5
 * lastNonZeroIndex([0, 1, 0, 1, 0, 0]);    // => 3
 * lastNonZeroIndex([0, 0, 0, 1, 1, 1], 3); // => 3
 * lastNonZeroIndex([1, 0, 0, 0, 1, 1], 3); // => 0
 */
export function lastNonZeroIndex(arr: number[], upTo = arr.length) {
  for (let i = upTo - 1; i >= 0; i--) {
    if (arr[i] !== 0) return i;
  }

  return -1;
}
