import getStudentIdsSum from "../3-get_ids_sum";

describe("getStudentIdsSum function", () => {
  test("returns the sum of student IDs", () => {
    const students = [
      { id: 1, firstName: "Guillaume", location: "San Francisco" },
      { id: 2, firstName: "James", location: "Columbia" },
      { id: 5, firstName: "Serena", location: "San Francisco" },
    ];

    const result = getStudentIdsSum(students);
    const expected = 1 + 2 + 5;

    expect(result).toEqual(expected);
  });

  test("returns 0 for an empty student list", () => {
    const result = getStudentIdsSum([]);
    const expected = 0;

    expect(result).toEqual(expected);
  });
});
