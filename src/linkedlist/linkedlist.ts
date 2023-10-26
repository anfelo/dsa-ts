export type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}

export class LinkedList<T> {
    head?: Node<T>;
    tail?: Node<T>;
    length: number = 0;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    append(item: T): void {
        const node = { value: item, prev: undefined, next: undefined } as Node<T>;

        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    prepend(item: T): void {
        const node = { value: item, prev: undefined, next: undefined } as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(index: number, item: T) {
        if (index >= this.length) {
            throw new Error("Index out of bounds");
        } else if (index === 0) {
            return this.prepend(item);
        } else if (index === this.length - 1) {
            return this.append(item);
        }

        const curr = this.getAt(index) as Node<T>;
        const node = { value: item, prev: undefined, next: undefined } as Node<T>;

        this.length++;

        node.prev = curr.prev;
        node.next = curr;
        if (curr.prev) curr.prev.next = node;
        curr.prev = node;
    }

    removeAt(index: number): T | undefined {
        const node = this.getAt(index);

        if (!node) {
            return undefined;
        }

        return this.removeNode(node);
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; i++) {
            if (curr?.value === item) {
                break;
            }

            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    get(index: number): T | undefined {
        return this.getAt(index)?.value;
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return node.value;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        // Cleanup
        node.next = node.prev = undefined;

        return node.value;
    }

    private getAt(index: number): Node<T> | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }

        return curr;
    }
}
