const { selectPositiveRevenue } = require('../../../d1/2-medium/revenues');
const { dbMedium, seedMedium } = require('../../../db/db-medium');

beforeAll(() => seedMedium());

test('Rose has right properties', async () => {
  let [data, _meta] = await selectPositiveRevenue();
  //   const [data, _meta] = await dbMedium.query('`SELECT TeamID FROM Users WHERE revenue > 0`');
  console.log(data);
  expect(data.length).toBe(3);
  expect(data).toEqual([{ TeamID: 1 }, { TeamID: 2 }, { TeamID: 3 }]);
});
