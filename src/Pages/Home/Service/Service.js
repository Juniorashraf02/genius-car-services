import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, price, img } = service;
    // console.log(service);
    return (
        <div className="service-border">
            <div className="service-info">
                <img className="img" src={img} alt="" srcSet="" />
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <small className="description">{description}</small>
            </div>
            <div>
                <button className='btn btn-primary'>
                    <p>Book this service</p>
                </button>
            </div>
        </div>
    );
};

export default Service;