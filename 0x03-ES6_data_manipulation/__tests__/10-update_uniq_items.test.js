import updateUniqueItems from "./100-weak";
import { queryAPI, weakMap } from "./100-weak";

describe("updateUniqueItems", () => {
  test("updates unique items in the map to 100", () => {
    // Arrange
    const map = new Map([
      ["key1", 1],
      ["key2", 2],
      ["key3", 1],
    ]);

    // Act
    updateUniqueItems(map);

    // Assert
    expect(map.get("key1")).toBe(100);
    expect(map.get("key2")).toBe(2);
    expect(map.get("key3")).toBe(100);
  });

  test("throws an error if not provided a Map", () => {
    // Arrange
    const notAMap = {};

    // Act and Assert
    expect(() => updateUniqueItems(notAMap)).toThrowError("Cannot process");
  });
});

describe("queryAPI and weakMap", () => {
  test("queryAPI updates weakMap with endpoint data", () => {
    // Arrange
    const endpoint = { protocol: "http", name: "getUsers" };

    // Act
    queryAPI(endpoint);

    // Assert
    expect(weakMap.get(endpoint)).toBeDefined();
  });

  test("multiple calls to queryAPI don't create new entries in weakMap", () => {
    // Arrange
    const endpoint = { protocol: "http", name: "getUsers" };

    // Act
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);

    // Assert
    expect(weakMap.size).toBe(1);
  });
});
