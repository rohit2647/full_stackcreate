// const math = require("./math");//"Bring the things exported from math.js into this file so I can use them."

// console.log("sum =",math.add(2,3));//Go to the math object and use its add function with 2 and 3.

// console.log("sub =",math.sub(6,2));

//  this can we also write as 
const {add ,sub} =require("./math");
console.log("sum =",add(2,3));
console.log("sub =",sub(6,2));