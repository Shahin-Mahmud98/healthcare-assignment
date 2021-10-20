import React, { useEffect, useState } from 'react';
import './Services.css';

import Service from '../Service/Service';
// import { Card, CardGroup, Col, Row } from 'react-bootstrap';




const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our Best Service</h2>
            <div className="services">

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
            </div>
       
    );

    <div>This is</div>
};

export default Services;