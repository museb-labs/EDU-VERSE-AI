// dashboard.js

const dashboard = {
    students: 1250,
    teachers: 85,
    courses: 42,
    assignments: 318
};

function showDashboard() {
    console.log("===== EduVerse AI Dashboard =====");
    console.log("Students:", dashboard.students);
    console.log("Teachers:", dashboard.teachers);
    console.log("Courses:", dashboard.courses);
    console.log("Assignments:", dashboard.assignments);
}

showDashboard();
