const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
});

async function seed() {
  await db.query(`DROP TABLE IF EXISTS Users`);
  await db.query(`CREATE TABLE Users (name TEXT, role TEXT)`);
  await db.query(
    `INSERT INTO Users (name, role) VALUES ("Zak", "user"), ("Barrie", "admin"), ("Ali", "super admin"), ("Val", null)`
  );
}

module.exports = { db, seed };
