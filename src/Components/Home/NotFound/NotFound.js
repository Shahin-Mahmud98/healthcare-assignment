import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../404.png';
const NotFound = () => {
    return (
        <div>
            <img style={{width:"100%",height:"100%"}} src={notFound} alt="" />
            <Link to="/"><button className="btn btn-secondary">Go Back</button></Link>
        </div>
    );
};

export default NotFound;