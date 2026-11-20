import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getone, update } from "../../datasource/api-project";
import ProjectModel from "../../datasource/projectModel";


function EditProject() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the project ID from the URL parameters
    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('')
    
    useEffect(() => {
        getone(id)
            .then((res) => {
                if (res.success) {
                    setProject(res.data || []);
                } else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // cancel the default form submission behavior

        update(id, project)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate("/projects/list"); // Navigate to the project list page after successful creation
                } else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Edit Project Item</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <form onSubmit={handleSubmit} className="form">
                        <input type="hidden" name="id" value={project.id || ""} />

                        <div className="form-group">
                            <label htmlFor="titleTextField">Title</label>
                            <input
                                id="titleTextField"
                                name="title"
                                className="form-control"
                                placeholder="Enter the title of the project"
                                value={project.title || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="CompletionTextField">Completion</label>
                            <input
                                id="CompletionTextField"
                                name="completion"
                                type="date"
                                className="form-control"
                                value={project.completion ? new Date(project.completion).toISOString().split('T')[0] : ""}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="descriptionTextField">Description</label>
                            <textarea
                                id="descriptionTextField"
                                name="description"
                                className="form-control"
                                placeholder="Enter the description of the project"
                                value={project.description || ""}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button className="btn btn-primary" type="submit">
                            <i className="fas fa-edit"></i> Submit
                        </button>
                        &nbsp; &nbsp;
                        <button className="btn btn-warning" type="button" onClick={() => navigate(-1)} >
                            <i className="fas fa-undo"></i>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProject;