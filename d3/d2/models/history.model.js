const { Model, DataTypes } = require("sequelize");
const { db } = require("../db/db");

class history extends Model { }

history.init({
    employee_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "employee_detail",
            key: "employee_id"
        }
    },
    job_title: {
        type: DataTypes.STRING
    },
    date_start: {
        type: DataTypes.INTEGER
    },
    date_end: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: db
})

module.exports = history