const { DataTypes } = require("sequelize")
const sequelize = require("../config/config")

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
},

nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
   },
senha: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true

   }
}, {
    tableName: 'user',
    timeStamps: true 


})

module.exports = User