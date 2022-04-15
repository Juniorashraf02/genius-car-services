import React from 'react';
import google from '../../../images/icon/google.png';
import facebook from '../../../images/icon/facebook.png';
import github from '../../../images/icon/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (user || gitUser) {
        navigate('/home');
    }
    if (error || gitError) {
        errorElement = <p className="text-danger fw-bold">Error: {error?.message}{gitError?.message}</p>  
    }
    if (loading || gitLoading) {
        return <p className='text-primary fs-1'>Loading...</p>;
    }

    return (
        <div>

            <div className="d-flex container mx-auto text-center justify-content-center">
                <div className="bg-muted w-25 h-25"> <hr /> </div>
                <div className="px-4">or</div>
                <div className="bg-muted w-25 h-25 "> <hr></hr></div>
            </div>
            <div>
                {errorElement}
                <div>
                    <button onClick={() => signInWithGoogle()} className=" btn-secondary w-50 btn my-2 ">
                        <img style={{ height: "32px", width: "32px" }} src={google} alt="" />
                        <span className='px-2'>CONTINUE WITH GOOGLE</span></button>
                </div>
                <div>
                    <button className=" btn-dark w-50 btn my-2  ">
                        <img style={{ height: "32px", width: "32px" }} src={facebook} alt="" />
                        <span className='px-2'>CONTINUE WITH FACEBOOK</span></button>
                </div>
                <div>
                    <button onClick={() =>signInWithGithub()} className="btn-success w-50 btn my-2 ">
                        <img style={{ height: "32px", width: "32px" }} src={github} alt="" />
                        <span className='px-2'>CONTINUE WITH GITHUB</span></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;