"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breadthFirstSearch = breadthFirstSearch;
function breadthFirstSearch(edges, start, end, serializer = (x) => (typeof x === 'string' ? x : JSON.stringify(x))) {
    const adjacencyMatrix = new Map();
    // Build the adjacency list
    for (const [from, to] of edges) {
        if (!adjacencyMatrix.has(from))
            adjacencyMatrix.set(from, []);
        if (!adjacencyMatrix.has(to))
            adjacencyMatrix.set(to, []);
        adjacencyMatrix.get(from).push(to);
    }
    const queue = [[start, []]];
    const visited = new Set();
    // BFS
    while (queue.length > 0) {
        const [current, path] = queue.shift();
        if (current === end)
            return path;
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
//# sourceMappingURL=breadthFirstSearch.js.map