document.getElementById('search-input').addEventListener('input', debounce(handleSearch, 250));

function handleSearch() {
    const query = document.getElementById('search-input').value.trim();
    fetchRecipes(query === "" ? "chicken" : query);
}

async function fetchRecipes(searchQuery = "chicken") {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayRecipes(data.meals);
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}

function displayRecipes(meals) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = "";

    if (!meals) {
        recipesContainer.innerHTML = "<p>No recipes found. Try searching for another dish.</p>";
        return;
    }

    meals.forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('recipe-card');

        const ingredientsList = getIngredients(meal);
        const recipeLink = getRecipeLink(meal);

        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h2>${meal.strMeal}</h2>
            <p><b>Cuisine:</b> ${meal.strArea}</p>
            <p><b>Ingredients:</b> ${ingredientsList}</p>
            ${recipeLink ? `<a href="${recipeLink}" target="_blank">View Recipe</a>` : ""}
        `;

        recipesContainer.appendChild(mealCard);
    });
}

function getIngredients(meal) {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }
    return ingredients.join(", ");
}

function getRecipeLink(meal) {
    if (meal.strSource) {
        return meal.strSource; // Redirect to original source if available
    } else if (meal.strYoutube) {
        return meal.strYoutube; // Otherwise, link to YouTube tutorial
    }
    return null; // No link if both are missing
}

// Debounce function to prevent excessive API calls
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Fetch default "chicken" recipes on page load
window.onload = () => fetchRecipes();
