import type { Nullish } from '../types';

export function isNullish(value: unknown): value is Nullish {
  return value === undefined || value === null;
}

export function isNullishOrEmpty(value: unknown): value is Nullish | '' {
  return isNullish(value) || (value as unknown[] | string).length === 0;
}
