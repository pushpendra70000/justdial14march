import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

export default function Navigation() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home"  className='m-0 ,p-o'>
                        <img
                        src={logo}
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0 mt-50" >
                    <Link to="/" className='btn btn-link' style={{textDecoration: 'none'}}>Home</Link>
                    <Link to="/login" className='btn btn-link' style={{textDecoration: 'none'}}>login</Link>
                    <Link to="/register" className='btn btn-link' style={{textDecoration: 'none'}}>register</Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control  type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}
