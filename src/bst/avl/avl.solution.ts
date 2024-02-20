type AVLNode<T> = {
    value: T;
    left?: AVLNode<T>;
    right?: AVLNode<T>;
    height: number;
};

export class AVLTree<T> {
    root: AVLNode<T>;

    constructor(value: T) {
        this.root = { value, height: 1 } as AVLNode<T>;
    }

    insert(node: AVLNode<T>, value: T): void {
        if (value < node.value) {
            if (!node.left) {
                node.left = { value, height: 1 } as AVLNode<T>;
            } else {
                this.insert(node.left, value);
            }

            if (!node.right || node.right.height < node.left.height) {
                node.height = node.left.height + 1;
            }
        } else {
            if (!node.right) {
                node.right = { value, height: 1 } as AVLNode<T>;
            } else {
                this.insert(node.right, value);
            }

            if (!node.left || node.left.height < node.right.height) {
                node.height = node.right.height + 1;
            }
        }

        this.balance(node);
    }

    search(node: AVLNode<T> | undefined, needle: T): boolean {
        if (!node) {
            return false;
        }

        if (node.value === needle) {
            return true;
        }

        if (node.value > needle) {
            return this.search(node.left, needle);
        } else {
            return this.search(node.right, needle);
        }
    }

    delete(node: AVLNode<T> | undefined, value: T): AVLNode<T> | undefined {
        if (!node) {
            return undefined;
        }

        if (node.value === value) {
            if (!node.left && !node.right) {
                return undefined;
            }

            if (!node.left || !node.right) {
                return !node.right ? node.left : node.right;
            }

            node.right = this.lift(node.right, node);

            this.updateHeight(node.right as AVLNode<T>);
            this.updateHeight(node);

            return node;
        }

        if (node.value > value) {
            node.left = this.delete(node.left, value);
        } else {
            node.right = this.delete(node.right, value);
        }

        this.balance(node);

        return node;
    }

    private balance(node: AVLNode<T>): void {
        const rHeight = node.right?.height || 0;
        const lHeight = node.left?.height || 0;

        if (lHeight > rHeight + 1) {
            const lrHeight = node.left?.right?.height || 0;
            const llHeight = node.left?.left?.height || 0;

            if (lrHeight > llHeight) {
                this.rotateRR(node.left as AVLNode<T>);
            }

            this.rotateLL(node);
        } else if (rHeight > lHeight + 1) {
            const rlHeight = node.right?.left?.height || 0;
            const rrHeight = node.right?.right?.height || 0;

            if (rlHeight > rrHeight) {
                this.rotateLL(node.right as AVLNode<T>);
            }

            this.rotateRR(node);
        }
    }

    private rotateRR(node: AVLNode<T>): void {
        const rightNode = node.right as AVLNode<T>;
        const valBefore = node.value;
        const leftBefore = node.left;

        node.value = rightNode.value;
        node.left = rightNode;
        node.right = rightNode.right;
        node.left.value = valBefore;
        node.left.right = node.left.left;
        node.left.left = leftBefore;

        this.updateHeight(node.left as AVLNode<T>);
        this.updateHeight(node);
    }

    private rotateLL(node: AVLNode<T>): void {
        const leftNode = node.left as AVLNode<T>;
        const valBefore = node.value;
        const rightBefore = node.right;

        node.value = leftNode.value;
        node.right = leftNode;
        node.left = leftNode.left;
        node.right.value = valBefore;
        node.right.left = node.right.right;
        node.right.right = rightBefore;

        this.updateHeight(node.right as AVLNode<T>);
        this.updateHeight(node);
    }

    private updateHeight(node: AVLNode<T>): void {
        if (!node.right && !node.left) {
            node.height = 1;
        } else if (
            !node.right ||
            (node.left && node.right.height < node.left.height)
        ) {
            node.height = node.left!.height + 1;
        } else {
            node.height = node.right!.height + 1;
        }
    }

    private lift(
        node: AVLNode<T>,
        nodeToDelete: AVLNode<T>,
    ): AVLNode<T> | undefined {
        if (node.left) {
            node.left = this.lift(node.left, nodeToDelete);
            return node;
        } else {
            nodeToDelete.value = node.value;
            return node.right;
        }
    }
}
