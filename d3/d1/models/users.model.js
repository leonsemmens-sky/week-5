const { Model, DataTypes } = require("sequelize");

class User extends Model { }

// User.init({
//     name: {
//         type: DataTypes.TEXT
//     },
//     role: {
//         type: DataTypes.TEXT
//     }
// })

module.exports = User