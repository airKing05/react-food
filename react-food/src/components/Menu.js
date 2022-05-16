import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Menu() {
    return (
        <div>


            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand ><Link to='/'>React-Food</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link to="/">Home</Link></Nav.Link>
                            <Nav.Link> <Link to="/create-restaurant">Create Restaurant</Link></Nav.Link>
                            <Nav.Link ><Link to="/product-list">Product List</Link> </Nav.Link>
                            <Nav.Link ><Link to="/update-list">Update List</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
