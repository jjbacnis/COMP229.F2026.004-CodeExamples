import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-project';
import ListProjectItem from './ListProjectItem';

function ListProject() {
    const [projectList, setProjectList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('')

    const LoadProject = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setProjectList(res.data || []);
                }
                else{
                    setErrorMsg(res.message);
                }
            })
            .catch((err) => {
                setErrorMsg(err.message);
                console.log(err);
            })
            .finally(()=>{
                setIsLoading(false);
            });
    };

    useEffect(() => {
        LoadProject();
    }, []);

return (
        //   -- Main Content --
        <main className="container">
            <div className="row">
                <h1>Project List</h1>
                <p className="flash"><span>{errorMsg}</span></p>
                <div>
                    <Link to="/projects/add" className="btn btn-primary align-self-end" role="button">
                        <i className="fas fa-plus-circle"></i>
                        Add a new Item
                    </Link>
                </div>
                <br />
                <br />
                <div className="table-responsive" >
                    {isLoading && <div>Loading...</div>}
                    {!isLoading && console.log("Project List: ", projectList)}
                    {!isLoading && projectList.length === 0 && <div>No projects found.</div>}
                    {!isLoading && projectList.length > 0 &&
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                {/* -- Header Row-- */}
                                <tr>
                                    <th className="text-center">Title</th>
                                    <th className="text-center">Completion</th>
                                    <th className="text-center">Description</th>
                                    <th className="text-center" colSpan="3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* -- Repeatable Template Row -- */}
                                {projectList.map(projectItem =>
                                    <ListProjectItem
                                        key={projectItem.id}
                                        project={projectItem}
                                        onRemove={LoadProject} />
                                )}
                            </tbody>
                        </table>}
                </div>
            </div >
        </main >)
}

export default ListProject;