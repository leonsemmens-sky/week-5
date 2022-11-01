const { selectPositiveRevenue } = require('../../../d1/2-medium/revenues');
const { dbMedium, seedMedium } = require('../../../db/db-medium');

beforeAll(() => seedMedium());

test('Returns teams with positive revenue in year 2021 ', async () => {
  let [data, _meta] = await selectPositiveRevenue();
  console.log(data);
  expect(data.length).toBe(3);
  expect(data).toEqual([{ TeamID: 1 }, { TeamID: 2 }, { TeamID: 3 }]);
});
