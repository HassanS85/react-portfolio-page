import { Navbar, Container } from "react-bootstrap"
import { useState } from "react";


export const NavBar = () => {
    const [activeLink, useactiveLink] = useState('home');
    const [scrolled, useScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                useScrolled(true);
            } else {
                useScrolled(false)
            }
        }
      
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    })
    



    return (
            <Navbar bg="light" expand="lg" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={''} alt="Logo" />
                    React-Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navBar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#skills">Link</Nav.Link>
                            <Nav.Link href="#projects">Link</Nav.Link>
                        </Nav>
                        <span className="navBar-text">
                            <div className="social-icon">
                                <a href='#'><img src={} alt=""/></a>
                                <a href='#'><img src={} alt=""/></a>
                                <a href='#'><img src={} alt=""/></a>
                            </div>
                            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
}