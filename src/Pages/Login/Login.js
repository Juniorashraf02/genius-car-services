import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import auth from './../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate('');
    const location = useLocation('');
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const password = passRef.current.value;
        const email = emailRef.current.value;
        console.log(password,email);
        signInWithEmailAndPassword(email, password)
    }

    
    if(user){
        navigate(from, { replace: true });
    }



    return (
        <div >
            <h1 className='text-primary m-4'>Please Login</h1>

            <div className="container ">
                <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} className="text-center" type="email" placeholder="name@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" required />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passRef} className="text-center"  type="password" placeholder="Enter your Password" required />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Log In</Button>
                </Form>
                <p>New to genius car? <Link to="/signup"><u className='pe-auto'>sign up now</u></Link></p>
            </div>
        </div>
    );
};

export default Login;