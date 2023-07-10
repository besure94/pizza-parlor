// function Pizza() {
// 	this.toppings = "";
// 	this.size = 0;
// }

function Pizza(toppings, size) {
	this.toppings = ["pepperoni", "sausage", "pineapple"];
	this.size = "medium";
}

let pizza = new Pizza();

console.log(pizza);