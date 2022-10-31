const { createTable, deleteTable } = require('../../../d1/1-easy/create-and-delete');
const { db } = require('../../../db/db');

test('Table exists after creating', async () => {
  await db.query('DROP TABLE IF EXISTS Users');
  await createTable();
  const data = await db.getQueryInterface().showAllSchemas();
  console.log(data);
  expect(data[0].name).toBe('Users');
});

test('Table has correct columns', async () => {
  const [data, meta] = await db.query(`INSERT INTO Users (name, role) VALUES ("Vijay", "admin")`);
  expect(meta.changes).toBe(1);
});

test('Table is dropped', async () => {
  await db.query(`CREATE TABLE IF NOT EXISTS Users (
      name TEXT,
      role TEXT
  )`);
  await deleteTable();
  const tables = await db.getQueryInterface().showAllSchemas();
  expect(tables).toEqual([]);
});
