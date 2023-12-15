import { WeightedAdjacencyMatrix, bfs } from "./graph";

test("should find the path with BFS in the graph", () => {
    const graph: WeightedAdjacencyMatrix = [
        [ 0, 1, 4, 5, 0 ],
        [ 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 2, 0 ],
        [ 0, 0, 0, 0, 5 ],
        [ 0, 0, 0, 0, 0 ],
    ];

    const path1 = bfs(graph, 0, 4);
    const path2 = bfs(graph, 1, 4);

    expect(path1).toEqual([0, 3, 4]);
    expect(path2).toEqual([1, 0, 3, 4]);
});

test("should not find path with BFS in the graph", () => {
    const graph: WeightedAdjacencyMatrix = [
        [ 0, 1, 4, 5, 0 ],
        [ 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 2, 0 ],
        [ 0, 0, 0, 0, 5 ],
        [ 0, 0, 0, 0, 0 ],
    ];

    const path = bfs(graph, 3, 1);

    expect(path).toBeNull();
});
