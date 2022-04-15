import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const passward = passRef.current.value;
        const email = emailRef.current.value;
        console.log(passward,email);
    }

    const navigateToRagister = e => {
        navigate(`/signup`);
    }
    return (
        <div >
            <h1 className='text-primary m-4'>Please Login</h1>

            <div className="container ">
                <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} className="text-center" type="email" placeholder="name@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passRef} className="text-center" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" placeholder="Enter your Password" required />
                        <Form.Text className="text-muted">
                            Use uppercase, lowerscase, numbers and special characters
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Log In</Button>
                </Form>
                <p>New to genius car? <Link to="/signup" onClick={navigateToRagister} ><u className='pe-auto'>sign up now</u></Link></p>
            </div>
        </div>
    );
};

export default Login;