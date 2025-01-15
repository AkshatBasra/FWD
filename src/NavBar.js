import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">TravOn</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="/Login">Login</a>&nbsp;&nbsp;&nbsp;
                        <a href="/Dashboard">Dashboard</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;