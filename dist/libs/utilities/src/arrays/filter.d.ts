import type { Nullish } from '../types';
export declare function filterNullish<T>(value: Nullish | T): value is T;
export declare function filterNullishAndEmpty<T>(value: Nullish | T | ''): value is T;
