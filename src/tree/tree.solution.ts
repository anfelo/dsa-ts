type Node<T> = {
    value: T;
    left?: Node<T>;
    right?: Node<T>;
}

export class BinaryTree<T> {
    root?: Node<T>;

    constructor() {
        this.root = undefined;
    }

    insert(item: T): void {
        const node: Node<T> = { value: item, left: undefined, right: undefined };

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
        const nodes: Node<T>[] = [];

        if(!this.root) {
            return []
        }

        nodes.push(this.root);

        while (nodes.length) {
            const curr = nodes.shift() as Node<T>;

            visited.push(curr.value);

            if (curr.left) {
                nodes.push(curr.left);
            }

            if (curr.right) {
                nodes.push(curr.right);
            }
        }

        return visited;
    }

    traversePreOrderDF(node: Node<T> | undefined, visited: T[]): T[] {
        if (!node) {
            return visited;
        }

        visited.push(node.value);

        this.traversePreOrderDF(node.left, visited);

        this.traversePreOrderDF(node.right, visited);

        return visited;
    }

    traverseInOrderDF(node: Node<T> | undefined, visited: T[]): T[] {
        if (!node) {
            return visited;
        }

        this.traverseInOrderDF(node.left, visited);

        visited.push(node.value);

        this.traverseInOrderDF(node.right, visited);

        return visited;
    }

    traversePostOrderDF(node: Node<T> | undefined, visited: T[]): T[] {
        if (!node) {
            return visited;
        }

        this.traversePostOrderDF(node.left, visited);

        this.traversePostOrderDF(node.right, visited);

        visited.push(node.value);

        return visited;
    }

    private insertAt(node: Node<T>, item: T): void {
        if (node.value > item && !node.left) {
            node.left = { value: item, left: undefined, right: undefined } as Node<T>;
            return;
        }

        if (node.value < item && !node.right) {
            node.right = { value: item, left: undefined, right: undefined } as Node<T>;
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
