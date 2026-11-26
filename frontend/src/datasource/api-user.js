let apiURL = import.meta.env.VITE_APP_APIURL;

const create = async (user) => {
    // Add a new user
    try {
        let response = await fetch(apiURL + "/api/users",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(user)
            }
        );

        return response.json();

    } catch (error) {
        console.log(error);
    }
}

const signin = async (cred) => {
    // Authenticate an user
    try {
        let response = await fetch(apiURL + "/api/auth/signin",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(cred)
            }
        );

        return response.json();

    } catch (error) {
        console.log(error);
    }
}

export { create, signin }