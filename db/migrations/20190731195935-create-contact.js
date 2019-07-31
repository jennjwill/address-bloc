"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Contacts", {
      //first arg is name of a table, second is object of key-value pairs
      id: {
        //defines a property called key
        allowNull: false, //property cannot be null
        autoIncrement: true, //is incremented automatically (like 1, 2, 3)
        primaryKey: true, //id's the object
        type: Sequelize.INTEGER //sets property type. only values of this type are allowed
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    //down method rolls back the migration, undoes whatever the up method did--here drops the Contacts table
    return queryInterface.dropTable("Contacts");
  }
};
