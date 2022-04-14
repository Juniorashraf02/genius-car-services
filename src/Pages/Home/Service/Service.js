import React from 'react';
import './Service.css';
import {useNavigate} from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, id, price, img } = service;
    // console.log(service);
    const navigate = useNavigate();

    const nevigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }

    return (
        <div className="service-border">
            <div className="service-info">
                <img className="img" src={img} alt="" srcSet="" />
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <small className="description">{description}</small>
            </div>
            <div>
                <button onClick={() =>nevigateToServiceDetail(id)} className='btn btn-primary'>
                    <p>Book this service</p>
                </button>
            </div>
        </div>
    );
};

export default Service;