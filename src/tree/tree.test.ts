import { BinaryTree, compare } from "./tree"

test("should create an empty binary tree", () => {
    const tree = new BinaryTree();

    expect(tree.root).toBeNull();
})

test("should insert value in the tree", () => {
    const tree = new BinaryTree();

    tree.insert(10);

    expect(tree.root?.value).toBe(10);

    tree.insert(23);
    tree.insert(8);
    tree.insert(1);
    tree.insert(9);
    tree.insert(20);
    tree.insert(30);

    expect(tree.root?.left?.value).toBe(8);
    expect(tree.root?.right?.value).toBe(23);
    expect(tree.root?.left?.left?.value).toBe(1);
    expect(tree.root?.left?.right?.value).toBe(9);
    expect(tree.root?.right?.left?.value).toBe(20);
    expect(tree.root?.right?.right?.value).toBe(30);
})

test("should find the given value in the tree", () => {
    const tree = buildBinaryTree([10, 23, 8, 1 , 9, 20, 30]);

    expect(tree.find(1)).toBeTruthy();
    expect(tree.find(20)).toBeTruthy();
    expect(tree.find(4)).toBeFalsy();
})

test("should traverse the tree in a Breadth First manner", () => {
    const tree = buildBinaryTree([10, 23, 8, 20, 1 , 9, 30]);

    let visited = tree.traverseBF();

    expect(visited).toEqual([10, 8, 23, 1, 9, 20, 30]);

    const emptyTree = new BinaryTree<number>();

    visited = emptyTree.traverseBF();

    expect(visited).toEqual([]);
})

test("should traverse the tree in a Debth First pre-order manner", () => {
    const tree = buildBinaryTree([10, 23, 8, 20, 1 , 9, 30]);

    let visited = tree.traversePreOrderDF(tree.root, []);

    expect(visited).toEqual([10, 8, 1, 9, 23, 20, 30]);
})

test("should traverse the tree in a Debth First in-order manner", () => {
    const tree = buildBinaryTree([10, 23, 8, 20, 1 , 9, 30]);

    let visited = tree.traverseInOrderDF(tree.root, []);

    expect(visited).toEqual([1, 8, 9, 10, 20, 23, 30]);
})

test("should traverse the tree in a Debth First post-order manner", () => {
    const tree = buildBinaryTree([10, 23, 8, 20, 1 , 9, 30]);

    let visited = tree.traversePostOrderDF(tree.root, []);

    expect(visited).toEqual([1, 9, 8, 20, 30, 23, 10]);
})

test("should compare two binary trees in shape and values", () => {
    const tree1 = buildBinaryTree([10, 23, 8, 20, 1 , 9, 30]);
    const tree2 = buildBinaryTree([10, 23, 8, 20, 1 , 9, 30]);

    expect(compare(tree1.root, tree2.root)).toBeTruthy();
})

function buildBinaryTree<T>(values: T[]): BinaryTree<T> {
    const tree = new BinaryTree<T>();

    values.forEach(v => tree.insert(v));

    return tree;
}
