import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css"; // Custom styles for animations and effects

function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                {/* Left Section: Home Icon */}
                <Button
                    variant="link"
                    href="/" // Link to the home page
                    className="home-button p-0 me-4" // Added 'me-4' for more space
                    aria-label="Home"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                        height={24}
                        width={24}
                    >
                        <desc>{"Home 2 Streamline Icon: https://streamlinehq.com"}</desc>
                        <g id="home-2--door-entrance-home-house-roof-round-shelter">
                            <path
                                id="Subtract"
                                fill="#ffffff"
                                fillRule="evenodd"
                                d="M6.09272 1.26474c0.53629 -0.407352 1.27834 -0.407351 1.81463 0.00001l0.66005 0.50137c1.9389 1.47275 3.5998 3.27911 4.9051 5.33443l0.2118 0.3334c0.4228 0.66577 -0.0555 1.5361 -0.8442 1.5361h-0.6913c0.04 0.91907 -0.0102 1.84095 -0.1506 2.75225-0.1394 0.9056-0.9186 1.574-1.8349 1.574H8.25V9.99991c0-0.69036-0.55964-1.25-1.25-1.25s-1.25 0.55964-1.25 1.25v3.29639H3.83675c-0.91623 0-1.69547-0.6684-1.83492-1.574-0.14034-0.9113-0.19056-1.83318-0.15056-2.75225h-0.69145c-0.78868 0-1.266967-0.87034-0.844143-1.53611l0.21178-0.33346C1.83275 5.0452 3.49374 3.23888 5.43258 1.76617l0.66014-0.50143Z"
                                clipRule="evenodd"
                            />
                        </g>
                    </svg>
                </Button>

                {/* Center Section: Animated Brand */}
                <Navbar.Brand className="animated-brand" href="/">
                    {props.Heading}
                </Navbar.Brand>
                <Nav className="me-auto"></Nav>

                {/* Right Section: Dropdown Buttons and Login Button */}
                <div className="d-flex align-items-center">
                    {/* Dropdown Menu */}
                    <DropdownButton
                        align="end"
                        title="Quick Nav"
                        id="dropdown-menu-align-end-1"
                        className="me-3"
                        container='body'
                        popperConfig={{
                            modifiers: [
                                {
                                    name: "preventOverflow",
                                    options: {
                                        boundary: "viewport", // Ensure dropdown doesn't get clipped
                                    },
                                },
                            ],
                        }}
                    >
                        <Dropdown.Item href="/Food" target="_blank">
                            Food
                        </Dropdown.Item>
                        <Dropdown.Item href="/ShortTrip" target="_blank">
                            Short Trip
                        </Dropdown.Item>
                        <Dropdown.Item href="/LongTrip" target="_blank">
                            Long Trip
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/Dashboard" target="_blank">
                            Dashboard
                        </Dropdown.Item>
                    </DropdownButton>

                    {/* Login Button */}
                    <Button
                        variant="outline-light"
                        href="/login" // Link to login page
                        className="login-button"
                    >
                        Login
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavBar;
