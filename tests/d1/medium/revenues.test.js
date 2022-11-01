const { selectPositiveRevenue } = require('../../../d1/2-medium/revenues');
const { dbMedium, seedMedium } = require('../../../db/db-medium');

beforeAll(() => seedMedium());

test('Returns teams with positive revenue in year 2021 ', async () => {
  let [data, _meta] = await selectPositiveRevenue();
  //   const [data, _meta] = await dbMedium.query('`SELECT TeamID FROM Teams WHERE revenue > 0`');
  console.log(data);
  expect(data.length).toBe(3);
  expect(data).toEqual([{ TeamID: 1 }, { TeamID: 2 }, { TeamID: 3 }]);
});
