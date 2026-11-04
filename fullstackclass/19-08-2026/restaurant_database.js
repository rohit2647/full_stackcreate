const items = [
  { id: 1, name: "Pizza Palace", category: "Pizza", price: 250, rating: 4.5, veg: true, spicy: false, prepTime: 20, stock: 15, year: 2020 },
  { id: 2, name: "Burger House", category: "Burger", price: 180, rating: 4.2, veg: false, spicy: true, prepTime: 15, stock: 20, year: 2021 },
  { id: 3, name: "Biryani Point", category: "Biryani", price: 300, rating: 4.8, veg: false, spicy: true, prepTime: 35, stock: 12, year: 2019 },
  { id: 4, name: "Dosa Corner", category: "South Indian", price: 120, rating: 4.6, veg: true, spicy: true, prepTime: 15, stock: 25, year: 2018 },
  { id: 5, name: "Momos Hub", category: "Chinese", price: 150, rating: 4.4, veg: true, spicy: true, prepTime: 15, stock: 18, year: 2022 },
  { id: 6, name: "Tandoori Nights", category: "Indian", price: 350, rating: 4.7, veg: false, spicy: true, prepTime: 40, stock: 10, year: 2017 },
  { id: 7, name: "Pasta World", category: "Italian", price: 280, rating: 4.3, veg: true, spicy: false, prepTime: 25, stock: 16, year: 2021 },
  { id: 8, name: "Chowmein Express", category: "Chinese", price: 160, rating: 4.1, veg: true, spicy: true, prepTime: 18, stock: 22, year: 2023 },
  { id: 9, name: "Chicken Kingdom", category: "Chicken", price: 320, rating: 4.6, veg: false, spicy: true, prepTime: 30, stock: 8, year: 2020 },
  { id: 10, name: "Paneer House", category: "Indian", price: 220, rating: 4.5, veg: true, spicy: true, prepTime: 25, stock: 14, year: 2019 },
  { id: 11, name: "Fried Rice Corner", category: "Chinese", price: 170, rating: 4.2, veg: true, spicy: false, prepTime: 20, stock: 20, year: 2022 },
  { id: 12, name: "Butter Chicken Hub", category: "Indian", price: 330, rating: 4.9, veg: false, spicy: true, prepTime: 40, stock: 7, year: 2018 },
  { id: 13, name: "Sandwich Cafe", category: "Fast Food", price: 140, rating: 4.0, veg: true, spicy: false, prepTime: 10, stock: 30, year: 2021 },
  { id: 14, name: "Fish Curry House", category: "Indian", price: 300, rating: 4.4, veg: false, spicy: true, prepTime: 35, stock: 9, year: 2017 },
  { id: 15, name: "Veg Thali", category: "Indian", price: 180, rating: 4.6, veg: true, spicy: true, prepTime: 20, stock: 24, year: 2020 },
  { id: 16, name: "Chicken Pizza", category: "Pizza", price: 350, rating: 4.5, veg: false, spicy: true, prepTime: 30, stock: 11, year: 2023 },
  { id: 17, name: "Gulab Jamun", category: "Dessert", price: 100, rating: 4.7, veg: true, spicy: false, prepTime: 10, stock: 35, year: 2016 },
  { id: 18, name: "Chole Bhature", category: "North Indian", price: 130, rating: 4.5, veg: true, spicy: true, prepTime: 20, stock: 19, year: 2019 },
  { id: 19, name: "Chicken Momos", category: "Chinese", price: 190, rating: 4.6, veg: false, spicy: true, prepTime: 18, stock: 13, year: 2022 },
  { id: 20, name: "Margherita Pizza", category: "Pizza", price: 280, rating: 4.8, veg: true, spicy: false, prepTime: 25, stock: 17, year: 2024 }
];
console.log("Q1:",items[0].name);//first name item name 
console.log("Q2:",items.length);//no of the items
console.log("Q3:",items[2].name);//name of the third item 
console.log("Q4:",items[19].name);// name of the last item 
console.log("--------------------------------------------------------------");
items.map(i => console.log(" ",i.name)); //printing the name of the each items 
console.log("--------------------------------------------------------------");
console.log("Q5", items.find(i => i.name === 'Butter Chicken Hub').price);
console.log("--------------------------------------------------------------");
console.log("Q6", items.findIndex(i => i.name === 'Gulab Jamun')); // find the index of the  item 
console.log("--------------------------------------------------------------");
let index = -1; // without inbuilt function 

for (let i = 0; i < items.length; i++) {
    if(items[i].name === "Gulab Jamun") {
        index = i;
        break;
    }
}
console.log(index);
console.log("--------------------------------------------------------------");
// printing the name and the price of the whole  

items.map(i => {
    console.log(`   ${i.name} - Rs ${i.price}`);
});

