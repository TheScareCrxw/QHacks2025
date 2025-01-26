import HomePage from "./HomePage.js";
import RecipeGeneratorPage from "./RecipeGeneratorPage.js";
import GroceryListPage from "./GroceryListPage.js";
import CalorieTrackerPage from "./CalorieTrackerPage.js";

export default class SideNavBar {
  constructor() {
    this.isCollapsed = true;
  }

  render() {
    const navButton = this.createNavButton();
    const navLinks = this.createNavLinks();

    const navBar = document.createElement('div');
    navBar.id = 'side-nav-bar';
    navBar.className = this.isCollapsed ? 'collapsed' : 'expanded';
    navBar.appendChild(navButton);
    navBar.appendChild(navLinks);

    return navBar;
  }

  
  createNavButton() {
    const navButton = document.createElement('button');
    navButton.id = 'nav-button';
    navButton.className = 'nav-icon';
    navButton.innerHTML = '&#9776;'; // Hamburger icon
    navButton.style.color = '#cad2de';
    navButton.onclick = () => this.toggleCollapse();
    return navButton;
  }

  createNavLinks() {
    const navLinks = document.createElement('div');
    navLinks.id = 'nav-links';
    navLinks.className = 'nav-items';
    navLinks.style.display = this.isCollapsed ? 'none' : 'flex';


    const pages = [
        { name: 'Home', id: 'home' },
        { name: 'Grocery List', id: 'groceryList' },
        { name: 'Recipe', id: 'recipe' },
        { name: 'Calorie', id: 'calorie' }
    ];

    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = `#${page.id}`;
        link.textContent = page.name;
        navLinks.appendChild(link);
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const pageContent = document.getElementById('page-content');
          pageContent.innerHTML = '';

          if (page.id === 'home') {
            const homePage = new HomePage();
            homePage.init();
          } else if (page.id === 'groceryList') {
            const groceryListPage = new GroceryListPage();
            groceryListPage.init();
          } else if (page.id === 'recipe') {
            const recipeGeneratorPage = new RecipeGeneratorPage();
            recipeGeneratorPage.init();
          } else if (page.id === 'calorie') {
            const calorieTrackerPage = new CalorieTrackerPage();
            calorieTrackerPage.init();
          }
        });
    });

    return navLinks;
  }


  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    const navBar = document.getElementById('side-nav-bar');
    const navLinks = document.getElementById('nav-links');

    if (this.isCollapsed) {
      navBar.className = 'collapsed';
      navLinks.style.display = 'none';
    } else {
      navBar.className = 'expanded';
      navLinks.style.display = 'flex';
    }
  }
}
