// console.log("one");
// console.log("two");
// console.log("three");

//  for the setTimeout

// function hello(){
//     console.log("hello");
// }

// setTimeout( hello ,5000);

//  A callback is a function that you pass as an argument to another function, and the receiving function calls it later (or whenever it needs to). 

// function sum(a,b){
//     console.log(a+b);
// }
// function usingfn(a, b,sum){
//     sum(a,b);
// }
// usingfn(5,6,sum);

//  another way we difine the function inside a function 

// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// });

//  important :************
// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)
// This style of programming becomes difficult to understand & manage

// function getdata(dataId,getnextdata){
//     setTimeout(()=>{
//         console.log("dataId "+ dataId)
//         if(getnextdata){
//             getnextdata();
//         }
//     },2000);
// }
//  this is callback hell beacause we just call function again inside again
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3);
//     });
// });

// for solving the problem of callback hell promises comes in existence

//  promises

// pending state

// let promise= new Promise((resolve,reject)=>{
//     console.log("hello");
// });

//  fullfilled state

// let promise= new Promise((resolve,reject)=>{
//     console.log("hello");
//     resolve("success"); 
// });

// reject state

// let promise= new Promise((resolve,reject)=>{
//     console.log("hello");
//     reject("some error is occured"); 
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             console.log("data", dataId);

//             resolve("success");

//             if (getNextData) {
//                 getNextData();
//             }

//         }, 5000);

//     });
// }

// for reject 

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             console.log("data", dataId);

//             reject("errors");

//             if (getNextData) {
//                 getNextData();
//             }

//         }, 5000);

//     });
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {

//         console.log("I am a promise");

//         // resolve("success");
//         reject("error");

//     });
// };

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });

// promise.catch((err) => {
//     console.log("rejected",err);
// });


//  asyncronous

// function asyncFunc() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);

//     });
// }

// console.log("fetching data1....");

// let p1 = asyncFunc();

// p1.then((res) => {
//     console.log(res);
// });



// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1();

// p1.then((res) => {
//     console.log("fetching data2....");

//     let p2 = asyncFunc2();

//     p2.then((res) => {
//         console.log(res);
//     });
// });


// function getData(dataId) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);

//     });
// }

// getData(1)
//     .then((res) => {
//         console.log(res);
//         return getData(2);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// function api() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);

//     });
// }

// async function getWeatherData() {
//     await api();
// }


// function getData(dataId) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);

//     });
// }

// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

// auto initiate / or start automatically
// (async function () {

//     console.log("getting data1....");
//     await getData(1);

//     console.log("getting data2....");
//     await getData(2);

//     console.log("getting data3....");
//     await getData(3);

// })();