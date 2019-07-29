const inquirer = require("inquirer");
const MenuController = require("./controllers/MenuController"); //require the new class
const menu = new MenuController(); //using the class stored as menu

menu.clear();
menu.main();
