const path = require('path');
const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite'),
  logging: false,
  define: {
    timestamps: false,
  },
});

module.exports = {
  db,
  Sequelize,
};
