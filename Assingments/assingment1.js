const { json } = require('express');

var prompt = require('prompt-sync')();

// var age = prompt("Enter your age! ");

// if(age<18){
//     console.log("You get a 20% discount!");
// }
// else if(age>18 && age < 65){
//     console.log("Normal ticket price applies.");
// }
// else{
//     console.log("You get a 30% senior discount!");
// }

// var length = parseFloat(prompt("Enter the length of Rectangle! "));
// var width = parseFloat(prompt("Enter the width of Rectangle! "));

// console.log("Area of Rectangle is: ", length*width);


var product1 = {
    name: "Amit",
    price: 200,
    inStock: false
};
var product2 = {
    name: "Amit",
    price: 200,
    inStock: false
};
var product3 = {
    name: "Amit",
    price: 200,
    inStock: false
};
console.log(product1);
console.log(product2);
console.log(product3);


var guestList = ["amit","prasad","gupta","munna","jhon"];

var guestName = prompt("Enter your Name! ");

if(guestList.includes(guestName)){
    console.log(`Welcome to the party, ${guestName}!`);
}
else{
    console.log(`${guestName} Sorry, you're not on the guest list.`);
}
