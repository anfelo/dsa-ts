import { LinkedList } from "./linkedlist"

describe("LinkedList", () => {
    it("should append a new node at the end", () => {
        let list = new LinkedList();

        list.append(42);

        expect(list.head?.value).toBe(42);
        expect(list.head?.next).toBe(undefined);
        expect(list.length).toBe(1);

        list.append(69);

        expect(list.head?.next?.value).toBe(69);
        expect(list.length).toBe(2);

    });

    it("should prepend a new node at the beginning", () => {
        let list = new LinkedList();

        list.prepend(42);

        expect(list.head?.value).toBe(42);

        list.prepend(69);

        expect(list.head?.value).toBe(69);
        expect(list.head?.next?.value).toBe(42);
        expect(list.length).toBe(2);
    })

    it("should get the 3rd value from the list", () => {
        let list = new LinkedList();

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
