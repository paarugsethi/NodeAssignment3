const express = require('express');
const Users = require('./User.json');
const router = express.Router();

router.get("/" ,(req, res) => {
    res.json(Users)
})

router.get("/:userid", (req, res) => {
    const user = Users.find(user => user.id === Number(req.params.userid))
    if (!user){
        res.status(400).send("User not found!");
    }
    res.status(200).json(user);
})

module.exports = router;