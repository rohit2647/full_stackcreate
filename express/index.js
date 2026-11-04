const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", (req, res) => {

    const log = `${req.url} : ${req.method} : new request\n`;

    fs.appendFile("./expresslog.txt", log, (err) => {
        if (err) console.log(err);
    });

    res.send("Hello from homepage :)");
});

app.get("/about", (req, res) => {

    const log = `${req.url} : ${req.method} : new request\n`;

    fs.appendFile("./expresslog.txt", log, (err) => {
        if (err) console.log(err);
    });

    res.send("Hello from about :)");
});

app.listen(3000, () => {
    console.log("Server started on port 3000 :)");
});