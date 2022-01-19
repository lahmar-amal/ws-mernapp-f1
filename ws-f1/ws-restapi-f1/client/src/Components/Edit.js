import React from "react";
import { Button, Form } from "react-bootstrap";

const Edit = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={newContact.email}
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                    <Form.Label>name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={newContact.name}
                        placeholder="name"
                        onChange={handleChange}
                    />
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={newContact.phone}
                        placeholder="phone"
                        onChange={handleChange}
                    />
                    <Form.Label>Adress</Form.Label>
                    <Form.Control
                        type="text"
                        name="adress"
                        value={newContact.adress}
                        placeholder="enter your adress pls"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleContact}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Edit;
