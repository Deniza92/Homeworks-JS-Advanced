console.log("Its working");


/*
There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
*/


const STUDENTS_URL =  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

function students() {
    fetch(STUDENTS_URL)
    .then(function (res) {
return res.json();
    })
    .then(function(data) {
console.log(data);

// All students with an average grade higher than 3
const filteredStudents = data.filter(
(student) => student.averageGrade > 3
);
console.log(filteredStudents);

//All female student names with an average grade of 5
const filteredFemaleStudents = data.filter(
    (student) => student.gender === "Female" && student.averageGrade >= 5
);
console.log(filteredFemaleStudents);

//All male student full names who live in Skopje and are over 18 years old
const filteredMaleStudents = data.filter (
    (student) => student.gender === "Male" && student.city === "Skopje" && student.age > 18)
    .map((student) => `${student.firstName} ${student.lastName}`
    );
    console.log(filteredMaleStudents);

//The average grades of all female students over the age of 24
const filteredFemaleGrades = data.filter(
    ((student) => student.age > 24 && student.gender === "Female"))
    .map((student) => `${student.averageGrade}`
    );

  console.log(filteredFemaleGrades);

//All male students with a name starting with B and average grade over 2
const filteredMaleStudentsWithB = data.filter(
    (student) => student.gender === "Male" && student.firstName.includes("B") && student.averageGrade > 2
);
console.log(filteredMaleStudentsWithB);
    })
}
students();
