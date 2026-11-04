const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8000;


// =====================================================
// 1. MIDDLEWARE
// =====================================================

// Allows Express to read JSON data from req.body
app.use(express.json());


// =====================================================
// 2. CONNECT TO MONGODB
// =====================================================

mongoose
    .connect("mongodb://127.0.0.1:27017/employee")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB error:", err);
    });


// =====================================================
// 3. USER SCHEMA
// =====================================================

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        jobTitle: {
            type: String,
            required: true,
        },

        gender: {
            type: String,
            required: true,
        },
    },
    {
        // Automatically creates createdAt and updatedAt
        timestamps: true,
    }
);


// =====================================================
// 4. USER MODEL
// =====================================================

const User = mongoose.model("User", userSchema);


// =====================================================
// 5. POST - CREATE NEW USER
// =====================================================

app.post("/api/users", async (req, res) => {

    try {

        const body = req.body;

        // Check required fields
        if (
            !body ||
            !body.firstName ||
            !body.lastName ||
            !body.email ||
            !body.jobTitle ||
            !body.gender
        ) {
            return res.status(400).json({
                error: "All fields are required",
            });
        }

        // Create user
        const user = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            jobTitle: body.jobTitle,
            gender: body.gender,
        });

        console.log(user);

        return res.status(201).json({
            status: "success",
            user: user,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});


// =====================================================
// 6. GET / PATCH / DELETE USER BY ID
// =====================================================

app.all("/api/users/:id", async (req, res) => {

    const userId = req.params.id;

    try {

        let user;

        // -------------------------------------------------
        // GET USER
        // -------------------------------------------------

        if (req.method === "GET") {

            user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({
                    error: "User not found",
                });
            }

            return res.json(user);
        }


        // -------------------------------------------------
        // PATCH USER
        // -------------------------------------------------

        if (req.method === "PATCH") {

            user = await User.findByIdAndUpdate(
                userId,
                req.body,
                {
                    new: true,
                    runValidators: true,
                }
            );

            if (!user) {
                return res.status(404).json({
                    error: "User not found",
                });
            }

            return res.json(user);
        }


        // -------------------------------------------------
        // DELETE USER
        // -------------------------------------------------

        if (req.method === "DELETE") {

            user = await User.findByIdAndDelete(userId);

            if (!user) {
                return res.status(404).json({
                    error: "User not found",
                });
            }

            return res.json({
                message: "User deleted successfully",
            });
        }


        // -------------------------------------------------
        // METHOD NOT ALLOWED
        // -------------------------------------------------

        return res.status(405).json({
            error: "Method Not Allowed",
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});


// =====================================================
// 7. START SERVER
// =====================================================

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});