import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { img, name, expertizement } = doctor;
    return (
        
        <div className="col-lg-4 col-sm-6 col-12">
            <img style={{width:'100%', height:'300px'}} className="image" src={img} alt="" />
            <h2>Name : {name}</h2>
            <h5 className="text-danger">Special ExpertizeMent : {expertizement}</h5>
        </div>
    );
};

export default Doctor;