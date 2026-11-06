let User = require('../models/usersModel');
let jwt = require('jsonwebtoken');
let { expressjwt } = require('express-jwt');
require('dotenv').config();

var privateKey = process.env.SECRETKEY;

module.exports.signin = async function (req, res, next) {
    try {
        console.log(req.body);
        let user = await User.findOne({ email: req.body.email });
        if (!user)
            throw new Error('User not found');
  
        if (!user.authenticate(req.body.password))
            throw new Error('Email and/or password do not match.');

        let payload = {
            id: user._id,
            email: user.email,
            admin: user.admin
        };

        // Generate the token
        let token = jwt.sign(payload, privateKey, {
            algorithm: 'HS512',
            expiresIn: '20min'
        })
        
        res.json(
            {
                success: true,
                message: "User authenticated successfully",
                token: token
            }
        )
        
    } catch (err) {
        console.log(err);
        next(err);
    }
};

// log token
module.exports.logtoken = async function (req, res, next) {
    console.log(req.headers);
    next();
};

module.exports.validateToken = expressjwt(
    {
    secret: privateKey,
    algorithms: ['HS512'],
    userProperty: 'auth' // this will add the decoded token to req.auth
});

