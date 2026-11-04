//  this is using the function separately and passing it to the filter method:

// function even(ele){
//     if(ele %2 != 0){
//         return true;
//     }
//     else return false;
// }
let arr = [3,4,6,45,4,6,7,8,9,0,5];
console.log(arr);
// let brr = arr.filter(even);
// console.log(brr);

//  another way to filter is using arrow function:
let brr = arr.filter(ele => ele % 2 != 0);
console.log(brr);

// another way to filter is using arrow function without return keyword:
let crr = arr.filter(ele => ele % 2 != 0);
console.log(crr);

// another way by defining funtion inside the filter method:
let drr = arr.filter(function(ele){
    return ele % 2 != 0;
});
console.log(drr);