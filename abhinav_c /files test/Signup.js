import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css'; // Make sure this CSS is linked

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Sign-in successful!');
    }, 2000);
  };

  return (
    <Container fluid className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100 justify-content-center">
        <Col md={4} sm={12}>
          <Card className="shadow-lg p-4">
            <Card.Body className="text-center">
              {/* Brand Name */}
              <h2 className="text-light mb-4 moving-text">Travon</h2>
              
              {/* Error Message */}
              {error && <Alert variant="danger">{error}</Alert>}

              {/* Sign In Form */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label className="text-light">Username</Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="Enter your username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-pill"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label className="text-light">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="rounded-pill"
                  />
                </Form.Group>

                {/* Sign In Button */}
                <Button
                  variant="warning"
                  type="submit"
                  className="w-100 rounded-pill"
                  disabled={loading}
                  style={{ padding: '12px' }}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>
              </Form>

              {/* Sign Up Link */}
              <div className="text-center mt-3">
                <span className="text-light">Don't have an account? </span>
                <Button variant="link" className="p-0" href="/signup" style={{ color: '#FFA500' }}>
                  Sign Up
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
