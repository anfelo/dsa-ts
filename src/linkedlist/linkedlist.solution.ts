type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

export class LinkedList<T> {
    head?: Node<T>;
    tail?: Node<T>;
    length = 0;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0;
    }

    append(item: T): void {
        const node = { value: item, next: undefined, prev: undefined } as Node<T>;

        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    prepend(item: T): void {
        const node = { value: item, next: undefined, prev: undefined } as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    insertAt(index: number, item: T) {
        if (index === 0) {
            return this.prepend(item);
        }

        if (index === this.length - 1) {
            return this.append(item);
        }

        if (index >= this.length) {
            throw new Error("Index out of bounds");
        }

        const curr = this.getNodeAt(index);

        if (!curr) {
            return;
        }

        const node = { value: item, next: undefined, prev: undefined } as Node<T>;

        this.length++;

        node.next = curr;
        node.prev = curr.prev;
        if (curr.prev) curr.prev.next = node;
        curr.prev = node;
    }

    removeAt(index: number): T | undefined {
        const curr = this.getNodeAt(index);

        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }

            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    getAt(index: number): T | undefined {
        return this.getNodeAt(index)?.value;
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return node.value;
        }

        if (node === this.head) {
            this.head = this.head.next;
        }

        if (node === this.tail) {
            this.tail = this.tail.prev;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        node.next = node.prev = undefined;

        return node.value;
    }

    private getNodeAt(index: number): Node<T> | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }

        return curr;
    }
}
