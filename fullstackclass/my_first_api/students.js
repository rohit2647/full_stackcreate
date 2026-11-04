const express = require ('express');
const app = express();

app.use(express.json());

let students =[

    { id :1, name: "Rohit" , marks: 82.5 },

    { id :2, name: "Vedansh" , marks: 85 },

    { id :3, name: "arko" , marks: 95.5 },

];
app.listen(3001,()=>{
    console.log('Server running on port 3001');
});

// GET all students 
app.get('/students',(req,res)=>{
    res.json(students);
});

// GET one student by ID
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    res.json(student);
});

// POST - create new student
app.post('/students', (req, res) => {
    const { name, marks } = req.body;

    const newStudent = {
        id: students.length + 1,
        name: name,
        marks: marks
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// PUT - update entire student
app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, marks } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    student.name = name;
    student.marks = marks;

    res.json(student);
});

// PATCH - update only specific fields
app.patch('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    const { name, marks } = req.body;

    if (name !== undefined) {
        student.name = name;
    }

    if (marks !== undefined) {
        student.marks = marks;
    }

    res.json(student);
});

// DELETE - remove a student
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.json({
        message: 'Student deleted',
        deleted: deletedStudent
    });
});