import setFromArray from "./6-set";

describe("setFromArray", () => {
  test("creates a Set from an array with unique elements", () => {
    const inputArray = [12, 32, 15, 78, 98, 15];

    const resultSet = setFromArray(inputArray);

    // Assert that the result is an instance of Set
    expect(resultSet).toBeInstanceOf(Set);

    // Assert that the Set contains only unique elements
    const uniqueElementsArray = [...resultSet];
    expect(uniqueElementsArray).toEqual([12, 32, 15, 78, 98]);
  });
});
