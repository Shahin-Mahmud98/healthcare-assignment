import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
const Register = () => {
    const { signUpp, handleName, handleEmail, handlePass, error } = useAuth()

    return (
        <Container>
            <div className="w-75 mx-auto">

                <div className="py-5">
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onBlur={handleName} type="text" placeholder="Enter Your Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                  </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={signUpp} variant="primary" type="button">
                            Sign up
              </Button>
                        <p>{error}</p>


                    </div>
                </div>
            </div>
        </Container>
    );
};


export default Register;