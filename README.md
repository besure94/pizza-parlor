1. There needs to be a constructor function for a pizza.
	* Constructor should contain toppings that the user can select.
	* Constructor should also contain sizes that the user can select.
2. There needs to be a prototype method that determines the cost based on what is selected.
	* Prototype should determine size based on toppings chosen.
	* Prototype should also determine size based on size chozen.

Describe: Pizza()

Test: "It should return a Pizza object with properties for toppings."
Code:
const myPizza = new Pizza(["pepperoni", "sausage", "pineapple"], medium);
Expected Output: Pizza { toppings: ["pepperoni", "sausage", "pineapple"], size: "medium"};