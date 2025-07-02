const { DataTypes } = require("sequelize")
const db = require("../config/db")


const order =db.define("order",{
    
       item:DataTypes.STRING,
       price:DataTypes.DECIMAL(10,2)

})



module.exports = order