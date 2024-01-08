import getStudentsByLocation from "../2-get_students_by_loc";

describe("getStudentsByLocation function", () => {
  const students = [
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 2, firstName: "James", location: "Columbia" },
    { id: 5, firstName: "Serena", location: "San Francisco" },
  ];

  test("returns students in the specified location", () => {
    const result = getStudentsByLocation(students, "San Francisco");
    const expected = [
      { id: 1, firstName: "Guillaume", location: "San Francisco" },
      { id: 5, firstName: "Serena", location: "San Francisco" },
    ];

    expect(result).toEqual(expected);
  });

  test("returns students in either of the specified cities", () => {
    const resultSanFrancisco = getStudentsByLocation(students, "San Francisco");
    const resultColumbia = getStudentsByLocation(students, "Columbia");

    const expectedSanFrancisco = [
      { id: 1, firstName: "Guillaume", location: "San Francisco" },
      { id: 5, firstName: "Serena", location: "San Francisco" },
    ];

    const expectedColumbia = [
      { id: 2, firstName: "James", location: "Columbia" },
    ];

    expect(resultSanFrancisco).toEqual(expectedSanFrancisco);
    expect(resultColumbia).toEqual(expectedColumbia);
  });

  test("returns an empty array for non-matching location", () => {
    const result = getStudentsByLocation(students, "New York");
    const expected = [];

    expect(result).toEqual(expected);
  });

  test("returns an empty array for undefined location", () => {
    const result = getStudentsByLocation(students);
    const expected = [];

    expect(result).toEqual(expected);
  });
});
