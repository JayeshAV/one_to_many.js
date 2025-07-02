const express = require('express')
const db = require('./config/db')
const Order = require('./models/order')
const User = require('./models/user')
 require('dotenv').config()
const app = express()

const productControl = require("./routes/order")

User.hasMany(Order)
Order.belongsTo(User)

db.authenticate()
.then((res) => console.log(`db connected successfully `))
.catch((err) => console.log(`db cant connected`, err))

Order.sync()
.then((res)=>console.log(`order tables is created`))
.catch((err)=>console.log(`order tables is not created !`))

// {alter:true}

User.sync( {alter:true})
.then((res)=>console.log(`order tables is created`))
.catch((err)=>console.log(`order tables is not created !`))

const PORT = process.env.PORT

app.use(express.json())
app.use("/api",productControl)


app.listen(PORT, () => {
    console.log(`server is running on the ${PORT}`);
})