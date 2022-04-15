import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>Service here : {serviceId}</h1>
            <Link to='/proceedto'>
                <button className="btn btn-primary w-50">Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;