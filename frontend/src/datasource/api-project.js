let apiURL = import.meta.env.VITE_APP_APIURL;
import { getToken } from "../components/auth/auth-helper";

const list = async () => {
    // Retrieve the list of projects
    try {
        let response = await fetch(apiURL + "/api/projects",
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }
        );

        return response.json();

    } catch (error) {
        console.log(error);
    }
}

const create = async (project) => {
    // Add a new project
    try {
        let response = await fetch(apiURL + "/api/projects",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + getToken()
                },
                body: JSON.stringify(project)
            }
        );

        return response.json();

    } catch (error) {
        console.log(error);
    }
}

const update = async (id, project) => {
    // Update a existing project
    try {
        let response = await fetch(apiURL + "/api/projects/" + id,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + getToken()
                },
                body: JSON.stringify(project)
            }
        );

        return response.json();

    } catch (error) {
        console.log(error);
    }
}

const remove = async (id) => {
    // Delete a project
    try {
        let response = await fetch(apiURL + "/api/projects/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
        });

        return response.json();

    } catch (error) {
        console.log(error);
    }
}

const getone = async (id) => {
    // Delete a project
    try {
        let response = await fetch(apiURL + "/api/projects/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
        });

        return response.json();

    } catch (error) {
        console.log(error);
    }
}

export { list, create, update, remove, getone }