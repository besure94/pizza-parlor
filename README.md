1. There needs to be a constructor function for a pizza.
	* Constructor should contain toppings that the user can select.
	* Constructor should also contain sizes that the user can select.
2. There needs to be a prototype method that determines the cost based on what is selected.
	* Prototype should determine size based on size chozen.

Describe: Pizza()

Test: "It should return a Pizza object with properties for toppings and size."
Code:
const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["pepperoni", "sausage", "pineapple"], size: "medium"};

Describe: calculateCost()

Test: "It should contain a method that determines the cost of a pizza based on the selected size."
Code:
const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], "medium");
pizza.calculateCost();
pizza.calculateCost(const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], medium));
Expected Output: 12;

Test: "The method should determine the cost of a pizza based on the selected toppings."
Code:
const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], medium);
pizza.calculateCost();
pizza.calculateCost(const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], medium));
Expected Output: 13;