// const http = require("http");// built in package in nodejs
// // const myserver = http.createServer((req,res)=>{
// //     // console.log("new request is arrived ");
// //     console.log(req);
// //     res.end("hello from server again");
// // });// this is used for creation of server webserver and what i have pass inside this webserver handler which handles the request 

// // myserver.listen(8000,()=>console.log("server started!"));

/*// Import the built-in HTTP module of Node.js
// We use this module to create a web server
const http = require("http");

// Import the File System (fs) module
// We use this module to create, read, write and modify files
const fs = require("fs");


// Create an HTTP server
// req = request coming from the browser
// res = response that we send back to the browser
const myServer = http.createServer((req, res) => {

    // Date.now() gives the current time in milliseconds
    // Example:
    // 1759389200000
    //
    // ${Date.now()} inserts that value into the string
    // \n means "go to the next line"
    const log = `${Date.now()}: New Request Received\n`;


    // appendFile() adds the given text to a file
    //
    // "log.txt" = file where we want to store the log
    // log = text that we want to add
    // (err, data) => {} = callback function that runs after the operation
    //
    // If log.txt doesn't exist, Node.js will create it.
    fs.appendFile("log.txt", log, (err, data) => {

        // Send a response back to the browser
        // The browser will display:
        //
        // Hello From Server Again
        res.end("Hello From Server Again");

    });

});


// Start the server on port 8000
// After starting successfully, the callback runs
myServer.listen(8000, () => {

    // This message appears in the TERMINAL
    console.log("Server started on port 8000");

});*/

/*const http= require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    const log = `${Date.now()} : new request arrived\n`;
    fs.appendFile("./mylog.txt",log,(err)=>{
        if (err){
            console.log("err");
        }
    });
    res.end("server is started !");
});
server.listen(3000,()=>{
    console.log("server started on port 3000");
}); */

/*
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {

    // Ignore browser's favicon request
    if (req.url === "/favicon.ico") {
        return res.end();
    }

    // Create log message
    const log = `${Date.now()}: ${req.method}:${req.url} New Req Received\n`;

    // Parse URL to get pathname and query parameters
    const myUrl = url.parse(req.url, true);

    console.log(myUrl);

    // Save request in log.txt
    fs.appendFile("log.txt", log, (err) => {

        if (err) {
            console.log(err);
            return;
        }

        // Handle different URLs
        switch (myUrl.pathname) {

            case "/":
                res.end("Home Page");
                break;

            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;

            case "/search":
                const search = myUrl.query.search_query;
                res.end(`Here are your results for ${search}`);
                break;

            default:
                res.end("404 Not Found");
        }
    });
});

myServer.listen(3000, () => {
    console.log("Server started on port 3000");
});*/

/*
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {

    // Ignore favicon request
    if (req.url === "/favicon.ico") {
        return res.end();
    }

    // Create log
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;

    // Parse URL
    const myUrl = url.parse(req.url, true);

    // Save request in log.txt
    fs.appendFile("log.txt", log, (err) => {

        if (err) {
            console.log(err);
            return;
        }

        // Handle different routes
        switch (myUrl.pathname) {

            case "/":
                if (req.method === "GET") {
                    res.end("Home Page");
                }
                break;

            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;

            case "/search":
                const search = myUrl.query.search_query;
                res.end(`Here are your results for ${search}`);
                break;

            case "/signup":

                if (req.method === "GET") {
                    res.end("This is a Signup Form");
                }

                else if (req.method === "POST") {
                    // DB Query
                    res.end("Success");
                }

                break;

            default:
                res.end("404 Not Found");
        }
    });
});

// Start server
myServer.listen(3000, () => {
    console.log("Server started on port 3000");
}); */