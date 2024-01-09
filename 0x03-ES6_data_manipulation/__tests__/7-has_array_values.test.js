import hasValuesFromArray from "./7-has_array_values";

describe("hasValuesFromArray", () => {
  test("returns true if all values from the array are in the set", () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [1];

    const result = hasValuesFromArray(set, arr);

    // Assert that the result is true
    expect(result).toBe(true);
  });

  test("returns false if any value from the array is not in the set", () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [10];

    const result = hasValuesFromArray(set, arr);

    // Assert that the result is false
    expect(result).toBe(false);
  });

  test("returns false if at least one value from the array is not in the set", () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [1, 10];

    const result = hasValuesFromArray(set, arr);

    // Assert that the result is false
    expect(result).toBe(false);
  });
});
