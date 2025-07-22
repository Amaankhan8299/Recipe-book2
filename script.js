const recipes = [
  {
    title: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Minced meat", "Tomato sauce", "Garlic", "Onion"],
    instructions: "Boil spaghetti. Cook minced meat with onion and garlic. Add tomato sauce. Mix with spaghetti."
  },
  {
    title: "Pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
    instructions: "Mix all ingredients. Pour batter onto hot pan. Flip when bubbles form. Serve with syrup."
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, grill until golden brown."
  }
];

const recipeList = document.getElementById("recipe-list");
const details = document.getElementById("recipe-details");
const title = document.getElementById("recipe-title");
const ingredientsList = document.getElementById("ingredients-list");
const instructions = document.getElementById("recipe-instructions");

recipes.forEach((recipe, index) => {
  const li = document.createElement("li");
  li.textContent = recipe.title;
  li.onclick = () => showRecipe(index);
  recipeList.appendChild(li);
});

function showRecipe(index) {
  const recipe = recipes[index];
  title.textContent = recipe.title;
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });
  instructions.textContent = recipe.instructions;
  details.classList.remove("hidden");
}

function closeDetails() {
  details.classList.add("hidden");
}
