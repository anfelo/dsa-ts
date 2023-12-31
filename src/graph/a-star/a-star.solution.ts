import { WeightedAdjacencyList } from "../graph.solution";
import { PriorityQueue } from "../priority-queue";

export function astar(
    graph: WeightedAdjacencyList,
    source: number,
    dest: number
): number[] {
    const prev: number[] = new Array(graph.length).fill(-1);
    const dists: number[] = new Array(graph.length).fill(Infinity);
    const pq = new PriorityQueue();

    dists[source] = 0;
    dists.forEach((d, i) => pq.insert({ value: d, index: i }));

    while (pq.length) {
        const curr = pq.delete();
        if (!curr) break;

        const adjs = graph[curr.index];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];

            const dist = dists[curr.index] + edge.weight;
            if (dist < dists[edge.to]) {
                const priority = dist + heuristic(dest, edge.to);
                pq.update(
                    { value: dists[edge.to], index: edge.to },
                    { value: priority, index: edge.to }
                );
                dists[edge.to] = dist;
                prev[edge.to] = curr.index;
            }
        }
    }

    console.log(prev)
    console.log(dists)

    if (prev[dest] === -1) {
        return [];
    }

    const out: number[] = [];
    let curr = dest;
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}

function heuristic(a: number, b: number): number {
    return Math.abs(a - b);
}
