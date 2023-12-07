type BinarySearchNode = {
    value: number,
    left?: BinarySearchNode,
    right?: BinarySearchNode
};

export class BinarySearchTree {
    root?: BinarySearchNode;

    constructor() {
        this.root = undefined;
    }

    insert(item: number): void {
        if (!this.root) {
            this.root = { value: item } as BinarySearchNode;
            return;
        }

        this.insertAt(item, this.root);
    }

    search(node: BinarySearchNode | undefined, item: number): BinarySearchNode | undefined {
        if (!node || node.value === item) {
            return node;
        }

        if (node.value > item) {
            return this.search(node.left, item);
        } else {
            return this.search(node.right, item);
        }
    }

    insertAt(item: number, parent: BinarySearchNode): void {
        if (parent.value >= item) {
            if (!parent.left) {
                parent.left = { value: item } as BinarySearchNode;
                return;
            }

            this.insertAt(item, parent.left);
        } else {
            if (!parent.right) {
                parent.right = { value: item } as BinarySearchNode;
                return;
            }

            this.insertAt(item, parent.right);
        }
    }

    delete(item: number, node: BinarySearchNode | undefined): BinarySearchNode | undefined {
        if (!node) {
            return undefined;
        }

        if (node.value === item) {
            // Case 1: leaf node
            if (!node.left && !node.right) {
                return undefined;
            }

            // Case 2: 1 Child
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }

            // Case 3: 2 Children
            if (node.left && node.right) {
                // lift either the smallest value from the right subtree or
                // lift the largest value from the left subtree
                node.right = this.lift(node.right, node);
                return node;
            }

            // Simplification of the cases
            // if (!node.left) {
            //     return node.right;
            // } else if (!node.right) {
            //     return node.left;
            // } else {
            //     node.right = this.lift(node.right, node);
            //     return node;
            // }
        } else if (node.value > item) {
            node.left = this.delete(item, node.left);
        } else if (node.value < item) {
            node.right = this.delete(item, node.right);
        }

        return node;
    }

    private lift(node: BinarySearchNode, nodeToDelete: BinarySearchNode): BinarySearchNode | undefined {
        if (node.left) {
            node.left = this.lift(node.left, nodeToDelete);
            return node;
        } else {
            nodeToDelete.value = node.value;
            return node.right;
        }
    }
}
