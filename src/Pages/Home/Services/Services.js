import React from 'react';
import {useState, useEffect} from 'react';
import Service from '../Service/Service';
import './Services.css';



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('services.json')
        .then(response =>response.json())
        .then(data => setServices(data))

    },[]);


    return (
        <div id="services">
            <h1 className='text-primary mt-5'>Our Services</h1>
            <div className="service-container">
            {
                services.map(service =><Service
                service={service} key={service.id}
                />)
            }
            </div>
        </div>
    );
};

export default Services;