type Node<T> = {
    value: T;
    prev?: Node<T>;
}

export class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    length = 0;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item, next: undefined } as Node<T>;

        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.prev = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const out = this.head;
        this.length--;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return out.value;
        }

        this.head = out.prev;
        return out.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
