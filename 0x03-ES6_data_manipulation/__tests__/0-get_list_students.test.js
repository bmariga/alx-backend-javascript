import getListStudents from "../0-get_list_students";

describe("getListStudents function", () => {
  test("returns an array of students", () => {
    const result = getListStudents();

    const expected = [
      { id: 1, firstName: "Guillaume", location: "San Francisco" },
      { id: 2, firstName: "James", location: "Columbia" },
      { id: 5, firstName: "Serena", location: "San Francisco" },
    ];

    expect(result).toEqual(expected);
  });
});
