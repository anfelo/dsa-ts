import { AVLTree } from "./avl";

test("should insert a new node", () => {
    const avl = new AVLTree<number>(8);

    avl.insert(avl.root, 9);
    avl.insert(avl.root, 49);
    avl.insert(avl.root, 50);
    avl.insert(avl.root, 69);
    avl.insert(avl.root, 777);

    expect(avl.root.value).toBe(50);
    expect(avl.root.height).toBe(3);
    expect(avl.root.left?.value).toBe(9);
    expect(avl.root.left?.height).toBe(2);
    expect(avl.root.left?.left?.value).toBe(8);
    expect(avl.root.left?.left?.height).toBe(1);
    expect(avl.root.left?.right?.value).toBe(49);
    expect(avl.root.left?.right?.height).toBe(1);
    expect(avl.root.right?.value).toBe(69);
    expect(avl.root.right?.height).toBe(2);
    expect(avl.root.right?.right?.value).toBe(777);
    expect(avl.root.right?.right?.height).toBe(1);
});

test("should find an item in the tree", () => {
    const avl = new AVLTree<number>(42);
    fillavl(avl);

    let found = avl.search(avl.root, 777);

    expect(found).toBeTruthy()

    found = avl.search(avl.root, 1);

    expect(found).toBeTruthy()

    found = avl.search(avl.root, 33);

    expect(found).toBeFalsy()
});

test("should delete an item from the tree", () => {
    const avl = new AVLTree<number>(8);

    avl.insert(avl.root, 9);
    avl.insert(avl.root, 49);
    avl.insert(avl.root, 50);
    avl.insert(avl.root, 69);
    avl.insert(avl.root, 777);
    avl.insert(avl.root, 60);
    avl.insert(avl.root, 420);

    avl.delete(avl.root, 60);

    expect(avl.root.right?.value).toBe(420);
    expect(avl.root.right?.height).toBe(2);
    expect(avl.root.right?.right?.value).toBe(777);
    expect(avl.root.right?.right?.height).toBe(1);
    expect(avl.root.right?.left?.value).toBe(69);
    expect(avl.root.right?.left?.height).toBe(1);

    avl.delete(avl.root, 69);
    avl.delete(avl.root, 777);
    avl.delete(avl.root, 420);

    expect(avl.root.value).toBe(9);
    expect(avl.root.height).toBe(3);
    expect(avl.root.right?.value).toBe(50);
    expect(avl.root.right?.height).toBe(2);
    expect(avl.root.left?.value).toBe(8);
    expect(avl.root.left?.height).toBe(1);
    expect(avl.root.right?.left?.value).toBe(49);
    expect(avl.root.right?.left?.height).toBe(1);

    avl.delete(avl.root, 9);

    expect(avl.root.value).toBe(49);
    expect(avl.root.height).toBe(2);
    expect(avl.root.right?.value).toBe(50);
    expect(avl.root.right?.height).toBe(1);
    expect(avl.root.left?.value).toBe(8);
    expect(avl.root.left?.height).toBe(1);
});

function fillavl(avl: AVLTree<number>): void {
    avl.insert(avl.root, 8);
    avl.insert(avl.root, 50);
    avl.insert(avl.root, 1);
    avl.insert(avl.root, 9);
    avl.insert(avl.root, 49);
    avl.insert(avl.root, 777);
}
