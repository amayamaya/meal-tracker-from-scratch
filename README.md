## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

# From Scratch Planning

## Add Ingredients Section 

### HTML Elements
-  Heading
-  Form with inputs/select(s) for ingredients, qty, measurement, button 
-  Button for removing the last item
- `<ul>` for keeping track of ingredients

### Events
1. Add Ingredient(form submit)
2. Remove Last Item (button click)

### State 
-  An array of ingredients with the following structure:
```js
{
  ingredient: 'Black Beans',
  quantity: 1,
  measurement: 'Cups'
}
```

### Functions
-  `renderIngredient` -- create an `<li>` for an ingredient object
-  `displayIngredient` -- clear out the existing list, loop through each ingredient, call renderIngredient, append `<li>` to the list

### To Do List

1. adding ingredients
-  [ ] Make my form
-  [ ] Add form event listener using (`getElementById`)
-  [ ] Create an ingredient object from the form data 
-  [ ] Push the ingredient onto ingredients array (state)
-  [ ] Write `renderIngredients` function
-  [ ] Write `displayIngredients` function (calling `renderIngredient` for each item)

2. Removing ingredients 
-  [ ] add my remove button 
-  [ ] Ad event listener to button
-  [ ] Remove the last item from the ingredients array
-  [ ] Call `displayIngredients`

## Save Meal Selection

### HTML Elements 
-  Heading
-  Save button
-  Mean name input

### Events
-  Save button click

### State 
-  Array of Meals with the following structure:

```js
{ 
  name: 'Black Bean Salad',
  ingredientCount: 2 
}
```

### Functions
-  `renderMeal` - return an `<li>` with the meal info
- `displayMeals` - clears the list of meals, loops through the state and calls `renderMeal` for each meal in state

### To Do List
-  [ ] Ad input button and html
-  [ ] Ad button event listener
-  [ ] Create the meal object using the input value as well as the current list of ingredients 
-  [ ] Push the meal object onto the meal array
-  [ ] Clear out the ingredients state and call `displayIngredients`
-  [ ] Write out `renderMeal` function
-  [ ] Write out `displayMeals` function (calling `renderMeal` for each item in the meals array)
-  [ ] Call `displayMeals`