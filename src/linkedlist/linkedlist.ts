export type Node<T> = {
    value: T,
    next?: Node<T>,
}

export class LinkedList<T> {
    head?: Node<T>
    length: number = 0

    append(item: T): void {
        if (!this.head) {
            this.head = { value: item };
            this.length++;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = { value: item }
        this.length++;
    }

    prepend(item: T): void {
        if (!this.head) {
            this.head = { value: item };
            this.length++;
            return;
        }

        const node = { value: item, next: this.head };

        this.head = node;
        this.length++;
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
