// const { seed } = require('../db/seedFn');

// const main = async () => {
//   await seed();
//   console.log('Seeded');
// };

// main();

// You know the database now. What can you do with it? Look at the name of the functions provided: what query would give you the desired rows?

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
