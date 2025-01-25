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

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('home-messages');

    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = 'Welcome to NutriTrack!';
    welcomeMessage.classList.add('welcome-message');
    messageContainer.appendChild(welcomeMessage);

    const askAiMessage = document.createElement('p');
    askAiMessage.textContent = 'Ask NutriAI anything about recipes or nutrition:';
    askAiMessage.classList.add('ask-ai-message');
    messageContainer.appendChild(askAiMessage);

    homePageDiv.appendChild(messageContainer);


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
