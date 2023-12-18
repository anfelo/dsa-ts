import { WeightedAdjacencyList } from "../graph.solution";
import { dijkstra } from "./dijkstra";

test("should find the shortest path to edge", () => {
    let graph: WeightedAdjacencyList = [
        [
            { to: 1, weight: 1 },
            { to: 2, weight: 3 },
            { to: 3, weight: 5 },
        ],
        [
            { to: 0, weight: 1 },
            { to: 2, weight: 3 },
        ],
        [
            { to: 3, weight: 2 },
            { to: 4, weight: 2 },
        ],
        [{ to: 4, weight: 5 }],
        [],
    ];

    let path = dijkstra(graph, 0, 4);

    expect(path).toEqual([0, 2, 4]);

    graph = [
        [
            { to: 1, weight: 1 },
            { to: 2, weight: 3 },
            { to: 3, weight: 5 },
        ],
        [
            { to: 0, weight: 1 },
            { to: 4, weight: 10 },
        ],
        [{ to: 3, weight: 2 }],
        [{ to: 4, weight: 5 }],
        [],
    ];

    path = dijkstra(graph, 0, 4);

    expect(path).toEqual([0, 3, 4]);
});

test("should not find a path to edge", () => {
    const graph: WeightedAdjacencyList = [
        [
            { to: 1, weight: 1 },
            { to: 2, weight: 3 },
            { to: 3, weight: 5 },
        ],
        [{ to: 0, weight: 1 }],
        [{ to: 3, weight: 2 }],
        [{ to: 1, weight: 5 }],
        [],
    ];

    const path = dijkstra(graph, 0, 4);

    expect(path).toEqual([]);
});
