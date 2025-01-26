import Page from "./Page.js";

export default class GroceryListPage extends Page {
  constructor() {
    super();
    this.items = []; 
  }

  init() {
    this.render();
  }

  render() {
    const pageContent = document.getElementById('page-content');
    pageContent.innerHTML = ''; 

    const groceryListContainer = document.createElement('div');
    groceryListContainer.id = 'grocery-list-container';

    const title = document.createElement('h2');
    title.textContent = 'Grocery List';
    groceryListContainer.appendChild(title);

    const addItemContainer = document.createElement('div');
    addItemContainer.id = 'add-item-container';

    const itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.id = 'item-input';
    itemInput.placeholder = 'Enter grocery item';
    addItemContainer.appendChild(itemInput);

    itemInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        this.addItem();
      }
    });
    addItemContainer.appendChild(itemInput);

    groceryListContainer.appendChild(addItemContainer);

    const listContainer = document.createElement('ul');
    listContainer.id = 'grocery-item-list';
    groceryListContainer.appendChild(listContainer);

    pageContent.appendChild(groceryListContainer);

    this.loadItems(); // Load items from local storage or initialize empty list
    this.renderList(); // Render the grocery list
  }

  loadItems() {
    // For now, initialize with empty array. In future, load from local storage
    this.items = [];
  }

  renderList() {
    const listContainer = document.getElementById('grocery-item-list');
    listContainer.innerHTML = ''; // Clear current list

    this.items.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'grocery-item';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `item-checkbox-${index}`;
      checkbox.checked = item.checked;
      checkbox.onchange = () => this.toggleItemStatus(index);
      listItem.appendChild(checkbox);

      const itemLabel = document.createElement('label');
      itemLabel.textContent = item.text;
      itemLabel.htmlFor = `item-checkbox-${index}`;
      listItem.appendChild(itemLabel);

      listContainer.appendChild(listItem);
    });
  }


  addItem() {
    const itemInput = document.getElementById('item-input');
    const itemName = itemInput.value.trim();

    if (itemName !== '') {
      this.items.push({ text: itemName, checked: false });
      itemInput.value = ''; // Clear input field
      this.renderList();
      // In future, saveItems to local storage here
    }
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.renderList();
    // In future, saveItems to local storage here
  }

  toggleItemStatus(index) {
    this.items[index].checked = !this.items[index].checked;
    // In future, saveItems to local storage here
  }
}
