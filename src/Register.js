import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the payload object to send in the request
        const payload = { username, password };

        // Make the POST request with the payload
        axios.post('http://localhost:5000/register', payload)
            .then(res => {
                console.log(res);
                navigate('/login');
            })
            .catch(err => {
                console.error("Registration error:", err.response || err);
                // If there's an error, you can display an error message or log it
            });
    };

    return (
        <div className="box" style={{ float: "none" }}>
            <div>
                <h2>Register</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        autoComplete="off"
                        name="username"
                        placeholder="User Name"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <br /><br />
                    <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br /><br />
                    <button
                        className="button_style"
                        color="primary"
                        type="submit"
                    >
                        Register
                    </button>
                    <br />
                    <Link
                        to={'/Login'}
                        component="button"
                        style={{ fontFamily: "inherit", fontSize: "inherit" }}
                    >
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
