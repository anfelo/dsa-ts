// Exercise 1.1: Determines if a string has all unique characters.
// Extra: Don't use additional data structures
export function isUnique(text: string): boolean {
    const map: { [key: string]: number } = {};

    text.split("").forEach(char => {
        map[char] = map[char] ? map[char] + 1 : 1;
    });

    return Object.values(map).every(count => count === 1);
}

export function isUniqueBad(text: string): boolean {
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j++) {
            if (text[i] === text[j]) {
                return false;
            }
        }
    }

    return true;
}
