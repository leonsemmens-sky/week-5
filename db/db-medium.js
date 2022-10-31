const { Sequelize } = require('sequelize');

const dbMedium = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
});

async function seedMedium() {
  await dbMedium.query(`DROP TABLE IF EXISTS Users`);
  await dbMedium.query(`CREATE TABLE Users (TeamID INTEGER, Year TEXT, Revenue INTEGER)`);
  await dbMedium.query(
    `INSERT INTO Users (TeamID, Year, Revenue) VALUES (1, "2020", 60), (1, "2021", 40),(2, "2020", -10),(2, "2021", 100),(3, "2020", -30),(3, "2021", 50)`
  );
}

module.exports = { dbMedium, seedMedium };
