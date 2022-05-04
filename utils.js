export function renderIngredients(item) {
    const li = document.createElement('li');
    // console.log(item);
    li.textContent = `${item.ingredient} ${item.quantity} ${item.measurement}`;
    return li;
}

export function displayIngredients(item) {
    const li = document.createElement('li');
    li.textContent = `${item.ingredient} ${item.quantity} ${item.measurement}`;
    return li;
}