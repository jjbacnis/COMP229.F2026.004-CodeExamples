let ProjectsModel = require('../models/projectsModel');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newProject = ProjectsModel(req.body);

        let result = await ProjectsModel.create(newProject);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Project Added Successfully",
                data: result
            }
        );
    } catch (err) {
        next(err);
    }
};

module.exports.projectsList = async function (req, res, next) {
    try {
        let list = await ProjectsModel.find({});

        res.json(
            {
                success: true,
                message: "Projects List Retrieved Successfully",
                data: list
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.processEdit = async function (req, res, next) {
    try {
        let id = req.params.id;
        let updatedProject = req.body;

        let result = await ProjectsModel.findByIdAndUpdate(id, updatedProject, { new: true });

        res.json(
            {
                success: true,
                message: "Project Updated Successfully",
                data: result
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};