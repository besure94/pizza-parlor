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
		} else if (this.toppings.includes("pepperoni") && this.toppings.includes("sausage") || this.toppings.includes("pineapple") && this.toppings.includes("sausage") || this.toppings.includes("pineapple") && this.toppings.includes("pepperoni")) {
			this.cost += 2;
		} else if (this.toppings.includes("pepperoni") || this.toppings.includes("sausage") || this.toppings.includes("pineapple")) {
			this.cost += 1;
		}
		return this.cost;
	}

function handleFormSubmission(event) {
	event.preventDefault();
	const inputtedToppings = document.querySelectorAll("input[name=topping]:checked");
	const inputtedToppingsArray = Array.from(inputtedToppings);
	const inputtedSize = document.querySelector("input[name='size']:checked").value;
	const newToppingsArray = [];
	inputtedToppingsArray.forEach(function(element) {
		newToppingsArray.push(element.value);
	});
	let newPizza = new Pizza(newToppingsArray, inputtedSize);
	newPizza.calculateCost();
	document.querySelector(".order-total").innerText = "Your pizza costs: " + "$" + newPizza.cost;
	document.querySelector("div#pizza-cost").removeAttribute("class");
}

window.addEventListener("load", function() {
	document.querySelector("form#new-pizza").addEventListener("submit", handleFormSubmission);
});
