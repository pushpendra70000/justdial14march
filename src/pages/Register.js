import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

export default function Register() {
  return (
      <> 
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
        <Modal.Dialog>
          <Modal.Header closeButton >
            <Modal.Title >register</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="button">
          register
        </Button>
      </Form>
          </Modal.Body>
        </Modal.Dialog>
    </div>

    
    </>    
  )
}
