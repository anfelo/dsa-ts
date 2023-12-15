export type WeightedAdjacencyMatrix = number[][];

export function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);

    seen[source] = true;
    const queue: number[] = [source];

    while (queue.length) {
        const curr = queue.shift() as number;
        if (curr === needle) {
            break;
        }

        seen[curr] = true;

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) continue;
            if (seen[i]) continue;

            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
    }

    if (prev[needle] === -1) {
        return null;
    }

    let curr = needle;
    const out = [];

    while (curr !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return out.reverse();
}
