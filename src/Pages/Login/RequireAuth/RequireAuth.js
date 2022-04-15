import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './../../../firebase.init';
import {Spinner} from 'react-bootstrap';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();

    if(loading){
       return <div className='container align-items-center w-100 m-5 p-5'>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
       
       </div>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;