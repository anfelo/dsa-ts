export class MinHeap {
    length = 0;
    data: number[] = [];

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    // a.k.a pop
    delete(): number {
        if (this.length === 0) {
            return -1;
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

    update(oldVal: number, newVal: number): void {
        if (oldVal === newVal) {
            return;
        }

        const idx = this.data.indexOf(oldVal);

        if (idx === -1) {
            return;
        }

        this.data[idx] = newVal;

        const pIdx = this.parent(idx);
        const pVal = this.data[pIdx];

        if (pVal > newVal) {
            return this.heapifyUp(idx);
        }

        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (lIdx >= this.length || rIdx >= this.length) {
            return;
        }

        const lVal = this.data[lIdx];
        const rVal = this.data[rIdx];

        if (newVal > lVal || newVal > rVal) {
            return this.heapifyDown(idx);
        }
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.data[rIdx] = v;
            this.data[idx] = rV;
            this.heapifyDown(rIdx);
        } else if (rV > lV && v > lV) {
            this.data[lIdx] = v;
            this.data[idx] = lV;
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx <= 0) {
            return;
        }

        const parent = this.parent(idx);
        const parentValue = this.data[parent];
        const value = this.data[idx];

        if (parentValue > value) {
            this.data[idx] = this.data[parent];
            this.data[parent] = value;
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
