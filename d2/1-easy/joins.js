// const { seed } = require('../db/seedFn');

// const main = async () => {
//   await seed();
//   console.log('Seeded');
// };

// main();

const { db } = require('../db/db');

async function employeeNameAndJobTitle() {
  const test = await db.query(``);
  console.log(test);
}

employeeNameAndJobTitle();

async function employeeOS() {
  const test = await db.query(``);
  console.log(test);
}

employeeOS();
