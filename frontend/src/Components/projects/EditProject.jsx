import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getone, update } from "../../datasource/api-project";
import ProjectModel from "../../datasource/projectModel";
import ProjectForm from "./ProjectForm";


function EditProject() {
    const navigate = useNavigate();
    const { id } = useParams()
    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        getone(id)
            .then((res) => {
                if (res.success) {
                    setProject(res.data || []);
                }
                else {
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }, [id, navigate]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // cancel the form submission.

        update(id, project)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate("/projects/list");
                }
                else {
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
                    <h1>Add Project Item</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ProjectForm
                        project={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditProject;