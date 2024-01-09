import createInt8TypedArray from "./5-typed_arrays";

describe("createInt8TypedArray", () => {
  test("creates Int8Array with specified value at the given position", () => {
    const length = 10;
    const position = 2;
    const value = 89;

    const result = createInt8TypedArray(length, position, value);

    // Assert that the result is an instance of DataView
    expect(result).toBeInstanceOf(DataView);

    // Assert that the Int8Array within the DataView has the specified value at the specified position
    const dataArray = new Int8Array(result.buffer);
    expect(dataArray[position]).toBe(value);
  });

  test("throws an error if position is outside the range", () => {
    const length = 5;
    const position = 8;
    const value = 42;

    // Assert that calling the function with an invalid position throws an error
    expect(() => createInt8TypedArray(length, position, value)).toThrowError(
      "Position outside range"
    );
  });
});
