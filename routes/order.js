const express = require('express')
const { createUser , getAll , createOrder , getUserOrders, getUserByid} = require('../controllers/orderController')
const router = express.Router()


router.post("/create",createUser)
router.post("/order",createOrder)
router.get("/users",getAll)
router.get("/user/:id",getUserByid)
router.get("/myorders/:id",getUserOrders)



module.exports = router