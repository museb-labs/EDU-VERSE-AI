// studentManager.js

let students = [
    {
        name: "Ahmed",
        age: 22,
        course: "MERN Stack",
        marks: 82
    },
    {
        name: "Rahul",
        age: 21,
        course: "Python",
        marks: 76
    },
    {
        name: "Arjun",
        age: 23,
        course: "Java",
        marks: 91
    }
];

// Show all students
function showStudents() {
    console.log("\n===== STUDENT LIST =====");

    students.forEach((student, index) => {
        console.log(
            `${index + 1}. ${student.name} | ${student.course} | Marks: ${student.marks}`
        );
    });
}

// Add a student
function addStudent(name, age, course, marks) {
    const student = {
        name: name,
        age: age,
        course: course,
        marks: marks
    };

    students.push(student);

    console.log(`\n${name} added successfully.`);
}

// Find students who scored above 80
function topStudents() {
    const result = students.filter(student => student.marks >= 80);

    console.log("\n===== TOP STUDENTS =====");

    result.forEach(student => {
        console.log(`${student.name} - ${student.marks} marks`);
    });
}

// Calculate average marks
function calculateAverage() {
    let total = 0;

    students.forEach(student => {
        total += student.marks;
    });

    const average = total / students.length;

    console.log(`\nAverage Marks: ${average.toFixed(2)}`);
}

// Search for a student
function searchStudent(name) {
    const student = students.find(
        student => student.name.toLowerCase() === name.toLowerCase()
    );

    if (student) {
        console.log("\nStudent Found:");
        console.log(student);
    } else {
        console.log("\nStudent not found.");
    }
}

// Add student
addStudent("Sameer", 22, "Full Stack Development", 88);

// Display students
showStudents();

// Show top students
topStudents();

// Calculate average
calculateAverage();

// Search student
searchStudent("Ahmed");