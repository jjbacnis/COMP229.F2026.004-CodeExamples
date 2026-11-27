let ProjectsModel = require('../models/projects');
let UsersModel = require('../models/users');

module.exports.processAdd = async function (req, res, next) {
    try {
        let newProject = ProjectsModel(req.body);
        newProject.owner = req.auth.id; // Assign the owner of the project to the authenticated user

        let result = await ProjectsModel.create(newProject);
        console.log(result);

        res.json(
            {
                success: true,
                message: "Project added successfully.",
                data: result
            }
        );

    } catch (error) {
        next(error);
    }
};

module.exports.projectsList = async function (req, res, next) {

    try {
        let list = await ProjectsModel.find({});

        res.json({
            success: true,
            message: "Projects list retrieved successfully.",
            data: list
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.processEdit = async function (req, res, next) {

    try {
        let projectId = req.params.id;
        let updatedProject = ProjectsModel(req.body);
        updatedProject._id = projectId;
        updatedProject.owner = req.auth.id; // Assign the owner of the project to the authenticated user

        let result = await ProjectsModel.updateOne({ _id: projectId }, updatedProject);
        console.log(result);

        res.json({
            success: true,
            message: "Project updated successfully.",
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.getByID = async function (req, res, next) {

    try {
        let projectId = req.params.id;
        let project = await ProjectsModel.findOne({ _id: projectId });

        res.json({
            success: true,
            message: "Project retrieved successfully.",
            data: project
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.processDelete = async function (req, res, next) {

    try {
        let projectId = req.params.id;
        let result = await ProjectsModel.deleteOne({ _id: projectId });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "Project deleted successfully."
            });
        }
        else {
            // Express will catch this on its own.
            throw new Error('Project not deleted. Are you sure it exists?')
        }

    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.hasAuthorization = async function(req, res, next){

    try {
        let id = req.params.id
        let projectItem = await ProjectsModel.findById(id).populate('owner');
        console.log(projectItem);

        // If there is no item found.
        if (projectItem == null) {
            throw new Error('Item not found.') // Express will catch this on its own.
        }
        else if (projectItem.owner != null) { // If the item found has a owner.

            if (projectItem.owner.id != req.auth.id) { // If the owner differs.

                let currentUser = await UsersModel.findOne({_id: req.auth.id}, 'admin');
  
                if(currentUser.admin != true){ // If the user is not a Admin

                    console.log('====> Not authorized');
                    return res.status(403).json(
                        {
                            success: false,
                            message: 'User is not authorized to modify this item.'
                        }
                    );
                }
            }
        }

        // If it reaches this point, runs the next middleware.
        next();
    } catch (error) {
        console.log(error);   
        next(error);
    }
}