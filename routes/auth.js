const router = require("express").Router();
const { User, } = require("../models/user");
// const bcrypt = require("bcrypt");
const CryptJS = require('crypto-js')

router.post("/", async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user)
        return res.status(400).send({message: "Invalid username or password!"})

    const validPassword = await CryptJS.AES.decrypt(req.body.password, process.env.SECRET_KEY)
    if(!validPassword)
        return res.status(400).send({message: "Invalid username or password!"})

    res.status(200).send({ message: "Signin please wait..." }) 
 
    })

module.exports = router