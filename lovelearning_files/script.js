// let div = document.querySelectorAll(".box");
// div[0].innerText ="rohit";
// div[1].innerText ="is";
// div[2].innerText ="vice president";

// creating all the things using using js 

// let newbtn = document.createElement("button");
// newbtn.innerText="click me !";
// let body =document.querySelector("body");
// body.prepend(newbtn);
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// let div = document.querySelectorAll("div");

// div.forEach((di) => {
//     di.classList.add("newclass");
// });
let body = document.querySelector("body");
let mode = document.createElement("button");
mode.innerText="click to change bg";
body.prepend(mode);
currentcolor=body.style.backgroundColor="white";
body.addEventListener("click" , () => {
    if(currentcolor === "white"){
        body.style.backgroundColor="black";
        currentcolor=body.style.backgroundColor="black";
    }
    else{
        body.style.backgroundColor="black";
        currentcolor=body.style.backgroundColor="white";
    }
})