const { Sequelize, db } = require('../db');

const LaptopDetail = db.define('laptop_detail', {
  laptop_id: { type: Sequelize.INTEGER, primaryKey: true },
  os: Sequelize.STRING,
  date_of_manufacture: Sequelize.INTEGER,
});

module.exports = { LaptopDetail };
