CREATE DATABASE  IF NOT EXISTS colege;

use colege;

create table dept (
    id int primary key,
    name varchar(100)
);

INSERT INTO dept
VALUES
(101, "english"),
(102, "IT");

UPDATE dept 
SET id = 105
WHERE id = 103;

select *from dept;

create table teacher(
    id int primary key,
    name varchar(50),
    dept_id int ,
    Foreign Key (dept_id) REFERENCES dept(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

INSERT INTO teacher
VALUES
(101, "Adam", 101), 
(102, "Eve",102)

select*from teacher;

CREATE TABLE student (
    rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);
INSERT INTO student
(rollno, name, marks, grade, city)
VALUES
(101, "anil", 78, "C", "Pune"),
(102, "bhumika", 93, "A", "Mumbai"),
(103, "chetan", 85, "B", "Mumbai"),
(104, "dhruv", 96, "A", "Delhi"),
(105, "emanuel", 12, "F", "Delhi"),
(106, "farah", 82, "B", "Delhi");

ALTER Table student
ADD COLUMN age INT NOT NULL DEFAULT 19;

ALTER Table student
DROP COLUMN age ;

ALTER table student
change fullname name VARCHAR(100);

DELETE FROM student
where marks < 80;

alter table student
drop column grade;

SELECT * FROM student;
