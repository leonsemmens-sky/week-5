const { Model, DataTypes } = require("sequelize");
const { db } = require("../db/db");
const current_job_detail = require("./current_job_detail.model");
const history = require("./history.model");

class employee_detail extends Model { }

employee_detail.init({
    employee_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    date_of_birth: {
        type: DataTypes.INTEGER
    },
    gender: {
        type: DataTypes.STRING(1)
    }
}, {
    sequelize: db
})

employee_detail.hasOne(current_job_detail)
current_job_detail.belongsTo(employee_detail)

employee_detail.hasMany(history)
history.belongsTo(employee_detail)

module.exports = employee_detail