import getListStudentIds from "../1-get_list_student_ids";

describe("getListStudentIds function", () => {
  test("returns an array of student IDs", () => {
    const input = [
      { id: 1, firstName: "Guillaume", location: "San Francisco" },
      { id: 2, firstName: "James", location: "Columbia" },
      { id: 5, firstName: "Serena", location: "San Francisco" },
    ];

    const result = getListStudentIds(input);
    const expected = [1, 2, 5];

    expect(result).toEqual(expected);
  });

  test("returns an empty array for non-array input", () => {
    const result = getListStudentIds("not an array");
    const expected = [];

    expect(result).toEqual(expected);
  });
});
