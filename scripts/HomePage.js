//import OpenAI from '/node_modules/openai/index.mjs';
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
    welcomeMessage.innerHTML = '<b>Welcome to NutriTrack!</b>';
    welcomeMessage.classList.add('welcome-message');
    messageContainer.appendChild(welcomeMessage);

    const askAiMessage = document.createElement('p');
    askAiMessage.textContent = 'Ask NutriAI anything about recipes or nutrition:';
    askAiMessage.classList.add('ask-ai-message');
    messageContainer.appendChild(askAiMessage);

    homePageDiv.appendChild(messageContainer);


    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.id = 'home-page-textbox';
    textBox.placeholder = 'Ask NutriAI here';
    textBox.classList.add('home-page-textbox');


    homePageDiv.appendChild(textBox);

    return homePageDiv;
  }

  getText() {
    const itemInput = document.getElementById('item-input');
    const itemName = itemInput;
    return itemName.value.trim();
  }

  // async getChatResponse(userInput){
  //   const completion = await openai.chat.completions.create({
  //     model: "gpt-4o",
  //     messages: [
  //         { role: "developer", content: "You are a helpful assistant." },
  //         {
  //             role: "user",
  //             content: userInput,
  //         },
  //     ],
  //     store: true,
  // });
  
  //}

  init() {
    const pageContent = document.getElementById('page-content');
    pageContent.appendChild(this.render());
  }
}

