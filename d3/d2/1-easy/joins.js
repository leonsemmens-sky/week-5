// const { seed } = require('../db/seedFn');

// const main = async () => {
//   await seed();
//   console.log('Seeded');
// };

// main();

// You know the database now. What can you do with it? Look at the name of the functions provided: what query would give you the desired columns?

const { db } = require('../db/db');

async function employeeNameAndJobTitle() {
  const [test] = await db.query(`
    SELECT employee_details.name, current_job_details.job_title
    FROM employee_details INNER JOIN current_job_details
    ON employee_details.employee_id = current_job_details.employee_id
  `);
  console.table(test);
}

// employeeNameAndJobTitle();

async function employeeOS() {
  const [test] = await db.query(`
    SELECT employee_details.name, laptop_details.os
    FROM employee_details LEFT JOIN current_job_details
    ON employee_details.employee_id = current_job_details.employee_id
    INNER JOIN laptop_details
    ON current_job_details.laptop_id = laptop_details.laptop_id
  `);
  console.table(test);
}

// employeeOS();

async function employeeNameAndPreviousJobTitles() {
  const [test] = await db.query(`
    SELECT employee_details.name, histories.job_title
    FROM employee_details INNER JOIN histories
    ON employee_details.employee_id = histories.employee_id
    ORDER BY employee_details.name
  `);
  console.table(test);
}

employeeNameAndPreviousJobTitles();
