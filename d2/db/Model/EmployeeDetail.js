const { Sequelize, db } = require('../db');

const EmployeeDetail = db.define('employee_detail', {
  employee_id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.STRING,
  date_of_birth: Sequelize.INTEGER,
  gender: Sequelize.STRING(1),
});

module.exports = { EmployeeDetail };
