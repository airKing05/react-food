import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Menu() {
    return (
        <div className='mb-5 pb-5'>
            <Navbar bg="light" expand="lg" className='fixed-top'>
                <Container>
                    <Navbar.Brand ><Link to='/' className='text-decoration-none'>React-Food</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="" style={{margin: 'auto'}}>
                            <Nav.Link> <Link to="/" className='text-decoration-none'>Home</Link></Nav.Link>
                            <Nav.Link> <Link to="/create-restaurant" className='text-decoration-none'>Create Restaurant</Link></Nav.Link>
                            <Nav.Link ><Link to="/product-list" className='text-decoration-none'>Product List</Link> </Nav.Link>
                            {/* <Nav.Link ><Link to="/update-list">Update List</Link></Nav.Link> */}
                            <Nav.Link ><Link to="/search-restaurant" className='text-decoration-none'>Search Restaurant</Link></Nav.Link>
                            {
                                localStorage.getItem('result') ?  
                                    <Nav.Link ><Link to="/logout" className='text-decoration-none' >Logout</Link></Nav.Link>
                                : 
                                    <Nav.Link ><Link to="/login" className='text-decoration-none' >Login</Link></Nav.Link>
                            }
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
