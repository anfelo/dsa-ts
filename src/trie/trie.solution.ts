export function createTrie(words: string[]): TrieNode {
    const root = new TrieNode("");

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        root.insert(word.toLowerCase());
    }

    return root;
}
export class TrieNode {
    value: string;
    children: TrieNode[];
    terminus: boolean;

    constructor(word: string) {
        this.children = [];
        this.terminus = false;
        this.value = word[0];
        if (word.length > 1) {
            this.children.push(new TrieNode(word.substring(1)));
        } else {
            this.terminus = true;
        }
    }

    insert(word: string): void {
        const value = word[0];
        const next = word.substring(1);
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child.value === value) {
                if (next) {
                    child.insert(next);
                } else {
                    child.terminus = true;
                }

                return;
            }
        }

        this.children.push(new TrieNode(word));
    }

    complete(search: string): string[] {
        let completions: string[] = [];

        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            completions = completions.concat(child._complete(search, "", []))
        }

        return completions;
    }

    private _complete(search: string, build: string, completions: string[]): string[] {
        if (completions.length >= 3 || search && search[0] !== this.value) {
            return completions;
        }

        if (this.terminus) {
            completions.push(build + this.value);
        }

        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            child._complete(search.substring(1), build + this.value, completions);
        }

        return completions;
    }
};
