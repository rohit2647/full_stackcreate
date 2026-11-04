create DATABASE  if not exists learnjoin;

use learnjoin;

CREATE TABLE student (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);
INSERT INTO student (id, name)
VALUES
(101, "adam"),
(102, "bob"),
(103, "casey");

CREATE TABLE course (
    id INT PRIMARY KEY,
    course VARCHAR(50)
);
INSERT INTO course (id, course)
VALUES
(102, "english"),
(105, "math"),
(103, "science"),
(107, "computer science");

select * from student;
select * from course;

-- for the inner join
select *
from student
INNER JOIN course
ON student.id = course.id;

--  using alis as table_name both are same but we use alis name instead of original
 select *
from student as s
INNER JOIN course as c
ON s.id = c.id;

-- for the left join means order matters of for which we write or making left join

select * 
from student
left join course
on student.id = course.id;


-- for the right join means order matters of for which we write or making rightjoin

select * 
from student
right join course
on student.id = course.id;

--  for the full their is nothing exist in the mysql so what we do we take the left join first and take the union with the right join

select * 
from student
left join course
on student.id = course.id

UNION

select * 
from student
right join course
on student.id = course.id;

--  for the left exclusive join so this means actually we want that data only in left and also exclude the common in another

select * 
from student
left join course
on student.id = course.id
WHERE course.id is null;

--  for the right exclusive join so this means actually we want that data only in right and also exclude the common in another

select * 
from student
right join course
on student.id = course.id
where student.id is NULL;

--  for full exclusive join 

select * 
from student
left join course
on student.id = course.id
WHERE course.id is null
UNION
select * 
from student
right join course
on student.id = course.id
where student.id is NULL;

--  for the self join 

CREATE TABLE employee (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT
);
INSERT INTO employee (id, name, manager_id)
VALUES
(101, "adam", 103),
(102, "bob", 104),
(103, "casey", NULL),
(104, "donald", 103);

--  self join 

select *
from employee as e
join employee as f
on e.id = f.manager_id;