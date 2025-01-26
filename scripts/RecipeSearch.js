
import Recipe from "./Recipes.js";

export default class RecipeSearch {
    constructor(recipesContainer, searchBarContainer, notification, loader, ui) {
        this.recipesContainer = recipesContainer;
        this.searchBarContainer = searchBarContainer;
        this.notification = notification;
        this.loader = loader;
        this.recipes = [];
        this.ui = ui;
    }

    init(searchForm, searchInput) {
        this.searchForm = searchForm;
        this.searchInput = searchInput;
        this.searchForm.addEventListener('submit', this.handleSearchSubmit.bind(this));
        this.recipesContainer.addEventListener("click", this.handleRecipeClick.bind(this));
    }

    async handleSearchSubmit(event) {
        event.preventDefault();
        console.log("handleSearchSubmit called");
        const searchTerm = this.searchInput.value.trim();
        if (searchTerm !== "") {
            await this.searchRecipes(searchTerm);
        }
    }

    async searchRecipes(searchTerm) {
        try {
            this.loader.classList.remove('hidden');
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await response.json();
            this.recipes = data.meals ? data.meals.map(meal => new Recipe().createRecipeObject(meal)) : [];
            this.renderRecipes(this.recipes);
        } catch (error) {
            console.error("Some error occurred", error);
        } finally {
            this.loader.classList.add('hidden');
        }
    }

    renderRecipes(recipes) {
        this.recipesContainer.innerHTML = "";
        if (recipes.length > 0) {
            this.searchBarContainer.classList.replace("search-bar-center", "search-bar-top");
            recipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.classList.add("recipe-card", "bg-gray-800", "rounded", "shadow", "p-4", "cursor-pointer");
                recipeCard.dataset.recipeId = recipe.id;
                recipeCard.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover mb-4 rounded">
                    <h2 class="text-lg font-semibold">${recipe.title}</h2>
                `;
                this.recipesContainer.appendChild(recipeCard);
            });
            this.notification.classList.add('hidden');
        } else {
            this.searchBarContainer.classList.replace("search-bar-top", "search-bar-center");
            this.notification.classList.remove('hidden');
        }
    }

    handleRecipeClick(event) {
        const recipeCard = event.target.closest(".recipe-card");
        if (recipeCard) {
            const recipeId = recipeCard.dataset.recipeId;
            const recipe = this.recipes.find(recipe => recipe.id === recipeId);
            this.ui.openRecipeDetailsModal(recipe);
        }
    }
}
