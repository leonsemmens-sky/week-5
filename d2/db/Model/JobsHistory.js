const { Sequelize, db } = require('../db');

const JobsHistory = db.define('history', {
  employee_id: Sequelize.INTEGER,
  job_title: Sequelize.STRING,
  date_start: Sequelize.INTEGER,
  date_end: Sequelize.INTEGER,
});

module.exports = { JobsHistory };
