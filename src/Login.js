import { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the payload object to send in the request
        const payload = { username, password };

        // Make the POST request with the payload
        axios.post('http://localhost:5000/login', payload)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                navigate('/Dashboard');
            })
            .catch(err => {
                console.error("Registration error:", err.response || err);
                // If there's an error, you can display an error message or log it
            });
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <Link
                to={'/Register'}
                component="button"
                style={{ fontFamily: "inherit", fontSize: "inherit" }}
            >
                Register
            </Link>
        </div>
    );
};

export default Login;
