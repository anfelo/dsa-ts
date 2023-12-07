import { BinarySearchTree } from "./bst";

test("should insert a new node", () => {
    const bst = new BinarySearchTree();

    bst.insert(42);

    expect(bst.root?.value).toBe(42);

    bst.insert(8);
    bst.insert(50);
    bst.insert(1);
    bst.insert(9);
    bst.insert(49);
    bst.insert(777);

    expect(bst.root?.left?.value).toBe(8);
    expect(bst.root?.left?.left?.value).toBe(1);
    expect(bst.root?.left?.right?.value).toBe(9);
    expect(bst.root?.right?.value).toBe(50);
    expect(bst.root?.right?.left?.value).toBe(49);
    expect(bst.root?.right?.right?.value).toBe(777);
});

test("should find an item in the tree", () => {
    const bst = new BinarySearchTree();
    fillBST(bst);

    let found = bst.search(bst.root, 777);

    expect(found).toBeTruthy()

    found = bst.search(bst.root, 1);

    expect(found).toBeTruthy()

    found = bst.search(bst.root, 33);

    expect(found).toBeFalsy()
});

test("should delete an item from the tree", () => {
    const bst = new BinarySearchTree();
    fillBST(bst);

    bst.delete(bst.root, 1);

    expect(bst.root?.left?.left).toBeUndefined();

    bst.delete(bst.root, 8);

    expect(bst.root?.left?.value).toBe(9);

    bst.delete(bst.root, 50);

    expect(bst.root?.right?.value).toBe(777);
});

function fillBST(bst: BinarySearchTree): void {
    bst.insert(42);
    bst.insert(8);
    bst.insert(50);
    bst.insert(1);
    bst.insert(9);
    bst.insert(49);
    bst.insert(777);
}
