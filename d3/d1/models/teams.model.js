const { Model, DataTypes } = require("sequelize");
const { dbMedium } = require("../db/db-medium");

class Team extends Model { }

Team.init({
    TeamID: {
        type: DataTypes.INTEGER
    },
    Year: {
        type: DataTypes.TEXT
    },
    Revenue: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: dbMedium
})

module.exports = Team