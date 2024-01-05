const router = require('express').Router();
let User = require('../Models/users.js')

router.route ("/register").post((req,res) => { 
    const username = req.body.username;
    const userID = Number(req.body.userID) ;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;


    const newUser = new User({
        username,
        userID,
        email,
        password,
        role
    })

    newUser.save().then(() => {
        res.json("User is registered")
    }).catch((err) => {
        console.log(err);
    })
}) 



module.exports = router;