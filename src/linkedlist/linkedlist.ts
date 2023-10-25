export type Node<T> = {
    value: T,
    next?: Node<T>,
}

export class LinkedList<T> {
    head?: Node<T>
    length: number = 0

    append(item: T): void {
        this.length++;

        if (!this.head) {
            this.head = { value: item } as Node<T>;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = { value: item } as Node<T>;
    }

    prepend(item: T): void {
        this.length++;

        if (!this.head) {
            this.head = { value: item } as Node<T>;
            return;
        }

        this.head = { value: item, next: this.head } as Node<T>;
    }

    get(index: number): T | undefined {
        if (index > this.length) {
            return undefined;
        }

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr?.next;
        }

        return curr?.value;
    }
}
