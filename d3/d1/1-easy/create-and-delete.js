const { db } = require('../db/db');
const User = require('../models/users.model');

//Create a table called Users with the fields of name and role. Both are text fields.

async function createTable() {
  User.init({
    name: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize: db
  })
}
//Write a function that will delete the Users table.
async function deleteTable() {
  await User.drop()
}

module.exports = { createTable, deleteTable };
