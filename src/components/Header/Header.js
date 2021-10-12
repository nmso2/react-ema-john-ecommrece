import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header fixed-top bg-white">
            <img width="180px" className="img-fluid" src={logo} alt="" />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Nav.Link href="#shop"><Link className="navbar-brand" to="/">Ema-John</Link></Nav.Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#shop"><Link className="text-decoration-none nav-link" to="/shop">Shop</Link></Nav.Link>
                            <Nav.Link href="#order"><Link className="text-decoration-none nav-link" to="/order">Order</Link></Nav.Link>
                            <Nav.Link href="#inventory"><Link className="text-decoration-none nav-link" to="/inventory">Manage Inventory</Link></Nav.Link>

                            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#categories/1"><Link className="dropdown-item" to="/categories/:catItem">Category 1</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#categories/2"><Link className="dropdown-item" to="/categories/:catItem">Category 2</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#categories/3"><Link className="dropdown-item" to="/categories/:catItem">Category 3</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {user.displayName && <Nav.Link href="#user"><Link className="text-decoration-none nav-link" to="/">Hello, {user?.displayName}</Link ></Nav.Link> }
                            {!user.displayName ? <Nav.Link href="#login"><Link className="text-decoration-none nav-link" to="/login">Login</Link ></Nav.Link> :
                                <Nav.Link href="#logout"><Link className="text-decoration-none nav-link" onClick={logOut} to="/">Logout</Link ></Nav.Link>
                            }
                            <Nav.Link href="#about"><Link className="text-decoration-none nav-link" to="/about">About</Link ></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; <h1>Header</h1>