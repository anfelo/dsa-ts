import { WeightedAdjacencyList } from "../graph.solution";

export function dijkstra(
    graph: WeightedAdjacencyList,
    source: number,
    sink: number
): number[] {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    const dists = new Array(graph.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];
            if (seen[edge.to]) {
                continue;
            }

            const dist = dists[curr] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }

    if (prev[sink] === -1) {
        return [];
    }

    const out: number[] = [];
    let curr = sink;

    while (curr !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return out.reverse();
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDist = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }

        if (lowestDist > dists[i]) {
            lowestDist = dists[i];
            idx = i;
        }
    }

    return idx;
}
