export type QueueItem = { value: number, index: number };

export class PriorityQueue {
    length = 0;
    data: QueueItem[] = [];

    insert(item: QueueItem): void {
        this.data[this.length] = item;
        this.heapifyUp(this.length);
        this.length++;
    }

    // a.k.a pop
    delete(): QueueItem | null {
        if (this.length === 0) {
            return null;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    update(oldItem: QueueItem, newItem: QueueItem): void {
        if (oldItem.value === newItem.value) {
            return;
        }

        const idx = this.data.findIndex((item) => item.index === oldItem.index);

        if (idx === -1) {
            return;
        }

        this.data[idx] = newItem;

        const pIdx = this.parent(idx);
        const pItem = this.data[pIdx];

        if (pItem.value > newItem.value) {
            return this.heapifyUp(idx);
        }

        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (lIdx >= this.length || rIdx >= this.length) {
            return;
        }

        const lItem = this.data[lIdx];
        const rItem = this.data[rIdx];

        if (newItem.value > lItem.value || newItem.value > rItem.value) {
            return this.heapifyDown(idx);
        }
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lItem = this.data[lIdx];
        const rItem = this.data[rIdx];
        const item = this.data[idx];

        if (lItem.value > rItem.value && item.value > rItem.value) {
            this.data[rIdx] = item;
            this.data[idx] = rItem;
            this.heapifyDown(rIdx);
        } else if (rItem.value > lItem.value && item.value > lItem.value) {
            this.data[lIdx] = item;
            this.data[idx] = lItem;
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx <= 0) {
            return;
        }

        const parent = this.parent(idx);
        const pItem = this.data[parent];
        const item = this.data[idx];

        if (pItem.value > item.value) {
            this.data[idx] = this.data[parent];
            this.data[parent] = item;
            this.heapifyUp(parent);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
