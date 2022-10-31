const { db } = require('../../db/db');

//Add new user into Users table => name: "Rose", role: "super admin"
async function insertRow() {
  await db.query(``);
}

//There is a user in the table called Barrie.  Change their role to "deactivated"
async function updateRow() {
  await db.query(``);
}

//Find and delete any user who has a null value in the role field
async function deleteRows() {
  await db.query(``);
}

module.exports = { insertRow, updateRow, deleteRows };
