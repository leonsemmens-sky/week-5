const { dbMedium } = require('../../db/db-medium');

//Query the table below.  Select the teamID of any team that had a positive revenue in "2021"
//TeamID (Integer) ,  Year (Text),  Revenue (Integer)
// 1               |   "2020"      |  60
// 1               |   "2021"      |  40
// 2               |   "2020"      |  -10
// 2               |   "2021"      |  100
// 3               |   "2020"      |  -30
// 3               |   "2021"      |  50

async function selectPositiveRevenue() {
  return dbMedium.query();
}

module.exports = { selectPositiveRevenue };
