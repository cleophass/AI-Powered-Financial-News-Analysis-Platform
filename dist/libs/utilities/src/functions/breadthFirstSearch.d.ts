type Edge<T> = [T, T];
type Edges<T> = Array<Edge<T>>;
export declare function breadthFirstSearch<T>(edges: Edges<T>, start: T, end: T, serializer?: (val: T) => string): Edges<T>;
export {};
