function Pizza(toppings, size) {
	this.toppings = toppings;
	this.size = size;
	this.cost = 0;
}

Pizza.prototype.calculateCost = function() {
	if (this.size === "small") {
		this.cost += 14;
	} else if (this.size === "medium") {
		this.cost += 16;
	} else if (this.size === "large") {
		this.cost += 18;
	}
	return this.cost;
}

// const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], "medium");
let pizza = new Pizza();

// console.log(pizza);
// pizza.calculateCost();
// console.log(pizza);
// pizza.calculateCost();

// function displayPizzaCost() {
// 	document.querySelector(".order-total").innerText = "$" + pizza.cost;
// 	document.querySelector("div#pizza-cost").removeAttribute("class");
// }

function handleFormSubmission(event) {
	event.preventDefault();
	const inputtedToppings = document.querySelectorAll("input[name='topping']:checked");
	const inputtedSize = document.querySelector("input[name='size']:checked").value;
	let newPizza = new Pizza(inputtedToppings, inputtedSize);
	newPizza.calculateCost();
	console.log(newPizza);
}

window.addEventListener("load", function() {
	document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
});
