import { isNullish, isNullishOrEmpty } from '../functions/nullish';
import type { Nullish } from '../types';

export function filterNullish<T>(value: Nullish | T): value is T {
  return !isNullish(value);
}

export function filterNullishAndEmpty<T>(value: Nullish | T | ''): value is T {
  return !isNullishOrEmpty(value);
}