console.log("--------------------------------------------------------------");
 console.log(items.find(i => i.name === "Butter Chicken Hub"));
 console.log("--------------------------------------------------------------");
 console.log(
    items.some(i => i.name === "Butter Chicken Hub")
);
console.log("--------------------------------------------------------------");
 console.log(
    items.some(i => i.name === "Coffee")
);
console.log("--------------------------------------------------------------");
const item = items.find(i => i.name === "Butter Chicken Hub");// using the loop 

if (item) {
    console.log("Item is present");
} else {
    console.log("Item is not present");
}
console.log("--------------------------------------------------------------");
// no of the veg items
console.log("Q10:", items.filter(i => i.veg === true).length);
console.log("--------------------------------------------------------------");
//  implement by using  loop 
let count = 0;

for (let i = 0; i < items.length; i++) {
    if (items[i].veg === true) {
        count++;
    }
}

console.log("Q10:", count);
console.log("--------------------------------------------------------------");

console.log(
    "Q11:",
    items.filter(i => i.price < 200).map(i => i.name)
);

console.log("--------------------------------------------------------------");
//  printing the name of the  item which have cost lies b/w 100 to 200;
// console.log(
//     "Q11:",
//     items.filter(i => 100 < i.price < 160).map(i => i.name) // this will give you the wrong answer 
// );
 console.log("--------------------------------------------------------------");
console.log(
    "Q12:",
    items.filter(i => i.price >100 && i.price <200).map(i => i.name)
);
console.log("--------------------------------------------------------------");
// printing the  the sold out item 
console.log(
    "Q13:",
    items.filter(i => i.stock === 0).map(i => i.name)
);
console.log("--------------------------------------------------------------");
//  printing the veg and price lies b/w it 
console.log(
    "Q14:",
    items.filter(i => i.price >100 && i.price <200 && i.veg === true).map(i => i.name)
);
console.log("--------------------------------------------------------------");
//  printing the non veg and price lies b/w it 
console.log(
    "Q15:",
    items.filter(i => i.price >100 && i.price <200 && i.veg === false).map(i => i.name)
);

console.log("--------------------------------------------------------------");
//  printing the name of the item which have less  stock 20 and it should be veg
console.log(
    "Q16:",
    items.filter(i => i.veg === true && i.stock <20).map(i => i.name)
);
console.log("--------------------------------------------------------------");
//  printing the name of the item which have chicken in its name 
console.log(
    "Q17:",
    items.filter(i => i.name.toLowerCase().includes("chicken")).map(i => i.name)
);
console.log("--------------------------------------------------------------");
//  printing the name of the item which have chicken in its name 
console.log(
    "Q18:",
    items.filter(i => i.name.toUpperCase().includes("CHICKEN")).map(i => i.name)
);
console.log("--------------------------------------------------------------");
//  printing the name of the item which have price less than 150 and stock less 20
console.log(
    "Q19:",
    items.filter(i => i.stock > 20 && i.price <150).map(i => i.name)
);

console.log("--------------------------------------------------------------");
//  displaying the price the item after updating the price after 5%  gst implementation 
console.log(
    "Q20:",
    items.map(i => i.price * 1.05)
);

console.log("--------------------------------------------------------------");
//  after appling 5% gst and 10% discount
console.log(
    "Q21:",
    items.map(i => ({
        name: i.name,
        price: i.price * 0.95
    }))
);
console.log("--------------------------------------------------------------");
//  displaying the name of each item in the upper case 
console.log(
    "Q22:",
    items.map(i => ({
        name: i.name.toLocaleUpperCase()
    }))
);
console.log("--------------------------------------------------------------");
//  displaying the name of each item whcih include chicken
console.log(
    "Q23:",
    items
        .filter(i => i.name.toLowerCase().includes("chicken"))
        .map(i => i.name)
);
console.log("--------------------------------------------------------------");

//  print the name of all the items in terms of is it available or not available 
items.map(i => {
    console.log(`${i.name} - ${i.stock > 0 ? "Available" : "Not Available"}`);
});
//  for the veg  items only 
console.log("--------------------------------------------------------------");
items.map(i => {
    if (i.veg) {
        console.log(`${i.name} - ${i.stock > 0 ? "Available" : "Not Available"}`);
    }
});
console.log("--------------------------------------------------------------");
//  for the  veg have these specifi condition 
items.map(i => {
    if (i.veg && i.spicy ===true && i.price >150 && i.price <200) {
        console.log(`${i.name} - ${i.stock > 0 ? "Available" : "Not Available"}`);
    }
});
console.log("--------------------------------------------------------------");
//  for the non veg having this non veg 
items.map(i => {
    if (i.veg === false && i.spicy ===true && i.price >150 && i.price <200) {
        console.log(`${i.name} - ${i.stock > 0 ? "Available" : "Not Available"}`);
    }
});