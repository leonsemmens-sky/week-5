const { insertRow, updateRow, deleteRows } = require('../../../d1/1-easy/crud');
const { db, seed } = require('../../../d1/db/db');

beforeAll(() => seed());

test('Rose has right properties', async () => {
  await insertRow();
  const [data, _meta] = await db.query('SELECT * FROM Users WHERE name = "Rose"');
  expect(data.length).toBe(1);
  expect(data[0].name).toBe('Rose');
  expect(data[0].role).toBe('super admin');
});

test('Barrie has been updated', async () => {
  await updateRow();
  const [data, _meta] = await db.query('SELECT * FROM Users WHERE name = "Barrie"');
  expect(data[0].role).toBe('deactivated');
});

test('Val has been deleted', async () => {
  await deleteRows();
  const [data, _meta] = await db.query('SELECT * FROM Users WHERE role IS NULL');
  expect(data.length).toBe(0);
});
