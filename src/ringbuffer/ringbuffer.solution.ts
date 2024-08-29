export class RingBuffer<T> {
    data: T[];
    length: number;

    private end: number;
    private start: number;

    constructor(cap: number = 100) {
        this.length = cap + 1;
        this.data = [];
        this.end = 0;
        this.start = 0;
    }

    empty(): boolean {
        return this.availableData() === 0;
    }

    full(): boolean {
        return this.availableSpace() === 0;
    }

    write(data: T[]): number {
        if (this.empty()) {
            this.end = this.start = 0;
        }

        if (data.length > this.availableSpace()) {
            return -1;
        }

        this.data.splice(this.end, data.length, ...data);
        this.end = (this.end + data.length) % this.length;

        return data.length;
    }

    read(size: number): T[] {
        if (size > this.availableData()) {
            return [];
        }

        const out = this.data.slice(this.start, this.start + size);
        this.start = (this.start + size) % this.length;

        if (this.start === this.end) {
            this.end = this.start = 0;
        }

        return out;
    }

    clear(): void {
        this.start = (this.start + this.availableData()) % this.length;
    }

    availableData(): number {
        return (this.end % this.length) - this.start;
    }

    availableSpace(): number {
        return this.length - this.end - 1;
    }
}
