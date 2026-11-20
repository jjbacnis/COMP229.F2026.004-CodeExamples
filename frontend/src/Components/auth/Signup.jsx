import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { create } from "../../datasource/api-user";
import UserModel from "../../datasource/userModel";

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(new UserModel());
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (user.password !== document.getElementById("confirmPassword").value) {
            setErrorMsg("Passwords do not match");
        } else {
            create(user).then(data => {
                if (data && data.success) {
                    alert(data.message);
                    navigate("/");
                }
                else {
                    setErrorMsg(data.message);
                }
            }) .catch(error => {
                console.error("Error during signup:", error);
                setErrorMsg("An error occurred during signup. Please try again.");
            });
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {errorMsg && <p>{errorMsg}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={user.firstname}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={user.lastname}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
    );
};

export default Signup;