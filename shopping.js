"use strict";
let shoppingCart = [];
const itemsList = [
  {
    name: "Purse",
    price: 50
  },
  {
    name: "Shoes",
    price: 30
  },
  {
    name: "Backpack",
    price: 70
  },
  {
    name: "Hat",
    price: 20
  },
  {
    name: "Luggage",
    price: 100
  }
];


function addItem(itemName, itemPrice) {
  shoppingCart = [...shoppingCart, {name: itemName, price: itemPrice}];
}

addItem("Wallet", 35);
addItem("Purse", 50);
console.log(shoppingCart);

function removeItem(itemName) {
  let index = shoppingCart.findIndex(item => item.name === itemName);
 shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)]
}

removeItem("Purse");
console.log(shoppingCart);

function editItem(oldItem, newItem, oldPrice) {
 let index = shoppingCart.findIndex(newItem => newItem.name === oldItem);
 shoppingCart = [...shoppingCart.slice(0, index), {name: newItem, price: oldPrice }, ...shoppingCart.slice(index + 1)];
}

editItem("Wallet", "Keys", 40);
console.log(shoppingCart);

function printTotal() {
  let total = 0;
  for (let item of shoppingCart) {
    total += item.price;
  }
  console.log(total);
}

printTotal(shoppingCart); 

