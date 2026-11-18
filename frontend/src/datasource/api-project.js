let apiURL = import.meta.env.VITE_APP_APIURL;

const list = async ()=>{
    // Retrieve the list of projects
    try {
        let response = await fetch(apiURL + "/api/projects");

        return response.json();
        
    } catch (error) {
        console.log(error);
    }
}

export { list }