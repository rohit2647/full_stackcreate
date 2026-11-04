const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function fetchData() {
    // Connect to MongoDB
    await client.connect();

    console.log("Connected to MongoDB");

    // Select database
    const db = client.db("school");

    console.log("Using database:", db.databaseName);

    // Select collection
    const students = db.collection("students");

    console.log("Using collection: students");

    // Count documents
    const count = await students.countDocuments();

    console.log("Documents in students:", count);

    // Get list of databases
    const list = await client
        .db()
        .admin()
        .listDatabases();

    console.log("");
    console.log("Databases on this server:");

    list.databases.forEach(function (d) {
        console.log(" ", d.name);
    });
}

fetchData()
    .catch(function (err) {
        console.log("");
        console.log("Could not connect.");
        console.log(err.message);
    })
    .finally(async function () {
        await client.close();

        console.log("");
        console.log("Connection closed");
    });