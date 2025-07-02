const { where } = require("sequelize")
const Order = require("../models/order")
const User = require("../models/user")


exports.createUser = async (req, res) => {

    const { name, email } = req.body

    if (!name || !email) return res.status(400).json({ message: "All Fields are required !" })

    const users = await User.findOne({ where: { email } })
    if (users) return res.status(201).json({ message: "you already registered !" })

    try {

        const user = await User.create({
            name, email
        })

        res.status(200).json({ message: "User Created Successfully !", user })

    } catch (error) {
        res.status(500).json({ message: "something went wrong !" })
    }


}

exports.createOrder = async (req, res) => {

    const { item, price, userId } = req.body

    if (!item || !price || !userId) return res.status(400).json({ message: "All fields are required !" })
    try {

        const order = await Order.create({
            item, price, userId
        })
        res.status(200).json({ message: "oreder succesfully !", order })
    } catch (error) {
        res.status(500).json({ message: "something went wrong !" })
    }
}



exports.getAll = async (req, res) => {

    try {

        const user = await User.findAll({
            attributes: ['id', 'name', 'email']
        })

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: "something went wrong !" })
    }
}

exports.getUserByid=async(req,res)=>{

    const {id} = req.params

    if(!id) return res.status(404).json({message:"User Not Found !"})

    try {
        
        const user = await User.findOne({
            attributes:['id','name','email'],
            where:{id}
        })
        
        if(user===null) return res.status(404).json({message:"User Not Found !"})
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: "something went wrong !" })
        
    }


}


exports.getUserOrders = async (req, res) => {


    const { id } = req.params

    if (!id) return res.status(404).json({ message: "User not found !" })


    try {   

        const orders = await Order.findAll({
            attributes:['id',"item","price","userId"],
            where: { userId: id },
            include: {
                
            model: User,
            attributes:['id',"name","email"],

          }
            
        }
        )

        if(orders.length === 0) return res.status(404).json({message:"orders not found !"})

        res.status(200).json(orders)

    } catch (error) {
        res.status(500).json({ message: "something went wrong !" })
    }


}