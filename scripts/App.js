import SideNavBar from './SideNavBar.js';
import HomePage from './HomePage.js';
import GroceryListPage from './GroceryListPage.js';
import RecipeGeneratorPage from './RecipeGeneratorPage.js';
import CalorieTrackerPage from './CalorieTrackerPage.js';
import ChatBox from './ChatBox.js';
import Ingredient from './Ingredient.js';

export default class App {
  constructor() {
    this.sideNavBar = new SideNavBar();
    this.homePage = new HomePage();
    this.groceryListPage = new GroceryListPage();
    this.recipeGeneratorPage = new RecipeGeneratorPage();
    this.calorieTrackerPage = new CalorieTrackerPage();
    this.chatBox = new ChatBox();
    this.ingredient = new Ingredient();
  }

  init() {
    document.body.insertBefore(this.sideNavBar.render(), document.body.firstChild);

    const pageContent = document.createElement('div');
    pageContent.id = 'page-content';
    document.body.appendChild(pageContent);
  }

  loadPages() {
    this.homePage.init();
  }

  run() {
    this.init();
    this.loadPages();
  }
}

const app = new App();
app.run();
