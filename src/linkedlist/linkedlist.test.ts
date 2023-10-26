import { LinkedList } from "./linkedlist"

describe("LinkedList", () => {
    it("should append a new node at the end", () => {
        let list = new LinkedList<number>();

        list.append(42);

        expect(list.head?.value).toBe(42);
        expect(list.head?.next).toBe(undefined);
        expect(list.tail?.value).toBe(42);
        expect(list.length).toBe(1);

        list.append(69);

        expect(list.tail?.value).toBe(69);
        expect(list.tail?.prev?.value).toBe(42);
        expect(list.length).toBe(2);

    });

    it("should prepend a new node at the beginning", () => {
        let list = new LinkedList<number>();

        list.prepend(42);

        expect(list.head?.value).toBe(42);

        list.prepend(69);

        expect(list.head?.value).toBe(69);
        expect(list.head?.next?.value).toBe(42);
        expect(list.head?.next?.prev?.value).toBe(69);
        expect(list.length).toBe(2);
    })

    it("should insert a new node in the specified index", () => {
        let list = new LinkedList<number>();

        list.append(42);
        list.append(69);
        list.append(120);

        list.insertAt(1, 777);

        expect(list.head?.next?.value).toBe(777);
        expect(list.length).toBe(4);

        list.insertAt(0, 8);

        expect(list.head?.value).toBe(8);
        expect(list.head?.next?.value).toBe(42);
        expect(list.length).toBe(5);

        list.insertAt(4, 9999);

        expect(list.tail?.value).toBe(9999);
        expect(list.tail?.prev?.value).toBe(120);
        expect(list.length).toBe(6);

        expect(() => { list.insertAt(10, 111) }).toThrow(new Error("Index out of bounds"));
    })

    it("should remove item at index", () => {
        let list = new LinkedList<number>();

        list.append(42);
        list.append(69);
        list.append(777);

        let removed = list.removeAt(4);

        expect(removed).toBeUndefined();

        removed = list.removeAt(0);

        expect(removed).toBe(42);
        expect(list.head?.value).toBe(69);
        expect(list.length).toBe(2);

        removed = list.removeAt(1);

        expect(removed).toBe(777);
        expect(list.tail?.value).toBe(69);
        expect(list.length).toBe(1);

        removed = list.removeAt(0);

        expect(removed).toBe(69);
        expect(list.tail).toBeUndefined();
        expect(list.head).toBeUndefined();
        expect(list.length).toBe(0);
    })

    it("should remove item by value", () => {
        let list = new LinkedList<number>();

        list.append(42);
        list.append(69);
        list.append(777);

        let removed = list.remove(999);

        expect(removed).toBeUndefined();

        removed = list.remove(42);

        expect(removed).toBe(42);
        expect(list.head?.value).toBe(69);
        expect(list.length).toBe(2);

        removed = list.remove(777);

        expect(removed).toBe(777);
        expect(list.tail?.value).toBe(69);
        expect(list.length).toBe(1);

        removed = list.remove(69);

        expect(removed).toBe(69);
        expect(list.tail).toBeUndefined();
        expect(list.head).toBeUndefined();
        expect(list.length).toBe(0);
    })

    it("should get the 3rd value from the list", () => {
        let list = new LinkedList<number>();

        expect(list.get(0)).toBe(undefined);

        list.append(42);
        list.append(69);
        list.append(777);

        expect(list.get(0)).toBe(42);
        expect(list.get(2)).toBe(777);
        expect(list.get(3)).toBe(undefined);
        expect(list.length).toBe(3);
    });
})
