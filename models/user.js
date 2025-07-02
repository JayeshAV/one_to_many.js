const { DataTypes } = require("sequelize")
const db = require("../config/db")


const user =db.define("user",{

    name:DataTypes.STRING,
    email:{
        type:DataTypes.STRING,
        unique:true
    }

})



module.exports = user