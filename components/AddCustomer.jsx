import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function AddCustomer(){
    return(
    <>
    <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Mapping Manager</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Manager 1</option>
                            <option>Manager 1</option>
                        </Form.Select>
                    </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary">Save changes</Button>
        </Modal.Footer>
    </Modal.Dialog>
    </>
    );
}

export default AddCustomer;