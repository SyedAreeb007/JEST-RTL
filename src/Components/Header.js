import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../Assets/Images/logo.png';
import './Header.css';
import Cart from './Cart'; // Import the Cart component

const Header = () => {
    const [showCart, setShowCart] = useState(false); // State to manage cart visibility

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <>
            <Navbar expand="lg" className="bg-light">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img 
                            src={logo}
                            height="30"
                            className="d-inline-block align-top"
                            alt="E-commerce logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#categories">Categories</Nav.Link>
                            <Nav.Link href="#deals">Deals</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                        </Nav>
                        <Form className="d-flex me-3">
                            <Form.Control
                                type="search"
                                placeholder="Search for products"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            <Nav.Link href="#account">
                                <FaUser /> Account
                            </Nav.Link>
                            <Nav.Link href="#cart" onClick={toggleCart}>
                                <FaShoppingCart /> Cart 
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showCart && <Cart />}
        </>
    );
};

export default Header;
