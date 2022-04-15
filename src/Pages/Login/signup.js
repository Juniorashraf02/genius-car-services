import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const Signup = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate('');
    // const [errors, setErrors]= useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const passward = passRef.current.value;
        const email = emailRef.current.value;
        console.log(passward, email, name);
        createUserWithEmailAndPassword(email, passward);
    }

    if(user){
        navigate('/home')
    }

    const navigateToLogin = e => {
        navigate(`/login`);
    }

    // const handleError = () => {
    //     const msg = 'insert an valid email';
    //     setErrors(msg);

    // }


   

    return (
        <div>
            <h1>Please Sign up</h1>
            <hr />

            <div className="container ">
                <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={nameRef} className="text-center" type="text" placeholder="Enter your name"  required /> <br />

                        <Form.Control ref={emailRef} className="text-center" type="email" placeholder="name@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
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
                    <Button variant="primary" type="submit">Sign Up</Button>
                </Form>
                <p>Already resigtered? <Link to="/login" onClick={navigateToLogin} ><u className='pe-auto'>Log in now</u></Link></p>
            </div>
        </div>
    );
};

export default Signup;