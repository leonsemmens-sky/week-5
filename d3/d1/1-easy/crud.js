const { Op } = require('sequelize');
const { db } = require('../db/db');
const User = require('../models/users.model');

//Add new user into Users table => name: "Rose", role: "super admin"
async function insertRow() {
  await User.create({
    name: "Rose",
    role: "Super admin"
  })
}

//There is a user in the table called Barrie.  Change their role to "deactivated"
async function updateRow() {
  await User.update({
    name: "Barrie"
  }, {
    where: {
      role: "deactivated"
    }
  })
}

//Find and delete any user who has a null value in the role field
async function deleteRows() {
  await User.destroy({
    where: {
      role: {
        [Op.is]: null
      }
    }
  })
}

module.exports = { insertRow, updateRow, deleteRows };
