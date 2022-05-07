  // import functions and grab DOM elements
import { renderIngredients } from './utils.js';
const form = document.getElementById("form");
const ingredientEl = document.getElementById("ingredient");
const quantityEl = document.getElementById("quantity");
const measurementEl = document.getElementById("measurement");
const ingredientListEl = document.getElementById("ingredient-list");

let ingredients = [];

  // set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredientName = ingredientEl.value;
    const ingredientQuantity = quantityEl.value;
    const ingredientMeasurement = measurementEl.value;

    let ingredient = {
        ingredient: ingredientName,
        quantity: ingredientQuantity,
        measurement: ingredientMeasurement,
    };
    ingredients.push(ingredient);
    console.log(ingredients);

}); 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
