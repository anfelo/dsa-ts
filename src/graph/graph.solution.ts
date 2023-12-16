export type WeightedAdjacencyMatrix = number[][];
export type GraphEdge = { to: number; weight: number };
export type WeightedAdjacencyList = GraphEdge[][];

export function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = new Array(graph.length).fill(-1);

    seen[source] = true;
    const queue = [source];

    while (queue.length) {
        const curr = queue.shift() as number;
        if (curr === needle) {
            break;
        }

        seen[curr] = true;

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (seen[i]) continue;
            if (adjs[i] === 0) continue;

            queue.push(i);
            seen[i] = true;
            prev[i] = curr;
        }
    }

    if (prev[needle] === -1) {
        return null;
    }

    let curr = needle;
    const out: number[] = [];
    while (curr !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return out.reverse();
}

export function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, path, seen);

    if (!path.length) {
        return null;
    }

    return path;
}

function walk(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
    path: number[],
    seen: boolean[]
): boolean {
  if (seen[source]) {
    return false;
  }

  seen[source] = true;

  path.push(source);
  if (source === needle) {
    return true;
  }

  const list = graph[source];
  for (let i = 0; i < list.length; i++) {
    if (walk(graph, list[i].to, needle, path, seen)) {
      return true;
    }
  }

  path.pop();

  return false;
}
