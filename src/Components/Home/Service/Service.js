import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = ({ service }) => {
    const {id, name, description, img } = service;
    return (

        <div className="service pb-3">
            <img style={{width:'100%', height:'300px'}} src={img} alt=""/>
            <h3 className="text-primary">Name : {name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-primary">Make an Appointment</button>
            </Link>
        </div>

    );
};

export default Service;