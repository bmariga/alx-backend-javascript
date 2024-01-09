import updateStudentGradeByCity from "../4-update_grade_by_city";
import getListStudents from "../0-get_list_students";

describe("updateStudentGradeByCity", () => {
  test("updates grades for students in a specific city based on new grades", () => {
    const students = getListStudents();
    const city = "San Francisco";
    const newGrades = [
      { studentId: 5, grade: 97 },
      { studentId: 1, grade: 86 },
    ];

    const result = updateStudentGradeByCity(students, city, newGrades);

    expect(result).toEqual([
      {
        id: 1,
        firstName: "Guillaume",
        location: "San Francisco",
        grade: 86,
      },
      {
        id: 5,
        firstName: "Serena",
        location: "San Francisco",
        grade: 97,
      },
    ]);
  });

  test("handles the case when a student doesn't have a grade in newGrades", () => {
    const students = getListStudents();
    const city = "San Francisco";
    const newGrades = [{ studentId: 5, grade: 97 }];

    const result = updateStudentGradeByCity(students, city, newGrades);

    expect(result).toEqual([
      {
        id: 1,
        firstName: "Guillaume",
        location: "San Francisco",
        grade: "N/A",
      },
      {
        id: 5,
        firstName: "Serena",
        location: "San Francisco",
        grade: 97,
      },
    ]);
  });
});
