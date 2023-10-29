type Node<T> = {
    value: T;
    next?: Node<T>;
}

export class Stack<T> {
    top?: Node<T>;
    length = 0;

    constructor() {
        this.top = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item, next: undefined } as Node<T>;

        this.length++;

        node.next = this.top;
        this.top = node;
    }

    pop(): T | undefined {
        const out = this.top;

        if (!out) {
            return undefined;
        }

        this.length--;
        this.top = out.next;
        return out?.value;
    }
}
