// import functions and grab DOM elements
import { renderIngredients } from './utils.js';

const form = document.getElementById('form');
const ingredientEl = document.getElementById('ingredient');
const quantityEl = document.getElementById('quantity');
const measurementEl = document.getElementById('measurement');
const ingredientListEl = document.getElementById('ingredient-list');

let ingredients = [];

// set event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('click');
    const ingredientName = ingredientEl.value;
    const ingredientQuantity = quantityEl.value;
    const ingredientMeasurement = measurementEl.value;

    let ingredient = {
        ingredient: ingredientName,
        quantity: ingredientQuantity,
        measurement: ingredientMeasurement,
    };
    ingredients.push(ingredient);
    // console.log(ingredients)- works!;
    renderIngredients();
    //reset inputs
    form.requestFullscreen();
});
// NEXT STEPS
// displayIngredients
function displayIngredients() {
    // 1. clear the DOM (ingredientListEl DOM)
    ingredientListEl.textContent = '';
    ingredientEl.textContent = '(input.value)';
    // 2. Loop through new state
    let ingredients = [];
    // 2A. Render LI for each item

    // 2B. Append each LI to UL
}

displayIngredients();
