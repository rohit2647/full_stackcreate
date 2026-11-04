const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017");


// Helper function to keep output readable
function show(label, docs) {

    console.log("");
    console.log(label);

    if (docs.length === 0) {
        console.log("  (nothing matched)");
        return;
    }

    docs.forEach(function (d) {

        const name = (d.name || "?").padEnd(15);
        const course = (d.course || "-").padEnd(20);

        console.log(" ", name, course, d.marks);
    });
}


async function main() {

    // Connect to MongoDB
    await client.connect();

    // Select database and collection
    const students = client
        .db("school")
        .collection("students");


    // ==================================================
    // 1. FIND ALL DOCUMENTS
    // ==================================================

    const all = await students
        .find({})
        .toArray();

    show("ALL DOCUMENTS - find({})", all);


    // ==================================================
    // 2. MARKS ABOVE 75
    // ==================================================

    const marksAbove75 = await students
        .find({
            marks: {
                $gt: 75
            }
        })
        .toArray();

    show("MARKS ABOVE 75", marksAbove75);


    // ==================================================
    // 3. MARKS BETWEEN 60 AND 85
    // ==================================================

    const marks60to85 = await students
        .find({
            marks: {
                $gte: 60,
                $lte: 85
            }
        })
        .toArray();

    show("MARKS 60 - 85", marks60to85);


    // ==================================================
    // 4. YEAR 1 OR YEAR 3
    // ==================================================

    const year1or3 = await students
        .find({
            $or: [
                { year: 1 },
                { year: 3 }
            ]
        })
        .toArray();

    show("YEAR 1 OR 3", year1or3);


    // ==================================================
    // 5. COMPUTER SCIENCE AND MARKS ABOVE 70
    // ==================================================

    const csAbove70 = await students
        .find({
            course: "Computer Science",
            marks: {
                $gt: 70
            }
        })
        .toArray();

    show("COMPUTER SCIENCE AND MARKS ABOVE 70", csAbove70);


    // ==================================================
    // 6. MARKS ABOVE 85 OR YEAR 3
    // ==================================================

    const above85orYear3 = await students
        .find({
            $or: [
                { marks: { $gt: 85 } },
                { year: 3 }
            ]
        })
        .toArray();

    show("MARKS ABOVE 85 OR YEAR 3", above85orYear3);


    // ==================================================
    // 7. FIND ONE STUDENT
    // ==================================================

    const one = await students.findOne({
        rollNo: 2131002
    });

    console.log("");
    console.log("FIND ONE - rollNo 2131002:");

    if (one) {
        console.log(one);
    } else {
        console.log("Student not found");
    }


    // ==================================================
    // 8. FIND ONE - NON-EXISTING STUDENT
    // ==================================================

    const missing = await students.findOne({
        rollNo: 9999999
    });

    console.log("");
    console.log("FIND ONE - non-existing rollNo:");

    if (missing) {
        console.log(missing);
    } else {
        console.log("null - student not found");
    }


    // ==================================================
    // 9. SORT - MARKS HIGH TO LOW
    // ==================================================

    const sortedDescending = await students
        .find({})
        .sort({
            marks: -1
        })
        .toArray();

    show("SORT - MARKS HIGH TO LOW", sortedDescending);


    // ==================================================
    // 10. SORT - MARKS LOW TO HIGH
    // ==================================================

    const sortedAscending = await students
        .find({})
        .sort({
            marks: 1
        })
        .toArray();

    show("SORT - MARKS LOW TO HIGH", sortedAscending);


    // ==================================================
    // 11. TOP 3 STUDENTS
    // ==================================================

    const top3 = await students
        .find({})
        .sort({
            marks: -1
        })
        .limit(3)
        .toArray();

    show("TOP 3 STUDENTS", top3);


    // ==================================================
    // 12. PROJECTION
    // ONLY NAME AND MARKS
    // ==================================================

    const slim = await students
        .find(
            {},
            {
                projection: {
                    name: 1,
                    marks: 1,
                    _id: 0
                }
            }
        )
        .limit(3)
        .toArray();

    console.log("");
    console.log("PROJECTION - ONLY NAME AND MARKS:");
    console.log(slim);


    // ==================================================
    // 13. COUNTING
    // ==================================================

    console.log("");
    console.log("COUNTING");

    // Count all students
    const totalStudents = await students.countDocuments();

    console.log(
        "Total students:",
        totalStudents
    );


    // Count Computer Science students
    const cseStudents = await students.countDocuments({
        course: "Computer Science"
    });

    console.log(
        "CSE students:",
        cseStudents
    );


    // ==================================================
    // 14. DISTINCT COURSES
    // ==================================================

    const courses = await students.distinct("course");

    console.log("");
    console.log("DISTINCT COURSES:");
    console.log(courses);


    // ==================================================
    // COMPARISON OPERATORS
    // ==================================================

    console.log("");
    console.log("$gt  = greater than");
    console.log("$gte = greater than or equal");
    console.log("$lt  = less than");
    console.log("$lte = less than or equal");
    console.log("$ne  = not equal");
}


// ======================================================
// RUN PROGRAM
// ======================================================

main()

    .catch(function (err) {

        console.log("");
        console.log("Error:", err);

    })

    .finally(async function () {

        await client.close();

        console.log("");
        console.log("Connection closed.");

    });