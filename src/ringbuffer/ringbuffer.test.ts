import { RingBuffer } from "./ringbuffer.solution";

test("should create ringbuffer", () => {
    const buffer = new RingBuffer<number>(100);

    expect(buffer.empty()).toBeTruthy();
    expect(buffer.full()).toBeFalsy();
});

test("should write and read data from buffer", () => {
    const buffer = new RingBuffer<number>(100);
    const data1 = [0, 1, 2, 3, 4, 5];
    const data2 = [6, 7, 8];

    let writeResult = buffer.write(new Array(100).fill(1))

    expect(buffer.empty()).toBeFalsy();
    expect(buffer.full()).toBeTruthy();
    expect(buffer.availableData()).toEqual(100);
    expect(buffer.availableSpace()).toEqual(0);

    buffer.clear()

    writeResult = buffer.write(data1);

    expect(buffer.empty()).toBeFalsy();
    expect(buffer.full()).toBeFalsy();
    expect(writeResult).toEqual(data1.length);
    expect(buffer.availableData()).toEqual(data1.length);
    expect(buffer.availableSpace()).toEqual(100 - data1.length);

    writeResult = buffer.write(data2);

    expect(buffer.empty()).toBeFalsy();
    expect(buffer.full()).toBeFalsy();
    expect(writeResult).toEqual(data2.length);
    expect(buffer.availableData()).toEqual(data1.length + data2.length);
    expect(buffer.availableSpace()).toEqual(100 - data1.length - data2.length);

    let readResult = buffer.read(data1.length);

    expect(readResult).toEqual(data1);
    expect(buffer.empty()).toBeFalsy();
    expect(buffer.availableData()).toEqual(data2.length);
    expect(buffer.availableSpace()).toEqual(100 - data1.length - data2.length);

    readResult = buffer.read(data2.length);

    expect(readResult).toEqual(data2);
    expect(buffer.empty()).toBeTruthy();

    readResult = buffer.read(data2.length);
    expect(readResult).toEqual([]);
});
