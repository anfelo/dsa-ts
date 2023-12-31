import { WeightedAdjacencyList } from "../graph.solution";
import { astar } from "./a-star";

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

    let path = astar(graph, 0, 4);

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

    path = astar(graph, 0, 4);

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

    const path = astar(graph, 0, 4);

    expect(path).toEqual([]);
});
