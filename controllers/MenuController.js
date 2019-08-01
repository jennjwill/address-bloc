const inquirer = require("inquirer");
const ContactController = require("./ContactController");

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
    this.book = new ContactController();
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
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    inquirer.prompt(this.book.addContactQuestions).then(answers => {
      this.book
        .addContact(answers.name, answers.phone, answers.email)
        .then(contact => {
          console.log("Contact added successfully!");
          this.main();
        })
        .catch(err => {
          console.log(err);
          this.main();
        });
    });
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

  getContactCount() {
    return this.contacts.length;
  }
};
