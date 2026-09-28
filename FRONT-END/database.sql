CREATE DATABASE eduverse;

USE eduverse;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    course VARCHAR(100),
    age INT
);

INSERT INTO students
(name, email, course, age)
VALUES
('Ahmed', 'ahmed@gmail.com', 'Information Technology', 21),
('Ali', 'ali@gmail.com', 'Computer Science', 22),
('Sara', 'sara@gmail.com', 'Data Science', 20);

SELECT * FROM students;