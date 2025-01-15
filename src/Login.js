import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Alert, Button, Card, Col, Form, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import './Login.css';

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
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minWidth:'100%', minHeight: '100vh', backgroundColor: '#0a0a0a' }} // Jet black background
        >
            <Row className="w-100">
                <Col md={8} lg={6} sm={12}> {/* Adjusted column width for better layout */}
                    <Card
                        className="p-4 shadow"
                        style={{
                            backgroundColor: '#343434', // Dark gray box for the form
                            borderRadius: '20px', // Rounded corners for the card
                            border: 'none',
                            alignItems: 'center'
                        }}
                    >
                        <Card.Body className="text-center">
                            {/* Create New Account Branding */}
                            <h3 className="text-white mb-4" style={{ fontFamily: 'Ragitta', fontSize: '30px' }}>
                                Log In
                            </h3>

                            {/* Error Message */}
                            {error && <Alert variant="danger">{error}</Alert>}

                            {/* Login Form */}
                            <Form onSubmit={handleSubmit}>
                                {/* Username Input */}
                                <Form.Group controlId="formUsername" className="mb-3">
                                    <Form.Label className="text-white">Enter Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </Form.Group>

                                {/* Password Input */}
                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Label className="text-white">Enter Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        style={{ borderRadius: '10px' }}
                                    />
                                </Form.Group>

                                {/* Login Button */}
                                <Button
                                    variant="warning"
                                    type="submit"
                                    className="w-100 rounded-pill"
                                    // disabled={loading}
                                    style={{ padding: '12px', borderRadius: '50px' }}
                                >
                                    Log In
                                </Button>
                            </Form>

                            {/* Already have an account? Link */}
                            <div className="text-center mt-3">
                                <span className="text-white">Don't have an account? </span>
                                <Button variant="link" className="p-0" href="/Register" style={{ color: '#FFEB3B' }}>
                                    Sign In
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

        // <div>
        //     <h2>Login</h2>
        //     {error && <p style={{ color: 'red' }}>{error}</p>}
        //     <form onSubmit={handleSubmit}>
        //         <input
        //             type="text"
        //             placeholder="Username"
        //             value={username}
        //             onChange={(e) => setUsername(e.target.value)}
        //             required
        //         />
        //         <input
        //             type="password"
        //             placeholder="Password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             required
        //         />
        //         <button type="submit">Login</button>
        //     </form>
        //     <Link
        //         to={'/Register'}
        //         component="button"
        //         style={{ fontFamily: "inherit", fontSize: "inherit" }}
        //     >
        //         Register
        //     </Link>
        // </div>
    );
};

export default Login;
