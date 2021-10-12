import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, lonInUsingGoogle, logOut } = useFirebase();
    return (
        <div style={{ width: '22rem' }} className="mt-5 pt-5 container-fluid">
            <Card className="mt-5 shadow-lg">
                <Card.Body>
                    <Form>
                        <h3>Log In</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Button type="submit" className="btn btn-primary btn-block">Log In</Button>
                        </Form.Group>


                        <p className="mt-0 mb-0 p-0">
                            New to ema-jhon? Create <Link to='/createaccount'>Account.</Link>
                        </p>
                        <p className="mt-0 mb-0 p-0">
                            or <br />
                            Log In with <Button onClick={lonInUsingGoogle} variant="outline-primary"><i class="fab fa-google"></i></Button>
                        </p>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;