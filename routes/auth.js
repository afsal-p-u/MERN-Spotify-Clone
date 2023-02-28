const router = require("express").Router();
const { User, } = require("../models/user");
const CryptJS = require('crypto-js')
const jwt  = require('jsonwebtoken')

router.post("/", async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user)
        return res.status(400).send({message: "Invalid username or password!"})

    const validPassword = await CryptJS.AES.decrypt(req.body.password, process.env.SECRET_KEY)
    if(!validPassword)
        return res.status(400).send({message: "Invalid username or password!"})
    
    const token = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
        name: user.name
    }, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})

    const {password, ...others} = user._doc;

    res.status(200).send({ message: "Signin please wait...", data: {...others, token } }) 
 
    })

module.exports = router