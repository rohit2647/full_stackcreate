// const express = require("express");
// const users = require("./MOCK_DATA.json");

// const app = express();

// const port = 8000;

// app.get("/api/users", (req, res) => {
//     return res.json(users);
// });
// app.get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id ===id);
//     return res.json(user);
// });

const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

const port = 8000;

// Middleware to read JSON body
app.use(express.json());


// GET - Get all users
app.get("/api/users", (req, res) => {
    return res.json(users);
});


// GET - Get one user
app.get("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    return res.json(user);
});


// POST - Create new user
app.post("/api/users", (req, res) => {

    const body = req.body;

    users.push({
        ...body,
        id: users.length + 1
    });

    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users),
        (err) => {

            if (err) {
                return res.status(500).json({
                    status: "error"
                });
            }

            return res.json({
                status: "success",
                id: users.length
            });
        }
    );
});


// PUT - Replace complete user
app.put("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "error",
            message: "User not found"
        });
    }

    users[index] = {
        ...req.body,
        id: id
    };

    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users),
        (err) => {

            if (err) {
                return res.status(500).json({
                    status: "error"
                });
            }

            return res.json({
                status: "success",
                user: users[index]
            });
        }
    );
});


// PATCH - Update part of a user
app.patch("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "error",
            message: "User not found"
        });
    }

    users[index] = {
        ...users[index],
        ...req.body
    };

    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users),
        (err) => {

            if (err) {
                return res.status(500).json({
                    status: "error"
                });
            }

            return res.json({
                status: "success",
                user: users[index]
            });
        }
    );
});


// DELETE - Delete user
app.delete("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "error",
            message: "User not found"
        });
    }

    users.splice(index, 1);

    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users),
        (err) => {

            if (err) {
                return res.status(500).json({
                    status: "error"
                });
            }

            return res.json({
                status: "success",
                message: "User deleted"
            });
        }
    );
});


// Start server
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});