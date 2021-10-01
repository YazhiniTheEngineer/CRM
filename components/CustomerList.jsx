import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function CustomerList(){
    return(
        <>
        <Modal.Dialog>
            <Modal.Header >
                <Modal.Title>Customer</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Customer Name</p>
                <p>Customer Email</p>
                <p>Customer's Manager </p>
            <Modal.Footer>
                <Button variant="primary">View Logs</Button>
                <Button variant="primary">Create Review</Button>
            </Modal.Footer>
            </Modal.Body>
        </Modal.Dialog>
        </>
    );
}
export default CustomerList; 