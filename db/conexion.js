const Sequelize = require('sequelize')

const sequelize = new Sequelize('books',process.env.DBUSER,null,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;