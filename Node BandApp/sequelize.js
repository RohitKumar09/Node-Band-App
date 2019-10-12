const Sequelize = require('sequelize')
const sequelize = new Sequelize('BandsManager', 'Rohit', '123456', {
  dialect: 'sqlite',
  storage: './db.sqlite3'
})


module.exports = sequelize