const { Model, DataTypes } = require("sequelize");
const { db } = require("../db/db");
const current_job_detail = require("./current_job_detail.model");

class laptop_detail extends Model { }

laptop_detail.init({
    laptop_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    os: {
        type: DataTypes.STRING
    },
    date_of_manufacture: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: db
})

laptop_detail.hasOne(current_job_detail)
current_job_detail.belongsTo(laptop_detail)

module.exports = laptop_detail