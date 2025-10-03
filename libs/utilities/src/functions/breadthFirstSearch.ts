type Edge<T> = [T, T];
type Edges<T> = Array<Edge<T>>;

export function breadthFirstSearch<T>(
  edges: Edges<T>,
  start: T,
  end: T,
  serializer: (val: T) => string = (x) => (typeof x === 'string' ? x : JSON.stringify(x)),
): Edges<T> {
  const adjacencyMatrix = new Map<T, T[]>();

  // Build the adjacency list
  for (const [from, to] of edges) {
    if (!adjacencyMatrix.has(from)) adjacencyMatrix.set(from, []);
    if (!adjacencyMatrix.has(to)) adjacencyMatrix.set(to, []);
    adjacencyMatrix.get(from)!.push(to);
  }

  const queue: Array<[T, Edges<T>]> = [[start, []]];
  const visited = new Set<string>();

  // BFS
  while (queue.length > 0) {
    const [current, path] = queue.shift()!;
    if (current === end) return path;

    const serialized = serializer(current);
    if (!visited.has(serialized)) {
      visited.add(serialized);
      for (const neighbor of adjacencyMatrix.get(current) ?? []) {
        queue.push([neighbor, [...path, [current, neighbor]]]);
      }
    }
  }

  return [];
}
