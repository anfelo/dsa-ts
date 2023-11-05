import { Queue } from "../queue/queue.solution";

type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
}

export class BinaryTree<T> {
    root: BinaryNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(item: T): void {
        const node: BinaryNode<T> = { value: item, left: null, right: null };

        if (!this.root) {
            this.root = node;
            return;
        }

        return this.insertAt(this.root, item);
    }

    find(item: T): boolean {
        let curr = this.root;

        while (curr) {
            if (curr.value === item) {
                return true;
            }

            if (curr.value > item) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        return false;
    }

    traverseBF(): T[] {
        const visited: T[] = [];
        const queue = new Queue<BinaryNode<T>>();

        if(!this.root) {
            return []
        }

        queue.enqueue(this.root);

        while (queue.length) {
            const curr = queue.deque() as BinaryNode<T>;

            visited.push(curr.value);

            if (curr.left) {
                queue.enqueue(curr.left);
            }

            if (curr.right) {
                queue.enqueue(curr.right);
            }
        }

        return visited;
    }

    traversePreOrderDF(node: BinaryNode<T> | null, visited: T[]): T[] {
        if (!node) {
            return visited;
        }

        visited.push(node.value);

        this.traversePreOrderDF(node.left, visited);

        this.traversePreOrderDF(node.right, visited);

        return visited;
    }

    traverseInOrderDF(node: BinaryNode<T> | null, visited: T[]): T[] {
        if (!node) {
            return visited;
        }

        this.traverseInOrderDF(node.left, visited);

        visited.push(node.value);

        this.traverseInOrderDF(node.right, visited);

        return visited;
    }

    traversePostOrderDF(node: BinaryNode<T> | null, visited: T[]): T[] {
        if (!node) {
            return visited;
        }

        this.traversePostOrderDF(node.left, visited);

        this.traversePostOrderDF(node.right, visited);

        visited.push(node.value);

        return visited;
    }

    private insertAt(node: BinaryNode<T>, item: T): void {
        if (node.value > item && !node.left) {
            node.left = { value: item, left: null, right: null } as BinaryNode<T>;
            return;
        }

        if (node.value < item && !node.right) {
            node.right = { value: item, left: null, right: null } as BinaryNode<T>;
            return;
        }

        if (node.value > item && node.left) {
            return this.insertAt(node.left, item);
        }

        if (node.value < item && node.right) {
            return this.insertAt(node.right, item);
        }
    }
}

export function compare<T>(a: BinaryNode<T> | null, b: BinaryNode<T> | null): boolean {
    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
