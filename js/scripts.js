function Pizza(toppings, size) {
	this.toppings = toppings;
	this.size = size;
	this.cost = 0;
}

Pizza.prototype.calculateCost = function() {
	if (this.size === "small") {
		this.cost += 10;
	} else if (this.size === "medium") {
		this.cost += 12;
	} else if (this.size === "large") {
		this.cost += 14;
	}
	return this.cost;
}

const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], "medium");
// let pizza = new Pizza();

console.log(pizza);
pizza.calculateCost();
console.log(pizza);

