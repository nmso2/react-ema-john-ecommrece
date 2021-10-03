import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header fixed-top bg-white">
            <img width="180px" className="img-fluid" src={logo} alt="" />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className="navbar-brand" to="/">Ema-John</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="text-decoration-none nav-link" to="/shop">Shop</Link>
                            <Link className="text-decoration-none nav-link" to="/order">Order</Link>
                            <Link className="text-decoration-none nav-link" to="/inventory">Manage Inventory</Link>
                            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link className="dropdown-item" to="/categories/:catItem">Category 1</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="dropdown-item" to="/categories/:catItem">Category 2</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="dropdown-item" to="/categories/:catItem">Category 3</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link className="text-decoration-none nav-link" to="/about">About</Link >
                            <Link className="text-decoration-none nav-link" to="/news">News</Link >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; <h1>Header</h1>