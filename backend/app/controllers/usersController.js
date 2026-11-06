let UsersModel = require('../models/usersModel');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newUser = UsersModel(req.body);

        let result = await UsersModel.create(newUser);
        console.log(result);

        res.json(
            {
                success: true,
                message: "User Added Successfully",
                data: result
            }
        );
    } catch (err) {
        next(err);
    }
};

module.exports.usersList = async function (req, res, next) {
    try {
        let list = await UsersModel.find({});

        res.json(
            {
                success: true,
                message: "Users List Retrieved Successfully",
                data: list
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};