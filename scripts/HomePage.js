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

    //const openai = new OpenAI();

    

    const textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.placeholder = 'Enter text here';
    textBox.classList.add('home-page-textbox');
    
    textBox.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); 
        // this.getChatResponse(this.getText())
        // console.log(this.getChatResponse(this.getText()))
      }
    });

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

