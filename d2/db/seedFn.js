const { db } = require('./db');
const { JobsHistory, EmployeeDetail, CurrentJobDetail, LaptopDetail } = require('./Model');
const { employee_detail, jobs_history, current_job_detail, laptop_detail } = require('./seedData');

const seed = async () => {
  await db.sync({ force: true });
  await JobsHistory.bulkCreate(jobs_history);
  await EmployeeDetail.bulkCreate(employee_detail);
  await CurrentJobDetail.bulkCreate(current_job_detail);
  await LaptopDetail.bulkCreate(laptop_detail);
};

module.exports = { seed };
