import Page from "./Page.js";

export default class HomePage extends Page {
  constructor() {
    super();
    // Homepage specific constructor logic
  }

  init() {
    // Initialize homepage elements
  }

  displayGreeting() {
    // Display greeting message
  }

  render() {
    const homePageDiv = document.createElement('div');
    homePageDiv.id = 'home-page';

    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.placeholder = 'Enter text here';
    textBox.classList.add('home-page-textbox');


    homePageDiv.appendChild(textBox);
    return homePageDiv;
  }

  init() {
    const pageContent = document.getElementById('page-content');
    pageContent.appendChild(this.render());
  }
}
