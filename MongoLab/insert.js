const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function main() {

    // 1. Connect to MongoDB
    await client.connect();

    console.log("Connected to MongoDB");

    // 2. Select database and collection
    const students = client
        .db("school")
        .collection("students");

    // 3. Start clean
    await students.deleteMany({});

    console.log("Cleared the collection.");
    console.log("");

    // 4. Insert one document
    const oneStudent = await students.insertOne({
        rollNo: 101,
        name: "Rohit",
        age: 20,
        email: "rohit@gmail.com",
        course: "Computer Science",
        marks: 89,
        year: 2
    });

    console.log("Inserted one student:");
    console.log(oneStudent.insertedId);
    console.log("");

    // 5. Insert multiple documents
    const manyStudents = await students.insertMany([
        {
            rollNo: 102,
            name: "Aman",
            age: 21,
            email: "aman@gmail.com",
            course: "Computer Science",
            marks: 85,
            year: 2
        },
        {
            rollNo: 103,
            name: "Rahul",
            age: 20,
            email: "rahul@gmail.com",
            course: "Information Technology",
            marks: 78,
            year: 3
        },
        {
            rollNo: 104,
            name: "Arko",
            age: 21,
            email: "arko@gmail.com",
            course: "CSE",
            marks: 91,
            year: 2
        }
    ]);

    // 6. Insert a document with completely different fields
    await students.insertOne({
        name: "Odd One",
        rollNo: 345,
        favouriteColor: "blue",
        marks: "not a number"
    });

    console.log("Inserted a document with completely different fields.");
    console.log("");

    console.log("Inserted multiple students:");
    console.log(manyStudents.insertedIds);
    console.log("");

    // 7. Find all students
    const allStudents = await students.find({}).toArray();

    console.log("All students:");
    console.log(allStudents);
    console.log("");

    // 8. Count documents
    const count = await students.countDocuments();

    console.log("Total students:", count);
}

// Run the program
main()
    .catch(function (err) {
        console.log("Error:", err);
    })
    .finally(async function () {
        await client.close();
        console.log("");
        console.log("Connection closed.");
    });
    