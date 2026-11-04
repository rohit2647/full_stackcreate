const fs = require("fs");

//  for sync or blocking 

// fs.writeFileSync("./text.txt","hello");

//  for the read the file using sync or block 

/* console.log("1");

const result= fs.readFileSync("contacts.txt","utf-8");
console.log(result);

console.log("2"); */


//  for async or blocking non blocking

// fs.writeFile("./text.txt","hello",(err)=>{});


// console.log("1");

// (fs.readFile("contacts.txt","utf-8",(err ,result)=>{

//     console.log(result)

// }));


// console.log("2"); 

// for checking no of cpus in my system

// const os = require("os");
// console.log(os.cpus().length);

// so  i can see in the output is 8 so we make the number of thread is 8 and by default it is 4