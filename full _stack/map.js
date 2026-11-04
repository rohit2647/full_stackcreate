//  this is the map method in javascript which is used to create a new array from an existing array by applying a function to each element of the original array.
let arr = [1, 2, 3, 4, 5];
// let brr = arr.map(function(ele){
//     return ele * ele;
// });
// console.log(brr); 
console.log(arr);

// another way to map is :
// function double(ele){
//     return ele * 2;
// }
// let drr = arr.map(double);
// console.log(drr);

// another way to map is using arrow function:
// let drr = arr.map((ele) => ele * 2);
// console.log(drr);

// another using without return keyword:
let drr = arr.map(ele => ele * 2);
console.log(drr);