let User = require('../models/users');
let jwt = require('jsonwebtoken');
let { expressjwt } = require('express-jwt');
require('dotenv').config()

let privateKey = process.env.SECRETKEY;

module.exports.signin = async function (req, res, next) {
    try {

        console.log(req.body);
        let user = await User.findOne({ "email": req.body.email });
        if (!user)
            throw new Error('User not found.');
        if (!user.authenticate(req.body.password))
            throw new Error("Email and/or password don't match.");

        let payload = {
            id: user._id,
            email: user.email,
            admin: user.admin
        }

        // Generates the token
        let token = jwt.sign(payload, privateKey, {
            algorithm: 'HS512',
            expiresIn: "20min"
        })

        // Sends the token in the body of the response to the client.
        res.json(
            {
                success: true,
                message: "User authenticated successfully.",
                token: token
            })
    } catch (error) {
        console.log(error);
        next(error);
    }

};

module.exports.logtoken = async function (req, res, next) {
    console.log(req.headers);
    next();
}

module.exports.validateToken = expressjwt({
    secret: privateKey,
    algorithms: ['HS512'],
    userProperty: 'auth' 
});