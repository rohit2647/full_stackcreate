const express = require('express');
const mysql = require('mysql2');

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(express.json());


// ==========================================
// MYSQL CONNECTION
// ==========================================

const pool = mysql.createPool({
    user: 'root',
    password: 'rohit2647',
    database: 'db',
    socketPath: '/tmp/mysql.sock'
}).promise();


// ==========================================
// TEST DATABASE CONNECTION
// ==========================================

pool.getConnection()
    .then(connection => {
        console.log('Database connected successfully!');
        connection.release();
    })
    .catch(error => {
        console.log('Database connection failed:', error);
    });


// ==========================================
// 1. GET ALL BOOKS
// ==========================================

app.get('/books', async (req, res) => {

    try {

        const [rows] = await pool.query(
            'SELECT * FROM books'
        );

        res.json(rows);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Database query failed'
        });

    }

});


// ==========================================
// 2. GET BOOK BY ID
// ==========================================

app.get('/books/:id', async (req, res) => {

    try {

        const id = parseInt(req.params.id);

        const [rows] = await pool.query(
            'SELECT * FROM books WHERE book_id = ?',
            [id]
        );

        if (rows.length === 0) {

            return res.status(404).json({
                message: 'Book not found'
            });

        }

        res.json(rows[0]);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Database query failed'
        });

    }

});


// ==========================================
// 3. POST - ADD NEW BOOK
// ==========================================

app.post('/books', async (req, res) => {

    try {

        const {
            title,
            author,
            genre,
            price,
            published_year,
            quantity
        } = req.body;

        const [result] = await pool.query(

            `INSERT INTO books
            (title, author, genre, price, published_year, quantity)
            VALUES (?, ?, ?, ?, ?, ?)`,

            [
                title,
                author,
                genre,
                price,
                published_year,
                quantity
            ]

        );

        res.status(201).json({

            message: 'Book added successfully',

            book_id: result.insertId

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Database insert failed'
        });

    }

});


// ==========================================
// 4. PUT - UPDATE BOOK
// ==========================================

app.put('/books/:id', async (req, res) => {

    try {

        const id = parseInt(req.params.id);

        const {
            title,
            author,
            genre,
            price,
            published_year,
            quantity
        } = req.body;

        const [result] = await pool.query(

            `UPDATE books
             SET title = ?,
                 author = ?,
                 genre = ?,
                 price = ?,
                 published_year = ?,
                 quantity = ?
             WHERE book_id = ?`,

            [
                title,
                author,
                genre,
                price,
                published_year,
                quantity,
                id
            ]

        );

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: 'Book not found'
            });

        }

        res.json({
            message: 'Book updated successfully'
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Database update failed'
        });

    }

});


// ==========================================
// 5. DELETE - DELETE BOOK
// ==========================================

app.delete('/books/:id', async (req, res) => {

    try {

        const id = parseInt(req.params.id);

        const [result] = await pool.query(
            'DELETE FROM books WHERE book_id = ?',
            [id]
        );

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: 'Book not found'
            });

        }

        res.json({
            message: 'Book deleted successfully'
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: 'Database delete failed'
        });

    }

});


// ==========================================
// START SERVER
// ==========================================

app.listen(3000, () => {

    console.log('Server running on port 3000');

});