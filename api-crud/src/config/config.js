const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "sesiCrud", 
    "root", 
    "root", 
    {
        host: "localhost", //host do banco
        port: 3306, //mySQL
        dialect: "mysql", 
        logging: false
    }
)

sequelize.authenticate()
  .then(() => {
    console.log ("conexão estabelecia com sucesso MYSQL")
  })
  .catch((err) => {
    console.error("Não foi possivel se conectar MySQL")
  })

  module.exports = sequelize
