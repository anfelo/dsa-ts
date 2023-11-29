import { isUnique } from "./is-unique"

test("should return false when text has no unique chars", () => {
    const unique = isUnique("distraction");

    expect(unique).toBeFalsy();
})

test("should return true when text only unique chars", () => {
    const unique = isUnique("quickly");

    expect(unique).toBeTruthy();
})
