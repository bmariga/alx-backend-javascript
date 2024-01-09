import cleanSet from "./8-clean_set";

describe("cleanSet", () => {
  test("cleans set by removing prefix and concatenating with hyphen", () => {
    const set = new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]);
    const startString = "bon";

    const result = cleanSet(set, startString);

    // Assert that the result is a string
    expect(typeof result).toBe("string");

    // Assert that the result contains the cleaned values concatenated with hyphen
    expect(result).toBe("jovi-aparte-appetit");
  });

  test("returns an empty string when startString is empty", () => {
    const set = new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]);
    const startString = "";

    const result = cleanSet(set, startString);

    // Assert that the result is an empty string
    expect(result).toBe("");
  });

  test("returns an empty string when startString is not provided", () => {
    const set = new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]);

    const result = cleanSet(set);

    // Assert that the result is an empty string
    expect(result).toBe("");
  });
});
