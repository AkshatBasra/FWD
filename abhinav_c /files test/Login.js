import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Link to your CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both fields are required!');
      return;
    }
    setError('');
    setLoading(true);
    // Simulate an API call (e.g., Firebase, backend API)
    setTimeout(() => {
      setLoading(false);
      alert('Logged in successfully!');
    }, 2000);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }} // Jet black background
    >
      <Row className="w-100">
        <Col md={8} lg={6} sm={12}> {/* Adjusted column width for better layout */}
          <Card
            className="p-4 shadow"
            style={{
              backgroundColor: '#343434', // Dark gray box for the form
              borderRadius: '20px', // Rounded corners for the card
              border: 'none',
            }}
          >
            <Card.Body className="text-center">
              {/* Create New Account Branding */}
              <h3 className="text-white mb-4" style={{ fontFamily: 'Ragitta', fontSize: '30px' }}>
                Create New Account
              </h3>

              {/* Error Message */}
              {error && <Alert variant="danger">{error}</Alert>}

              {/* Login Form */}
              <Form onSubmit={handleSubmit}>
                {/* Username Input */}
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label className="text-white">Enter New Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a unique username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ borderRadius: '10px' }}
                  />
                </Form.Group>

                {/* Password Input */}
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label className="text-white">Create Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create a secure password"
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
                  disabled={loading}
                  style={{ padding: '12px', borderRadius: '50px' }}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </Form>

              {/* Already have an account? Link */}
              <div className="text-center mt-3">
                <span className="text-white">Already have an account? </span>
                <Button variant="link" className="p-0" href="/signin" style={{ color: '#FFEB3B' }}>
                  Sign In
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
