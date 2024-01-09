import groceriesList from "./9-groceries_list";

describe("groceriesList", () => {
  test("returns a Map with groceries and quantities", () => {
    const result = groceriesList();

    // Assert that the result is an instance of Map
    expect(result).toBeInstanceOf(Map);

    // Assert specific values in the Map
    expect(result.get("Apples")).toBe(10);
    expect(result.get("Tomatoes")).toBe(10);
    expect(result.get("Pasta")).toBe(1);
    expect(result.get("Rice")).toBe(1);
    expect(result.get("Banana")).toBe(5);
  });
});
