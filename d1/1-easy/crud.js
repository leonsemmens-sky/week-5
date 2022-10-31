const { db } = require('../../db/db');

//Add new user into Users table => name: "Rose", role: "super admin"
async function insertRow() {
  await db.query(`INSERT INTO Users (name, role) VALUES ("Rose", "super admin")`);
}

//There is a user in the table called Barrie.  Change their role to "deactivated"
async function updateRow() {
  await db.query(`UPDATE Users SET role="deactivated" WHERE name="Barrie"`);
}

//Find and delete any user who has a null value in the role field
async function deleteRows() {
  await db.query(`DELETE FROM Users WHERE role IS NULL`);
}

module.exports = { insertRow, updateRow, deleteRows };
