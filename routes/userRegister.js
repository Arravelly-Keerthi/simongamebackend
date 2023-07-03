const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();
router.post("/", async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        const newUser=new User({
            ...req.body,
            password:hash
        })
        await newUser.save();
        res.status(200).send('User is registered');
    }
    catch (err) {
        console.log("Error: ", err);
    }
})
module.exports = router;