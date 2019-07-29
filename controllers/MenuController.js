const inquirer = require("inquirer");

module.exports = class MenuController {
  //define and export MenuController as a class
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: ["Add new contact", "Get date", "Exit"]
      }
    ];
    this.contacts = [];
  }

  main() {
    //defining methods that will work in app.js
    console.log(`Welcome to AddressBloc!`);
    inquirer //pass control to inquirer to ask menu question
      .prompt(this.mainMenuQuestions)
      .then(response => {
        //promise resolved, callback w selected value
        switch (
          response.mainMenuChoice //switch statement to handle different cases
        ) {
          case "Add new contact":
            this.addContact();
            break;
          case "Get date":
            this.getDate();
            break;
          case "Exit":
            this.exit();
          default:
            console.log("Invalid input");
            this.main();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  clear() {
    //defining method
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    console.log("addContact called");
    this.main();
  }

  getDate() {
    this.clear();
    let timeNow = new Date();
    console.log(timeNow);
    this.main();
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
};
