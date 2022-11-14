const { Model, DataTypes } = require("sequelize");
const { db } = require("../db/db");

class current_job_detail extends Model { }

current_job_detail.init({
    employee_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "employee_detail",
            key: "employee_id"
        }
    },
    job_title: {
        type: DataTypes.TEXT
    },
    salary: {
        type: DataTypes.INTEGER
    },
    laptop_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "laptop_detail",
            key: "laptop_id"
        }
    }
}, {
    sequelize: db
})

module.exports = current_job_detail