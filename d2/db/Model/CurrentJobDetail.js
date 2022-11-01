const { Sequelize, db } = require('../db');

const CurrentJobDetail = db.define('current_job_detail', {
  employee_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  job_title: Sequelize.STRING,
  salary: Sequelize.INTEGER,
  laptop_id: Sequelize.INTEGER,
});

module.exports = { CurrentJobDetail };
