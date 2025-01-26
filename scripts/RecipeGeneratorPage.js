import Page from "./Page.js";
import RecipeSearch from "./RecipeSearch.js";

export default class RecipeGeneratorPage extends Page {
    constructor() {
        super()
        // Initialize DOM elements to null in constructor
        this.searchBarContainer = null;
        this.searchForm = null;
        this.searchInput = null;
        this.recipesContainer = null;
        this.recipeDetailsModal = null;
        this.recipeTitle = null;
        this.recipeImage = null;
        this.recipeIngredients = null;
        this.recipeInstructions = null;
        this.closeButton = null;
        this.loader = null;
        this.notification = null;
        this.ui = this; // Pass RecipeGeneratorPage instance as UI
        this.recipeSearch = null;

    }

    init() {
        // Fetch all required DOM elements in init
        this.searchBarContainer = document.querySelector(".search-bar-container");
        this.searchForm = document.getElementById("searchForm");
        this.searchInput = document.getElementById("searchInput");
        this.recipesContainer = document.getElementById("recipesContainer");
        this.recipeDetailsModal = document.getElementById("recipeDetailsModal");
        this.recipeTitle = document.getElementById("recipeTitle");
        this.recipeImage = document.getElementById("recipeImage");
        this.recipeIngredients = document.getElementById("recipeIngredients");
        this.recipeInstructions = document.getElementById("recipeInstructions");
        this.closeButton = document.getElementById("closeButton");
        this.loader = document.getElementById("loader");
        this.notification = document.getElementById("notification");

        const pageContent = document.getElementById('page-content');
        pageContent.appendChild(this.render());

        // Initialize RecipeSearch after DOM elements are fetched
        this.recipeSearch = new RecipeSearch(
            this.recipesContainer,
            this.searchBarContainer,
            this.notification,
            this.loader,
            this.ui
        );

        // Bind events for modal
        this.closeButton.addEventListener('click', this.closeRecipeDetailsModal.bind(this));
        // Initialize RecipeSearch - Call init method and pass searchForm and searchInput
        this.recipeSearch.init(document.getElementById("searchForm"), document.getElementById("searchInput"));
    }

    render() {
        const recipeGeneratorPageDiv = document.createElement('div');
        recipeGeneratorPageDiv.id = 'recipe-generator-page';

        this.searchBarContainer = document.createElement('div');
        this.searchBarContainer.classList.add('search-bar-container', 'search-bar-center');

        this.searchForm = document.createElement('form');
        this.searchForm.id = 'searchForm';
        this.searchForm.classList.add('search-form');

        this.searchInput = document.createElement('input');
        this.searchInput.id = 'searchInput';
        this.searchInput.type = 'text';
        this.searchInput.classList.add('search-input');
        this.searchInput.placeholder = 'Enter ingredient';

        this.notification = document.createElement('div');
        this.notification.id = 'notification';
        this.notification.classList.add('notification', 'hidden');
        this.notification.textContent = 'No recipes found.';

        this.loader = document.createElement('div');
        this.loader.id = 'loader';
        this.loader.classList.add('loader', 'hidden');

        this.recipesContainer = document.createElement('div');
        this.recipesContainer.id = 'recipesContainer';
        this.recipesContainer.classList.add('recipes-container', 'grid', 'grid-cols-3', 'gap-4', 'mt-8');

        this.searchForm.appendChild(this.searchInput);
        this.searchBarContainer.appendChild(this.searchForm);
        recipeGeneratorPageDiv.appendChild(this.searchBarContainer);
        recipeGeneratorPageDiv.appendChild(this.notification);
        recipeGeneratorPageDiv.appendChild(this.loader);
        recipeGeneratorPageDiv.appendChild(this.recipesContainer);

        this.recipeDetailsModal = document.createElement('div');
        this.recipeDetailsModal.id = 'recipeDetailsModal';
        this.recipeDetailsModal.classList.add('recipe-details-modal', 'hidden');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        this.closeButton = document.createElement('button');
        this.closeButton.id = 'closeButton';
        this.closeButton.classList.add('close-button');
        this.closeButton.textContent = 'Close';

        this.recipeTitle = document.createElement('h2');
        this.recipeTitle.id = 'recipeTitle';

        this.recipeImage = document.createElement('img');
        this.recipeImage.id = 'recipeImage';
        this.recipeImage.alt = 'Recipe Image';

        this.recipeIngredients = document.createElement('ul');
        this.recipeIngredients.id = 'recipeIngredients';

        this.recipeInstructions = document.createElement('p');
        this.recipeInstructions.id = 'recipeInstructions';

        modalContent.appendChild(this.closeButton);
        modalContent.appendChild(this.recipeTitle);
        modalContent.appendChild(this.recipeImage);
        modalContent.appendChild(this.recipeIngredients);
        modalContent.appendChild(this.recipeInstructions);
        this.recipeDetailsModal.appendChild(modalContent);
        recipeGeneratorPageDiv.appendChild(this.recipeDetailsModal);


        return recipeGeneratorPageDiv;
    }

    toggleLoader(show) {
        this.loader.classList.toggle('hidden', !show);
    }

    renderRecipes(recipes, onClick) {
        this.recipesContainer.innerHTML = "";

        if (recipes.length > 0) {
            this.searchBarContainer.classList.replace("search-bar-center", "search-bar-top");
            recipes.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.classList.add("recipe-card", "bg-gray-800", "rounded", "shadow", "p-4", "cursor-pointer");
                recipeCard.dataset.recipeId = recipe.id;
                recipeCard.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-16 object-cover mb-4 rounded">
                    <h2 class="text-lg font-semibold">${recipe.title}</h2>
                `;
                recipeCard.addEventListener("click", () => onClick(recipe));
                this.recipesContainer.appendChild(recipeCard);
            });
            this.notification.classList.add('hidden');
        } else {
            this.searchBarContainer.classList.replace("search-bar-top", "search-bar-center");
            this.notification.classList.remove('hidden');
        }
    }

    openRecipeDetailsModal(recipe) {
        this.recipeTitle.textContent = recipe.title;
        this.recipeImage.src = recipe.image;
        this.recipeImage.alt = recipe.title;

        this.recipeIngredients.innerHTML = "";
        recipe.ingredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            this.recipeIngredients.appendChild(listItem);
        });

        this.recipeInstructions.innerHTML = recipe.instructions.replace(/[\r\n]+/g, '<br><br>');
        this.recipeDetailsModal.classList.remove('hidden');
    }

    closeRecipeDetailsModal() {
        this.recipeDetailsModal.classList.add('hidden');
    }
}
