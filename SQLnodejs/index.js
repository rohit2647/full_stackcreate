//  here we just import express js and handler
const express= require("express");
const app = express();
const port =3001;
// import the mysql package
const mysql = require("mysql2/promise");
// creating the connection of the mysql

const pool = mysql.createPool({
    host: 'localhost',
    user :'root',
    password:'rohit2647',
    database:'my_first_db'
});
console.log("MySQL Connected Successfully");

app.use(express.json);

app.get("/books", async (req, res) => {
    try {
        console.log("GET /books request received");

        const [rows] = await pool.query("SELECT * FROM books");

        console.log("MySQL returned:", rows.length, "rows");

        return res.json(rows);

    } catch (error) {
        console.log("MySQL ERROR:", error);

        return res.status(500).json({
            error: error.message
        });
    }
});

app.listen(port,()=>console.log(`Hey server is running on port ${port}`));