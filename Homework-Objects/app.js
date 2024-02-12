console.log("Its working");

/*
Task 1
Create 3 classes: Academy, Student and Subject.

Their structure should look like this:

Task 2
Make the functions startAcademy and startSubject dynamic.

startAcademy - When the student calls startAcademy, the student should also be added to the Academy property students ( The academy that he is starting )
startSubject - When the student calls startSubject the student should also be added to the Subject property students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to completedSubjects and then add the new Subject
Tips
Not settable means that when calling the constructor function this property should not be added to the argument list.
Read carefully through the text before attempting any of the tasks required, take it slow and go one step at a time ( console.log like crazy through the trial and error )
At many places through the tasks you will need to use the this keyword to assign properties ex this.academy = Academy to assign an academy to the subject when creating a new one
*/

/*
Academy
name - string
students - array of Students
subjects - array of Subjects
start - Date when it starts
end - Date when it ends
numberOfClasses - number of subjects multipled by 10, not settable*
printStudents - method that prints all students in console
printSubjects - method that prints all subjects in console
*/


class Academy {
    constructor(nameOfAcademy, nameOfStudents, academySubjects, academyStart, academyEnd) {
        this.nameOfAcademy = nameOfAcademy;
        this.nameOfStudents = nameOfStudents;
        this.academySubjects = academySubjects;
        this.academyStart = academyStart;
        this.academyEnd = academyEnd;
        this.numberOfClasses = this.academySubjects.length * 10;

    }
    printStudents() {
        this.students.forEach(student => {
            console.log(student)
            
        });
    }
    printSubjects() {
        this.subjects.forEach((subject) => {
    console.log(subject);
        })

    } 
}
const academy = new Academy("SEDC",[], ["html, javaScript, NodeJs"], 
new Date(2024, 12, 2),
new Date(2024, 25, 3)
);
console.log(academy);

/*
Subject
title - string
numberOfClasses - default 10, not settable*
isElective - boolean
academy - Academy object
students - array of Students
overrideClasses - method that accepts a number and rewrites the numberOfClasses property with that number. The number can't be smaller than 3.
*/


class Subject {
    constructor(title, academy, ) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = this.isElective;
        this.academy = academy;
        this.students = [];
    }
    overrideClasses(number) {
        if (number >= 3) {
            this.numberOfClasses = number;
        
        }
        console.log(`Number of classes can't be smaller than 3`)
    }
}
const subject = new Subject("advanced JS, true, academy");
console.log(subject);

/*
Student
firstName - string
lastName - string
age - number
completedSubjects - emptyArray as default, not settable*
academy - null as default, not settable*
currentSubject - null as default, not settable*
startAcademy - method that accepts Academy object that it sets to the Academy property of the student
startSubject - method that accepts Subject object and adds it to the currentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property
*/

class Student {
    constructor(firstName, lastName, age, ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }

    startAcademy(academy) {
        this.academy = academy;
        academy.students.push(this);
    }

    startSubject(subject) {
        if(this.academy === null || this.academy.subjects.includes(subject)){
            console.log("Error: This subject does not exist in the academy.");
        }
        if(this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
        }
        this.currentSubject = subject;
        this.currentSubject.students.push(this);
    }  
}
 

const student = new Student("Deniza", "Hajredinovikj", 32 );
student.startAcademy(academy);
student.startSubject(subject);

console.log(student);

     

