const { time } = require("console");
const fs = require("fs");
const { isIPv4 } = require("net");
// // sync .. file 
// fs.writeFileSync("./text.txt","hey i have created a file using node for the first time");

// //  async .. but also a callback funtion that return error if occured
// fs.writeFileSync("./text2.txt","hey i have created a file using node for the second  time",(err)=>{});

//  for read file we pass the file path and encoding 

// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

//  using async for that we only have to pass a callback funtion so if not work it print or return something

// fs.readFile("./contacts.txt", "utf-8", (err, data) => {

//     if (err) {
//         console.log("File not found");
//         return;
//     }

//     console.log(data);
// });
//  this is used for append text in the existing texts basically adding more sentences

// fs.appendFileSync("./text.txt","\n hello guys i have did it now its your turn");

// fs.appendFileSync("./text.txt",`\n ${Date.now()} hello guys i have did it now its your turn`);