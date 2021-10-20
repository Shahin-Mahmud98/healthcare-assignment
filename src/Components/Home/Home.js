import React from 'react';
import Booking from '../Booking/Booking/Booking';
import Doctor from '../Doctors/Doctors/Doctor/Doctor';
import Doctors from '../Doctors/Doctors/Doctors';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (

        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
        </div>

    );
    
};

export default Home;