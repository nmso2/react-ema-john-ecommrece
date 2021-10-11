import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CreateAccount = () => {

    return (
        <div style={{ width: '22rem' }} className="mt-5 pt-5 container-fluid">
            <Card className="mt-4 shadow-lg">
                <Card.Body>
                    <Form>
                        <h3 className="mb-3">Create New Account</h3>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Re-enter Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Button type="submit" className="btn btn-primary btn-block">Log In</Button>
                        </Form.Group>

                        <p className="mt-0 mb-0 p-0">
                            Already have an account? <Link to='/login'>Login.</Link>
                        </p>
                        <p className="mt-0 mb-0 p-0">
                            or Log In with
                            <br />
                            <br />
                            <Button variant="outline-primary" ><i class="fab fa-google"></i></Button>
                        </p>

                    </Form>

                </Card.Body>
            </Card>

        </div>
    );
};

export default CreateAccount;