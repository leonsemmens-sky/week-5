const { db } = require('../../db/db');
//Create a table called Users with the fields of name and role. Both are text fields.

async function createTable() {
  await db.query();
}
//Write a function that will delete the Users table.
async function deleteTable() {
  await db.query();
}

module.exports = { createTable, deleteTable };
