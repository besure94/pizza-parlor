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
	} else if (this.size === "extra large")
		this.cost += 20;
	if (this.toppings.includes("pepperoni") && this.toppings.includes("sausage") && this.toppings.includes("pineapple")) {
		this.cost += 3;
	} else if (this.toppings.includes("pepperoni") && this.toppings.includes("sausage")) {
		this.cost += 2;
	} else if (this.toppings.includes("pepperoni") || this.toppings.includes("sausage") || this.toppings.includes("pineapple")) {
		this.cost += 1;
	}
	return this.cost;
}

const pizza = new Pizza(["pineapple"], "small");
console.log(pizza);
pizza.calculateCost();
console.log(pizza);
// let pizza = new Pizza();

function displayPizzaCost() {
	document.querySelector(".order-total").innerText = "$" + pizza.cost;
	document.querySelector("div#pizza-cost").removeAttribute("class");
}

function handleFormSubmission(event) {
	event.preventDefault();
	// gather toppings and size
	const inputtedToppings = document.querySelectorAll("input[name=topping]:checked");
	const inputtedToppingsArray = Array.from(inputtedToppings);
	console.log(inputtedToppingsArray);
	const inputtedSize = document.querySelector("input[name='size']:checked").value;
	// create pizza and calculate cost
	const newToppingsArray = [];
	inputtedToppingsArray.forEach(function(element) {
		newToppingsArray.push(element.value);
	});
	// use forEach to display toppings in pizza object
	let newPizza = new Pizza(newToppingsArray, inputtedSize);
	newPizza.calculateCost();
	// after cost is calculated, display cost
	document.querySelector("div#pizza-cost").removeAttribute("class");
	console.log(newPizza);
	// displayPizzaCost();
}

window.addEventListener("load", function() {
	document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
});
