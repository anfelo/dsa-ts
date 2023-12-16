import { WeightedAdjacencyList, WeightedAdjacencyMatrix, bfs, dfs } from "./graph";

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

test("should find the path with DFS in the graph", () => {
    const graph: WeightedAdjacencyList = [
        [{ to: 1, weight: 1 }, { to: 2, weight: 4 }, { to: 3, weight: 5 }],
        [{ to: 0, weight: 1 }],
        [{ to: 3, weight: 2 }],
        [{ to: 4, weight: 5 }],
        []
    ];

    const path = dfs(graph, 0, 4);

    expect(path).toEqual([0, 2, 3, 4]);
});

test("should not find the path with DFS in the graph", () => {
    const graph: WeightedAdjacencyList = [
        [{ to: 1, weight: 1 }, { to: 2, weight: 4 }, { to: 3, weight: 5 }],
        [{ to: 0, weight: 1 }],
        [{ to: 3, weight: 2 }],
        [{ to: 4, weight: 5 }],
        []
    ];

    const path = dfs(graph, 3, 1);

    expect(path).toBeNull();
});
