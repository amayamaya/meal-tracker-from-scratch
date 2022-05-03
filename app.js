// import functions and grab DOM elements
const foodForm = document.getElementById('form');
// const ingredientList = document.getElementById("ingredient-list");


// let state
let ingredients = [];
let quantity = [];
let measurement = [];

// set event listeners 
foodForm.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();

    const foodData = new FormData(foodForm);
    console.log(foodData.get('measurement'));

    const ingredient = { ingredient: foodData.get('ingredient'), quantity: foodData.get('quantity'), measurement:foodData.get('measurement') };
    console.log(ingredient);

    ingredients.push(ingredient);
    console.log(ingredients);

    foodForm.reset();

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
