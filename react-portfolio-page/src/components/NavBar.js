import { Navbar, Container } from "react-bootstrap"

export const NavBar = () => {
    return (
            <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="Logo" />
                React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navBar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        )
}