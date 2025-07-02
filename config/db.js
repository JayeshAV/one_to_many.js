const sequelize = require('sequelize')


const db =new sequelize({
    host:"localhost",
    dialect:"mysql",
    username:"root",
    password:"12345",
    database:"onetomany"
})


module.exports = db
