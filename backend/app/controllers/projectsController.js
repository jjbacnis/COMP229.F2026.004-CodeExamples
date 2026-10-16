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

module.exports.getByID = async function (req, res, next) {
    try {
        let projectID = req.params.id; // or insert 'req.body.id' into the findOne query
        let project = await ProjectsModel.findOne({_id: projectID});

        res.json(
            {
                success: true,
                message: "Project Retrieved Successfully",
                data: project
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.processEdit = async function (req, res, next) {
    try {
        let projectID = req.params.id;
        let updatedProject = ProjectsModel(req.body);
        updatedProject._id = projectID; // Ensure the ID is set for the update operation

        let result = await ProjectsModel.updateOne({_id: projectID}, updatedProject);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Project Updated Successfully"
            }
        );
    } catch (err) {
        console.log(err);
        next(err);
    }
};

module.exports.processDelete = async function (req, res, next) {
    try {
        let result = await ProjectsModel.deleteOne({_id: req.params.id});
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: "Project Deleted Successfully",
                }
            );
        } else {
            throw new Error("Project not found or already deleted."
            );
        }
    } catch (err) {
        console.log(err);
        next(err);
    }
};