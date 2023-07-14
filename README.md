## Pizza Parlor

#### By Brian Scherner

#### A website where users can order a pizza.

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap

## Description

This website asks users to select toppings and a size for a pizza. The price of the pizza will change depending on the toppings and size that are selected. Alternatively, a user can select only a size if they would like a cheese pizza with no toppings.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the index.html file in the directory.
* Open index.html in your browser.

## Known Bugs

Application is functioning as expected but lacks styling. I would like to add some CSS to this website when time allows.

## License

MIT

Copyright(c) 2023 Brian Scherner

### Tests

1. There needs to be a constructor function for a pizza.
	* Constructor should contain toppings that the user can select.
	* Constructor should also contain sizes that the user can select.
2. There needs to be a prototype method that determines the cost based on what is selected.
	* Prototype should determine size based on size chosen.
	* Prototype should determine size based on toppings chosen.

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
pizza.calculateCost(const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], "medium"));
Expected Output: 16;

Test: "The method should determine the cost of a pizza based on the selected toppings."
Code:
const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], "medium");
pizza.calculateCost();
pizza.calculateCost(const pizza = new Pizza(["pepperoni", "sausage", "pineapple"], "medium"));
Expected Output: 19;