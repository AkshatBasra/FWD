import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {Alert, Button, Card, Col, Form, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

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
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minWidth:'100vh', minHeight: '100vh', backgroundColor: '#0a0a0a' }} // Jet black background
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
                            {/*{error && <Alert variant="danger">{error}</Alert>}*/}

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
                                    Sign Up
                                </Button>
                            </Form>

                            {/* Already have an account? Link */}
                            {/*<div className="text-center mt-3">*/}
                            {/*    <span className="text-white">Already have an account? </span>*/}
                            {/*    <Button variant="link" className="p-0" href="/Register" style={{ color: '#FFEB3B' }}>*/}
                            {/*        Sign Up*/}
                            {/*    </Button>*/}
                            {/*</div>*/}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        // <div className="box" style={{ float: "none" }}>
        //     <div>
        //         <h2>Register</h2>
        //     </div>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <input
        //                 type="text"
        //                 autoComplete="off"
        //                 name="username"
        //                 placeholder="User Name"
        //                 onChange={(e) => setUsername(e.target.value)}
        //                 required
        //             />
        //             <br /><br />
        //             <input
        //                 type="password"
        //                 autoComplete="off"
        //                 name="password"
        //                 placeholder="Password"
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 required
        //             />
        //             <br /><br />
        //             <button
        //                 className="button_style"
        //                 color="primary"
        //                 type="submit"
        //             >
        //                 Register
        //             </button>
        //             <br />
        //             <Link
        //                 to={'/Login'}
        //                 component="button"
        //                 style={{ fontFamily: "inherit", fontSize: "inherit" }}
        //             >
        //                 Login
        //             </Link>
        //         </div>
        //     </form>
        // </div>
    );
};

export default Register;
