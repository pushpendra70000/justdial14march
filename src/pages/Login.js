import React from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home from './Home' 
export default function Login() {
    return ( 
      <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton >
          <Modal.Title >Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="button">
        login
      </Button>
    </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
    )
}
